from selenium import webdriver
import requests
from bs4 import BeautifulSoup
from time import sleep
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

driver = webdriver.Chrome(executable_path=r'/Users/LuoJieLiang/Desktop/jmplus+/crawler/chromedriver')
driver.get('http://server.jmplus.com.tw/images/hd/mina/DailyRecord.htm')


start_y = 3
due_y = 7
start_m = 1
due_m = 12


year = []
month = []

cat = 2
for i in range(start_m,due_m+1):
	x = str(i)
	if len(x) == 1:
		x = "0"+x
		month.append(x)
	else:
		month.append(x)
for i in range(start_y,due_y+1):
	y = "201"+str(i)
	year.append(y)

# start = year[3]+"-"+month[2]+"-01"
# due = year[3]+"-"+month[2]+"-31"

startdate = driver.find_element_by_id('OutStartDate')
duedate = driver.find_element_by_id('OutStopDate')
report = driver.find_element_by_id('DoReport')
entry = driver.find_element_by_id('DateQuery')

for j in range(len(year)):
	for i in range(len(month)):
		start = year[j]+"-"+month[i]+"-01"
		due = year[j]+"-"+month[i]+"-31"

		startdate.clear()
		duedate.clear()
		startdate.send_keys(start)
		duedate.send_keys(due)
		entry.click()

		res = driver.page_source
		driver.save_screenshot('/Users/LuoJieLiang/Desktop/jmplus+/crawler/chromedriver.png')
		soup = BeautifulSoup(res, "lxml")

		results = soup.find(id = 'result')
		print(results.prettify())
		print("-------------------")
	# file = open("source_code/test.html", 'r')
	# content = file.read()
	# print(content)
	# file.close()



	# file = open("source_code/test.html", 'r')

	# list = []

	# for line in file.readlines():
	# 	list.append(line)
	# print(list)
	# file.close()

		f = open("entries/source/"+year[j]+month[i]+".html","w") 
		# f = open("source_code/"+year[j]+month[i]+".html","w") 

		#opens file with name of "test.txt"
		f.write(results.prettify())
			
		f.close()
		# sleep(5)
