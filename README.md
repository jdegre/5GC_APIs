# OpenAPI Descriptions of 3GPP 5G APIs (Release 18)

[![CircleCI](https://img.shields.io/circleci/build/gh/jdegre/5GC_APIs)](https://app.circleci.com/pipelines/github/jdegre/5GC_APIs?branch=Rel-18)

The files in this repository have been created by 3GPP, and the master source can be found in the [3GPP site](http://www.3gpp.org/DynaReport/29-series.htm), as part of the official 3GPP Technical Specifications.
```
© 2023, 3GPP Organizational Partners (ARIB, ATIS, CCSA, ETSI, TSDSI, TTA, TTC).
All rights reserved.
```
API version: **December 2023**<br/>
Release status: **Open** <sup>&#x2705;</sup><br/>
Other releases: [Rel-17 (Frozen)](https://github.com/jdegre/5GC_APIs/tree/Rel-17), [Rel-16 (Frozen)](https://github.com/jdegre/5GC_APIs/tree/Rel-16), [Rel-15 (Frozen)](https://github.com/jdegre/5GC_APIs/tree/Rel-15)<br/>
- [Info about 3GPP Releases and their status](https://www.3gpp.org/specifications/67-releases)
<br/><br/>

## Tools
* [API Parser/Validator and Linter](https://jdegre.github.io/parser.html) 
* [Data Type Finder](https://jdegre.github.io/types.html)
* [API Versions Overview](https://jdegre.github.io/versions.html)
<br/><br/>

The links below will open the Swagger Editor (v3.6.23) and auto-load the OpenAPI YAML file of each Network Function (NF) API:
<br/>

<!-- APIs -->
## NRF (NF Repository Function)
* [NF Management](https://jdegre.github.io/loader.html?yaml=TS29510_Nnrf_NFManagement.yaml)
* [NF Discovery](https://jdegre.github.io/loader.html?yaml=TS29510_Nnrf_NFDiscovery.yaml)
* [Access Token (OAuth2)](https://jdegre.github.io/loader.html?yaml=TS29510_Nnrf_AccessToken.yaml)
* [Bootstrapping](https://jdegre.github.io/loader.html?yaml=TS29510_Nnrf_Bootstrapping.yaml)

## LMF (Location Management Function)
* [Location](https://jdegre.github.io/loader.html?yaml=TS29572_Nlmf_Location.yaml)
* [Broadcast](https://jdegre.github.io/loader.html?yaml=TS29572_Nlmf_Broadcast.yaml)

## AMF (Access and Mobility Management Function)
* [Communication](https://jdegre.github.io/loader.html?yaml=TS29518_Namf_Communication.yaml)
* [Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29518_Namf_EventExposure.yaml)
* [Location](https://jdegre.github.io/loader.html?yaml=TS29518_Namf_Location.yaml)
* [MT](https://jdegre.github.io/loader.html?yaml=TS29518_Namf_MT.yaml)
* [MBS Communication](https://jdegre.github.io/loader.html?yaml=TS29518_Namf_MBSCommunication.yaml)
* [MBS Broadcast](https://jdegre.github.io/loader.html?yaml=TS29518_Namf_MBSBroadcast.yaml)

## SMF (Session Management Function)
* [PDU Session](https://jdegre.github.io/loader.html?yaml=TS29502_Nsmf_PDUSession.yaml)
* [Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29508_Nsmf_EventExposure.yaml)
* [NIDD (Non-IP Data Delivery)](https://jdegre.github.io/loader.html?yaml=TS29542_Nsmf_NIDD.yaml)

## MB-SMF (Multicast Broadcast Session Management Function)
* [MBS Session](https://jdegre.github.io/loader.html?yaml=TS29532_Nmbsmf_MBSSession.yaml)
* [MBS TMGI](https://jdegre.github.io/loader.html?yaml=TS29532_Nmbsmf_TMGI.yaml)

## MBSF (Multicast/Broadcast Service Function)
* [MBS User Service](https://jdegre.github.io/loader.html?yaml=TS29580_Nmbsf_MBSUserService.yaml)
* [MBS User Data Ingest Session](https://jdegre.github.io/loader.html?yaml=TS29580_Nmbsf_MBSUserDataIngestSession.yaml)

## MBSTF (Multicast/Broadcast Service Transport Function)
* [MBS Distribution Session](https://jdegre.github.io/loader.html?yaml=TS29581_Nmbstf_DistSession.yaml)

## MB (Multicast/Broadcast) User Services
* [MBS Service User Announcement](https://jdegre.github.io/loader.html?yaml=TS26517_MBSUserServiceAnnouncement.yaml)
* [MBS Object Manifest](https://jdegre.github.io/loader.html?yaml=TS26517_MBSObjectManifest.yaml)

## UDM (Unified Data Management)
* [Subscriber Data Management](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_SDM.yaml)
* [UE Context Management](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_UECM.yaml)
* [UE Authentication](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_UEAU.yaml)
* [Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_EE.yaml)
* [Parameter Provisioning](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_PP.yaml)
* [NIDD Authorization](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_NIDDAU.yaml)
* [MT](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_MT.yaml)
* [Service-Specific Authorization](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_SSAU.yaml)
* [RSDS (Report SM Delivery Status)](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_RSDS.yaml)
* [UEID (UE Identifier)](https://jdegre.github.io/loader.html?yaml=TS29503_Nudm_UEID.yaml)

## UDR (Unified Data Repository)
* [Data Repository](https://jdegre.github.io/loader.html?yaml=TS29504_Nudr_DR.yaml)
  * [Subscription Data](https://jdegre.github.io/loader.html?yaml=TS29505_Subscription_Data.yaml)
  * [Policy Data](https://jdegre.github.io/loader.html?yaml=TS29519_Policy_Data.yaml)
  * [Exposure Data](https://jdegre.github.io/loader.html?yaml=TS29519_Exposure_Data.yaml)
  * [Application Data](https://jdegre.github.io/loader.html?yaml=TS29519_Application_Data.yaml)
* [Group ID Map](https://jdegre.github.io/loader.html?yaml=TS29504_Nudr_GroupIDmap.yaml)

## UDSF (Unstructured Data Storage Function)
* [Data Repository](https://jdegre.github.io/loader.html?yaml=TS29598_Nudsf_DataRepository.yaml)
* [Timer](https://jdegre.github.io/loader.html?yaml=TS29598_Nudsf_Timer.yaml)

## AUSF (Authentication Server Function)
* [UE Authentication](https://jdegre.github.io/loader.html?yaml=TS29509_Nausf_UEAuthentication.yaml)
* [SoR (Steering of Roaming) Protection](https://jdegre.github.io/loader.html?yaml=TS29509_Nausf_SoRProtection.yaml)
* [UPU (UE Parameter Update) Protection](https://jdegre.github.io/loader.html?yaml=TS29509_Nausf_UPUProtection.yaml)

## NSSAAF (Network Slice Specific Authentication and Authorization Function)
* [NSSAA](https://jdegre.github.io/loader.html?yaml=TS29526_Nnssaaf_NSSAA.yaml)
* [AIW](https://jdegre.github.io/loader.html?yaml=TS29526_Nnssaaf_AIW.yaml)

## NSACF (Network Slice Admission Control Function)
* [NSAC](https://jdegre.github.io/loader.html?yaml=TS29536_Nnsacf_NSAC.yaml)
* [Slice Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29536_Nnsacf_SliceEventExposure.yaml)

## NSSF (Network Slice Selection Function)
* [NSSAI Availability](https://jdegre.github.io/loader.html?yaml=TS29531_Nnssf_NSSAIAvailability.yaml)
* [NS Selection](https://jdegre.github.io/loader.html?yaml=TS29531_Nnssf_NSSelection.yaml)

## SMSF (SMS Function)
* [SM Service](https://jdegre.github.io/loader.html?yaml=TS29540_Nsmsf_SMService.yaml)

## 5G-EIR (5G Equipment Identity Register)
* [Equipment Identity Check](https://jdegre.github.io/loader.html?yaml=TS29511_N5g-eir_EquipmentIdentityCheck.yaml)

## NEF (Network Exposure Function)
* [Packet Flow Description (PFD) Management](https://jdegre.github.io/loader.html?yaml=TS29551_Nnef_PFDmanagement.yaml)
* [Session Management (SM) Context](https://jdegre.github.io/loader.html?yaml=TS29541_Nnef_SMContext.yaml)
* [Short Message (SM) Service](https://jdegre.github.io/loader.html?yaml=TS29541_Nnef_SMService.yaml)
* [NEF Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29591_Nnef_EventExposure.yaml)
* [Authentication](https://jdegre.github.io/loader.html?yaml=TS29256_Nnef_Authentication.yaml)
* [EAS Deployment](https://jdegre.github.io/loader.html?yaml=TS29591_Nnef_EASDeployment.yaml)
* [Traffic Influence Data](https://jdegre.github.io/loader.html?yaml=TS29591_Nnef_TrafficInfluenceData.yaml)
* [ECS Address](https://jdegre.github.io/loader.html?yaml=TS29591_Nnef_ECSAddress.yaml)
* [DNAI Mapping](https://jdegre.github.io/loader.html?yaml=TS29591_Nnef_DNAIMapping.yaml)
* [UE ID](https://jdegre.github.io/loader.html?yaml=TS29591_Nnef_UEId.yaml)

## PCF (Policy Control Function)
* [Policy Authorization](https://jdegre.github.io/loader.html?yaml=TS29514_Npcf_PolicyAuthorization.yaml)
* [Access and Mobility (AM) Policy Authorization](https://jdegre.github.io/loader.html?yaml=TS29534_Npcf_AMPolicyAuthorization.yaml)
* [Access and Mobility (AM) Policy Control](https://jdegre.github.io/loader.html?yaml=TS29507_Npcf_AMPolicyControl.yaml)
* [Session Management (SM) Policy Control](https://jdegre.github.io/loader.html?yaml=TS29512_Npcf_SMPolicyControl.yaml)
* [Background Data Transfer (BDT) Policy Control](https://jdegre.github.io/loader.html?yaml=TS29554_Npcf_BDTPolicyControl.yaml)
* [Policy Control Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29523_Npcf_EventExposure.yaml)
* [UE Policy Control](https://jdegre.github.io/loader.html?yaml=TS29525_Npcf_UEPolicyControl.yaml)
* [Multicast/Broadcast Policy Control](https://jdegre.github.io/loader.html?yaml=TS29537_Npcf_MBSPolicyControl.yaml)
* [Multicast/Broadcast Policy Authorization](https://jdegre.github.io/loader.html?yaml=TS29537_Npcf_MBSPolicyAuthorization.yaml)
* [Planned Data Transfer with QoS (PDTQ) Policy Control](https://jdegre.github.io/loader.html?yaml=TS29543_Npcf_PDTQPolicyControl.yaml)

## BSF (Binding Support Function)
* [Management](https://jdegre.github.io/loader.html?yaml=TS29521_Nbsf_Management.yaml)

## NWDAF (Network Data Analytics Function)
* [Events Subscription](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_EventsSubscription.yaml)
* [Analytics Info](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_AnalyticsInfo.yaml)
* [Data Management](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_DataManagement.yaml)
* [ML Model Provision](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_MLModelProvision.yaml)
* [ML Model Training](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_MLModelTraining.yaml)
* [ML Model Monitor](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_MLModelMonitor.yaml)
* [Roaming Data](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_RoamingData.yaml)
* [Roaming Analytics](https://jdegre.github.io/loader.html?yaml=TS29520_Nnwdaf_RoamingAnalytics.yaml)

## UPF (User-Plane Function)
* [Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29564_Nupf_EventExposure.yaml)
* [Get Private UE IP Address](https://jdegre.github.io/loader.html?yaml=TS29564_Nupf_GetPrivateUEIPaddr.yaml)

## HSS (Home Subscriber Server)
* [UE Authentication](https://jdegre.github.io/loader.html?yaml=TS29563_Nhss_UEAU.yaml)
* [Subscriber Data Management](https://jdegre.github.io/loader.html?yaml=TS29563_Nhss_SDM.yaml)
* [UE Context Management](https://jdegre.github.io/loader.html?yaml=TS29563_Nhss_UECM.yaml)
* [Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29563_Nhss_EE.yaml)
* [IMS UE Authentication](https://jdegre.github.io/loader.html?yaml=TS29562_Nhss_imsUEAU.yaml)
* [IMS Subscriber Data Management](https://jdegre.github.io/loader.html?yaml=TS29562_Nhss_imsSDM.yaml)
* [IMS UE Context Management](https://jdegre.github.io/loader.html?yaml=TS29562_Nhss_imsUECM.yaml)
* [GBA Subscriber Data Management](https://jdegre.github.io/loader.html?yaml=TS29562_Nhss_gbaSDM.yaml)
* [GBA UE Authentication](https://jdegre.github.io/loader.html?yaml=TS29562_Nhss_gbaUEAU.yaml)

## GBA BSF (GBA Bootstrapping Server Function)
* [GBA Service](https://jdegre.github.io/loader.html?yaml=TS29309_Nbsp_GBA.yaml)

## SOR-AF (Steering of Roaming Application Function)
* [Steering of Roaming](https://jdegre.github.io/loader.html?yaml=TS29550_Nsoraf_SOR.yaml)

## SP-AF (Over-The-Air Function)
* [Secured Packet](https://jdegre.github.io/loader.html?yaml=TS29544_Nspaf_SecuredPacket.yaml)

## AF (Application Function)
* [Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29517_Naf_EventExposure.yaml)
* [ProSe](https://jdegre.github.io/loader.html?yaml=TS29557_Naf_ProSe.yaml)
* [Authentication](https://jdegre.github.io/loader.html?yaml=TS29255_Naf_Authentication.yaml)

## CHF (Charging Function)
* [Spending Limit Control](https://jdegre.github.io/loader.html?yaml=TS29594_Nchf_SpendingLimitControl.yaml)
* [Converged Charging](https://jdegre.github.io/loader.html?yaml=TS32291_Nchf_ConvergedCharging.yaml)
* [Offline-Only Charging](https://jdegre.github.io/loader.html?yaml=TS32291_Nchf_OfflineOnlyCharging.yaml)

## Common Data Types
* [Common Data](https://jdegre.github.io/loader.html?yaml=TS29571_CommonData.yaml)

## SEPP N32 APIs
* [Handshake (N32-c)](https://jdegre.github.io/loader.html?yaml=TS29573_N32_Handshake.yaml)
* [Forwarding (N32-f)](https://jdegre.github.io/loader.html?yaml=TS29573_JOSEProtectedMessageForwarding.yaml)
* [Telescopic FQDN Mapping](https://jdegre.github.io/loader.html?yaml=TS29573_SeppTelescopicFqdnMapping.yaml)

## UCMF (UE Radio Capability Management Function)
* [UE Radio Capability Management](https://jdegre.github.io/loader.html?yaml=TS29673_Nucmf_UERCM.yaml)
* [Provisioning](https://jdegre.github.io/loader.html?yaml=TS29675_Nucmf_Provisioning.yaml)

## MNPF (Mobile Number Portability Function)
* [Number Portability Status](https://jdegre.github.io/loader.html?yaml=TS29578_Nmnpf_NPStatus.yaml)

## GMLC (Gateway Mobile Location Center)
* [Location](https://jdegre.github.io/loader.html?yaml=TS29515_Ngmlc_Location.yaml)

## EASDF (Edge Application Server Discovery Function)
* [DNS Context](https://jdegre.github.io/loader.html?yaml=TS29556_Neasdf_DNSContext.yaml)
* [Baseline DNS Pattern](https://jdegre.github.io/loader.html?yaml=TS29556_Neasdf_BaselineDNSPattern.yaml)

## AAnF (AKMA Anchor Function)
* [AKMA Anchor Service](https://jdegre.github.io/loader.html?yaml=TS29535_Naanf_AKMA.yaml)

## 5G DDNMF (Inter-5G Direct Discovery Name Management Function)
* [Discovery](https://jdegre.github.io/loader.html?yaml=TS29555_N5g-ddnmf_Discovery.yaml)

## TSCTSF (Time Sensitive Communication and Time Synchronization Function)
* [Time Synchronization](https://jdegre.github.io/loader.html?yaml=TS29565_Ntsctsf_TimeSynchronization.yaml)
* [QoS and TSC Assistance](https://jdegre.github.io/loader.html?yaml=TS29565_Ntsctsf_QoSandTSCAssistance.yaml)
* [ASTI](https://jdegre.github.io/loader.html?yaml=TS29565_Ntsctsf_ASTI.yaml)

## ADRF (Analytics Data Repository Function)
* [Data Management](https://jdegre.github.io/loader.html?yaml=TS29575_Nadrf_DataManagement.yaml)
* [ML Model Management](https://jdegre.github.io/loader.html?yaml=TS29575_Nadrf_MLModelManagement.yaml)

## MFAF (Messaging Framework Adaptor Function)
* [3GPP DCCF Adaptor (3DA) Data Management](https://jdegre.github.io/loader.html?yaml=TS29576_Nmfaf_3daDataManagement.yaml)
* [3GPP Consumer Adaptor (3CA) Data Management](https://jdegre.github.io/loader.html?yaml=TS29576_Nmfaf_3caDataManagement.yaml)

## Data Collection Application Function
* [Common Data Types](https://jdegre.github.io/loader.html?yaml=TS26532_CommonData.yaml)
* [Application Service Provider provisioning (R1)](https://jdegre.github.io/loader.html?yaml=TS26532_Ndcaf_DataReportingProvisioning.yaml)
* [Data collection client configuration and reporting (R2, R3, R4)](https://jdegre.github.io/loader.html?yaml=TS26532_Ndcaf_DataReporting.yaml)

## DCCF (Data Collection Coordination Function)
* [Data Management](https://jdegre.github.io/loader.html?yaml=TS29574_Ndccf_DataManagement.yaml)
* [Context Management](https://jdegre.github.io/loader.html?yaml=TS29574_Ndccf_ContextManagement.yaml)

## IP-SM-GW (IP Short Message Gateway)
* [SM Service](https://jdegre.github.io/loader.html?yaml=TS29577_Nipsmgw_SMService.yaml)

## SMS Router
* [SM Service](https://jdegre.github.io/loader.html?yaml=TS29577_Nrouter_SMService.yaml)

## SMS-IWMSC (Interworking MSC for Short Message Service)
* [SM Service](https://jdegre.github.io/loader.html?yaml=TS29579_Niwmsc_SMService.yaml)

## PKMF (ProSe Key Management Service)
* [KeyRequest Service](https://jdegre.github.io/loader.html?yaml=TS29559_Npkmf_PKMFKeyRequest.yaml)
* [Resolve Remote User Id](https://jdegre.github.io/loader.html?yaml=TS29559_Npkmf_UserId.yaml)
* [Discovery](https://jdegre.github.io/loader.html?yaml=TS29559_Npkmf_Discovery.yaml)

## SLPKMF (SideLink Positioning Key Management Service)
* [KeyRequest Service](https://jdegre.github.io/loader.html?yaml=TS29586_Nslpkmf_SLPKMFKeyRequest.yaml)
* [Discovery](https://jdegre.github.io/loader.html?yaml=TS29586_Nslpkmf_Discovery.yaml)

## PANF (ProSe Anchor Function)
* [Prose Key Service](https://jdegre.github.io/loader.html?yaml=TS29553_Npanf_ProseKey.yaml)
* [Resolve Remote User Id](https://jdegre.github.io/loader.html?yaml=TS29553_Npanf_ResolveRemoteUserId.yaml)

## IMS AS (IP Multimedia Subsystem Application Server)
* [Session Event Control](https://jdegre.github.io/loader.html?yaml=TS29175_Nimsas_SessionEventControl.yaml)
* [Media Control](https://jdegre.github.io/loader.html?yaml=TS29175_Nimsas_MediaControl.yaml)

## MF (Media Function)
* [Media Resource Management Service](https://jdegre.github.io/loader.html?yaml=TS29176_Nmf_MRM.yaml)


# Northbound and Application Layer APIs

## Common API Framework (CAPIF)
* [Discover Service](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Discover_Service_API.yaml)
* [Publish Service](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Publish_Service_API.yaml)
* [Events](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Events_API.yaml)
* [API Invoker Management](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_API_Invoker_Management_API.yaml)
* [Security](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Security_API.yaml)
* [Access Control Policy](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Access_Control_Policy_API.yaml)
* [Logging API Invocation](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Logging_API_Invocation_API.yaml)
* [Auditing](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Auditing_API.yaml)
* [AEF Authentication](https://jdegre.github.io/loader.html?yaml=TS29222_AEF_Security_API.yaml)
* [API Provider Management](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_API_Provider_Management_API.yaml)
* [Routing Information](https://jdegre.github.io/loader.html?yaml=TS29222_CAPIF_Routing_Info_API.yaml)

## SCEF (Service Capability Exposure Function)
NOTE: These APIs are not part of the 5G Core Network; these APIs are exposed by the 4G SCEF to the SCS/AS
* [Event Monitoring](https://jdegre.github.io/loader.html?yaml=TS29122_MonitoringEvent.yaml)
* [Resource Management of Background Data Transfer (BDT)](https://jdegre.github.io/loader.html?yaml=TS29122_ResourceManagementOfBdt.yaml)
* [Chargeable Party](https://jdegre.github.io/loader.html?yaml=TS29122_ChargeableParty.yaml)
* [Non-IP Data Delivery (NIDD)](https://jdegre.github.io/loader.html?yaml=TS29122_NIDD.yaml)
* [Device Triggering](https://jdegre.github.io/loader.html?yaml=TS29122_DeviceTriggering.yaml)
* [Group Message Delivery via MBMS by MB2](https://jdegre.github.io/loader.html?yaml=TS29122_GMDviaMBMSbyMB2.yaml)
* [Group Message Delivery via MBMS by xMB](https://jdegre.github.io/loader.html?yaml=TS29122_GMDviaMBMSbyxMB.yaml)
* [Network Status Reporting](https://jdegre.github.io/loader.html?yaml=TS29122_ReportingNetworkStatus.yaml)
* [Communication Patterns (CP) Parameters Provisioning](https://jdegre.github.io/loader.html?yaml=TS29122_CpProvisioning.yaml)
* [Packet Flow Description (PFD) Management](https://jdegre.github.io/loader.html?yaml=TS29122_PfdManagement.yaml)
* [Enhanced Coverage Restriction Control](https://jdegre.github.io/loader.html?yaml=TS29122_ECRControl.yaml)
* [Network Parameter Configuration](https://jdegre.github.io/loader.html?yaml=TS29122_NpConfiguration.yaml)
* [Application Server (AS) Session with QoS](https://jdegre.github.io/loader.html?yaml=TS29122_AsSessionWithQoS.yaml)
* [MSISDN-less Mobile-Originated SMS](https://jdegre.github.io/loader.html?yaml=TS29122_MsisdnLessMoSms.yaml)
* [RACS (Radio Capability Signaling) Parameter Provisioning](https://jdegre.github.io/loader.html?yaml=TS29122_RacsParameterProvisioning.yaml)
* [Common Data](https://jdegre.github.io/loader.html?yaml=TS29122_CommonData.yaml)

## NEF (Network Exposure Function)
* [Traffic Influence](https://jdegre.github.io/loader.html?yaml=TS29522_TrafficInfluence.yaml)
* [NIDD Configuration Trigger](https://jdegre.github.io/loader.html?yaml=TS29522_NIDDConfigurationTrigger.yaml)
* [5G LAN Parameter Provision](https://jdegre.github.io/loader.html?yaml=TS29522_5GLANParameterProvision.yaml)
* [Applying BDT Policy](https://jdegre.github.io/loader.html?yaml=TS29522_ApplyingBdtPolicy.yaml)
* [IPTV Configuration](https://jdegre.github.io/loader.html?yaml=TS29522_IPTVConfiguration.yaml)
* [Analytics Exposure](https://jdegre.github.io/loader.html?yaml=TS29522_AnalyticsExposure.yaml)
* [LPI (Location Privacy Indicator) Parameter Provision](https://jdegre.github.io/loader.html?yaml=TS29522_LpiParameterProvision.yaml)
* [Service Parameter](https://jdegre.github.io/loader.html?yaml=TS29522_ServiceParameter.yaml)
* [ACS Parameter Provision](https://jdegre.github.io/loader.html?yaml=TS29522_ACSParameterProvision.yaml)
* [MO LCS Notify](https://jdegre.github.io/loader.html?yaml=TS29522_MoLcsNotify.yaml)
* [AKMA](https://jdegre.github.io/loader.html?yaml=TS29522_AKMA.yaml)
* [Time Sync Exposure](https://jdegre.github.io/loader.html?yaml=TS29522_TimeSyncExposure.yaml)
* [ECS Address Provision](https://jdegre.github.io/loader.html?yaml=TS29522_EcsAddressProvision.yaml)
* [AM Policy Authorization](https://jdegre.github.io/loader.html?yaml=TS29522_AmPolicyAuthorization.yaml)
* [AM Influence](https://jdegre.github.io/loader.html?yaml=TS29522_AMInfluence.yaml)
* [MBS TMGI](https://jdegre.github.io/loader.html?yaml=TS29522_MBSTMGI.yaml)
* [MBS Session](https://jdegre.github.io/loader.html?yaml=TS29522_MBSSession.yaml)
* [EAS Deployment](https://jdegre.github.io/loader.html?yaml=TS29522_EASDeployment.yaml)
* [ASTI](https://jdegre.github.io/loader.html?yaml=TS29522_ASTI.yaml)
* [Data Reporting](https://jdegre.github.io/loader.html?yaml=TS29522_DataReporting.yaml)
* [Data Reporting Provisioning](https://jdegre.github.io/loader.html?yaml=TS29522_DataReportingProvisioning.yaml)
* [UE Identifier](https://jdegre.github.io/loader.html?yaml=TS29522_UEId.yaml)
* [MBS User Service](https://jdegre.github.io/loader.html?yaml=TS29522_MBSUserService.yaml)
* [MBS User Data Ingest Session](https://jdegre.github.io/loader.html?yaml=TS29522_MBSUserDataIngestSession.yaml)
* [Media Streaming Event Exposure](https://jdegre.github.io/loader.html?yaml=TS29522_MSEventExposure.yaml)
* [MBS Group Message Delivery](https://jdegre.github.io/loader.html?yaml=TS29522_MBSGroupMsgDelivery.yaml)
* [DNAI Mapping](https://jdegre.github.io/loader.html?yaml=TS29522_DNAIMapping.yaml)
* [PDTQ Policy Negotiation](https://jdegre.github.io/loader.html?yaml=TS29522_PDTQPolicyNegotiation.yaml)
* [Member UE Selection Assistance](https://jdegre.github.io/loader.html?yaml=TS29522_MemberUESelectionAssistance.yaml)
* [Group Parameters Provisioning](https://jdegre.github.io/loader.html?yaml=TS29522_GroupParametersProvisioning.yaml)
* [Slice Parameters Provisioning](https://jdegre.github.io/loader.html?yaml=TS29522_SliceParamProvision.yaml)
* [UE Address](https://jdegre.github.io/loader.html?yaml=TS29522_UEAddress.yaml)
* [ECS Address](https://jdegre.github.io/loader.html?yaml=TS29522_ECSAddress.yaml)

## VAE (V2X Application Enabler)
* [V2X Message Delivery](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_MessageDelivery.yaml)
* [File Distribution](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_FileDistribution.yaml)
* [Application Requirement](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_ApplicationRequirement.yaml)
* [Dynamic Group](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_DynamicGroup.yaml)
* [Service Continuity](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_ServiceContinuity.yaml)
* [HD Map Dynamic Information](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_HDMapDynamicInfo.yaml)
* [Session Oriented Service](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_SessionOrientedService.yaml)
* [V2V Config Requirement](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_V2VConfigRequirement.yaml)
* [PC5 Provisioning Requirement](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_PC5ProvisioningRequirement.yaml)
* [Service And QoS Control Info](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_ServiceAndQoSControlInfo.yaml)
* [VRU Zone Management](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_VRUZoneManagement.yaml)
* [](https://jdegre.github.io/loader.html?yaml=TS29486_VAE_V2PApplicationRequirement.yaml)

## SEAL (Service Enabler Architecture Layer)
* [Network Resource Adaptation](https://jdegre.github.io/loader.html?yaml=TS29549_SS_NetworkResourceAdaptation.yaml)
* [Network Resource Monitoring](https://jdegre.github.io/loader.html?yaml=TS29549_SS_NetworkResourceMonitoring.yaml)
* [Network Slice Adaptation](https://jdegre.github.io/loader.html?yaml=TS29549_SS_NetworkSliceAdaptation.yaml)
* [User Profile Retrival](https://jdegre.github.io/loader.html?yaml=TS29549_SS_UserProfileRetrieval.yaml)
* [Events](https://jdegre.github.io/loader.html?yaml=TS29549_SS_Events.yaml)
* [Group Management](https://jdegre.github.io/loader.html?yaml=TS29549_SS_GroupManagement.yaml)
* [Location Reporting](https://jdegre.github.io/loader.html?yaml=TS29549_SS_LocationReporting.yaml)
* [Location Area Information Retrieval](https://jdegre.github.io/loader.html?yaml=TS29549_SS_LocationAreaInfoRetrieval.yaml)
* [Key Information Retrieval](https://jdegre.github.io/loader.html?yaml=TS29549_SS_KeyInfoRetrieval.yaml)
* [VAL Service Data Retrieval](https://jdegre.github.io/loader.html?yaml=TS29549_SS_VALServiceData.yaml)
* [VAL Service Area Configuration](https://jdegre.github.io/loader.html?yaml=TS29549_SS_VALServiceAreaConfiguration.yaml)
* [VAL service Parameter Provisioning](https://jdegre.github.io/loader.html?yaml=TS29549_SS_IdmParameterProvisioning.yaml)
* [SEALDD Data Transmission](https://jdegre.github.io/loader.html?yaml=TS29549_SDD_Transmission.yaml)
* [SEALDD Data Storage](https://jdegre.github.io/loader.html?yaml=TS29549_SDD_DataStorage.yaml)
* [SEALDD Context Relocation](https://jdegre.github.io/loader.html?yaml=TS29549_SDD_DDContext.yaml)
* [SEALDD Transmission Quality Measurement](https://jdegre.github.io/loader.html?yaml=TS29549_SDD_TransmissionQualityMeasurement.yaml)
* [SEALDD Policy Configuration](https://jdegre.github.io/loader.html?yaml=TS29549_SDD_PolicyConfiguration.yaml)
* [NSCE Server Policy Management](https://jdegre.github.io/loader.html?yaml=TS29435_NSCE_PolicyManagement.yaml)

## EDGEAPP (Enabling Edge Applications)
* [EAS Registration](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_EASRegistration.yaml)
* [UE Location](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_UELocation.yaml)
* [UE Identifier](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_UEIdentifier.yaml)
* [Application Client Information](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_AppClientInformation.yaml)
* [ACR Management Event](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_ACRManagementEvent.yaml)
* [Session with QoS](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_SessionWithQoS.yaml)
* [EEC Context Relocation](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_EECContextRelocation.yaml)
* [EEL Managed ACR](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_EELManagedACR.yaml)
* [ACR Status Update](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_ACRStatusUpdate.yaml)
* [EES Registration](https://jdegre.github.io/loader.html?yaml=TS29558_Eecs_EESRegistration.yaml)
* [Target EES Discovery](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_TargetEESDiscovery.yaml)
* [EEC Registration](https://jdegre.github.io/loader.html?yaml=TS24558_Eees_EECRegistration.yaml)
* [ECS Service Provisioning](https://jdegre.github.io/loader.html?yaml=TS24558_Eecs_ServiceProvisioning.yaml)
* [EAS Discovery](https://jdegre.github.io/loader.html?yaml=TS24558_Eees_EASDiscovery.yaml)
* [EES ACR Events](https://jdegre.github.io/loader.html?yaml=TS24558_Eees_ACREvents.yaml)
* [EES App Context Relocation](https://jdegre.github.io/loader.html?yaml=TS24558_Eees_AppContextRelocation.yaml)
* [EES ACR Parameters Information](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_ACRParameterInformation.yaml)
* [EES Common EAS Announcement](https://jdegre.github.io/loader.html?yaml=TS29558_Eees_CommonEASAnnouncement.yaml)
* [CAS Selected EES](https://jdegre.github.io/loader.html?yaml=TS29558_Ecas_SelectedEES.yaml)

## UAS Application Enabler (UAE) Server
* [C2 Operation Mode Management](https://jdegre.github.io/loader.html?yaml=TS29257_UAE_C2OperationModeManagement.yaml)
* [Real-time UAV Status](https://jdegre.github.io/loader.html?yaml=TS29257_UAE_RealtimeUAVStatus.yaml)
* [USS Change Management](https://jdegre.github.io/loader.html?yaml=TS29257_UAE_ChangeUSSManagement.yaml)
* [DAA Support](https://jdegre.github.io/loader.html?yaml=TS29257_UAE_DAASupport.yaml)

## 5GMARCH (Enabling MSGin5G Service)
* [AS Registration](https://jdegre.github.io/loader.html?yaml=TS29538_MSGS_ASRegistration.yaml)
* [MSGin5G Server Message Delivery](https://jdegre.github.io/loader.html?yaml=TS29538_MSGS_MSGDelivery.yaml)
* [L3G Message Delivery](https://jdegre.github.io/loader.html?yaml=TS29538_MSGG_L3GDelivery.yaml)
* [N3G Message Delivery](https://jdegre.github.io/loader.html?yaml=TS29538_MSGG_N3GDelivery.yaml)
* [Broadcast Message Delivery](https://jdegre.github.io/loader.html?yaml=TS29538_MSGG_BGDelivery.yaml)

## PINAPP (Personal IoT Network Application)
* [PINServer PAS Registration](https://jdegre.github.io/loader.html?yaml=TS29583_PIN_ASRegistration.yaml)
* [PINServer Service Switch Information](https://jdegre.github.io/loader.html?yaml=TS29583_PIN_ASServiceSwitch.yaml)
* [PINServer Service Continuity Information](https://jdegre.github.io/loader.html?yaml=TS29583_PIN_ASServiceContinuity.yaml)

# 5G Media Streaming (5GMS) TS 26.512
Note: The APIs at reference points M1 and M5 are exposed by the 5GMS AF.

* [Common Data Types](https://jdegre.github.io/loader.html?yaml=TS26512_CommonData.yaml)

## Provisioning (M1)
* [Provisioning Sessions](https://jdegre.github.io/loader.html?yaml=TS26512_M1_ProvisioningSessions.yaml)
* [Server Certificates Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_ServerCertificatesProvisioning.yaml)
* [Content Preparation Templates Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_ContentPreparationTemplatesProvisioning.yaml)
* [Content Protocols Discovery](https://jdegre.github.io/loader.html?yaml=TS26512_M1_ContentProtocolsDiscovery.yaml)
* [Content Hosting Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_ContentHostingProvisioning.yaml)
* [Consumption Reporting Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_ConsumptionReportingProvisioning.yaml)
* [Metrics Reporting Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_MetricsReportingProvisioning.yaml)
* [Policy Templates Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_PolicyTemplatesProvisioning.yaml)
* [Edge Resources Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_EdgeResourcesProvisioning.yaml)
* [Event Data Processing Provisioning](https://jdegre.github.io/loader.html?yaml=TS26512_M1_EventDataProcessingProvisioning.yaml)

## Media Session Handling (M5)
* [Service Access Information](https://jdegre.github.io/loader.html?yaml=TS26512_M5_ServiceAccessInformation.yaml)
* [Consumption Reporting](https://jdegre.github.io/loader.html?yaml=TS26512_M5_ConsumptionReporting.yaml)
* [Metrics Reporting](https://jdegre.github.io/loader.html?yaml=TS26512_M5_MetricsReporting.yaml)
* [Dynamic Policies](https://jdegre.github.io/loader.html?yaml=TS26512_M5_DynamicPolicies.yaml)
* [Network Assistance](https://jdegre.github.io/loader.html?yaml=TS26512_M5_NetworkAssistance.yaml)

## Data Reporting
* [5GMS Client (R2)](https://jdegre.github.io/loader.html?yaml=TS26512_R2_DataReporting.yaml)
* [5GMS AS (R4)](https://jdegre.github.io/loader.html?yaml=TS26512_R4_DataReporting.yaml)

## Event Exposure
* [Data Collection AF (R5, R6)](https://jdegre.github.io/loader.html?yaml=TS26512_EventExposure.yaml)

# 3GPP SA5 models and MnS OpenAPI definitions

## Network Resource Models (NRM)
* [Generic NRM (TS 28.623)](https://jdegre.github.io/loader.html?yaml=TS28623_GenericNrm.yaml)
* [Common NRM definitions (TS 28.623)](https://jdegre.github.io/loader.html?yaml=TS28623_ComDefs.yaml)
* [NR NRM (TS 28.541)](https://jdegre.github.io/loader.html?yaml=TS28541_NrNrm.yaml)
* [5GC NRM (TS 28.541)](https://jdegre.github.io/loader.html?yaml=TS28541_5GcNrm.yaml)
* [Slice NRM (TS 28.541)](https://jdegre.github.io/loader.html?yaml=TS28541_SliceNrm.yaml)
* [Communication Service Assurance NRM (TS 28.536)](https://jdegre.github.io/loader.html?yaml=TS28536_CoslaNrm.yaml)
* [MDA NRM (TS 28.104)](jdegre.github.io/loader.html?yaml=TS28104_MdaNrm.yaml)
* [MDA Report NRM (TS 28.104)](jdegre.github.io/loader.html?yaml=TS28104_MdaReport.yaml)
* [AI/ML NRM (TS 28.105)](jdegre.github.io/loader.html?yaml=TS28105_AiMlNrm.yaml)
* [Intent NRM (TS 28.312)](jdegre.github.io/loader.html?yaml=TS28312_IntentNrm.yaml)
* [Edge NRM (TS 28.538)](jdegre.github.io/loader.html?yaml=TS28538_EdgeNrm.yaml)
* [Self-configuration of RAN entities (TS 28.317)](jdegre.github.io/loader.html?yaml=TS28317_RanScNrm.yaml)

## Management Services (MnS)
* [Provisioning MnS (TS 28.532)](https://jdegre.github.io/loader.html?yaml=TS28532_ProvMnS.yaml)
* [Fault Supervision MnS (TS 28.532)](https://jdegre.github.io/loader.html?yaml=TS28532_FaultMnS.yaml)
* [Performance Measurement Job Control MnS (28.550)](https://jdegre.github.io/loader.html?yaml=TS28550_PerfMeasJobCtrlMnS.yaml)
* [File Data Reporting MnS (TS 28.532)](https://jdegre.github.io/loader.html?yaml=TS28532_FileDataReportingMnS.yaml)
* [Performance Threshold Monitoring MnS (TS 28.532)](https://jdegre.github.io/loader.html?yaml=TS28532_PerfMnS.yaml)
* [Heartbeat Notifications(TS 28.532)](https://jdegre.github.io/loader.html?yaml=TS28532_HeartbeatNtf.yaml)
* [Streaming Data Reporting MnS (TS 28.532)](https://jdegre.github.io/loader.html?yaml=TS28532_StreamingDataMnS.yaml)
