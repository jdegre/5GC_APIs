# OpenAPI Specification Files for 3GPP 5G Core Network (Release 15)

[![Build Status](https://travis-ci.org/jdegre/5GC_APIs.svg?branch=Rel-15)](https://travis-ci.org/jdegre/5GC_APIs)

The files in this repository have been created by 3GPP, and the master source can be found in the [3GPP site](http://www.3gpp.org/DynaReport/29-series.htm), as part of the official 3GPP Technical Specifications.
```
© 2019, 3GPP Organizational Partners (ARIB, ATIS, CCSA, ETSI, TSDSI, TTA, TTC).
All rights reserved.
```
API version: **March 2019**<br/>
Release status: **Frozen** <sup>&#x1F512;</sup><br/>
Other releases: [Rel-16 (Open)](https://github.com/jdegre/5GC_APIs/tree/master)<br/>
- [Info about 3GPP Releases and their status](https://www.3gpp.org/specifications/67-releases)
<br/><br/>

The links below will open the Swagger Editor and auto-load the OpenAPI YAML file of each Network Function (NF) API:
<br/>

>**Note:**
There is a known bug in Swagger Editor in the latest versions (from 3.6.23 onwards), and it shows a 'Resolver' error when in fact there is no such error in the API definition, and the types are indeed resolved correctly. See [swagger-api/swagger-editor#1957](https://github.com/swagger-api/swagger-editor/issues/1957)

## NRF (NF Repository Function)
* [NF Management](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29510_Nnrf_NFManagement.yaml)
* [NF Discovery](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29510_Nnrf_NFDiscovery.yaml)
* [Access Token (OAuth2)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29510_Nnrf_AccessToken.yaml)
## LMF (Location Management Function)
* [Location](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29572_Nlmf_Location.yaml)
## AMF (Access and Mobility Management Function)
* [Communication](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29518_Namf_Communication.yaml)
* [Event Exposure](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29518_Namf_EventExposure.yaml)
* [Location](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29518_Namf_Location.yaml)
* [MT](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29518_Namf_MT.yaml)
## SMF (Session Management Function)
* [PDU Session](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29502_Nsmf_PDUSession.yaml)
* [Event Exposure](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29508_Nsmf_EventExposure.yaml)
## UDM (Unified Data Management)
* [Subscriber Data Management](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29503_Nudm_SDM.yaml)
* [UE Context Management](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29503_Nudm_UECM.yaml)
* [UE Authentication](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29503_Nudm_UEAU.yaml)
* [Event Exposure](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29503_Nudm_EE.yaml)
* [Parameter Provisioning](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29503_Nudm_PP.yaml)
## UDR (Unified Data Repository)
* [Data Repository](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29504_Nudr_DataRepository.yaml)
  * [Subscription Data](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29505_Subscription_Data.yaml)
  * [Policy Data](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29519_Policy_Data.yaml)
  * [Exposure Data](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29519_Exposure_Data.yaml)
  * [Application Data](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29519_Application_Data.yaml)
## AUSF (Authentication Server Function)
* [UE Authentication](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29509_Nausf_UEAuthentication.yaml)
* [SoR (Steering of Roaming) Protection](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29509_Nausf_SoRProtection.yaml)
* [UPU (UE Parameter Update) Protection](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29509_Nausf_UPUProtection.yaml)
## NSSF (Network Slice Selection Function)
* [NSSAI Availability](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29531_Nnssf_NSSAIAvailability.yaml)
* [NS Selection](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29531_Nnssf_NSSelection.yaml)
## SMSF (SMS Function)
* [SM Service](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29540_Nsmsf_SMService.yaml)
## 5G-EIR (5G Equipment Identity Register)
* [Equipment Identity Check](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29511_N5g-eir_EquipmentIdentityCheck.yaml)
## NEF (Network Exposure Function)
* [Packet Flow Description (PFD) Management](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29551_Nnef_PFDmanagement.yaml)
## PCF (Policy Control Function)
* [Policy Authorization](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29514_Npcf_PolicyAuthorization.yaml)
* [Access and Mobility (AM) Policy Control](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29507_Npcf_AMPolicyControl.yaml)
* [Session Management (SM) Policy Control](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29512_Npcf_SMPolicyControl.yaml)
* [Background Data Transfer (BDT) Policy Control](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29554_Npcf_BDTPolicyControl.yaml)
* [Policy Control Event Exposure](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29523_Npcf_EventExposure.yaml)
* [UE Policy Control](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29525_Npcf_UEPolicyControl.yaml)
## BSF (Binding Support Function)
* [Management](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29521_Nbsf_Management.yaml)
## NWDAF (Network Data Analytics Function)
* [Events Subscription](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29520_Nnwdaf_EventsSubscription.yaml)
* [Analytics Info](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29520_Nnwdaf_AnalyticsInfo.yaml)
## CHF (Charging Function)
* [Spending Limit Control](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29594_Nchf_SpendingLimitControl.yaml)
* [Converged Charging](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS32291_Nchf_ConvergedCharging.yaml)
## Common Data Types
* [Common Data](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29571_CommonData.yaml)
## SEPP N32 APIs
* [Handshake (N32-c)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29573_N32_Handshake.yaml)
* [Forwarding (N32-f)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29573_JOSEProtectedMessageForwarding.yaml)

# Northbound APIs (CAPIF)
* [Discover Service](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_Discover_Service_API.yaml)
* [Publish Service](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_Publish_Service_API.yaml)
* [Events](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_Events_API.yaml)
* [API Invoker Management](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_API_Invoker_Management_API.yaml)
* [Security](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_Security_API.yaml)
* [Access Control Policy](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_Access_Control_Policy_API.yaml)
* [Logging API Invocation](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_Logging_API_Invocation_API.yaml)
* [Auditing](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_CAPIF_Auditing_API.yaml)
* [AEF Authentication](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29222_AEF_Security_API.yaml)

# Northbound APIs (T8)
## NEF (Network Exposure Function)
* [Traffic Influence](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29522_TrafficInfluence.yaml)
## SCEF (Service Capability Exposure Function)
NOTE: These APIs are not part of the 5G Core Network; these APIs are exposed by the 4G SCEF to the SCS/AS
* [Event Monitoring](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_MonitoringEvent.yaml)
* [Resource Management of Background Data Transfer (BDT)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_ResourceManagementOfBdt.yaml)
* [Chargeable Party](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_ChargeableParty.yaml)
* [Non-IP Data Delivery (NIDD)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_NIDD.yaml)
* [Device Triggering](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_DeviceTriggering.yaml)
* [Group Message Delivery via MBMS by MB2](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_GMDviaMBMSbyMB2.yaml)
* [Group Message Delivery via MBMS by xMB](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_GMDviaMBMSbyxMB.yaml)
* [Network Status Reporting](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_ReportingNetworkStatus.yaml)
* [Communication Patterns (CP) Parameters Provisioning](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_CpProvisioning.yaml)
* [Packet Flow Description (PFD) Management](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_PfdManagement.yaml)
* [Enhanced Coverage Restriction Control](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_ECRControl.yaml)
* [Network Parameter Configuration](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_NpConfiguration.yaml)
* [Application Server (AS) Session with QoS](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_AsSessionWithQoS.yaml)
* [MSISDN-less Mobile-Originated SMS](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_MsisdnLessMoSms.yaml)
* [Common Data](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jdegre/5GC_APIs/Rel-15/TS29122_CommonData.yaml)
