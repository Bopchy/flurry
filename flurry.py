import urllib2, json

'''
	Code that utilizes the Yahoo weather app to print out the 
	city, latitude, longitude, temp and dscription; of the particular 
	city.
'''

BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
BASE_URL2 = "&units=metric&APPID=2bc3e79bb974a007818864813f53fd35"
cities = ['London', 'Nairobi', 'Lagos', 'Madrid', 'Kisumu', 'Mandera', 'Wajir']
# Lists of cities whose weather will be listed  

output = 'CITY'.ljust(9) 
output += 'LATITUDE'.ljust(10)
output += 'LONGITUDE'.ljust(12)
output += 'TEMP'.ljust(10)
output += 'DESCRIPTION' 
output += '\n' + '='*55
print output
# Line 13 to 18 provides heading format and '=' underline 

for city in cities:
	query_url = BASE_URL + "?" + "q=" + city + BASE_URL2 + '\n'
	result = json.loads(urllib2.urlopen(query_url).read())
	# Line 23 'opens up' query_url and 'reads' the data from the page 
	table = result['name'].ljust(10) 
	table += str(result['coord']['lat']).ljust(10)
	table += str(result['coord']['lon']).ljust(12)
	table += str(result['main']['temp']).ljust(10) 
	table += result['weather'][0]['description'].ljust(10)
	print table
	# Line 25 to 30 prints the output in the form of a table 