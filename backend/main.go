package main

import (
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.AbortWithStatus(404)
	})

	router.GET("health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "OK",
		})
	})

	router.GET("/oauth2client", func(c *gin.Context) {
		c.String(200, "Success!")

		code, _ := func() (string, string) {
			authString := strings.Split(c.GetHeader("Authorization"), ":")
			if len(authString) != 2 {

			}
			return authString[0], authString[1]
		}()

		// if (code )

		fmt.Println(c.GetHeader("Authorization"))
		data := url.Values{
			"code":          {code},
			"client_id":     {""},
			"client_secret": {""},
			"grant_type":    {"authorization_code"},
		}

		client := &http.DefaultClient
		req, err := http.NewRequest("POST", "https://id.getharvest.com/api/v2/oauth2/token", strings.NewReader(data.Encode()))
		if err != nil {
			fmt.Println(err)
			c.AbortWithStatus(401)
			return
		}

		req.Header.Add("User-Agent", "Bounty")

		resp, err := (*client).Do(req)

		if err != nil || resp.StatusCode < 200 || resp.StatusCode > 299 {
			fmt.Println(err)
			c.AbortWithStatus(401)
			return
		}

		c.String(200, "Success!")
	})

	router.Run("0.0.0.0:8080")
}
