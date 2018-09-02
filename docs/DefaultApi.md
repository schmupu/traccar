# Traccar.DefaultApi

All URIs are relative to *http://demo.traccar.org/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attributesComputedGet**](DefaultApi.md#attributesComputedGet) | **GET** /attributes/computed | Fetch a list of Attributes
[**attributesComputedIdDelete**](DefaultApi.md#attributesComputedIdDelete) | **DELETE** /attributes/computed/{id} | Delete an Attribute
[**attributesComputedIdPut**](DefaultApi.md#attributesComputedIdPut) | **PUT** /attributes/computed/{id} | Update an Attribute
[**attributesComputedPost**](DefaultApi.md#attributesComputedPost) | **POST** /attributes/computed | Create an Attribute
[**calendarsGet**](DefaultApi.md#calendarsGet) | **GET** /calendars | Fetch a list of Calendars
[**calendarsIdDelete**](DefaultApi.md#calendarsIdDelete) | **DELETE** /calendars/{id} | Delete a Calendar
[**calendarsIdPut**](DefaultApi.md#calendarsIdPut) | **PUT** /calendars/{id} | Update a Calendar
[**calendarsPost**](DefaultApi.md#calendarsPost) | **POST** /calendars | Create a Calendar
[**commandsGet**](DefaultApi.md#commandsGet) | **GET** /commands | Fetch a list of Saved Commands
[**commandsIdDelete**](DefaultApi.md#commandsIdDelete) | **DELETE** /commands/{id} | Delete a Saved Command
[**commandsIdPut**](DefaultApi.md#commandsIdPut) | **PUT** /commands/{id} | Update a Saved Command
[**commandsPost**](DefaultApi.md#commandsPost) | **POST** /commands | Create a Saved Command
[**commandsSendGet**](DefaultApi.md#commandsSendGet) | **GET** /commands/send | Fetch a list of Saved Commands supported by Device at the moment
[**commandsSendPost**](DefaultApi.md#commandsSendPost) | **POST** /commands/send | Dispatch commands to device
[**commandsTypesGet**](DefaultApi.md#commandsTypesGet) | **GET** /commands/types | Fetch a list of available Commands for the Device or all possible Commands if Device ommited
[**devicesGet**](DefaultApi.md#devicesGet) | **GET** /devices | Fetch a list of Devices
[**devicesIdDelete**](DefaultApi.md#devicesIdDelete) | **DELETE** /devices/{id} | Delete a Device
[**devicesIdDistancePut**](DefaultApi.md#devicesIdDistancePut) | **PUT** /devices/{id}/distance | Update the distance counter of the Device
[**devicesIdPut**](DefaultApi.md#devicesIdPut) | **PUT** /devices/{id} | Update a Device
[**devicesPost**](DefaultApi.md#devicesPost) | **POST** /devices | Create a Device
[**driversGet**](DefaultApi.md#driversGet) | **GET** /drivers | Fetch a list of Drivers
[**driversIdDelete**](DefaultApi.md#driversIdDelete) | **DELETE** /drivers/{id} | Delete a Driver
[**driversIdPut**](DefaultApi.md#driversIdPut) | **PUT** /drivers/{id} | Update a Driver
[**driversPost**](DefaultApi.md#driversPost) | **POST** /drivers | Create a Driver
[**eventsIdGet**](DefaultApi.md#eventsIdGet) | **GET** /events/{id} | 
[**geofencesGet**](DefaultApi.md#geofencesGet) | **GET** /geofences | Fetch a list of Geofences
[**geofencesIdDelete**](DefaultApi.md#geofencesIdDelete) | **DELETE** /geofences/{id} | Delete a Geofence
[**geofencesIdPut**](DefaultApi.md#geofencesIdPut) | **PUT** /geofences/{id} | Update a Geofence
[**geofencesPost**](DefaultApi.md#geofencesPost) | **POST** /geofences | Create a Geofence
[**groupsGet**](DefaultApi.md#groupsGet) | **GET** /groups | Fetch a list of Groups
[**groupsIdDelete**](DefaultApi.md#groupsIdDelete) | **DELETE** /groups/{id} | Delete a Group
[**groupsIdPut**](DefaultApi.md#groupsIdPut) | **PUT** /groups/{id} | Update a Group
[**groupsPost**](DefaultApi.md#groupsPost) | **POST** /groups | Create a Group
[**maintenancesGet**](DefaultApi.md#maintenancesGet) | **GET** /maintenances | Fetch a list of Maintenances
[**maintenancesIdDelete**](DefaultApi.md#maintenancesIdDelete) | **DELETE** /maintenances/{id} | Delete a Maintenance
[**maintenancesIdPut**](DefaultApi.md#maintenancesIdPut) | **PUT** /maintenances/{id} | Update a Maintenance
[**maintenancesPost**](DefaultApi.md#maintenancesPost) | **POST** /maintenances | Create a Maintenance
[**notificationsGet**](DefaultApi.md#notificationsGet) | **GET** /notifications | Fetch a list of Notifications
[**notificationsIdDelete**](DefaultApi.md#notificationsIdDelete) | **DELETE** /notifications/{id} | Delete a Notification
[**notificationsIdPut**](DefaultApi.md#notificationsIdPut) | **PUT** /notifications/{id} | Update a Notification
[**notificationsPost**](DefaultApi.md#notificationsPost) | **POST** /notifications | Create a Notification
[**notificationsTestPost**](DefaultApi.md#notificationsTestPost) | **POST** /notifications/test | Send test notification to current user via Email and SMS
[**notificationsTypesGet**](DefaultApi.md#notificationsTypesGet) | **GET** /notifications/types | Fetch a list of available Notification types
[**permissionsDelete**](DefaultApi.md#permissionsDelete) | **DELETE** /permissions | Unlink an Object from another Object
[**permissionsPost**](DefaultApi.md#permissionsPost) | **POST** /permissions | Link an Object to another Object
[**positionsGet**](DefaultApi.md#positionsGet) | **GET** /positions | Fetches a list of Positions
[**reportsEventsGet**](DefaultApi.md#reportsEventsGet) | **GET** /reports/events | Fetch a list of Events within the time period for the Devices or Groups
[**reportsRouteGet**](DefaultApi.md#reportsRouteGet) | **GET** /reports/route | Fetch a list of Positions within the time period for the Devices or Groups
[**reportsStopsGet**](DefaultApi.md#reportsStopsGet) | **GET** /reports/stops | Fetch a list of ReportStops within the time period for the Devices or Groups
[**reportsSummaryGet**](DefaultApi.md#reportsSummaryGet) | **GET** /reports/summary | Fetch a list of ReportSummary within the time period for the Devices or Groups
[**reportsTripsGet**](DefaultApi.md#reportsTripsGet) | **GET** /reports/trips | Fetch a list of ReportTrips within the time period for the Devices or Groups
[**serverGet**](DefaultApi.md#serverGet) | **GET** /server | Fetch Server information
[**serverPut**](DefaultApi.md#serverPut) | **PUT** /server | Update Server information
[**sessionDelete**](DefaultApi.md#sessionDelete) | **DELETE** /session | Close the Session
[**sessionGet**](DefaultApi.md#sessionGet) | **GET** /session | Fetch Session information
[**sessionPost**](DefaultApi.md#sessionPost) | **POST** /session | Create a new Session
[**statisticsGet**](DefaultApi.md#statisticsGet) | **GET** /statistics | Fetch server Statistics
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | Fetch a list of Users
[**usersIdDelete**](DefaultApi.md#usersIdDelete) | **DELETE** /users/{id} | Delete a User
[**usersIdPut**](DefaultApi.md#usersIdPut) | **PUT** /users/{id} | Update a User
[**usersPost**](DefaultApi.md#usersPost) | **POST** /users | Create a User


<a name="attributesComputedGet"></a>
# **attributesComputedGet**
> [Attribute] attributesComputedGet(opts)

Fetch a list of Attributes

Without params, it returns a list of Attributes the user has access to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56, // Number | Standard users can use this only with their own _userId_
  'deviceId': 56, // Number | Standard users can use this only with _deviceId_s, they have access to
  'groupId': 56, // Number | Standard users can use this only with _groupId_s, they have access to
  'refresh': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attributesComputedGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 
 **deviceId** | **Number**| Standard users can use this only with _deviceId_s, they have access to | [optional] 
 **groupId** | **Number**| Standard users can use this only with _groupId_s, they have access to | [optional] 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**[Attribute]**](Attribute.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attributesComputedIdDelete"></a>
# **attributesComputedIdDelete**
> attributesComputedIdDelete(id)

Delete an Attribute

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.attributesComputedIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attributesComputedIdPut"></a>
# **attributesComputedIdPut**
> Attribute attributesComputedIdPut(id, body)

Update an Attribute

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Attribute(); // Attribute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attributesComputedIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Attribute**](Attribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attributesComputedPost"></a>
# **attributesComputedPost**
> Attribute attributesComputedPost(body)

Create an Attribute

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Attribute(); // Attribute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attributesComputedPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Attribute**](Attribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calendarsGet"></a>
# **calendarsGet**
> [Calendar] calendarsGet(opts)

Fetch a list of Calendars

Without params, it returns a list of Calendars the user has access to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56 // Number | Standard users can use this only with their own _userId_
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calendarsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 

### Return type

[**[Calendar]**](Calendar.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calendarsIdDelete"></a>
# **calendarsIdDelete**
> calendarsIdDelete(id)

Delete a Calendar

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.calendarsIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calendarsIdPut"></a>
# **calendarsIdPut**
> Calendar calendarsIdPut(id, body)

Update a Calendar

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Calendar(); // Calendar | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calendarsIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Calendar**](Calendar.md)|  | 

### Return type

[**Calendar**](Calendar.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calendarsPost"></a>
# **calendarsPost**
> Calendar calendarsPost(body)

Create a Calendar

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Calendar(); // Calendar | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calendarsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Calendar**](Calendar.md)|  | 

### Return type

[**Calendar**](Calendar.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsGet"></a>
# **commandsGet**
> [Command] commandsGet(opts)

Fetch a list of Saved Commands

Without params, it returns a list of Drivers the user has access to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56, // Number | Standard users can use this only with their own _userId_
  'deviceId': 56, // Number | Standard users can use this only with _deviceId_s, they have access to
  'groupId': 56, // Number | Standard users can use this only with _groupId_s, they have access to
  'refresh': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 
 **deviceId** | **Number**| Standard users can use this only with _deviceId_s, they have access to | [optional] 
 **groupId** | **Number**| Standard users can use this only with _groupId_s, they have access to | [optional] 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**[Command]**](Command.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsIdDelete"></a>
# **commandsIdDelete**
> commandsIdDelete(id)

Delete a Saved Command

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsIdPut"></a>
# **commandsIdPut**
> Command commandsIdPut(id, body)

Update a Saved Command

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Command(); // Command | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Command**](Command.md)|  | 

### Return type

[**Command**](Command.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsPost"></a>
# **commandsPost**
> Command commandsPost(body)

Create a Saved Command

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Command(); // Command | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Command**](Command.md)|  | 

### Return type

[**Command**](Command.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsSendGet"></a>
# **commandsSendGet**
> [Command] commandsSendGet(opts)

Fetch a list of Saved Commands supported by Device at the moment

Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'deviceId': 56 // Number | Standard users can use this only with _deviceId_s, they have access to
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsSendGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **Number**| Standard users can use this only with _deviceId_s, they have access to | [optional] 

### Return type

[**[Command]**](Command.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsSendPost"></a>
# **commandsSendPost**
> Command commandsSendPost(body)

Dispatch commands to device

Dispatch a new command or Saved Command if _body.id_ set

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Command(); // Command | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsSendPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Command**](Command.md)|  | 

### Return type

[**Command**](Command.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsTypesGet"></a>
# **commandsTypesGet**
> [CommandType] commandsTypesGet(opts)

Fetch a list of available Commands for the Device or all possible Commands if Device ommited

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'deviceId': 56, // Number | 
  'textChannel': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsTypesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **Number**|  | [optional] 
 **textChannel** | **Boolean**|  | [optional] 

### Return type

[**[CommandType]**](CommandType.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesGet"></a>
# **devicesGet**
> [Device] devicesGet(opts)

Fetch a list of Devices

Without any params, returns a list of the user&#39;s devices

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56, // Number | Standard users can use this only with their own _userId_
  'id': 56, // Number | To fetch one or more devices. Multiple params can be passed like `id=31&id=42`
  'uniqueId': "uniqueId_example" // String | To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.devicesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 
 **id** | **Number**| To fetch one or more devices. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60; | [optional] 
 **uniqueId** | **String**| To fetch one or more devices. Multiple params can be passed like &#x60;uniqueId&#x3D;333331&amp;uniqieId&#x3D;44442&#x60; | [optional] 

### Return type

[**[Device]**](Device.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesIdDelete"></a>
# **devicesIdDelete**
> devicesIdDelete(id)

Delete a Device

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.devicesIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesIdDistancePut"></a>
# **devicesIdDistancePut**
> devicesIdDistancePut(id, body)

Update the distance counter of the Device

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.DeviceTotalDistance(); // DeviceTotalDistance | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.devicesIdDistancePut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**DeviceTotalDistance**](DeviceTotalDistance.md)|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesIdPut"></a>
# **devicesIdPut**
> Device devicesIdPut(id, body)

Update a Device

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Device(); // Device | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.devicesIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Device**](Device.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesPost"></a>
# **devicesPost**
> Device devicesPost(body)

Create a Device

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Device(); // Device | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.devicesPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Device**](Device.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="driversGet"></a>
# **driversGet**
> [Driver] driversGet(opts)

Fetch a list of Drivers

Without params, it returns a list of Drivers the user has access to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56, // Number | Standard users can use this only with their own _userId_
  'deviceId': 56, // Number | Standard users can use this only with _deviceId_s, they have access to
  'groupId': 56, // Number | Standard users can use this only with _groupId_s, they have access to
  'refresh': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.driversGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 
 **deviceId** | **Number**| Standard users can use this only with _deviceId_s, they have access to | [optional] 
 **groupId** | **Number**| Standard users can use this only with _groupId_s, they have access to | [optional] 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**[Driver]**](Driver.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="driversIdDelete"></a>
# **driversIdDelete**
> driversIdDelete(id)

Delete a Driver

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.driversIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="driversIdPut"></a>
# **driversIdPut**
> Driver driversIdPut(id, body)

Update a Driver

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Driver(); // Driver | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.driversIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Driver**](Driver.md)|  | 

### Return type

[**Driver**](Driver.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="driversPost"></a>
# **driversPost**
> Driver driversPost(body)

Create a Driver

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Driver(); // Driver | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.driversPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Driver**](Driver.md)|  | 

### Return type

[**Driver**](Driver.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsIdGet"></a>
# **eventsIdGet**
> Event eventsIdGet(id)



### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Event**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="geofencesGet"></a>
# **geofencesGet**
> [Geofence] geofencesGet(opts)

Fetch a list of Geofences

Without params, it returns a list of Geofences the user has access to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56, // Number | Standard users can use this only with their own _userId_
  'deviceId': 56, // Number | Standard users can use this only with _deviceId_s, they have access to
  'groupId': 56, // Number | Standard users can use this only with _groupId_s, they have access to
  'refresh': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geofencesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 
 **deviceId** | **Number**| Standard users can use this only with _deviceId_s, they have access to | [optional] 
 **groupId** | **Number**| Standard users can use this only with _groupId_s, they have access to | [optional] 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**[Geofence]**](Geofence.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="geofencesIdDelete"></a>
# **geofencesIdDelete**
> geofencesIdDelete(id)

Delete a Geofence

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.geofencesIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="geofencesIdPut"></a>
# **geofencesIdPut**
> Geofence geofencesIdPut(id, body)

Update a Geofence

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Geofence(); // Geofence | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geofencesIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Geofence**](Geofence.md)|  | 

### Return type

[**Geofence**](Geofence.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="geofencesPost"></a>
# **geofencesPost**
> Geofence geofencesPost(body)

Create a Geofence

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Geofence(); // Geofence | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geofencesPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Geofence**](Geofence.md)|  | 

### Return type

[**Geofence**](Geofence.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGet"></a>
# **groupsGet**
> [Group] groupsGet(opts)

Fetch a list of Groups

Without any params, returns a list of the Groups the user belongs to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56 // Number | Standard users can use this only with their own _userId_
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 

### Return type

[**[Group]**](Group.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsIdDelete"></a>
# **groupsIdDelete**
> groupsIdDelete(id)

Delete a Group

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupsIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsIdPut"></a>
# **groupsIdPut**
> Group groupsIdPut(id, body)

Update a Group

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Group(); // Group | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Group**](Group.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsPost"></a>
# **groupsPost**
> Group groupsPost(body)

Create a Group

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Group(); // Group | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Group**](Group.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="maintenancesGet"></a>
# **maintenancesGet**
> [Maintenance] maintenancesGet(opts)

Fetch a list of Maintenances

Without params, it returns a list of Maintenances the user has access to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56, // Number | Standard users can use this only with their own _userId_
  'deviceId': 56, // Number | Standard users can use this only with _deviceId_s, they have access to
  'groupId': 56, // Number | Standard users can use this only with _groupId_s, they have access to
  'refresh': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.maintenancesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 
 **deviceId** | **Number**| Standard users can use this only with _deviceId_s, they have access to | [optional] 
 **groupId** | **Number**| Standard users can use this only with _groupId_s, they have access to | [optional] 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**[Maintenance]**](Maintenance.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="maintenancesIdDelete"></a>
# **maintenancesIdDelete**
> maintenancesIdDelete(id)

Delete a Maintenance

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.maintenancesIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="maintenancesIdPut"></a>
# **maintenancesIdPut**
> Maintenance maintenancesIdPut(id, body)

Update a Maintenance

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Maintenance(); // Maintenance | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.maintenancesIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Maintenance**](Maintenance.md)|  | 

### Return type

[**Maintenance**](Maintenance.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="maintenancesPost"></a>
# **maintenancesPost**
> Maintenance maintenancesPost(body)

Create a Maintenance

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Maintenance(); // Maintenance | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.maintenancesPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Maintenance**](Maintenance.md)|  | 

### Return type

[**Maintenance**](Maintenance.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationsGet"></a>
# **notificationsGet**
> [Notification] notificationsGet(opts)

Fetch a list of Notifications

Without params, it returns a list of Notifications the user has access to

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'all': true, // Boolean | Can only be used by admins or managers to fetch all entities
  'userId': 56, // Number | Standard users can use this only with their own _userId_
  'deviceId': 56, // Number | Standard users can use this only with _deviceId_s, they have access to
  'groupId': 56, // Number | Standard users can use this only with _groupId_s, they have access to
  'refresh': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Can only be used by admins or managers to fetch all entities | [optional] 
 **userId** | **Number**| Standard users can use this only with their own _userId_ | [optional] 
 **deviceId** | **Number**| Standard users can use this only with _deviceId_s, they have access to | [optional] 
 **groupId** | **Number**| Standard users can use this only with _groupId_s, they have access to | [optional] 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**[Notification]**](Notification.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationsIdDelete"></a>
# **notificationsIdDelete**
> notificationsIdDelete(id)

Delete a Notification

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.notificationsIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationsIdPut"></a>
# **notificationsIdPut**
> Notification notificationsIdPut(id, body)

Update a Notification

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.Notification(); // Notification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationsIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Notification**](Notification.md)|  | 

### Return type

[**Notification**](Notification.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationsPost"></a>
# **notificationsPost**
> Notification notificationsPost(body)

Create a Notification

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Notification(); // Notification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Notification**](Notification.md)|  | 

### Return type

[**Notification**](Notification.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationsTestPost"></a>
# **notificationsTestPost**
> notificationsTestPost()

Send test notification to current user via Email and SMS

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.notificationsTestPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationsTypesGet"></a>
# **notificationsTypesGet**
> [NotificationType] notificationsTypesGet()

Fetch a list of available Notification types

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationsTypesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[NotificationType]**](NotificationType.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permissionsDelete"></a>
# **permissionsDelete**
> permissionsDelete(body)

Unlink an Object from another Object

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Permission(); // Permission | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.permissionsDelete(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Permission**](Permission.md)|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permissionsPost"></a>
# **permissionsPost**
> Permission permissionsPost(body)

Link an Object to another Object

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Permission(); // Permission | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permissionsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Permission**](Permission.md)|  | 

### Return type

[**Permission**](Permission.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="positionsGet"></a>
# **positionsGet**
> [Position] positionsGet(opts)

Fetches a list of Positions

Without any params, it returns a list of last known positions for all the user&#39;s Devices. _from_ and _to_ fields are not required with _id_

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'deviceId': 56, // Number | _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  'id': 56 // Number | To fetch one or more positions. Multiple params can be passed like `id=31&id=42`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.positionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **Number**| _deviceId_ is optional, but requires the _from_ and _to_ parameters when used | [optional] 
 **from** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | [optional] 
 **to** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | [optional] 
 **id** | **Number**| To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60; | [optional] 

### Return type

[**[Position]**](Position.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, text/csv, application/gpx+xml
 - **Accept**: application/json, text/csv, application/gpx+xml

<a name="reportsEventsGet"></a>
# **reportsEventsGet**
> [Event] reportsEventsGet(from, to, opts)

Fetch a list of Events within the time period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var from = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var to = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var opts = { 
  'deviceId': [3.4], // [Number] | 
  'groupId': [3.4], // [Number] | 
  'type': ["type_example"] // [String] | % can be used to return events of all types
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsEventsGet(from, to, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **to** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **deviceId** | [**[Number]**](Number.md)|  | [optional] 
 **groupId** | [**[Number]**](Number.md)|  | [optional] 
 **type** | [**[String]**](String.md)| % can be used to return events of all types | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
 - **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

<a name="reportsRouteGet"></a>
# **reportsRouteGet**
> [Position] reportsRouteGet(from, to, opts)

Fetch a list of Positions within the time period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var from = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var to = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var opts = { 
  'deviceId': [3.4], // [Number] | 
  'groupId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsRouteGet(from, to, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **to** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **deviceId** | [**[Number]**](Number.md)|  | [optional] 
 **groupId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**[Position]**](Position.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
 - **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

<a name="reportsStopsGet"></a>
# **reportsStopsGet**
> [ReportStops] reportsStopsGet(from, to, opts)

Fetch a list of ReportStops within the time period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var from = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var to = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var opts = { 
  'deviceId': [3.4], // [Number] | 
  'groupId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsStopsGet(from, to, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **to** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **deviceId** | [**[Number]**](Number.md)|  | [optional] 
 **groupId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**[ReportStops]**](ReportStops.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
 - **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

<a name="reportsSummaryGet"></a>
# **reportsSummaryGet**
> [ReportSummary] reportsSummaryGet(from, to, opts)

Fetch a list of ReportSummary within the time period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var from = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var to = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var opts = { 
  'deviceId': [3.4], // [Number] | 
  'groupId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsSummaryGet(from, to, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **to** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **deviceId** | [**[Number]**](Number.md)|  | [optional] 
 **groupId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**[ReportSummary]**](ReportSummary.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
 - **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

<a name="reportsTripsGet"></a>
# **reportsTripsGet**
> [ReportTrips] reportsTripsGet(from, to, opts)

Fetch a list of ReportTrips within the time period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var from = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var to = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var opts = { 
  'deviceId': [3.4], // [Number] | 
  'groupId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsTripsGet(from, to, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **to** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **deviceId** | [**[Number]**](Number.md)|  | [optional] 
 **groupId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**[ReportTrips]**](ReportTrips.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
 - **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

<a name="serverGet"></a>
# **serverGet**
> Server serverGet()

Fetch Server information

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serverGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Server**](Server.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serverPut"></a>
# **serverPut**
> Server serverPut(body)

Update Server information

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.Server(); // Server | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serverPut(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Server**](Server.md)|  | 

### Return type

[**Server**](Server.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sessionDelete"></a>
# **sessionDelete**
> sessionDelete()

Close the Session

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sessionDelete(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="sessionGet"></a>
# **sessionGet**
> User sessionGet(opts)

Fetch Session information

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'token': "token_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="sessionPost"></a>
# **sessionPost**
> User sessionPost(email, password)

Create a new Session

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var email = "email_example"; // String | 

var password = "password_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionPost(email, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **password** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="statisticsGet"></a>
# **statisticsGet**
> [Statistics] statisticsGet(from, to)

Fetch server Statistics

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var from = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

var to = new Date("2013-10-20T19:20:30+01:00"); // Date | in IS0 8601 format. eg. `1963-11-22T18:30:00Z`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statisticsGet(from, to, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 
 **to** | **Date**| in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60; | 

### Return type

[**[Statistics]**](Statistics.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersGet"></a>
# **usersGet**
> [User] usersGet(opts)

Fetch a list of Users

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var opts = { 
  'userId': "userId_example" // String | Can only be used by admin or manager users
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Can only be used by admin or manager users | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersIdDelete"></a>
# **usersIdDelete**
> usersIdDelete(id)

Delete a User

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersIdPut"></a>
# **usersIdPut**
> User usersIdPut(id, body)

Update a User

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var id = 56; // Number | 

var body = new Traccar.User(); // User | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> User usersPost(body)

Create a User

### Example
```javascript
var Traccar = require('traccar');
var defaultClient = Traccar.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Traccar.DefaultApi();

var body = new Traccar.User(); // User | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

