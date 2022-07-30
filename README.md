# PRICEJAR PROJECT
![Home page](homepage.JPG)

#The User Guide 

This part of the documentation contains detailed instructions on the frameworks and software used in the overall build-up of our website. It focuses on the background information embedded in the different classes and templates used for breathing life into the website.

## Installations 

###  Python
	The python version used for this website is 3.10.4.
	  www.python.org/downloads contains the details about this version
	 and a tutorial on how to install python on your local machine.

### Django
	Django is a python framework that excels in building the backend of
	 websites. Django offers low-security risk and provides programmers
	 with the ability to wire their web components together without
	 having to bother about intricacies that may scare a programmer’s
	 understanding and prolong project execution time.

	The Django version used for this project is 4.0.5. To install Django
	 on your local machine. Open your command prompt or terminal and
	 type the following commands:
	
		  py -m pip install django~=4.0.5 . 

	This above  command installs the specified version of Django for you.

### Unauthentication

 This refers to the tools deployed in carving a customer who has not yet registered on our website. These tools are tailored to bequeath upon such users, the ability to signup, read what the website offers, have access to how the website works and even perform their intended searches. Below is an explicit explanation of how the tools are utilized in achieving this requirement

-**LoginView**-
The LoginView is goodness provided by the “django.contrib.auth.views”  module. It basically helps us to render the login HTML template provided on our website. The LoginView when used inherits four template context variables :

#### 1. AuthenticationForm:
	This provides the form for logging a user in.
#### 2.next:
	This template provides the “next” destination after successful user login.
#### 3. site:
	 This is the model used for storing the domain and name attributes of
	 the website. The site template helps us to fetch these attributes
	 seamlessly.
#### site_name:
	 This is an alias for “site.name” which helps us to store the details
	 about our server name. 
	The sole reason for the selection of LoginView is the ability to
	 switch between the default properties offered by the template to a
	 user-defined property. This flexibility helps to disappoint
	 limitations without compromising the intelligence of our website.

	 The LoginView rendered the login template of this website which
	 therefore translates to overriding the view’s default login provision. 

	The following parameters were specified explicitly while harnessing
	 the power of the LoginView class on our website. 
		-**template_name:**- This specifies the login template we
		 displayed 

		-**name**-: This specifies the next destination after a
		 successful login

		-**redirect_authenticated_user**-: This helps in the
		 decision-making of whether or not a user should be directed
		 to another page after a successful login. It’s set to
		**“true”** on our website

-**AboutView**-
	Being an unauthenticated user does not translate to the inability to
	 have a grasp of what the website offers and the testimonies of
	 users. This view entails a “template_name” which is a variable that
	 specifies the HTML template to render on our webpage and also
	 provides aid in the seamless interaction with our documentation.

-**SignupView**
