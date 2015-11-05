
/*
 * GET home page.
 */
var ejs = require('ejs');
var mysql = require('./mysql.js');

function downloadFormInfo(req, res) {
   
	var newconnection = mysql.getConnection();
	var input = JSON.parse(JSON.stringify(req.body));
	console.log(req.body);
	var data = {
		"fname" : input.fname,
		"lname" : input.lname,
		"email" : input.email
		
	};

	var query = newconnection.query('Insert INTO userdetails SET ?', data,
	function(err, result) {
		
		var getUser = "select * from userdetails where fname = '"+ data.fname + "'";

		console.log(getUser);
		mysql.fetchData(function(err, results) {
			if (err) {
				throw err;
			} else {
				console.log(results);
			}
			if (results.length > 0) {
				
				console.log("valid Login");
				ejs.renderFile('./views/downloadpage.ejs', {
					results : results
				}, function(err, result) {
					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						
						console.log(err);
						res.end('An error occurred');
					}
				});
			}
		}, getUser);
	});
}

function bigdata(req, res){
		  res.render('biddatapage', { title: 'DESIGNERS & GEEKS' });
		}

function blogpage(req, res){
		  res.render('blogpage', { title: 'DESIGNERS & GEEKS' });
		}	

function contactus(req, res){
		  res.render('contactus', { title: 'DESIGNERS & GEEKS' });
		}	
function downloadpage(req, res){
		  res.render('downloadpage', { title: 'DESIGNERS & GEEKS' });
		}	
function iotpage(req, res){
		  res.render('iotpage', { title: 'DESIGNERS & GEEKS' });
		}	
function locations(req, res){
		  res.render('locations', { title: 'DESIGNERS & GEEKS' });
		}	
function management(req, res){
		  res.render('management', { title: 'DESIGNERS & GEEKS' });
		}	




exports.downloadFormInfo = downloadFormInfo;
exports.bigdata = bigdata;
exports.blogpage = blogpage;
exports.contactus = contactus;
exports.downloadpage = downloadpage;
exports.iotpage = iotpage;
exports.locations = locations;
exports.management = management;



