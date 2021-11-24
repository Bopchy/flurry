from urllib.request import urlopen
import json, socket 

'''
	Code that checks for internet connection, and if present,
	utilizes the Yahoo weather app to print out the 
	city, latitude, longitude, temp and description; of the particular 
	city.
'''

BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
# API URL
BASE_URL2 = "&units=metric&APPID=2bc3e79bb974a007818864813f53fd35"
# The rest of the API URL containing APPID, and specifying units to 
# be equal to metric
cities = ['London', 'Nairobi', 'Lagos', 'Madrid', 'Kisumu', 'Mandera', 'Wajir']
# Lists of cities whose weather will be listed  

# Function to check for availability of internet connection
def check_connection():
	REMOTE_SERVER = "www.bing.com"
	# Sets the remote server whose connection to is being tested 
	# as bing.com
	try:
		host = socket.gethostbyname(REMOTE_SERVER) 
		# Retrieves the IP of bing.com, using the gethostbyname() 
		# function --- because we can only connect to a server by knowing its IP
		s = socket.create_connection((host, 80), 20)
		# Creates a socket object s --- create_connection() connects to the host, 
		# on port 80, and gives a timeout period of 20 seconds. 
		return True
		# Returns True if making connection to host is successful -- meaning,
		# there is internet 
	except:
		# Accounts for cases where the host(IP) cannot be retrieved / 
		# could not be resolved   
		return "Could not resolve the host name"
	return False
	# Returns False if making connection is unsucessful   

if check_connection() == True:
	output = 'CITY'.ljust(9) 
	output += 'LATITUDE'.ljust(10)
	output += 'LONGITUDE'.ljust(12)
	output += 'TEMP'.ljust(10)
	output += 'DESCRIPTION' 
	output += '\n' + '=' * 55
	print(output)
	for city in cities:
		query_url = BASE_URL + "?" + "q=" + city + BASE_URL2 + '\n'
		result = json.loads(urlopen(query_url).read())
		# Above line 'opens up' query_url and 'reads' the data from the page 
		
		# Prints result
		table = result['name'].ljust(10) 
		table += str(result['coord']['lat']).ljust(10)
		table += str(result['coord']['lon']).ljust(12)
		table += str(result['main']['temp']).ljust(10) 
		table += result['weather'][0]['description'].ljust(10)
		print(table)
else:
	print("No internet connection at this time")
