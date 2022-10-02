package utils

// Reverses string
func ReverseString(toReverse string) string {
	chars := []rune(toReverse)
	for i, j := 0, len(chars)-1; i < j; i, j = i+1, j-1 {
		chars[i], chars[j] = chars[j], chars[i]
	}
	return string(chars)
}
