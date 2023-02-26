from flask import Flask
from flask import jsonify,request
from flask_cors import CORS, cross_origin
import subprocess
app = Flask("Docker")

cors = CORS(app)
app.config['CORS_HEADERS '] = 'Content-Type'

@app.route('/')
@cross_origin()
def home():
	return jsonify({"message":"Here comes the output !!!"})

@app.route('/images')
def images():
	return jsonify({"message":"This will show all information about docker images and manage them."})
	
@app.route('/delete')
def delete():
	return jsonify({"message":"This helps to stop or delete the containers ."})

@app.route('/launch')
def launch():
	return jsonify({"message":"This helps to manage containers and launch them."})
	
@app.route('/containers')
def containers():
	return jsonify({"message":"This helps to get details about containers."})
	
@app.route('/expose')
def expose():
	return jsonify({"message":"This helps to expose container to outside port."})

@app.route('/help')
def help():
	return jsonify({"msg" : " This helps!!!"})	

@app.route('/dele1',methods=['POST'])
def dele1():
	data =request.json
	print(data['imagename'])
	cmd ='docker image rm {}'.format(data['imagename'])
	result =subprocess.run(cmd,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
	print(result)
	if(result.returncode==0):
		return jsonify({"message":"Deletion is successfull.....!!"})
	else:
		return jsonify({"message":"Image not found..!!"})
	
@app.route('/dea1')
def dea1():
	cmd ='docker rm -f $(docker ps -qa)'
	result =subprocess.run(cmd,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
	if(result.returncode==0):
		return jsonify({"message":"Deletion is successfull.....!!"})
	else:
		return jsonify({"message":"No containers or can't delete container..!!"})
	

@app.route('/deletes1',methods=['POST'])
def deletes1():
	data = request.json
	cmd ='docker rm {}'.format(data['name'])
	result = subprocess.run(cmd,shell =True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
	print(result)	
	if(result.returncode ==0):
		return jsonify({"message":"Deleted successfully..!!"})
	else:
		return jsonify({"message":"can't delete the container..!!!"})

@app.route('/pull',methods =['POST'])
def pull():
	data = request.json
	print(data['imagename'])
	cmd = 'docker pull {}'.format(data['imagename'])
	result = subprocess.run(cmd,shell =True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
	if(result.returncode ==0):
		return jsonify({"message":"Image pulled successfully..!!"})
	else:
		return jsonify({"message":"Error !!!!"})

@app.route('/laun',methods =['POST'])
def laun():
	data = request.json
	print(data)
	if(data['imagename']!='' and data['containername']!='' and data['hostport']!='' and data['containerport']!='' and data['volumepath']!=''):
		cmd = 'docker run -dit --name {} -p {}:{} -v {} {}'.format(data['containername'],data['hostport'],data['containerport'],data['volumepath'],data['imagename'])
		result  = subprocess.run(cmd,shell = True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
		if(result.returncode==0):
			return jsonify({"message":"Container launched successfully"})
		else:
			return jsonify({"message":"Container launched unsuccessful"})

	elif(data['imagename']!='' and data['containername']!='' and data['hostport']!='' and data['containerport']!='' ):
		cmd = 'docker run -dit --name {} -p {}:{} {}'.format(data['containername'],data['hostport'],data['containerport'],data['imagename'])
		result  = subprocess.run(cmd,shell = True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
		if(result.returncode==0):
			return jsonify({"message":"Container launched successfully"})
		else:
			return jsonify({"message":"Container launched unsuccessfull"})

	elif(data['imagename']!='' and data['containername']!='' ):
		cmd = 'docker run -dit --name {} {}'.format(data['containername'],data['imagename'])
		result  = subprocess.run(cmd,shell = True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
		print(result)
		if(result.returncode==0):
			return jsonify({"message":"Container launched successfully"})
		else:
			return jsonify({"message":"Container launched unsuccessfull"})

	elif(data['imagename']!='' ):
		cmd = 'docker run -dit {}'.format(data['imagename'])
		print(cmd)
		result  = subprocess.run(cmd,shell = True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
		if(result.returncode==0):
			return jsonify({"message":"container launched successfully"})
		else:
			return jsonify({"message":"invalid imagename"})		
	else:
		return jsonify({"message":"Data was not set"})		
		
	#cmd = 'docker run {} --name {} -p {}:{} -v {} {}'.format(data['imagename'])
	#result  = subprocess.run(cmd,shell = True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
		
	
@app.route('/view',methods=['POST'])
def view():
	data = request.json
	cmd ='docker logs {}'.format(data['name'])
	result =subprocess.run(cmd , shell =True , stdout =subprocess.PIPE , stderr = subprocess.PIPE, text =True)
	output =result.stdout
	print(output)
	return jsonify({"message":output})

@app.route('/execute',methods=['POST'])
def execute():
	data = request.json
	cmd = 'docker exec -it {} {}'.format(data["name"],data["command"])
	result =subprocess.run(cmd , shell =True , stdout =subprocess.PIPE , stderr = subprocess.PIPE, text =True)
	output =result.stdout
	print(output)
	return jsonify({"message":output})

@app.route('/help1',methods=['POST'])
def help1():
	data = request.json
	cmd ='docker {}  --help '.format(data["mgmtcmd"])
	result =subprocess.run(cmd , shell =True , stdout =subprocess.PIPE , stderr = subprocess.PIPE, text =True)
	output =result.stdout
	print(output)
	return jsonify({"message":output})

@app.route('/show')
def show():
	gs = "images"
	cmd = 'docker {} | awk \'{{print $1}}\''.format(gs)
	result =subprocess.run(cmd , shell =True , stdout =subprocess.PIPE , stderr = subprocess.PIPE, text =True)
	output =result.stdout	
	print(output)
	return jsonify({"msg":output})

@app.route('/status')
def status():
	cmd = 'docker ps -a | awk \'{{print $1,$2}}\''
	result =subprocess.run(cmd , shell =True , stdout =subprocess.PIPE , stderr = subprocess.PIPE, text =True)
	output =result.stdout
	print(output)
	return jsonify({"message":output})

@app.route('/stop',methods=['POST'])
def stop():
	data = request.json
	cmd = 'docker stop {}'.format(data['name'])
	result =subprocess.run(cmd,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
	if(result.returncode==0):
		return jsonify({"msg":"Stopped the container..!!"})
	else:
		return jsonify({"msg":"can't stop the image..!!!"})																		

@app.route('/showrevert')
def showrevert():
	return jsonify({"message":"show"})

@app.route('/deleterevert')
def deleterevert():
	return jsonify({"message":"delete"})

@app.route('/launchrevert')
def launchrevert():
	return jsonify({"message":"launch"})

@app.route('/dearevert')
def dearevert():
	return jsonify({"message":"delete all"})

@app.route('/deletesrevert')
def deletesrevert():
	return jsonify({"message":"delete"})

@app.route('/stoprevert')
def stoprevert():
	return jsonify({"message":"stop"})
	
@app.route('/viewrevert')
def viewrevert():
	return jsonify({"message":"view logs"})

@app.route('/executerevert')
def executerevert():
	return jsonify({"message":"execute"})

@app.route('/help1revert')
def help1revert():
	return jsonify({"message":"help"})



