package main

import (
	"encoding/base64"
	"errors"
	"net/http"
	"net/url"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

/**
 * Returns code, harvestID
 */
func parseBasicAuthHeader(s string) (string, string, error) {
	if !strings.HasPrefix(s, "Basic ") {
		return "", "", errors.New("Auth header missing 'Basic' prefix")
	}

	authAsBytes, err := base64.URLEncoding.WithPadding(base64.NoPadding).DecodeString(strings.Split(s, "Basic ")[1])
	if err != nil {
		return "", "", errors.New("Could not decode auth header, got error: " + err.Error())
	}

	authString := string(authAsBytes)
	splitted := strings.Split(authString, ":")
	if len(splitted) != 2 {
		return "", "", errors.New("Invalid auth header")
	}

	return splitted[0], splitted[1], nil
}

func main() {
	logger, _ := zap.NewDevelopment()
	defer logger.Sync()
	logger.Info("Initialize server")

	CLIENT_ID := os.Getenv("CLIENT_ID")
	CLIENT_SECRET := os.Getenv("CLIENT_SECRET")

	router := gin.Default()
	router.SetTrustedProxies([]string{"localhost", "host.docker.internal"})

	router.GET("/", func(c *gin.Context) {
		c.AbortWithStatus(404)
	})

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "OK",
		})
	})

	router.GET("/oauth2client", func(c *gin.Context) {
		code, user, err := parseBasicAuthHeader(c.GetHeader("Authorization"))
		if err != nil {
			logger.Error(err.Error())
			c.AbortWithStatus(401)
			return
		}

		data := url.Values{
			"code":          {code},
			"client_id":     {CLIENT_ID},
			"client_secret": {CLIENT_SECRET},
			"grant_type":    {"authorization_code"},
		}

		client := &http.DefaultClient
		req, err := http.NewRequest("POST", "https://id.getharvest.com/api/v2/oauth2/token", strings.NewReader(data.Encode()))
		if err != nil {
			logger.Error(err.Error())
			c.AbortWithStatus(401)
			return
		}
		req.Header.Add("User-Agent", "Bounty")
		resp, err := (*client).Do(req)

		if err != nil || resp.StatusCode < 200 || resp.StatusCode > 299 {
			logger.Error("Harvest could not approve authention request")
			c.AbortWithStatus(401)
			return
		}

		logger.Info("Successfully authenticated user: " + user)
		c.Status(http.StatusNoContent)
	})

	router.Run("0.0.0.0:8080")
}
