Const desiredScore=8.4
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").WaitProperty"innerhtml",9.3,10000
foo=Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist(20) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf10.xml_;_
currentScore=cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml"))
print currentScore &"I"& desiredScore &"I"& currentScore>desiredScore
If currentScore>=desiredScore Then
	Reporter.ReportEvent micPass, "checkScore", "Score exceeded the desired value of" & desiredScore
	Else 
Reporter.ReportEvent micFail, "checkScore","Score is two low.found" & currentScore & "and need" & desiredScore
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf11.xml_;_
