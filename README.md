<div align="left">

[![Visit Appwrite](./header.png)](https://appwrite.io)

# [Appwrite](https://appwrite.io)<a id="appwrite"></a>

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`appwriteserver.account.addAuthenticatorApp`](#appwriteserveraccountaddauthenticatorapp)
  * [`appwriteserver.account.beginMfaVerification`](#appwriteserveraccountbeginmfaverification)
  * [`appwriteserver.account.blockCurrentUserStatus`](#appwriteserveraccountblockcurrentuserstatus)
  * [`appwriteserver.account.completeEmailVerification`](#appwriteserveraccountcompleteemailverification)
  * [`appwriteserver.account.completeMfaChallenge`](#appwriteserveraccountcompletemfachallenge)
  * [`appwriteserver.account.completePasswordRecovery`](#appwriteserveraccountcompletepasswordrecovery)
  * [`appwriteserver.account.confirmPhoneVerification`](#appwriteserveraccountconfirmphoneverification)
  * [`appwriteserver.account.createAnonymousSession`](#appwriteserveraccountcreateanonymoussession)
  * [`appwriteserver.account.createEmailPasswordSession`](#appwriteserveraccountcreateemailpasswordsession)
  * [`appwriteserver.account.createEmailToken`](#appwriteserveraccountcreateemailtoken)
  * [`appwriteserver.account.createEmailVerification`](#appwriteserveraccountcreateemailverification)
  * [`appwriteserver.account.createJwt`](#appwriteserveraccountcreatejwt)
  * [`appwriteserver.account.createMagicUrlToken`](#appwriteserveraccountcreatemagicurltoken)
  * [`appwriteserver.account.createNewUser`](#appwriteserveraccountcreatenewuser)
  * [`appwriteserver.account.createOAuth2Token`](#appwriteserveraccountcreateoauth2token)
  * [`appwriteserver.account.createPasswordRecovery`](#appwriteserveraccountcreatepasswordrecovery)
  * [`appwriteserver.account.createPhoneToken`](#appwriteserveraccountcreatephonetoken)
  * [`appwriteserver.account.createPhoneVerification`](#appwriteserveraccountcreatephoneverification)
  * [`appwriteserver.account.createTokenSession`](#appwriteserveraccountcreatetokensession)
  * [`appwriteserver.account.deleteAuthenticatorById`](#appwriteserveraccountdeleteauthenticatorbyid)
  * [`appwriteserver.account.deleteIdentityById`](#appwriteserveraccountdeleteidentitybyid)
  * [`appwriteserver.account.deleteUserSessions`](#appwriteserveraccountdeleteusersessions)
  * [`appwriteserver.account.extendSessionLength`](#appwriteserveraccountextendsessionlength)
  * [`appwriteserver.account.generateRecoveryCodes`](#appwriteserveraccountgeneraterecoverycodes)
  * [`appwriteserver.account.getCurrentUser`](#appwriteserveraccountgetcurrentuser)
  * [`appwriteserver.account.getMfaRecoveryCodes`](#appwriteserveraccountgetmfarecoverycodes)
  * [`appwriteserver.account.getPrefs`](#appwriteserveraccountgetprefs)
  * [`appwriteserver.account.getSessionById`](#appwriteserveraccountgetsessionbyid)
  * [`appwriteserver.account.listIdentities`](#appwriteserveraccountlistidentities)
  * [`appwriteserver.account.listLogs`](#appwriteserveraccountlistlogs)
  * [`appwriteserver.account.listMfaFactors`](#appwriteserveraccountlistmfafactors)
  * [`appwriteserver.account.listSessions`](#appwriteserveraccountlistsessions)
  * [`appwriteserver.account.logoutSessionById`](#appwriteserveraccountlogoutsessionbyid)
  * [`appwriteserver.account.regenerateMfaRecoveryCodes`](#appwriteserveraccountregeneratemfarecoverycodes)
  * [`appwriteserver.account.updateEmailAddress`](#appwriteserveraccountupdateemailaddress)
  * [`appwriteserver.account.updateMagicUrlSession`](#appwriteserveraccountupdatemagicurlsession)
  * [`appwriteserver.account.updateMfaStatus`](#appwriteserveraccountupdatemfastatus)
  * [`appwriteserver.account.updateNameOperation`](#appwriteserveraccountupdatenameoperation)
  * [`appwriteserver.account.updatePasswordOperation`](#appwriteserveraccountupdatepasswordoperation)
  * [`appwriteserver.account.updatePhone`](#appwriteserveraccountupdatephone)
  * [`appwriteserver.account.updatePhoneSession`](#appwriteserveraccountupdatephonesession)
  * [`appwriteserver.account.updatePreferences`](#appwriteserveraccountupdatepreferences)
  * [`appwriteserver.account.verifyAuthenticator`](#appwriteserveraccountverifyauthenticator)
  * [`appwriteserver.avatars.generateQrCode`](#appwriteserveravatarsgenerateqrcode)
  * [`appwriteserver.avatars.getBrowserIcon`](#appwriteserveravatarsgetbrowsericon)
  * [`appwriteserver.avatars.getCountryFlag`](#appwriteserveravatarsgetcountryflag)
  * [`appwriteserver.avatars.getCreditCardIcon`](#appwriteserveravatarsgetcreditcardicon)
  * [`appwriteserver.avatars.getFavicon`](#appwriteserveravatarsgetfavicon)
  * [`appwriteserver.avatars.getRemoteImage`](#appwriteserveravatarsgetremoteimage)
  * [`appwriteserver.avatars.getUserInitials`](#appwriteserveravatarsgetuserinitials)
  * [`appwriteserver.databases.createBooleanAttribute`](#appwriteserverdatabasescreatebooleanattribute)
  * [`appwriteserver.databases.createCollection`](#appwriteserverdatabasescreatecollection)
  * [`appwriteserver.databases.createDatabase`](#appwriteserverdatabasescreatedatabase)
  * [`appwriteserver.databases.createDatetimeAttribute`](#appwriteserverdatabasescreatedatetimeattribute)
  * [`appwriteserver.databases.createDocument`](#appwriteserverdatabasescreatedocument)
  * [`appwriteserver.databases.createEmailAttribute`](#appwriteserverdatabasescreateemailattribute)
  * [`appwriteserver.databases.createEnumAttribute`](#appwriteserverdatabasescreateenumattribute)
  * [`appwriteserver.databases.createFloatAttribute`](#appwriteserverdatabasescreatefloatattribute)
  * [`appwriteserver.databases.createIndex`](#appwriteserverdatabasescreateindex)
  * [`appwriteserver.databases.createIntegerAttribute`](#appwriteserverdatabasescreateintegerattribute)
  * [`appwriteserver.databases.createIpAttribute`](#appwriteserverdatabasescreateipattribute)
  * [`appwriteserver.databases.createRelationshipAttribute`](#appwriteserverdatabasescreaterelationshipattribute)
  * [`appwriteserver.databases.createStringAttribute`](#appwriteserverdatabasescreatestringattribute)
  * [`appwriteserver.databases.createUrlAttribute`](#appwriteserverdatabasescreateurlattribute)
  * [`appwriteserver.databases.deleteAttributeById`](#appwriteserverdatabasesdeleteattributebyid)
  * [`appwriteserver.databases.deleteById`](#appwriteserverdatabasesdeletebyid)
  * [`appwriteserver.databases.deleteCollectionById`](#appwriteserverdatabasesdeletecollectionbyid)
  * [`appwriteserver.databases.deleteDocumentById`](#appwriteserverdatabasesdeletedocumentbyid)
  * [`appwriteserver.databases.deleteIndex`](#appwriteserverdatabasesdeleteindex)
  * [`appwriteserver.databases.getAttributeById`](#appwriteserverdatabasesgetattributebyid)
  * [`appwriteserver.databases.getById`](#appwriteserverdatabasesgetbyid)
  * [`appwriteserver.databases.getCollectionById`](#appwriteserverdatabasesgetcollectionbyid)
  * [`appwriteserver.databases.getDocumentById`](#appwriteserverdatabasesgetdocumentbyid)
  * [`appwriteserver.databases.getIndexById`](#appwriteserverdatabasesgetindexbyid)
  * [`appwriteserver.databases.listAll`](#appwriteserverdatabaseslistall)
  * [`appwriteserver.databases.listCollectionAttributes`](#appwriteserverdatabaseslistcollectionattributes)
  * [`appwriteserver.databases.listCollectionDocuments`](#appwriteserverdatabaseslistcollectiondocuments)
  * [`appwriteserver.databases.listCollections`](#appwriteserverdatabaseslistcollections)
  * [`appwriteserver.databases.listIndexes`](#appwriteserverdatabaseslistindexes)
  * [`appwriteserver.databases.updateBooleanAttribute`](#appwriteserverdatabasesupdatebooleanattribute)
  * [`appwriteserver.databases.updateById`](#appwriteserverdatabasesupdatebyid)
  * [`appwriteserver.databases.updateCollectionById`](#appwriteserverdatabasesupdatecollectionbyid)
  * [`appwriteserver.databases.updateDatetimeAttribute`](#appwriteserverdatabasesupdatedatetimeattribute)
  * [`appwriteserver.databases.updateDocumentById`](#appwriteserverdatabasesupdatedocumentbyid)
  * [`appwriteserver.databases.updateEmailAttribute`](#appwriteserverdatabasesupdateemailattribute)
  * [`appwriteserver.databases.updateEnumAttribute`](#appwriteserverdatabasesupdateenumattribute)
  * [`appwriteserver.databases.updateFloatAttribute`](#appwriteserverdatabasesupdatefloatattribute)
  * [`appwriteserver.databases.updateIntegerAttribute`](#appwriteserverdatabasesupdateintegerattribute)
  * [`appwriteserver.databases.updateIpAttribute`](#appwriteserverdatabasesupdateipattribute)
  * [`appwriteserver.databases.updateRelationshipAttribute`](#appwriteserverdatabasesupdaterelationshipattribute)
  * [`appwriteserver.databases.updateStringAttribute`](#appwriteserverdatabasesupdatestringattribute)
  * [`appwriteserver.databases.updateUrlAttribute`](#appwriteserverdatabasesupdateurlattribute)
  * [`appwriteserver.functions.createBuild`](#appwriteserverfunctionscreatebuild)
  * [`appwriteserver.functions.createDeploymentFunctionCode`](#appwriteserverfunctionscreatedeploymentfunctioncode)
  * [`appwriteserver.functions.createNewFunction`](#appwriteserverfunctionscreatenewfunction)
  * [`appwriteserver.functions.createVariable`](#appwriteserverfunctionscreatevariable)
  * [`appwriteserver.functions.deleteById`](#appwriteserverfunctionsdeletebyid)
  * [`appwriteserver.functions.deleteDeployment`](#appwriteserverfunctionsdeletedeployment)
  * [`appwriteserver.functions.deleteVariableById`](#appwriteserverfunctionsdeletevariablebyid)
  * [`appwriteserver.functions.getById`](#appwriteserverfunctionsgetbyid)
  * [`appwriteserver.functions.getDeploymentById`](#appwriteserverfunctionsgetdeploymentbyid)
  * [`appwriteserver.functions.getDeploymentContents`](#appwriteserverfunctionsgetdeploymentcontents)
  * [`appwriteserver.functions.getExecutionLog`](#appwriteserverfunctionsgetexecutionlog)
  * [`appwriteserver.functions.getVariableById`](#appwriteserverfunctionsgetvariablebyid)
  * [`appwriteserver.functions.listAllFunctions`](#appwriteserverfunctionslistallfunctions)
  * [`appwriteserver.functions.listDeployments`](#appwriteserverfunctionslistdeployments)
  * [`appwriteserver.functions.listExecutions`](#appwriteserverfunctionslistexecutions)
  * [`appwriteserver.functions.listRuntimes`](#appwriteserverfunctionslistruntimes)
  * [`appwriteserver.functions.listVariables`](#appwriteserverfunctionslistvariables)
  * [`appwriteserver.functions.triggerExecution`](#appwriteserverfunctionstriggerexecution)
  * [`appwriteserver.functions.updateById`](#appwriteserverfunctionsupdatebyid)
  * [`appwriteserver.functions.updateDeploymentFunctionCode`](#appwriteserverfunctionsupdatedeploymentfunctioncode)
  * [`appwriteserver.functions.updateVariableById`](#appwriteserverfunctionsupdatevariablebyid)
  * [`appwriteserver.graphql.executeMutation`](#appwriteservergraphqlexecutemutation)
  * [`appwriteserver.graphql.executeMutation_0`](#appwriteservergraphqlexecutemutation_0)
  * [`appwriteserver.health.checkAntivirusStatus`](#appwriteserverhealthcheckantivirusstatus)
  * [`appwriteserver.health.checkCacheStatus`](#appwriteserverhealthcheckcachestatus)
  * [`appwriteserver.health.checkDbStatus`](#appwriteserverhealthcheckdbstatus)
  * [`appwriteserver.health.checkLocalStorageStatus`](#appwriteserverhealthchecklocalstoragestatus)
  * [`appwriteserver.health.checkPubsubServerStatus`](#appwriteserverhealthcheckpubsubserverstatus)
  * [`appwriteserver.health.checkServerStatus`](#appwriteserverhealthcheckserverstatus)
  * [`appwriteserver.health.checkStorageStatus`](#appwriteserverhealthcheckstoragestatus)
  * [`appwriteserver.health.functionsQueueCount`](#appwriteserverhealthfunctionsqueuecount)
  * [`appwriteserver.health.getBuildsQueue`](#appwriteserverhealthgetbuildsqueue)
  * [`appwriteserver.health.getDatabasesQueue`](#appwriteserverhealthgetdatabasesqueue)
  * [`appwriteserver.health.getDeletesQueue`](#appwriteserverhealthgetdeletesqueue)
  * [`appwriteserver.health.getFailedJobs`](#appwriteserverhealthgetfailedjobs)
  * [`appwriteserver.health.getMailQueueSize`](#appwriteserverhealthgetmailqueuesize)
  * [`appwriteserver.health.getMigrationsQueue`](#appwriteserverhealthgetmigrationsqueue)
  * [`appwriteserver.health.getQueueLogs`](#appwriteserverhealthgetqueuelogs)
  * [`appwriteserver.health.getQueueMessaging`](#appwriteserverhealthgetqueuemessaging)
  * [`appwriteserver.health.getQueueStatus`](#appwriteserverhealthgetqueuestatus)
  * [`appwriteserver.health.getQueueUsage`](#appwriteserverhealthgetqueueusage)
  * [`appwriteserver.health.getQueueUsageDump`](#appwriteserverhealthgetqueueusagedump)
  * [`appwriteserver.health.getSslCert`](#appwriteserverhealthgetsslcert)
  * [`appwriteserver.health.getTimeInformation`](#appwriteserverhealthgettimeinformation)
  * [`appwriteserver.health.getWebhooksQueue`](#appwriteserverhealthgetwebhooksqueue)
  * [`appwriteserver.health.queueCertificatesGet`](#appwriteserverhealthqueuecertificatesget)
  * [`appwriteserver.locale.getLanguageList`](#appwriteserverlocalegetlanguagelist)
  * [`appwriteserver.locale.getUserLocaleData`](#appwriteserverlocalegetuserlocaledata)
  * [`appwriteserver.locale.listCodes`](#appwriteserverlocalelistcodes)
  * [`appwriteserver.locale.listContinents`](#appwriteserverlocalelistcontinents)
  * [`appwriteserver.locale.listCountries`](#appwriteserverlocalelistcountries)
  * [`appwriteserver.locale.listCurrenciesData`](#appwriteserverlocalelistcurrenciesdata)
  * [`appwriteserver.locale.listEuCountries`](#appwriteserverlocalelisteucountries)
  * [`appwriteserver.locale.listPhoneCodes`](#appwriteserverlocalelistphonecodes)
  * [`appwriteserver.messaging.createApnsProvider`](#appwriteservermessagingcreateapnsprovider)
  * [`appwriteserver.messaging.createEmailMessage`](#appwriteservermessagingcreateemailmessage)
  * [`appwriteserver.messaging.createFcmProvider`](#appwriteservermessagingcreatefcmprovider)
  * [`appwriteserver.messaging.createMsg91Provider`](#appwriteservermessagingcreatemsg91provider)
  * [`appwriteserver.messaging.createProvider`](#appwriteservermessagingcreateprovider)
  * [`appwriteserver.messaging.createPushNotification`](#appwriteservermessagingcreatepushnotification)
  * [`appwriteserver.messaging.createSendgridProvider`](#appwriteservermessagingcreatesendgridprovider)
  * [`appwriteserver.messaging.createSmsMessage`](#appwriteservermessagingcreatesmsmessage)
  * [`appwriteserver.messaging.createSmtpProvider`](#appwriteservermessagingcreatesmtpprovider)
  * [`appwriteserver.messaging.createSubscriber`](#appwriteservermessagingcreatesubscriber)
  * [`appwriteserver.messaging.createTelesignProvider`](#appwriteservermessagingcreatetelesignprovider)
  * [`appwriteserver.messaging.createTextmagicProvider`](#appwriteservermessagingcreatetextmagicprovider)
  * [`appwriteserver.messaging.createTopic`](#appwriteservermessagingcreatetopic)
  * [`appwriteserver.messaging.createTwilioProvider`](#appwriteservermessagingcreatetwilioprovider)
  * [`appwriteserver.messaging.createVonageProvider`](#appwriteservermessagingcreatevonageprovider)
  * [`appwriteserver.messaging.deleteMessageById`](#appwriteservermessagingdeletemessagebyid)
  * [`appwriteserver.messaging.deleteProviderById`](#appwriteservermessagingdeleteproviderbyid)
  * [`appwriteserver.messaging.deleteSubscriberById`](#appwriteservermessagingdeletesubscriberbyid)
  * [`appwriteserver.messaging.deleteTopicById`](#appwriteservermessagingdeletetopicbyid)
  * [`appwriteserver.messaging.getMessageById`](#appwriteservermessaginggetmessagebyid)
  * [`appwriteserver.messaging.getMessageLogs`](#appwriteservermessaginggetmessagelogs)
  * [`appwriteserver.messaging.getProviderById`](#appwriteservermessaginggetproviderbyid)
  * [`appwriteserver.messaging.getSubscriberById`](#appwriteservermessaginggetsubscriberbyid)
  * [`appwriteserver.messaging.getTopicById`](#appwriteservermessaginggettopicbyid)
  * [`appwriteserver.messaging.listMessageTargets`](#appwriteservermessaginglistmessagetargets)
  * [`appwriteserver.messaging.listMessages`](#appwriteservermessaginglistmessages)
  * [`appwriteserver.messaging.listProviderLogs`](#appwriteservermessaginglistproviderlogs)
  * [`appwriteserver.messaging.listProviders`](#appwriteservermessaginglistproviders)
  * [`appwriteserver.messaging.listSubscriberLogs`](#appwriteservermessaginglistsubscriberlogs)
  * [`appwriteserver.messaging.listSubscribers`](#appwriteservermessaginglistsubscribers)
  * [`appwriteserver.messaging.listTopicLogs`](#appwriteservermessaginglisttopiclogs)
  * [`appwriteserver.messaging.listTopics`](#appwriteservermessaginglisttopics)
  * [`appwriteserver.messaging.updateApnsProvider`](#appwriteservermessagingupdateapnsprovider)
  * [`appwriteserver.messaging.updateEmailById`](#appwriteservermessagingupdateemailbyid)
  * [`appwriteserver.messaging.updateFcmProviderById`](#appwriteservermessagingupdatefcmproviderbyid)
  * [`appwriteserver.messaging.updateMailgunProvider`](#appwriteservermessagingupdatemailgunprovider)
  * [`appwriteserver.messaging.updateMsg91Provider`](#appwriteservermessagingupdatemsg91provider)
  * [`appwriteserver.messaging.updateProvider`](#appwriteservermessagingupdateprovider)
  * [`appwriteserver.messaging.updateProviderById`](#appwriteservermessagingupdateproviderbyid)
  * [`appwriteserver.messaging.updatePushNotification`](#appwriteservermessagingupdatepushnotification)
  * [`appwriteserver.messaging.updateSmsMessage`](#appwriteservermessagingupdatesmsmessage)
  * [`appwriteserver.messaging.updateTelesignProvider`](#appwriteservermessagingupdatetelesignprovider)
  * [`appwriteserver.messaging.updateTextmagicProvider`](#appwriteservermessagingupdatetextmagicprovider)
  * [`appwriteserver.messaging.updateTopicById`](#appwriteservermessagingupdatetopicbyid)
  * [`appwriteserver.messaging.updateTwilioProvider`](#appwriteservermessagingupdatetwilioprovider)
  * [`appwriteserver.messaging.updateVonageProvider`](#appwriteservermessagingupdatevonageprovider)
  * [`appwriteserver.storage.createFile`](#appwriteserverstoragecreatefile)
  * [`appwriteserver.storage.createNewBucket`](#appwriteserverstoragecreatenewbucket)
  * [`appwriteserver.storage.deleteBucketById`](#appwriteserverstoragedeletebucketbyid)
  * [`appwriteserver.storage.deleteFileById`](#appwriteserverstoragedeletefilebyid)
  * [`appwriteserver.storage.getBucketById`](#appwriteserverstoragegetbucketbyid)
  * [`appwriteserver.storage.getFileById`](#appwriteserverstoragegetfilebyid)
  * [`appwriteserver.storage.getFileDownload`](#appwriteserverstoragegetfiledownload)
  * [`appwriteserver.storage.getFilePreviewImage`](#appwriteserverstoragegetfilepreviewimage)
  * [`appwriteserver.storage.getFileView`](#appwriteserverstoragegetfileview)
  * [`appwriteserver.storage.listBuckets`](#appwriteserverstoragelistbuckets)
  * [`appwriteserver.storage.listFiles`](#appwriteserverstoragelistfiles)
  * [`appwriteserver.storage.updateBucketById`](#appwriteserverstorageupdatebucketbyid)
  * [`appwriteserver.storage.updateFileById`](#appwriteserverstorageupdatefilebyid)
  * [`appwriteserver.teams.createMembershipRequest`](#appwriteserverteamscreatemembershiprequest)
  * [`appwriteserver.teams.createNewTeam`](#appwriteserverteamscreatenewteam)
  * [`appwriteserver.teams.deleteMembership`](#appwriteserverteamsdeletemembership)
  * [`appwriteserver.teams.getById`](#appwriteserverteamsgetbyid)
  * [`appwriteserver.teams.getMembership`](#appwriteserverteamsgetmembership)
  * [`appwriteserver.teams.getPrefsById`](#appwriteserverteamsgetprefsbyid)
  * [`appwriteserver.teams.getUserTeams`](#appwriteserverteamsgetuserteams)
  * [`appwriteserver.teams.listMemberships`](#appwriteserverteamslistmemberships)
  * [`appwriteserver.teams.removeTeamById`](#appwriteserverteamsremoveteambyid)
  * [`appwriteserver.teams.updateMembershipRoles`](#appwriteserverteamsupdatemembershiproles)
  * [`appwriteserver.teams.updateMembershipStatus`](#appwriteserverteamsupdatemembershipstatus)
  * [`appwriteserver.teams.updateNameById`](#appwriteserverteamsupdatenamebyid)
  * [`appwriteserver.teams.updatePrefsById`](#appwriteserverteamsupdateprefsbyid)
  * [`appwriteserver.users.createArgon2User`](#appwriteserveruserscreateargon2user)
  * [`appwriteserver.users.createBcryptUser`](#appwriteserveruserscreatebcryptuser)
  * [`appwriteserver.users.createMd5User`](#appwriteserveruserscreatemd5user)
  * [`appwriteserver.users.createMfaRecoveryCodes`](#appwriteserveruserscreatemfarecoverycodes)
  * [`appwriteserver.users.createNewUser`](#appwriteserveruserscreatenewuser)
  * [`appwriteserver.users.createPhpassUser`](#appwriteserveruserscreatephpassuser)
  * [`appwriteserver.users.createScryptModifiedUser`](#appwriteserveruserscreatescryptmodifieduser)
  * [`appwriteserver.users.createScryptUser`](#appwriteserveruserscreatescryptuser)
  * [`appwriteserver.users.createSession`](#appwriteserveruserscreatesession)
  * [`appwriteserver.users.createShaUser`](#appwriteserveruserscreateshauser)
  * [`appwriteserver.users.createTargetMessaging`](#appwriteserveruserscreatetargetmessaging)
  * [`appwriteserver.users.createTokenSession`](#appwriteserveruserscreatetokensession)
  * [`appwriteserver.users.deleteAuthenticator`](#appwriteserverusersdeleteauthenticator)
  * [`appwriteserver.users.deleteIdentityById`](#appwriteserverusersdeleteidentitybyid)
  * [`appwriteserver.users.deleteSessionById`](#appwriteserverusersdeletesessionbyid)
  * [`appwriteserver.users.deleteTargetMessaging`](#appwriteserverusersdeletetargetmessaging)
  * [`appwriteserver.users.deleteUserById`](#appwriteserverusersdeleteuserbyid)
  * [`appwriteserver.users.deleteUserSessions`](#appwriteserverusersdeleteusersessions)
  * [`appwriteserver.users.getById`](#appwriteserverusersgetbyid)
  * [`appwriteserver.users.getMfaRecoveryCodes`](#appwriteserverusersgetmfarecoverycodes)
  * [`appwriteserver.users.getUserPrefs`](#appwriteserverusersgetuserprefs)
  * [`appwriteserver.users.getUserTargetById`](#appwriteserverusersgetusertargetbyid)
  * [`appwriteserver.users.listAll`](#appwriteserveruserslistall)
  * [`appwriteserver.users.listFactors`](#appwriteserveruserslistfactors)
  * [`appwriteserver.users.listIdentities`](#appwriteserveruserslistidentities)
  * [`appwriteserver.users.listMemberships`](#appwriteserveruserslistmemberships)
  * [`appwriteserver.users.listSessions`](#appwriteserveruserslistsessions)
  * [`appwriteserver.users.listTargets`](#appwriteserveruserslisttargets)
  * [`appwriteserver.users.listUserLogs`](#appwriteserveruserslistuserlogs)
  * [`appwriteserver.users.regenerateMfaRecoveryCodes`](#appwriteserverusersregeneratemfarecoverycodes)
  * [`appwriteserver.users.updateEmailById`](#appwriteserverusersupdateemailbyid)
  * [`appwriteserver.users.updateEmailVerification`](#appwriteserverusersupdateemailverification)
  * [`appwriteserver.users.updateLabelsById`](#appwriteserverusersupdatelabelsbyid)
  * [`appwriteserver.users.updateMfaStatus`](#appwriteserverusersupdatemfastatus)
  * [`appwriteserver.users.updatePasswordById`](#appwriteserverusersupdatepasswordbyid)
  * [`appwriteserver.users.updatePhoneById`](#appwriteserverusersupdatephonebyid)
  * [`appwriteserver.users.updatePhoneVerification`](#appwriteserverusersupdatephoneverification)
  * [`appwriteserver.users.updatePreferencesById`](#appwriteserverusersupdatepreferencesbyid)
  * [`appwriteserver.users.updateStatus`](#appwriteserverusersupdatestatus)
  * [`appwriteserver.users.updateTargetMessaging`](#appwriteserverusersupdatetargetmessaging)
  * [`appwriteserver.users.updateUserByName`](#appwriteserverusersupdateuserbyname)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Appwrite&serviceName=Server&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { AppwriteServer } from "appwrite-server-typescript-sdk";

const appwriteserver = new AppwriteServer({
  // Defining the base path is optional and defaults to https://cloud.appwrite.io/v1
  // basePath: "https://cloud.appwrite.io/v1",
  forwardedUserAgent: "API_KEY",
  jWT: "API_KEY",
  key: "API_KEY",
  locale: "API_KEY",
  project: "API_KEY",
  session: "API_KEY",
});

const addAuthenticatorAppResponse =
  await appwriteserver.account.addAuthenticatorApp({
    type: "totp",
  });

console.log(addAuthenticatorAppResponse);
```

## Reference<a id="reference"></a>


### `appwriteserver.account.addAuthenticatorApp`<a id="appwriteserveraccountaddauthenticatorapp"></a>

Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#verifyAuthenticator) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAuthenticatorAppResponse =
  await appwriteserver.account.addAuthenticatorApp({
    type: "totp",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator. Must be `totp`

#### 🔄 Return<a id="🔄-return"></a>

[MfaType](./models/mfa-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.beginMfaVerification`<a id="appwriteserveraccountbeginmfaverification"></a>

Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const beginMfaVerificationResponse =
  await appwriteserver.account.beginMfaVerification({
    factor: "email",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### factor: `string`<a id="factor-string"></a>

Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.

#### 🔄 Return<a id="🔄-return"></a>

[MfaChallenge](./models/mfa-challenge.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/challenge` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.blockCurrentUserStatus`<a id="appwriteserveraccountblockcurrentuserstatus"></a>

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const blockCurrentUserStatusResponse =
  await appwriteserver.account.blockCurrentUserStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.completeEmailVerification`<a id="appwriteserveraccountcompleteemailverification"></a>

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeEmailVerificationResponse =
  await appwriteserver.account.completeEmailVerification({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.completeMfaChallenge`<a id="appwriteserveraccountcompletemfachallenge"></a>

Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeMfaChallengeResponse =
  await appwriteserver.account.completeMfaChallenge({
    challengeId: "challengeId_example",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### challengeId: `string`<a id="challengeid-string"></a>

ID of the challenge.

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/challenge` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.completePasswordRecovery`<a id="appwriteserveraccountcompletepasswordrecovery"></a>

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completePasswordRecoveryResponse =
  await appwriteserver.account.completePasswordRecovery({
    userId: "userId_example",
    secret: "secret_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid reset token.

##### password: `string`<a id="password-string"></a>

New user password. Must be between 8 and 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/recovery` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.confirmPhoneVerification`<a id="appwriteserveraccountconfirmphoneverification"></a>

Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const confirmPhoneVerificationResponse =
  await appwriteserver.account.confirmPhoneVerification({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification/phone` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createAnonymousSession`<a id="appwriteserveraccountcreateanonymoussession"></a>

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail) or create an [OAuth2 session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAnonymousSessionResponse =
  await appwriteserver.account.createAnonymousSession();
```

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/anonymous` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createEmailPasswordSession`<a id="appwriteserveraccountcreateemailpasswordsession"></a>

Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailPasswordSessionResponse =
  await appwriteserver.account.createEmailPasswordSession({
    email: "email_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createEmailToken`<a id="appwriteserveraccountcreateemailtoken"></a>

Sends the user an email with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailTokenResponse = await appwriteserver.account.createEmailToken({
  userId: "userId_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### phrase: `boolean`<a id="phrase-boolean"></a>

Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createEmailVerification`<a id="appwriteserveraccountcreateemailverification"></a>

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailVerificationResponse =
  await appwriteserver.account.createEmailVerification({
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createJwt`<a id="appwriteserveraccountcreatejwt"></a>

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createJwtResponse = await appwriteserver.account.createJwt();
```

#### 🔄 Return<a id="🔄-return"></a>

[Jwt](./models/jwt.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/jwt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createMagicUrlToken`<a id="appwriteserveraccountcreatemagicurltoken"></a>

Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour. If you are on a mobile device you can leave the URL parameter empty, so that the login completion will be handled by your Appwrite instance by default.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMagicUrlTokenResponse =
  await appwriteserver.account.createMagicUrlToken({
    userId: "userId_example",
    email: "email_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### phrase: `boolean`<a id="phrase-boolean"></a>

Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/magic-url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createNewUser`<a id="appwriteserveraccountcreatenewuser"></a>

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUserResponse = await appwriteserver.account.createNewUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

New user password. Must be between 8 and 256 chars.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createOAuth2Token`<a id="appwriteserveraccountcreateoauth2token"></a>

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed. 

If authentication succeeds, `userId` and `secret` of a token will be appended to the success URL as query parameters. These can be used to create a new session using the [Create session](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOAuth2TokenResponse =
  await appwriteserver.account.createOAuth2Token({
    provider: "amazon",
    success: "",
    failure: "",
    scopes: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `'amazon' | 'apple' | 'auth0' | 'authentik' | 'autodesk' | 'bitbucket' | 'bitly' | 'box' | 'dailymotion' | 'discord' | 'disqus' | 'dropbox' | 'etsy' | 'facebook' | 'github' | 'gitlab' | 'google' | 'linkedin' | 'microsoft' | 'notion' | 'oidc' | 'okta' | 'paypal' | 'paypalSandbox' | 'podio' | 'salesforce' | 'slack' | 'spotify' | 'stripe' | 'tradeshift' | 'tradeshiftBox' | 'twitch' | 'wordpress' | 'yahoo' | 'yammer' | 'yandex' | 'zoho' | 'zoom' | 'mock'`<a id="provider-amazon--apple--auth0--authentik--autodesk--bitbucket--bitly--box--dailymotion--discord--disqus--dropbox--etsy--facebook--github--gitlab--google--linkedin--microsoft--notion--oidc--okta--paypal--paypalsandbox--podio--salesforce--slack--spotify--stripe--tradeshift--tradeshiftbox--twitch--wordpress--yahoo--yammer--yandex--zoho--zoom--mock"></a>

OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.

##### success: `string`<a id="success-string"></a>

URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### failure: `string`<a id="failure-string"></a>

URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### scopes: `string`[]<a id="scopes-string"></a>

A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/oauth2/{provider}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createPasswordRecovery`<a id="appwriteserveraccountcreatepasswordrecovery"></a>

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPasswordRecoveryResponse =
  await appwriteserver.account.createPasswordRecovery({
    email: "email_example",
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/recovery` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createPhoneToken`<a id="appwriteserveraccountcreatephonetoken"></a>

Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhoneTokenResponse = await appwriteserver.account.createPhoneToken({
  userId: "userId_example",
  phone: "phone_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/phone` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createPhoneVerification`<a id="appwriteserveraccountcreatephoneverification"></a>

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone) endpoint. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhoneVerificationResponse =
  await appwriteserver.account.createPhoneVerification();
```

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification/phone` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.createTokenSession`<a id="appwriteserveraccountcreatetokensession"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTokenSessionResponse =
  await appwriteserver.account.createTokenSession({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.deleteAuthenticatorById`<a id="appwriteserveraccountdeleteauthenticatorbyid"></a>

Delete an authenticator for a user by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAuthenticatorByIdResponse =
  await appwriteserver.account.deleteAuthenticatorById({
    type: "totp",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.deleteIdentityById`<a id="appwriteserveraccountdeleteidentitybyid"></a>

Delete an identity by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteIdentityByIdResponse =
  await appwriteserver.account.deleteIdentityById({
    identityId: "identityId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identityId: `string`<a id="identityid-string"></a>

Identity ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/identities/{identityId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.deleteUserSessions`<a id="appwriteserveraccountdeleteusersessions"></a>

Delete all sessions from the user account and remove any sessions cookies from the end client.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserSessionsResponse =
  await appwriteserver.account.deleteUserSessions();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.extendSessionLength`<a id="appwriteserveraccountextendsessionlength"></a>

Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const extendSessionLengthResponse =
  await appwriteserver.account.extendSessionLength({
    sessionId: "sessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to update the current device session.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.generateRecoveryCodes`<a id="appwriteserveraccountgeneraterecoverycodes"></a>

Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateRecoveryCodesResponse =
  await appwriteserver.account.generateRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.getCurrentUser`<a id="appwriteserveraccountgetcurrentuser"></a>

Get the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentUserResponse = await appwriteserver.account.getCurrentUser();
```

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.getMfaRecoveryCodes`<a id="appwriteserveraccountgetmfarecoverycodes"></a>

Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMfaRecoveryCodesResponse =
  await appwriteserver.account.getMfaRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.getPrefs`<a id="appwriteserveraccountgetprefs"></a>

Get the preferences as a key-value object for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPrefsResponse = await appwriteserver.account.getPrefs();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.getSessionById`<a id="appwriteserveraccountgetsessionbyid"></a>

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSessionByIdResponse = await appwriteserver.account.getSessionById({
  sessionId: "sessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to get the current device session.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.listIdentities`<a id="appwriteserveraccountlistidentities"></a>

Get the list of identities for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listIdentitiesResponse = await appwriteserver.account.listIdentities({
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry

#### 🔄 Return<a id="🔄-return"></a>

[IdentityList](./models/identity-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/identities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.listLogs`<a id="appwriteserveraccountlistlogs"></a>

Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLogsResponse = await appwriteserver.account.listLogs({
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.listMfaFactors`<a id="appwriteserveraccountlistmfafactors"></a>

List the factors available on the account to be used as a MFA challange.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMfaFactorsResponse = await appwriteserver.account.listMfaFactors();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaFactors](./models/mfa-factors.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/factors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.listSessions`<a id="appwriteserveraccountlistsessions"></a>

Get the list of active sessions across different devices for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSessionsResponse = await appwriteserver.account.listSessions();
```

#### 🔄 Return<a id="🔄-return"></a>

[SessionList](./models/session-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.logoutSessionById`<a id="appwriteserveraccountlogoutsessionbyid"></a>

Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use [Delete Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions) instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const logoutSessionByIdResponse =
  await appwriteserver.account.logoutSessionById({
    sessionId: "sessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to delete the current device session.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.regenerateMfaRecoveryCodes`<a id="appwriteserveraccountregeneratemfarecoverycodes"></a>

Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const regenerateMfaRecoveryCodesResponse =
  await appwriteserver.account.regenerateMfaRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updateEmailAddress`<a id="appwriteserveraccountupdateemailaddress"></a>

Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailAddressResponse =
  await appwriteserver.account.updateEmailAddress({
    email: "email_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/email` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updateMagicUrlSession`<a id="appwriteserveraccountupdatemagicurlsession"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMagicUrlSessionResponse =
  await appwriteserver.account.updateMagicUrlSession({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/magic-url` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updateMfaStatus`<a id="appwriteserveraccountupdatemfastatus"></a>

Enable or disable MFA on an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMfaStatusResponse = await appwriteserver.account.updateMfaStatus({
  mfa: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mfa: `boolean`<a id="mfa-boolean"></a>

Enable or disable MFA.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updateNameOperation`<a id="appwriteserveraccountupdatenameoperation"></a>

Update currently logged in user account name.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameOperationResponse =
  await appwriteserver.account.updateNameOperation({
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/name` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updatePasswordOperation`<a id="appwriteserveraccountupdatepasswordoperation"></a>

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePasswordOperationResponse =
  await appwriteserver.account.updatePasswordOperation({
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

New user password. Must be at least 8 chars.

##### oldPassword: `string`<a id="oldpassword-string"></a>

Current user password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/password` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updatePhone`<a id="appwriteserveraccountupdatephone"></a>

Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification) endpoint to send a confirmation SMS.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneResponse = await appwriteserver.account.updatePhone({
  phone: "phone_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/phone` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updatePhoneSession`<a id="appwriteserveraccountupdatephonesession"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneSessionResponse =
  await appwriteserver.account.updatePhoneSession({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/phone` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.updatePreferences`<a id="appwriteserveraccountupdatepreferences"></a>

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePreferencesResponse =
  await appwriteserver.account.updatePreferences({
    prefs: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/prefs` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.account.verifyAuthenticator`<a id="appwriteserveraccountverifyauthenticator"></a>

Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#addAuthenticator) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyAuthenticatorResponse =
  await appwriteserver.account.verifyAuthenticator({
    type: "totp",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.avatars.generateQrCode`<a id="appwriteserveravatarsgenerateqrcode"></a>

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateQrCodeResponse = await appwriteserver.avatars.generateQrCode({
  text: "text_example",
  size: 400,
  margin: 1,
  download: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

Plain text to be converted to QR code image.

##### size: `number`<a id="size-number"></a>

QR code size. Pass an integer between 1 to 1000. Defaults to 400.

##### margin: `number`<a id="margin-number"></a>

Margin from edge. Pass an integer between 0 to 10. Defaults to 1.

##### download: `boolean`<a id="download-boolean"></a>

Return resulting image with \'Content-Disposition: attachment \' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/qr` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.avatars.getBrowserIcon`<a id="appwriteserveravatarsgetbrowsericon"></a>

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBrowserIconResponse = await appwriteserver.avatars.getBrowserIcon({
  code: "aa",
  width: 100,
  height: 100,
  quality: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'aa' | 'an' | 'ch' | 'ci' | 'cm' | 'cr' | 'ff' | 'sf' | 'mf' | 'ps' | 'oi' | 'om' | 'op' | 'true'`<a id="code-aa--an--ch--ci--cm--cr--ff--sf--mf--ps--oi--om--op--true"></a>

Browser Code.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/browsers/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.avatars.getCountryFlag`<a id="appwriteserveravatarsgetcountryflag"></a>

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCountryFlagResponse = await appwriteserver.avatars.getCountryFlag({
  code: "af",
  width: 100,
  height: 100,
  quality: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'af' | 'ao' | 'al' | 'ad' | 'ae' | 'ar' | 'am' | 'ag' | 'au' | 'at' | 'az' | 'bi' | 'be' | 'bj' | 'bf' | 'bd' | 'bg' | 'bh' | 'bs' | 'ba' | 'by' | 'bz' | 'bo' | 'br' | 'bb' | 'bn' | 'bt' | 'bw' | 'cf' | 'ca' | 'ch' | 'cl' | 'cn' | 'ci' | 'cm' | 'cd' | 'cg' | 'co' | 'km' | 'cv' | 'cr' | 'cu' | 'cy' | 'cz' | 'de' | 'dj' | 'dm' | 'dk' | 'do' | 'dz' | 'ec' | 'eg' | 'er' | 'es' | 'ee' | 'et' | 'fi' | 'fj' | 'fr' | 'fm' | 'ga' | 'gb' | 'ge' | 'gh' | 'gn' | 'gm' | 'gw' | 'gq' | 'gr' | 'gd' | 'gt' | 'gy' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'in' | 'ie' | 'ir' | 'iq' | 'is' | 'il' | 'it' | 'jm' | 'jo' | 'jp' | 'kz' | 'ke' | 'kg' | 'kh' | 'ki' | 'kn' | 'kr' | 'kw' | 'la' | 'lb' | 'lr' | 'ly' | 'lc' | 'li' | 'lk' | 'ls' | 'lt' | 'lu' | 'lv' | 'ma' | 'mc' | 'md' | 'mg' | 'mv' | 'mx' | 'mh' | 'mk' | 'ml' | 'mt' | 'mm' | 'me' | 'mn' | 'mz' | 'mr' | 'mu' | 'mw' | 'my' | 'na' | 'ne' | 'ng' | 'ni' | 'nl' | 'false' | 'np' | 'nr' | 'nz' | 'om' | 'pk' | 'pa' | 'pe' | 'ph' | 'pw' | 'pg' | 'pl' | 'kp' | 'pt' | 'py' | 'qa' | 'ro' | 'ru' | 'rw' | 'sa' | 'sd' | 'sn' | 'sg' | 'sb' | 'sl' | 'sv' | 'sm' | 'so' | 'rs' | 'ss' | 'st' | 'sr' | 'sk' | 'si' | 'se' | 'sz' | 'sc' | 'sy' | 'td' | 'tg' | 'th' | 'tj' | 'tm' | 'tl' | 'to' | 'tt' | 'tn' | 'tr' | 'tv' | 'tz' | 'ug' | 'ua' | 'uy' | 'us' | 'uz' | 'va' | 'vc' | 've' | 'vn' | 'vu' | 'ws' | 'ye' | 'za' | 'zm' | 'zw'`<a id="code-af--ao--al--ad--ae--ar--am--ag--au--at--az--bi--be--bj--bf--bd--bg--bh--bs--ba--by--bz--bo--br--bb--bn--bt--bw--cf--ca--ch--cl--cn--ci--cm--cd--cg--co--km--cv--cr--cu--cy--cz--de--dj--dm--dk--do--dz--ec--eg--er--es--ee--et--fi--fj--fr--fm--ga--gb--ge--gh--gn--gm--gw--gq--gr--gd--gt--gy--hn--hr--ht--hu--id--in--ie--ir--iq--is--il--it--jm--jo--jp--kz--ke--kg--kh--ki--kn--kr--kw--la--lb--lr--ly--lc--li--lk--ls--lt--lu--lv--ma--mc--md--mg--mv--mx--mh--mk--ml--mt--mm--me--mn--mz--mr--mu--mw--my--na--ne--ng--ni--nl--false--np--nr--nz--om--pk--pa--pe--ph--pw--pg--pl--kp--pt--py--qa--ro--ru--rw--sa--sd--sn--sg--sb--sl--sv--sm--so--rs--ss--st--sr--sk--si--se--sz--sc--sy--td--tg--th--tj--tm--tl--to--tt--tn--tr--tv--tz--ug--ua--uy--us--uz--va--vc--ve--vn--vu--ws--ye--za--zm--zw"></a>

Country Code. ISO Alpha-2 country code format.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/flags/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.avatars.getCreditCardIcon`<a id="appwriteserveravatarsgetcreditcardicon"></a>

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCreditCardIconResponse =
  await appwriteserver.avatars.getCreditCardIcon({
    code: "amex",
    width: 100,
    height: 100,
    quality: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'amex' | 'argencard' | 'cabal' | 'censosud' | 'diners' | 'discover' | 'elo' | 'hipercard' | 'jcb' | 'mastercard' | 'naranja' | 'targeta-shopping' | 'union-china-pay' | 'visa' | 'mir' | 'maestro'`<a id="code-amex--argencard--cabal--censosud--diners--discover--elo--hipercard--jcb--mastercard--naranja--targeta-shopping--union-china-pay--visa--mir--maestro"></a>

Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/credit-cards/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.avatars.getFavicon`<a id="appwriteserveravatarsgetfavicon"></a>

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFaviconResponse = await appwriteserver.avatars.getFavicon({
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Website URL which you want to fetch the favicon from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/favicon` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.avatars.getRemoteImage`<a id="appwriteserveravatarsgetremoteimage"></a>

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRemoteImageResponse = await appwriteserver.avatars.getRemoteImage({
  url: "url_example",
  width: 400,
  height: 400,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Image URL which you want to crop.

##### width: `number`<a id="width-number"></a>

Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.

##### height: `number`<a id="height-number"></a>

Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/image` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.avatars.getUserInitials`<a id="appwriteserveravatarsgetuserinitials"></a>

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInitialsResponse = await appwriteserver.avatars.getUserInitials({
  name: "",
  width: 500,
  height: 500,
  background: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Full Name. When empty, current user name or email will be used. Max length: 128 chars.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### background: `string`<a id="background-string"></a>

Changes background color. By default a random color will be picked and stay will persistent to the given name.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/initials` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createBooleanAttribute`<a id="appwriteserverdatabasescreatebooleanattribute"></a>

Create a boolean attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBooleanAttributeResponse =
  await appwriteserver.databases.createBooleanAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `boolean`<a id="default-boolean"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeBoolean](./models/attribute-boolean.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/boolean` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createCollection`<a id="appwriteserverdatabasescreatecollection"></a>

Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCollectionResponse =
  await appwriteserver.databases.createCollection({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Collection name. Max length: 128 chars.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### documentSecurity: `boolean`<a id="documentsecurity-boolean"></a>

Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is collection enabled? When set to \\\'disabled\\\', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createDatabase`<a id="appwriteserverdatabasescreatedatabase"></a>

Create a new Database.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDatabaseResponse = await appwriteserver.databases.createDatabase({
  databaseId: "databaseId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Database name. Max length: 128 chars.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is the database enabled? When set to \\\'disabled\\\', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Database](./models/database.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createDatetimeAttribute`<a id="appwriteserverdatabasescreatedatetimeattribute"></a>

Create a date time attribute according to the ISO 8601 standard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDatetimeAttributeResponse =
  await appwriteserver.databases.createDatetimeAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeDatetime](./models/attribute-datetime.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/datetime` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createDocument`<a id="appwriteserverdatabasescreatedocument"></a>

Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDocumentResponse = await appwriteserver.databases.createDocument({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  documentId: "documentId_example",
  data: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### documentId: `string`<a id="documentid-string"></a>

Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### data: `object`<a id="data-object"></a>

Document data as JSON object.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createEmailAttribute`<a id="appwriteserverdatabasescreateemailattribute"></a>

Create an email attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailAttributeResponse =
  await appwriteserver.databases.createEmailAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEmail](./models/attribute-email.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createEnumAttribute`<a id="appwriteserverdatabasescreateenumattribute"></a>

Create an enumeration attribute. The `elements` param acts as a white-list of accepted values for this attribute. 


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEnumAttributeResponse =
  await appwriteserver.databases.createEnumAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    elements: ["elements_example"],
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### elements: `string`[]<a id="elements-string"></a>

Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEnum](./models/attribute-enum.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/enum` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createFloatAttribute`<a id="appwriteserverdatabasescreatefloatattribute"></a>

Create a float attribute. Optionally, minimum and maximum values can be provided.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFloatAttributeResponse =
  await appwriteserver.databases.createFloatAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeFloat](./models/attribute-float.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/float` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createIndex`<a id="appwriteserverdatabasescreateindex"></a>

Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
Attributes can be `key`, `fulltext`, and `unique`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIndexResponse = await appwriteserver.databases.createIndex({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  key: "key_example",
  type: "key",
  attributes: ["attributes_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Index Key.

##### type: `string`<a id="type-string"></a>

Index type.

##### attributes: `string`[]<a id="attributes-string"></a>

Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### orders: `string`[]<a id="orders-string"></a>

Array of index orders. Maximum of 100 orders are allowed.

#### 🔄 Return<a id="🔄-return"></a>

[Index](./models/index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createIntegerAttribute`<a id="appwriteserverdatabasescreateintegerattribute"></a>

Create an integer attribute. Optionally, minimum and maximum values can be provided.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIntegerAttributeResponse =
  await appwriteserver.databases.createIntegerAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeInteger](./models/attribute-integer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/integer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createIpAttribute`<a id="appwriteserverdatabasescreateipattribute"></a>

Create IP address attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIpAttributeResponse =
  await appwriteserver.databases.createIpAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeIp](./models/attribute-ip.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/ip` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createRelationshipAttribute`<a id="appwriteserverdatabasescreaterelationshipattribute"></a>

Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRelationshipAttributeResponse =
  await appwriteserver.databases.createRelationshipAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    relatedCollectionId: "relatedCollectionId_example",
    type: "oneToOne",
    onDelete: "cascade",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### relatedCollectionId: `string`<a id="relatedcollectionid-string"></a>

Related Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### type: `string`<a id="type-string"></a>

Relation type

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### twoWay: `boolean`<a id="twoway-boolean"></a>

Is Two Way?

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### twoWayKey: `string`<a id="twowaykey-string"></a>

Two Way Attribute Key.

##### onDelete: `string`<a id="ondelete-string"></a>

Constraints option

#### 🔄 Return<a id="🔄-return"></a>

[AttributeRelationship](./models/attribute-relationship.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/relationship` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createStringAttribute`<a id="appwriteserverdatabasescreatestringattribute"></a>

Create a string attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createStringAttributeResponse =
  await appwriteserver.databases.createStringAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    size: 1,
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### size: `number`<a id="size-number"></a>

Attribute size for text attributes, in number of characters.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

##### encrypt: `boolean`<a id="encrypt-boolean"></a>

Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeString](./models/attribute-string.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/string` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.createUrlAttribute`<a id="appwriteserverdatabasescreateurlattribute"></a>

Create a URL attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUrlAttributeResponse =
  await appwriteserver.databases.createUrlAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeUrl](./models/attribute-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.deleteAttributeById`<a id="appwriteserverdatabasesdeleteattributebyid"></a>

Deletes an attribute.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAttributeByIdResponse =
  await appwriteserver.databases.deleteAttributeById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/{key}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.deleteById`<a id="appwriteserverdatabasesdeletebyid"></a>

Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await appwriteserver.databases.deleteById({
  databaseId: "databaseId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.deleteCollectionById`<a id="appwriteserverdatabasesdeletecollectionbyid"></a>

Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCollectionByIdResponse =
  await appwriteserver.databases.deleteCollectionById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.deleteDocumentById`<a id="appwriteserverdatabasesdeletedocumentbyid"></a>

Delete a document by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDocumentByIdResponse =
  await appwriteserver.databases.deleteDocumentById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.deleteIndex`<a id="appwriteserverdatabasesdeleteindex"></a>

Delete an index.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteIndexResponse = await appwriteserver.databases.deleteIndex({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  key: "key_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Index Key.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes/{key}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.getAttributeById`<a id="appwriteserverdatabasesgetattributebyid"></a>

Get attribute by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAttributeByIdResponse =
  await appwriteserver.databases.getAttributeById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[DatabasesGetAttributeByIdResponse](./models/databases-get-attribute-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/{key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.getById`<a id="appwriteserverdatabasesgetbyid"></a>

Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteserver.databases.getById({
  databaseId: "databaseId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

#### 🔄 Return<a id="🔄-return"></a>

[Database](./models/database.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.getCollectionById`<a id="appwriteserverdatabasesgetcollectionbyid"></a>

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionByIdResponse =
  await appwriteserver.databases.getCollectionById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.getDocumentById`<a id="appwriteserverdatabasesgetdocumentbyid"></a>

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDocumentByIdResponse = await appwriteserver.databases.getDocumentById({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  documentId: "documentId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.getIndexById`<a id="appwriteserverdatabasesgetindexbyid"></a>

Get index by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIndexByIdResponse = await appwriteserver.databases.getIndexById({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  key: "key_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Index Key.

#### 🔄 Return<a id="🔄-return"></a>

[Index](./models/index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes/{key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.listAll`<a id="appwriteserverdatabaseslistall"></a>

Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await appwriteserver.databases.listAll({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[DatabaseList](./models/database-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.listCollectionAttributes`<a id="appwriteserverdatabaseslistcollectionattributes"></a>

List attributes in the collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionAttributesResponse =
  await appwriteserver.databases.listCollectionAttributes({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error

#### 🔄 Return<a id="🔄-return"></a>

[AttributeList](./models/attribute-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.listCollectionDocuments`<a id="appwriteserverdatabaseslistcollectiondocuments"></a>

Get a list of all the user's documents in a given collection. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionDocumentsResponse =
  await appwriteserver.databases.listCollectionDocuments({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[DocumentList](./models/document-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.listCollections`<a id="appwriteserverdatabaseslistcollections"></a>

Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionsResponse = await appwriteserver.databases.listCollections({
  databaseId: "databaseId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[CollectionList](./models/collection-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.listIndexes`<a id="appwriteserverdatabaseslistindexes"></a>

List indexes in the collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listIndexesResponse = await appwriteserver.databases.listIndexes({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error

#### 🔄 Return<a id="🔄-return"></a>

[IndexList](./models/index-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateBooleanAttribute`<a id="appwriteserverdatabasesupdatebooleanattribute"></a>

Update a boolean attribute. Changing the `default` value will not update already existing documents.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBooleanAttributeResponse =
  await appwriteserver.databases.updateBooleanAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `boolean`<a id="default-boolean"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeBoolean](./models/attribute-boolean.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateById`<a id="appwriteserverdatabasesupdatebyid"></a>

Update a database by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await appwriteserver.databases.updateById({
  databaseId: "databaseId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Database name. Max length: 128 chars.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is database enabled? When set to \\\'disabled\\\', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Database](./models/database.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateCollectionById`<a id="appwriteserverdatabasesupdatecollectionbyid"></a>

Update a collection by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCollectionByIdResponse =
  await appwriteserver.databases.updateCollectionById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Collection name. Max length: 128 chars.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### documentSecurity: `boolean`<a id="documentsecurity-boolean"></a>

Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is collection enabled? When set to \\\'disabled\\\', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateDatetimeAttribute`<a id="appwriteserverdatabasesupdatedatetimeattribute"></a>

Update a date time attribute. Changing the `default` value will not update already existing documents.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDatetimeAttributeResponse =
  await appwriteserver.databases.updateDatetimeAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeDatetime](./models/attribute-datetime.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateDocumentById`<a id="appwriteserverdatabasesupdatedocumentbyid"></a>

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDocumentByIdResponse =
  await appwriteserver.databases.updateDocumentById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

##### data: `object`<a id="data-object"></a>

Document data as JSON object. Include only attribute and value pairs to be updated.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateEmailAttribute`<a id="appwriteserverdatabasesupdateemailattribute"></a>

Update an email attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailAttributeResponse =
  await appwriteserver.databases.updateEmailAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEmail](./models/attribute-email.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateEnumAttribute`<a id="appwriteserverdatabasesupdateenumattribute"></a>

Update an enum attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEnumAttributeResponse =
  await appwriteserver.databases.updateEnumAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    elements: ["elements_example"],
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### elements: `string`[]<a id="elements-string"></a>

Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEnum](./models/attribute-enum.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateFloatAttribute`<a id="appwriteserverdatabasesupdatefloatattribute"></a>

Update a float attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFloatAttributeResponse =
  await appwriteserver.databases.updateFloatAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    min: 3.14,
    max: 3.14,
    _default: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeFloat](./models/attribute-float.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateIntegerAttribute`<a id="appwriteserverdatabasesupdateintegerattribute"></a>

Update an integer attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIntegerAttributeResponse =
  await appwriteserver.databases.updateIntegerAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    min: 1,
    max: 1,
    _default: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeInteger](./models/attribute-integer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateIpAttribute`<a id="appwriteserverdatabasesupdateipattribute"></a>

Update an ip attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIpAttributeResponse =
  await appwriteserver.databases.updateIpAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeIp](./models/attribute-ip.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateRelationshipAttribute`<a id="appwriteserverdatabasesupdaterelationshipattribute"></a>

Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRelationshipAttributeResponse =
  await appwriteserver.databases.updateRelationshipAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    onDelete: "cascade",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### onDelete: `string`<a id="ondelete-string"></a>

Constraints option

#### 🔄 Return<a id="🔄-return"></a>

[AttributeRelationship](./models/attribute-relationship.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateStringAttribute`<a id="appwriteserverdatabasesupdatestringattribute"></a>

Update a string attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStringAttributeResponse =
  await appwriteserver.databases.updateStringAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeString](./models/attribute-string.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.databases.updateUrlAttribute`<a id="appwriteserverdatabasesupdateurlattribute"></a>

Update an url attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUrlAttributeResponse =
  await appwriteserver.databases.updateUrlAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeUrl](./models/attribute-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.createBuild`<a id="appwriteserverfunctionscreatebuild"></a>

Create a new build for an Appwrite Function deployment. This endpoint can be used to retry a failed build.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBuildResponse = await appwriteserver.functions.createBuild({
  functionId: "functionId_example",
  deploymentId: "deploymentId_example",
  buildId: "buildId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

##### buildId: `string`<a id="buildid-string"></a>

Build unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.createDeploymentFunctionCode`<a id="appwriteserverfunctionscreatedeploymentfunctioncode"></a>

Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).

Use the "command" param to set the entrypoint used to execute your code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDeploymentFunctionCodeResponse =
  await appwriteserver.functions.createDeploymentFunctionCode({
    functionId: "functionId_example",
    code: "code_example",
    activate: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### code: `string`<a id="code-string"></a>

Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.

##### activate: `boolean`<a id="activate-boolean"></a>

Automatically activate the deployment when it is finished building.

##### entrypoint: `string`<a id="entrypoint-string"></a>

Entrypoint File.

##### commands: `string`<a id="commands-string"></a>

Build Commands.

#### 🔄 Return<a id="🔄-return"></a>

[Deployment](./models/deployment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.createNewFunction`<a id="appwriteserverfunctionscreatenewfunction"></a>

Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewFunctionResponse =
  await appwriteserver.functions.createNewFunction({
    functionId: "functionId_example",
    name: "name_example",
    runtime: "node-14.5",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Function name. Max length: 128 chars.

##### runtime: `string`<a id="runtime-string"></a>

Execution runtime.

##### execute: `string`[]<a id="execute-string"></a>

An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

##### events: `string`[]<a id="events-string"></a>

Events list. Maximum of 100 events are allowed.

##### schedule: `string`<a id="schedule-string"></a>

Schedule CRON syntax.

##### timeout: `number`<a id="timeout-number"></a>

Function maximum execution time in seconds.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is function enabled? When set to \\\'disabled\\\', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.

##### logging: `boolean`<a id="logging-boolean"></a>

Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project.

##### entrypoint: `string`<a id="entrypoint-string"></a>

Entrypoint File. This path is relative to the \\\"providerRootDirectory\\\".

##### commands: `string`<a id="commands-string"></a>

Build Commands.

##### installationId: `string`<a id="installationid-string"></a>

Appwrite Installation ID for VCS (Version Control System) deployment.

##### providerRepositoryId: `string`<a id="providerrepositoryid-string"></a>

Repository ID of the repo linked to the function.

##### providerBranch: `string`<a id="providerbranch-string"></a>

Production branch for the repo linked to the function.

##### providerSilentMode: `boolean`<a id="providersilentmode-boolean"></a>

Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.

##### providerRootDirectory: `string`<a id="providerrootdirectory-string"></a>

Path to function code in the linked repo.

##### templateRepository: `string`<a id="templaterepository-string"></a>

Repository name of the template.

##### templateOwner: `string`<a id="templateowner-string"></a>

The name of the owner of the template.

##### templateRootDirectory: `string`<a id="templaterootdirectory-string"></a>

Path to function code in the template repo.

##### templateBranch: `string`<a id="templatebranch-string"></a>

Production branch for the repo linked to the function template.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.createVariable`<a id="appwriteserverfunctionscreatevariable"></a>

Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVariableResponse = await appwriteserver.functions.createVariable({
  functionId: "functionId_example",
  key: "key_example",
  value: "value_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Variable key. Max length: 255 chars.

##### value: `string`<a id="value-string"></a>

Variable value. Max length: 8192 chars.

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.deleteById`<a id="appwriteserverfunctionsdeletebyid"></a>

Delete a function by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await appwriteserver.functions.deleteById({
  functionId: "functionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.deleteDeployment`<a id="appwriteserverfunctionsdeletedeployment"></a>

Delete a code deployment by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDeploymentResponse =
  await appwriteserver.functions.deleteDeployment({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.deleteVariableById`<a id="appwriteserverfunctionsdeletevariablebyid"></a>

Delete a variable by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteVariableByIdResponse =
  await appwriteserver.functions.deleteVariableById({
    functionId: "functionId_example",
    variableId: "variableId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables/{variableId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.getById`<a id="appwriteserverfunctionsgetbyid"></a>

Get a function by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteserver.functions.getById({
  functionId: "functionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.getDeploymentById`<a id="appwriteserverfunctionsgetdeploymentbyid"></a>

Get a code deployment by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeploymentByIdResponse =
  await appwriteserver.functions.getDeploymentById({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🔄 Return<a id="🔄-return"></a>

[Deployment](./models/deployment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.getDeploymentContents`<a id="appwriteserverfunctionsgetdeploymentcontents"></a>

Get a Deployment's contents by its unique ID. This endpoint supports range requests for partial or streaming file download.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeploymentContentsResponse =
  await appwriteserver.functions.getDeploymentContents({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.getExecutionLog`<a id="appwriteserverfunctionsgetexecutionlog"></a>

Get a function execution log by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExecutionLogResponse = await appwriteserver.functions.getExecutionLog({
  functionId: "functionId_example",
  executionId: "executionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### executionId: `string`<a id="executionid-string"></a>

Execution ID.

#### 🔄 Return<a id="🔄-return"></a>

[Execution](./models/execution.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions/{executionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.getVariableById`<a id="appwriteserverfunctionsgetvariablebyid"></a>

Get a variable by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVariableByIdResponse = await appwriteserver.functions.getVariableById({
  functionId: "functionId_example",
  variableId: "variableId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables/{variableId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.listAllFunctions`<a id="appwriteserverfunctionslistallfunctions"></a>

Get a list of all the project's functions. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllFunctionsResponse =
  await appwriteserver.functions.listAllFunctions({
    queries: [],
    search: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deployment, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[FunctionList](./models/function-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.listDeployments`<a id="appwriteserverfunctionslistdeployments"></a>

Get a list of all the project's code deployments. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDeploymentsResponse = await appwriteserver.functions.listDeployments({
  functionId: "functionId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: size, buildId, activate, entrypoint, commands

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[DeploymentList](./models/deployment-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.listExecutions`<a id="appwriteserverfunctionslistexecutions"></a>

Get a list of all the current user function execution logs. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listExecutionsResponse = await appwriteserver.functions.listExecutions({
  functionId: "functionId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ExecutionList](./models/execution-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.listRuntimes`<a id="appwriteserverfunctionslistruntimes"></a>

Get a list of all runtimes that are currently active on your instance.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRuntimesResponse = await appwriteserver.functions.listRuntimes();
```

#### 🔄 Return<a id="🔄-return"></a>

[RuntimeList](./models/runtime-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/runtimes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.listVariables`<a id="appwriteserverfunctionslistvariables"></a>

Get a list of all variables of a specific function.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVariablesResponse = await appwriteserver.functions.listVariables({
  functionId: "functionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[VariableList](./models/variable-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.triggerExecution`<a id="appwriteserverfunctionstriggerexecution"></a>

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerExecutionResponse =
  await appwriteserver.functions.triggerExecution({
    functionId: "functionId_example",
    method: "GET",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### body: `string`<a id="body-string"></a>

HTTP body of execution. Default value is empty string.

##### async: `boolean`<a id="async-boolean"></a>

Execute code in the background. Default value is false.

##### path: `string`<a id="path-string"></a>

HTTP path of execution. Path can include query params. Default value is /

##### method: `string`<a id="method-string"></a>

HTTP method of execution. Default value is GET.

##### headers: `object`<a id="headers-object"></a>

HTTP headers of execution. Defaults to empty.

#### 🔄 Return<a id="🔄-return"></a>

[Execution](./models/execution.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.updateById`<a id="appwriteserverfunctionsupdatebyid"></a>

Update function by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await appwriteserver.functions.updateById({
  functionId: "functionId_example",
  name: "name_example",
  runtime: "node-14.5",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Function name. Max length: 128 chars.

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### runtime: `string`<a id="runtime-string"></a>

Execution runtime.

##### execute: `string`[]<a id="execute-string"></a>

An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

##### events: `string`[]<a id="events-string"></a>

Events list. Maximum of 100 events are allowed.

##### schedule: `string`<a id="schedule-string"></a>

Schedule CRON syntax.

##### timeout: `number`<a id="timeout-number"></a>

Maximum execution time in seconds.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is function enabled? When set to \\\'disabled\\\', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.

##### logging: `boolean`<a id="logging-boolean"></a>

Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project.

##### entrypoint: `string`<a id="entrypoint-string"></a>

Entrypoint File. This path is relative to the \\\"providerRootDirectory\\\".

##### commands: `string`<a id="commands-string"></a>

Build Commands.

##### installationId: `string`<a id="installationid-string"></a>

Appwrite Installation ID for VCS (Version Controle System) deployment.

##### providerRepositoryId: `string`<a id="providerrepositoryid-string"></a>

Repository ID of the repo linked to the function

##### providerBranch: `string`<a id="providerbranch-string"></a>

Production branch for the repo linked to the function

##### providerSilentMode: `boolean`<a id="providersilentmode-boolean"></a>

Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.

##### providerRootDirectory: `string`<a id="providerrootdirectory-string"></a>

Path to function code in the linked repo.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.updateDeploymentFunctionCode`<a id="appwriteserverfunctionsupdatedeploymentfunctioncode"></a>

Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDeploymentFunctionCodeResponse =
  await appwriteserver.functions.updateDeploymentFunctionCode({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.functions.updateVariableById`<a id="appwriteserverfunctionsupdatevariablebyid"></a>

Update variable by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateVariableByIdResponse =
  await appwriteserver.functions.updateVariableById({
    functionId: "functionId_example",
    variableId: "variableId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Variable key. Max length: 255 chars.

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

##### value: `string`<a id="value-string"></a>

Variable value. Max length: 8192 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables/{variableId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.graphql.executeMutation`<a id="appwriteservergraphqlexecutemutation"></a>

Execute a GraphQL mutation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeMutationResponse = await appwriteserver.graphql.executeMutation();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/graphql` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.graphql.executeMutation_0`<a id="appwriteservergraphqlexecutemutation_0"></a>

Execute a GraphQL mutation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeMutation_0Response =
  await appwriteserver.graphql.executeMutation_0();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/graphql/mutation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.checkAntivirusStatus`<a id="appwriteserverhealthcheckantivirusstatus"></a>

Check the Appwrite Antivirus server is up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkAntivirusStatusResponse =
  await appwriteserver.health.checkAntivirusStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthAntivirus](./models/health-antivirus.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/anti-virus` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.checkCacheStatus`<a id="appwriteserverhealthcheckcachestatus"></a>

Check the Appwrite in-memory cache servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkCacheStatusResponse = await appwriteserver.health.checkCacheStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/cache` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.checkDbStatus`<a id="appwriteserverhealthcheckdbstatus"></a>

Check the Appwrite database servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkDbStatusResponse = await appwriteserver.health.checkDbStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/db` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.checkLocalStorageStatus`<a id="appwriteserverhealthchecklocalstoragestatus"></a>

Check the Appwrite local storage device is up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkLocalStorageStatusResponse =
  await appwriteserver.health.checkLocalStorageStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/storage/local` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.checkPubsubServerStatus`<a id="appwriteserverhealthcheckpubsubserverstatus"></a>

Check the Appwrite pub-sub servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkPubsubServerStatusResponse =
  await appwriteserver.health.checkPubsubServerStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/pubsub` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.checkServerStatus`<a id="appwriteserverhealthcheckserverstatus"></a>

Check the Appwrite HTTP server is up and responsive.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkServerStatusResponse =
  await appwriteserver.health.checkServerStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.checkStorageStatus`<a id="appwriteserverhealthcheckstoragestatus"></a>

Check the Appwrite storage device is up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStorageStatusResponse =
  await appwriteserver.health.checkStorageStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/storage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.functionsQueueCount`<a id="appwriteserverhealthfunctionsqueuecount"></a>

Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const functionsQueueCountResponse =
  await appwriteserver.health.functionsQueueCount({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/functions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getBuildsQueue`<a id="appwriteserverhealthgetbuildsqueue"></a>

Get the number of builds that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBuildsQueueResponse = await appwriteserver.health.getBuildsQueue({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/builds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getDatabasesQueue`<a id="appwriteserverhealthgetdatabasesqueue"></a>

Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDatabasesQueueResponse = await appwriteserver.health.getDatabasesQueue(
  {
    name: "database_db_main",
    threshold: 5000,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Queue name for which to check the queue size

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/databases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getDeletesQueue`<a id="appwriteserverhealthgetdeletesqueue"></a>

Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeletesQueueResponse = await appwriteserver.health.getDeletesQueue({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/deletes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getFailedJobs`<a id="appwriteserverhealthgetfailedjobs"></a>

Returns the amount of failed jobs in a given queue.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFailedJobsResponse = await appwriteserver.health.getFailedJobs({
  name: "v1-database",
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `'v1-database' | 'v1-deletes' | 'v1-audits' | 'v1-mails' | 'v1-functions' | 'v1-usage' | 'v1-usage-dump' | 'webhooksv1' | 'v1-certificates' | 'v1-builds' | 'v1-messaging' | 'v1-migrations' | 'hamsterv1'`<a id="name-v1-database--v1-deletes--v1-audits--v1-mails--v1-functions--v1-usage--v1-usage-dump--webhooksv1--v1-certificates--v1-builds--v1-messaging--v1-migrations--hamsterv1"></a>

The name of the queue

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/failed/{name}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getMailQueueSize`<a id="appwriteserverhealthgetmailqueuesize"></a>

Get the number of mails that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMailQueueSizeResponse = await appwriteserver.health.getMailQueueSize({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/mails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getMigrationsQueue`<a id="appwriteserverhealthgetmigrationsqueue"></a>

Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMigrationsQueueResponse =
  await appwriteserver.health.getMigrationsQueue({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/migrations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getQueueLogs`<a id="appwriteserverhealthgetqueuelogs"></a>

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueLogsResponse = await appwriteserver.health.getQueueLogs({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getQueueMessaging`<a id="appwriteserverhealthgetqueuemessaging"></a>

Get the number of messages that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueMessagingResponse = await appwriteserver.health.getQueueMessaging(
  {
    threshold: 5000,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/messaging` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getQueueStatus`<a id="appwriteserverhealthgetqueuestatus"></a>

Check the Appwrite queue messaging servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueStatusResponse = await appwriteserver.health.getQueueStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getQueueUsage`<a id="appwriteserverhealthgetqueueusage"></a>

Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueUsageResponse = await appwriteserver.health.getQueueUsage({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getQueueUsageDump`<a id="appwriteserverhealthgetqueueusagedump"></a>

Get the number of projects containing metrics that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueUsageDumpResponse = await appwriteserver.health.getQueueUsageDump(
  {
    threshold: 5000,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/usage-dump` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getSslCert`<a id="appwriteserverhealthgetsslcert"></a>

Get the SSL certificate for a domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSslCertResponse = await appwriteserver.health.getSslCert({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

string

#### 🔄 Return<a id="🔄-return"></a>

[HealthCertificate](./models/health-certificate.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/certificate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getTimeInformation`<a id="appwriteserverhealthgettimeinformation"></a>

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeInformationResponse =
  await appwriteserver.health.getTimeInformation();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthTime](./models/health-time.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/time` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.getWebhooksQueue`<a id="appwriteserverhealthgetwebhooksqueue"></a>

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhooksQueueResponse = await appwriteserver.health.getWebhooksQueue({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.health.queueCertificatesGet`<a id="appwriteserverhealthqueuecertificatesget"></a>

Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queueCertificatesGetResponse =
  await appwriteserver.health.queueCertificatesGet({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/certificates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.getLanguageList`<a id="appwriteserverlocalegetlanguagelist"></a>

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLanguageListResponse = await appwriteserver.locale.getLanguageList();
```

#### 🔄 Return<a id="🔄-return"></a>

[LanguageList](./models/language-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/languages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.getUserLocaleData`<a id="appwriteserverlocalegetuserlocaledata"></a>

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com))

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserLocaleDataResponse =
  await appwriteserver.locale.getUserLocaleData();
```

#### 🔄 Return<a id="🔄-return"></a>

[Locale](./models/locale.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.listCodes`<a id="appwriteserverlocalelistcodes"></a>

List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCodesResponse = await appwriteserver.locale.listCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[LocaleCodeList](./models/locale-code-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.listContinents`<a id="appwriteserverlocalelistcontinents"></a>

List of all continents. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listContinentsResponse = await appwriteserver.locale.listContinents();
```

#### 🔄 Return<a id="🔄-return"></a>

[ContinentList](./models/continent-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/continents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.listCountries`<a id="appwriteserverlocalelistcountries"></a>

List of all countries. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCountriesResponse = await appwriteserver.locale.listCountries();
```

#### 🔄 Return<a id="🔄-return"></a>

[CountryList](./models/country-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.listCurrenciesData`<a id="appwriteserverlocalelistcurrenciesdata"></a>

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCurrenciesDataResponse =
  await appwriteserver.locale.listCurrenciesData();
```

#### 🔄 Return<a id="🔄-return"></a>

[CurrencyList](./models/currency-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/currencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.listEuCountries`<a id="appwriteserverlocalelisteucountries"></a>

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEuCountriesResponse = await appwriteserver.locale.listEuCountries();
```

#### 🔄 Return<a id="🔄-return"></a>

[CountryList](./models/country-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries/eu` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.locale.listPhoneCodes`<a id="appwriteserverlocalelistphonecodes"></a>

List of all countries phone codes. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPhoneCodesResponse = await appwriteserver.locale.listPhoneCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[PhoneList](./models/phone-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries/phones` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createApnsProvider`<a id="appwriteservermessagingcreateapnsprovider"></a>

Create a new Apple Push Notification service provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createApnsProviderResponse =
  await appwriteserver.messaging.createApnsProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### authKey: `string`<a id="authkey-string"></a>

APNS authentication key.

##### authKeyId: `string`<a id="authkeyid-string"></a>

APNS authentication key ID.

##### teamId: `string`<a id="teamid-string"></a>

APNS team ID.

##### bundleId: `string`<a id="bundleid-string"></a>

APNS bundle ID.

##### sandbox: `boolean`<a id="sandbox-boolean"></a>

Use APNS sandbox environment.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/apns` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createEmailMessage`<a id="appwriteservermessagingcreateemailmessage"></a>

Create a new email message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailMessageResponse =
  await appwriteserver.messaging.createEmailMessage({
    messageId: "messageId_example",
    subject: "subject_example",
    content: "content_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### subject: `string`<a id="subject-string"></a>

Email Subject.

##### content: `string`<a id="content-string"></a>

Email Content.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### cc: `string`[]<a id="cc-string"></a>

Array of target IDs to be added as CC.

##### bcc: `string`[]<a id="bcc-string"></a>

Array of target IDs to be added as BCC.

##### attachments: `string`[]<a id="attachments-string"></a>

Array of compound bucket IDs to file IDs to be attached to the email.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### html: `boolean`<a id="html-boolean"></a>

Is content of type HTML

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createFcmProvider`<a id="appwriteservermessagingcreatefcmprovider"></a>

Create a new Firebase Cloud Messaging provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFcmProviderResponse =
  await appwriteserver.messaging.createFcmProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### serviceAccountJSON: `object`<a id="serviceaccountjson-object"></a>

FCM service account JSON.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/fcm` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createMsg91Provider`<a id="appwriteservermessagingcreatemsg91provider"></a>

Create a new MSG91 provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMsg91ProviderResponse =
  await appwriteserver.messaging.createMsg91Provider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### senderId: `string`<a id="senderid-string"></a>

Msg91 Sender ID.

##### authKey: `string`<a id="authkey-string"></a>

Msg91 Auth Key.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/msg91` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createProvider`<a id="appwriteservermessagingcreateprovider"></a>

Create a new Mailgun provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createProviderResponse = await appwriteserver.messaging.createProvider({
  providerId: "providerId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### apiKey: `string`<a id="apikey-string"></a>

Mailgun API Key.

##### domain: `string`<a id="domain-string"></a>

Mailgun Domain.

##### isEuRegion: `boolean`<a id="iseuregion-boolean"></a>

Set as EU region.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/mailgun` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createPushNotification`<a id="appwriteservermessagingcreatepushnotification"></a>

Create a new push notification.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPushNotificationResponse =
  await appwriteserver.messaging.createPushNotification({
    title: "title_example",
    messageId: "messageId_example",
    body: "body_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title for push notification.

##### messageId: `string`<a id="messageid-string"></a>

Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### body: `string`<a id="body-string"></a>

Body for push notification.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### data: `object`<a id="data-object"></a>

Additional Data for push notification.

##### action: `string`<a id="action-string"></a>

Action for push notification.

##### image: `string`<a id="image-string"></a>

Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage.

##### icon: `string`<a id="icon-string"></a>

Icon for push notification. Available only for Android and Web Platform.

##### sound: `string`<a id="sound-string"></a>

Sound for push notification. Available only for Android and IOS Platform.

##### color: `string`<a id="color-string"></a>

Color for push notification. Available only for Android Platform.

##### tag: `string`<a id="tag-string"></a>

Tag for push notification. Available only for Android Platform.

##### badge: `string`<a id="badge-string"></a>

Badge for push notification. Available only for IOS Platform.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/push` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createSendgridProvider`<a id="appwriteservermessagingcreatesendgridprovider"></a>

Create a new Sendgrid provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSendgridProviderResponse =
  await appwriteserver.messaging.createSendgridProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### apiKey: `string`<a id="apikey-string"></a>

Sendgrid API key.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/sendgrid` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createSmsMessage`<a id="appwriteservermessagingcreatesmsmessage"></a>

Create a new SMS message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSmsMessageResponse =
  await appwriteserver.messaging.createSmsMessage({
    messageId: "messageId_example",
    content: "content_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### content: `string`<a id="content-string"></a>

SMS Content.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/sms` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createSmtpProvider`<a id="appwriteservermessagingcreatesmtpprovider"></a>

Create a new SMTP provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSmtpProviderResponse =
  await appwriteserver.messaging.createSmtpProvider({
    providerId: "providerId_example",
    name: "name_example",
    host: "host_example",
    encryption: "none",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### host: `string`<a id="host-string"></a>

SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465\\\"`. Hosts will be tried in order.

##### port: `number`<a id="port-number"></a>

The default SMTP server port.

##### username: `string`<a id="username-string"></a>

Authentication username.

##### password: `string`<a id="password-string"></a>

Authentication password.

##### encryption: `string`<a id="encryption-string"></a>

Encryption type. Can be omitted, \\\'ssl\\\', or \\\'tls\\\'

##### autoTLS: `boolean`<a id="autotls-boolean"></a>

Enable SMTP AutoTLS feature.

##### mailer: `string`<a id="mailer-string"></a>

The value to use for the X-Mailer header.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/smtp` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createSubscriber`<a id="appwriteservermessagingcreatesubscriber"></a>

Create a new subscriber.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSubscriberResponse =
  await appwriteserver.messaging.createSubscriber({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
    targetId: "targetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID. The target ID to link to the specified Topic ID.

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID to subscribe to.

#### 🔄 Return<a id="🔄-return"></a>

[Subscriber](./models/subscriber.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createTelesignProvider`<a id="appwriteservermessagingcreatetelesignprovider"></a>

Create a new Telesign provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTelesignProviderResponse =
  await appwriteserver.messaging.createTelesignProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### customerId: `string`<a id="customerid-string"></a>

Telesign customer ID.

##### apiKey: `string`<a id="apikey-string"></a>

Telesign API key.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/telesign` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createTextmagicProvider`<a id="appwriteservermessagingcreatetextmagicprovider"></a>

Create a new Textmagic provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTextmagicProviderResponse =
  await appwriteserver.messaging.createTextmagicProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### username: `string`<a id="username-string"></a>

Textmagic username.

##### apiKey: `string`<a id="apikey-string"></a>

Textmagic apiKey.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/textmagic` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createTopic`<a id="appwriteservermessagingcreatetopic"></a>

Create a new topic.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTopicResponse = await appwriteserver.messaging.createTopic({
  topicId: "topicId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. Choose a custom Topic ID or a new Topic ID.

##### name: `string`<a id="name-string"></a>

Topic Name.

##### subscribe: `string`[]<a id="subscribe-string"></a>

An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Topic](./models/topic.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createTwilioProvider`<a id="appwriteservermessagingcreatetwilioprovider"></a>

Create a new Twilio provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTwilioProviderResponse =
  await appwriteserver.messaging.createTwilioProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### accountSid: `string`<a id="accountsid-string"></a>

Twilio account secret ID.

##### authToken: `string`<a id="authtoken-string"></a>

Twilio authentication token.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/twilio` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.createVonageProvider`<a id="appwriteservermessagingcreatevonageprovider"></a>

Create a new Vonage provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVonageProviderResponse =
  await appwriteserver.messaging.createVonageProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### apiKey: `string`<a id="apikey-string"></a>

Vonage API key.

##### apiSecret: `string`<a id="apisecret-string"></a>

Vonage API secret.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/vonage` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.deleteMessageById`<a id="appwriteservermessagingdeletemessagebyid"></a>

Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMessageByIdResponse =
  await appwriteserver.messaging.deleteMessageById({
    messageId: "messageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.deleteProviderById`<a id="appwriteservermessagingdeleteproviderbyid"></a>

Delete a provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProviderByIdResponse =
  await appwriteserver.messaging.deleteProviderById({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/{providerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.deleteSubscriberById`<a id="appwriteservermessagingdeletesubscriberbyid"></a>

Delete a subscriber by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSubscriberByIdResponse =
  await appwriteserver.messaging.deleteSubscriberById({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID subscribed to.

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers/{subscriberId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.deleteTopicById`<a id="appwriteservermessagingdeletetopicbyid"></a>

Delete a topic by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTopicByIdResponse = await appwriteserver.messaging.deleteTopicById({
  topicId: "topicId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.getMessageById`<a id="appwriteservermessaginggetmessagebyid"></a>

Get a message by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageByIdResponse = await appwriteserver.messaging.getMessageById({
  messageId: "messageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.getMessageLogs`<a id="appwriteservermessaginggetmessagelogs"></a>

Get the message activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageLogsResponse = await appwriteserver.messaging.getMessageLogs({
  messageId: "messageId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.getProviderById`<a id="appwriteservermessaginggetproviderbyid"></a>

Get a provider by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProviderByIdResponse = await appwriteserver.messaging.getProviderById({
  providerId: "providerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/{providerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.getSubscriberById`<a id="appwriteservermessaginggetsubscriberbyid"></a>

Get a subscriber by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubscriberByIdResponse =
  await appwriteserver.messaging.getSubscriberById({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID subscribed to.

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID.

#### 🔄 Return<a id="🔄-return"></a>

[Subscriber](./models/subscriber.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers/{subscriberId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.getTopicById`<a id="appwriteservermessaginggettopicbyid"></a>

Get a topic by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopicByIdResponse = await appwriteserver.messaging.getTopicById({
  topicId: "topicId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

#### 🔄 Return<a id="🔄-return"></a>

[Topic](./models/topic.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listMessageTargets`<a id="appwriteservermessaginglistmessagetargets"></a>

Get a list of the targets associated with a message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMessageTargetsResponse =
  await appwriteserver.messaging.listMessageTargets({
    messageId: "messageId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType

#### 🔄 Return<a id="🔄-return"></a>

[TargetList](./models/target-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}/targets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listMessages`<a id="appwriteservermessaginglistmessages"></a>

Get a list of all messages from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMessagesResponse = await appwriteserver.messaging.listMessages({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[MessageList](./models/message-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listProviderLogs`<a id="appwriteservermessaginglistproviderlogs"></a>

Get the provider activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProviderLogsResponse =
  await appwriteserver.messaging.listProviderLogs({
    providerId: "providerId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/{providerId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listProviders`<a id="appwriteservermessaginglistproviders"></a>

Get a list of all providers from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProvidersResponse = await appwriteserver.messaging.listProviders({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ProviderList](./models/provider-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listSubscriberLogs`<a id="appwriteservermessaginglistsubscriberlogs"></a>

Get the subscriber activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSubscriberLogsResponse =
  await appwriteserver.messaging.listSubscriberLogs({
    subscriberId: "subscriberId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/subscribers/{subscriberId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listSubscribers`<a id="appwriteservermessaginglistsubscribers"></a>

Get a list of all subscribers from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSubscribersResponse = await appwriteserver.messaging.listSubscribers({
  topicId: "topicId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID subscribed to.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[SubscriberList](./models/subscriber-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listTopicLogs`<a id="appwriteservermessaginglisttopiclogs"></a>

Get the topic activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTopicLogsResponse = await appwriteserver.messaging.listTopicLogs({
  topicId: "topicId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.listTopics`<a id="appwriteservermessaginglisttopics"></a>

Get a list of all topics from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTopicsResponse = await appwriteserver.messaging.listTopics({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[TopicList](./models/topic-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateApnsProvider`<a id="appwriteservermessagingupdateapnsprovider"></a>

Update a Apple Push Notification service provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateApnsProviderResponse =
  await appwriteserver.messaging.updateApnsProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### authKey: `string`<a id="authkey-string"></a>

APNS authentication key.

##### authKeyId: `string`<a id="authkeyid-string"></a>

APNS authentication key ID.

##### teamId: `string`<a id="teamid-string"></a>

APNS team ID.

##### bundleId: `string`<a id="bundleid-string"></a>

APNS bundle ID.

##### sandbox: `boolean`<a id="sandbox-boolean"></a>

Use APNS sandbox environment.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/apns/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateEmailById`<a id="appwriteservermessagingupdateemailbyid"></a>

Update an email message by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailByIdResponse = await appwriteserver.messaging.updateEmailById({
  messageId: "messageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### subject: `string`<a id="subject-string"></a>

Email Subject.

##### content: `string`<a id="content-string"></a>

Email Content.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### html: `boolean`<a id="html-boolean"></a>

Is content of type HTML

##### cc: `string`[]<a id="cc-string"></a>

Array of target IDs to be added as CC.

##### bcc: `string`[]<a id="bcc-string"></a>

Array of target IDs to be added as BCC.

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/email/{messageId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateFcmProviderById`<a id="appwriteservermessagingupdatefcmproviderbyid"></a>

Update a Firebase Cloud Messaging provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFcmProviderByIdResponse =
  await appwriteserver.messaging.updateFcmProviderById({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### serviceAccountJSON: `object`<a id="serviceaccountjson-object"></a>

FCM service account JSON.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/fcm/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateMailgunProvider`<a id="appwriteservermessagingupdatemailgunprovider"></a>

Update a Mailgun provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMailgunProviderResponse =
  await appwriteserver.messaging.updateMailgunProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### apiKey: `string`<a id="apikey-string"></a>

Mailgun API Key.

##### domain: `string`<a id="domain-string"></a>

Mailgun Domain.

##### isEuRegion: `boolean`<a id="iseuregion-boolean"></a>

Set as EU region.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/mailgun/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateMsg91Provider`<a id="appwriteservermessagingupdatemsg91provider"></a>

Update a MSG91 provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMsg91ProviderResponse =
  await appwriteserver.messaging.updateMsg91Provider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### senderId: `string`<a id="senderid-string"></a>

Msg91 Sender ID.

##### authKey: `string`<a id="authkey-string"></a>

Msg91 Auth Key.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/msg91/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateProvider`<a id="appwriteservermessagingupdateprovider"></a>

Update a Sendgrid provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProviderResponse = await appwriteserver.messaging.updateProvider({
  providerId: "providerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### apiKey: `string`<a id="apikey-string"></a>

Sendgrid API key.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the Reply To field for the mail. Default value is Sender Name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the Reply To field for the mail. Default value is Sender Email.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/sendgrid/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateProviderById`<a id="appwriteservermessagingupdateproviderbyid"></a>

Update a SMTP provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProviderByIdResponse =
  await appwriteserver.messaging.updateProviderById({
    providerId: "providerId_example",
    encryption: "none",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### host: `string`<a id="host-string"></a>

SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465\\\"`. Hosts will be tried in order.

##### port: `number`<a id="port-number"></a>

SMTP port.

##### username: `string`<a id="username-string"></a>

Authentication username.

##### password: `string`<a id="password-string"></a>

Authentication password.

##### encryption: `string`<a id="encryption-string"></a>

Encryption type. Can be \\\'ssl\\\' or \\\'tls\\\'

##### autoTLS: `boolean`<a id="autotls-boolean"></a>

Enable SMTP AutoTLS feature.

##### mailer: `string`<a id="mailer-string"></a>

The value to use for the X-Mailer header.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the Reply To field for the mail. Default value is Sender Name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the Reply To field for the mail. Default value is Sender Email.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/smtp/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updatePushNotification`<a id="appwriteservermessagingupdatepushnotification"></a>

Update a push notification by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePushNotificationResponse =
  await appwriteserver.messaging.updatePushNotification({
    messageId: "messageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### title: `string`<a id="title-string"></a>

Title for push notification.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### body: `string`<a id="body-string"></a>

Body for push notification.

##### data: `object`<a id="data-object"></a>

Additional Data for push notification.

##### action: `string`<a id="action-string"></a>

Action for push notification.

##### image: `string`<a id="image-string"></a>

Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage.

##### icon: `string`<a id="icon-string"></a>

Icon for push notification. Available only for Android and Web platforms.

##### sound: `string`<a id="sound-string"></a>

Sound for push notification. Available only for Android and iOS platforms.

##### color: `string`<a id="color-string"></a>

Color for push notification. Available only for Android platforms.

##### tag: `string`<a id="tag-string"></a>

Tag for push notification. Available only for Android platforms.

##### badge: `number`<a id="badge-number"></a>

Badge for push notification. Available only for iOS platforms.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/push/{messageId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateSmsMessage`<a id="appwriteservermessagingupdatesmsmessage"></a>

Update an email message by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSmsMessageResponse =
  await appwriteserver.messaging.updateSmsMessage({
    messageId: "messageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### content: `string`<a id="content-string"></a>

Email Content.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/sms/{messageId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateTelesignProvider`<a id="appwriteservermessagingupdatetelesignprovider"></a>

Update a Telesign provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTelesignProviderResponse =
  await appwriteserver.messaging.updateTelesignProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### customerId: `string`<a id="customerid-string"></a>

Telesign customer ID.

##### apiKey: `string`<a id="apikey-string"></a>

Telesign API key.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/telesign/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateTextmagicProvider`<a id="appwriteservermessagingupdatetextmagicprovider"></a>

Update a Textmagic provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTextmagicProviderResponse =
  await appwriteserver.messaging.updateTextmagicProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### username: `string`<a id="username-string"></a>

Textmagic username.

##### apiKey: `string`<a id="apikey-string"></a>

Textmagic apiKey.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/textmagic/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateTopicById`<a id="appwriteservermessagingupdatetopicbyid"></a>

Update a topic by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTopicByIdResponse = await appwriteserver.messaging.updateTopicById({
  topicId: "topicId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

##### name: `string`<a id="name-string"></a>

Topic Name.

##### subscribe: `string`[]<a id="subscribe-string"></a>

An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Topic](./models/topic.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateTwilioProvider`<a id="appwriteservermessagingupdatetwilioprovider"></a>

Update a Twilio provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTwilioProviderResponse =
  await appwriteserver.messaging.updateTwilioProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### accountSid: `string`<a id="accountsid-string"></a>

Twilio account secret ID.

##### authToken: `string`<a id="authtoken-string"></a>

Twilio authentication token.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/twilio/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.messaging.updateVonageProvider`<a id="appwriteservermessagingupdatevonageprovider"></a>

Update a Vonage provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateVonageProviderResponse =
  await appwriteserver.messaging.updateVonageProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### apiKey: `string`<a id="apikey-string"></a>

Vonage API key.

##### apiSecret: `string`<a id="apisecret-string"></a>

Vonage API secret.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/vonage/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.createFile`<a id="appwriteserverstoragecreatefile"></a>

Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://appwrite.io/docs/server/storage#storageCreateBucket) API or directly from your Appwrite console.

Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.

When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.

If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFileResponse = await appwriteserver.storage.createFile({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
  file: "file_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### file: `string`<a id="file-string"></a>

Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/storage#file-input).

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.createNewBucket`<a id="appwriteserverstoragecreatenewbucket"></a>

Create a new storage bucket.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewBucketResponse = await appwriteserver.storage.createNewBucket({
  bucketId: "bucketId_example",
  name: "name_example",
  compression: "none",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Bucket name

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### fileSecurity: `boolean`<a id="filesecurity-boolean"></a>

Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is bucket enabled? When set to \\\'disabled\\\', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.

##### maximumFileSize: `number`<a id="maximumfilesize-number"></a>

Maximum file size allowed in bytes. Maximum allowed value is 30MB.

##### allowedFileExtensions: `string`[]<a id="allowedfileextensions-string"></a>

Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.

##### compression: `string`<a id="compression-string"></a>

Compression algorithm choosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it\\\'s enabled

##### encryption: `boolean`<a id="encryption-boolean"></a>

Is encryption enabled? For file size above 20MB encryption is skipped even if it\\\'s enabled

##### antivirus: `boolean`<a id="antivirus-boolean"></a>

Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it\\\'s enabled

#### 🔄 Return<a id="🔄-return"></a>

[Bucket](./models/bucket.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.deleteBucketById`<a id="appwriteserverstoragedeletebucketbyid"></a>

Delete a storage bucket by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteBucketByIdResponse = await appwriteserver.storage.deleteBucketById({
  bucketId: "bucketId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Bucket unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.deleteFileById`<a id="appwriteserverstoragedeletefilebyid"></a>

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFileByIdResponse = await appwriteserver.storage.deleteFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.getBucketById`<a id="appwriteserverstoragegetbucketbyid"></a>

Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBucketByIdResponse = await appwriteserver.storage.getBucketById({
  bucketId: "bucketId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Bucket unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Bucket](./models/bucket.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.getFileById`<a id="appwriteserverstoragegetfilebyid"></a>

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileByIdResponse = await appwriteserver.storage.getFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.getFileDownload`<a id="appwriteserverstoragegetfiledownload"></a>

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileDownloadResponse = await appwriteserver.storage.getFileDownload({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.getFilePreviewImage`<a id="appwriteserverstoragegetfilepreviewimage"></a>

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilePreviewImageResponse =
  await appwriteserver.storage.getFilePreviewImage({
    bucketId: "bucketId_example",
    fileId: "fileId_example",
    width: 0,
    height: 0,
    gravity: "center",
    quality: 100,
    borderWidth: 0,
    borderColor: "",
    borderRadius: 0,
    opacity: 1,
    rotation: 0,
    background: "",
    output: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID

##### width: `number`<a id="width-number"></a>

Resize preview image width, Pass an integer between 0 to 4000.

##### height: `number`<a id="height-number"></a>

Resize preview image height, Pass an integer between 0 to 4000.

##### gravity: `'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'`<a id="gravity-center--top-left--top--top-right--left--right--bottom-left--bottom--bottom-right"></a>

Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right

##### quality: `number`<a id="quality-number"></a>

Preview image quality. Pass an integer between 0 to 100. Defaults to 100.

##### borderWidth: `number`<a id="borderwidth-number"></a>

Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.

##### borderColor: `string`<a id="bordercolor-string"></a>

Preview image border color. Use a valid HEX color, no # is needed for prefix.

##### borderRadius: `number`<a id="borderradius-number"></a>

Preview image border radius in pixels. Pass an integer between 0 to 4000.

##### opacity: `number`<a id="opacity-number"></a>

Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.

##### rotation: `number`<a id="rotation-number"></a>

Preview image rotation in degrees. Pass an integer between -360 and 360.

##### background: `string`<a id="background-string"></a>

Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.

##### output: `'jpg' | 'jpeg' | 'gif' | 'png' | 'webp'`<a id="output-jpg--jpeg--gif--png--webp"></a>

Output format type (jpeg, jpg, png, gif and webp).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/preview` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.getFileView`<a id="appwriteserverstoragegetfileview"></a>

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileViewResponse = await appwriteserver.storage.getFileView({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.listBuckets`<a id="appwriteserverstoragelistbuckets"></a>

Get a list of all the storage buckets. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBucketsResponse = await appwriteserver.storage.listBuckets({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[BucketList](./models/bucket-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.listFiles`<a id="appwriteserverstoragelistfiles"></a>

Get a list of all the user files. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilesResponse = await appwriteserver.storage.listFiles({
  bucketId: "bucketId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[FileList](./models/file-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.updateBucketById`<a id="appwriteserverstorageupdatebucketbyid"></a>

Update a storage bucket by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBucketByIdResponse = await appwriteserver.storage.updateBucketById({
  bucketId: "bucketId_example",
  name: "name_example",
  compression: "none",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Bucket name

##### bucketId: `string`<a id="bucketid-string"></a>

Bucket unique ID.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### fileSecurity: `boolean`<a id="filesecurity-boolean"></a>

Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is bucket enabled? When set to \\\'disabled\\\', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.

##### maximumFileSize: `number`<a id="maximumfilesize-number"></a>

Maximum file size allowed in bytes. Maximum allowed value is 30MB.

##### allowedFileExtensions: `string`[]<a id="allowedfileextensions-string"></a>

Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.

##### compression: `string`<a id="compression-string"></a>

Compression algorithm choosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it\\\'s enabled

##### encryption: `boolean`<a id="encryption-boolean"></a>

Is encryption enabled? For file size above 20MB encryption is skipped even if it\\\'s enabled

##### antivirus: `boolean`<a id="antivirus-boolean"></a>

Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it\\\'s enabled

#### 🔄 Return<a id="🔄-return"></a>

[Bucket](./models/bucket.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.storage.updateFileById`<a id="appwriteserverstorageupdatefilebyid"></a>

Update a file by its unique ID. Only users with write permissions have access to update this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFileByIdResponse = await appwriteserver.storage.updateFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File unique ID.

##### name: `string`<a id="name-string"></a>

Name of the file

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission string. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.createMembershipRequest`<a id="appwriteserverteamscreatemembershiprequest"></a>

Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.

You only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.

Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team. 

Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMembershipRequestResponse =
  await appwriteserver.teams.createMembershipRequest({
    teamId: "teamId_example",
    roles: ["roles_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### roles: `string`[]<a id="roles-string"></a>

Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### email: `string`<a id="email-string"></a>

Email of the new team member.

##### userId: `string`<a id="userid-string"></a>

ID of the user to be added to a team.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### name: `string`<a id="name-string"></a>

Name of the new team member. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.createNewTeam`<a id="appwriteserverteamscreatenewteam"></a>

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTeamResponse = await appwriteserver.teams.createNewTeam({
  teamId: "teamId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Team name. Max length: 128 chars.

##### roles: `string`[]<a id="roles-string"></a>

Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.deleteMembership`<a id="appwriteserverteamsdeletemembership"></a>

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMembershipResponse = await appwriteserver.teams.deleteMembership({
  teamId: "teamId_example",
  membershipId: "membershipId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.getById`<a id="appwriteserverteamsgetbyid"></a>

Get a team by its ID. All team members have read access for this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteserver.teams.getById({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.getMembership`<a id="appwriteserverteamsgetmembership"></a>

Get a team member by the membership unique id. All team members have read access for this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipResponse = await appwriteserver.teams.getMembership({
  teamId: "teamId_example",
  membershipId: "membershipId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.getPrefsById`<a id="appwriteserverteamsgetprefsbyid"></a>

Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in [user preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPrefsByIdResponse = await appwriteserver.teams.getPrefsById({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.getUserTeams`<a id="appwriteserverteamsgetuserteams"></a>

Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTeamsResponse = await appwriteserver.teams.getUserTeams({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[TeamList](./models/team-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.listMemberships`<a id="appwriteserverteamslistmemberships"></a>

Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembershipsResponse = await appwriteserver.teams.listMemberships({
  teamId: "teamId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipList](./models/membership-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.removeTeamById`<a id="appwriteserverteamsremoveteambyid"></a>

Delete a team using its ID. Only team members with the owner role can delete the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTeamByIdResponse = await appwriteserver.teams.removeTeamById({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.updateMembershipRoles`<a id="appwriteserverteamsupdatemembershiproles"></a>

Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://appwrite.io/docs/permissions).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipRolesResponse =
  await appwriteserver.teams.updateMembershipRoles({
    teamId: "teamId_example",
    membershipId: "membershipId_example",
    roles: ["roles_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### roles: `string`[]<a id="roles-string"></a>

An array of strings. Use this param to set the user\\\'s roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.updateMembershipStatus`<a id="appwriteserverteamsupdatemembershipstatus"></a>

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.

If the request is successful, a session for the user is automatically created.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipStatusResponse =
  await appwriteserver.teams.updateMembershipStatus({
    teamId: "teamId_example",
    membershipId: "membershipId_example",
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Secret key.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.updateNameById`<a id="appwriteserverteamsupdatenamebyid"></a>

Update the team's name by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdResponse = await appwriteserver.teams.updateNameById({
  teamId: "teamId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

New team name. Max length: 128 chars.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.teams.updatePrefsById`<a id="appwriteserverteamsupdateprefsbyid"></a>

Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsByIdResponse = await appwriteserver.teams.updatePrefsById({
  teamId: "teamId_example",
  prefs: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/prefs` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createArgon2User`<a id="appwriteserveruserscreateargon2user"></a>

Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createArgon2UserResponse = await appwriteserver.users.createArgon2User({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Argon2.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/argon2` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createBcryptUser`<a id="appwriteserveruserscreatebcryptuser"></a>

Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBcryptUserResponse = await appwriteserver.users.createBcryptUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Bcrypt.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/bcrypt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createMd5User`<a id="appwriteserveruserscreatemd5user"></a>

Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMd5UserResponse = await appwriteserver.users.createMd5User({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using MD5.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/md5` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createMfaRecoveryCodes`<a id="appwriteserveruserscreatemfarecoverycodes"></a>

Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMfaRecoveryCodesResponse =
  await appwriteserver.users.createMfaRecoveryCodes({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/recovery-codes` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createNewUser`<a id="appwriteserveruserscreatenewuser"></a>

Create a new user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUserResponse = await appwriteserver.users.createNewUser({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### password: `string`<a id="password-string"></a>

Plain text user password. Must be at least 8 chars.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createPhpassUser`<a id="appwriteserveruserscreatephpassuser"></a>

Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhpassUserResponse = await appwriteserver.users.createPhpassUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using PHPass.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/phpass` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createScryptModifiedUser`<a id="appwriteserveruserscreatescryptmodifieduser"></a>

Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createScryptModifiedUserResponse =
  await appwriteserver.users.createScryptModifiedUser({
    userId: "userId_example",
    email: "email_example",
    password: "password_example",
    passwordSalt: "passwordSalt_example",
    passwordSaltSeparator: "passwordSaltSeparator_example",
    passwordSignerKey: "passwordSignerKey_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Scrypt Modified.

##### passwordSalt: `string`<a id="passwordsalt-string"></a>

Salt used to hash password.

##### passwordSaltSeparator: `string`<a id="passwordsaltseparator-string"></a>

Salt separator used to hash password.

##### passwordSignerKey: `string`<a id="passwordsignerkey-string"></a>

Signer key used to hash password.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/scrypt-modified` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createScryptUser`<a id="appwriteserveruserscreatescryptuser"></a>

Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createScryptUserResponse = await appwriteserver.users.createScryptUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
  passwordSalt: "passwordSalt_example",
  passwordCpu: 1,
  passwordMemory: 1,
  passwordParallel: 1,
  passwordLength: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Scrypt.

##### passwordSalt: `string`<a id="passwordsalt-string"></a>

Optional salt used to hash password.

##### passwordCpu: `number`<a id="passwordcpu-number"></a>

Optional CPU cost used to hash password.

##### passwordMemory: `number`<a id="passwordmemory-number"></a>

Optional memory cost used to hash password.

##### passwordParallel: `number`<a id="passwordparallel-number"></a>

Optional parallelization cost used to hash password.

##### passwordLength: `number`<a id="passwordlength-number"></a>

Optional hash length used to hash password.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/scrypt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createSession`<a id="appwriteserveruserscreatesession"></a>

Creates a session for a user. Returns an immediately usable session object.

If you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken) endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionResponse = await appwriteserver.users.createSession({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createShaUser`<a id="appwriteserveruserscreateshauser"></a>

Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createShaUserResponse = await appwriteserver.users.createShaUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
  passwordVersion: "sha1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using SHA.

##### passwordVersion: `string`<a id="passwordversion-string"></a>

Optional SHA version used to hash password. Allowed values are: \\\'sha1\\\', \\\'sha224\\\', \\\'sha256\\\', \\\'sha384\\\', \\\'sha512/224\\\', \\\'sha512/256\\\', \\\'sha512\\\', \\\'sha3-224\\\', \\\'sha3-256\\\', \\\'sha3-384\\\', \\\'sha3-512\\\'

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/sha` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createTargetMessaging`<a id="appwriteserveruserscreatetargetmessaging"></a>

Create a messaging target.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTargetMessagingResponse =
  await appwriteserver.users.createTargetMessaging({
    userId: "userId_example",
    targetId: "targetId_example",
    providerType: "email",
    identifier: "identifier_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### targetId: `string`<a id="targetid-string"></a>

Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### providerType: `string`<a id="providertype-string"></a>

The target provider type. Can be one of the following: `email`, `sms` or `push`.

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### userId: `string`<a id="userid-string"></a>

User ID.

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.

##### name: `string`<a id="name-string"></a>

Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.createTokenSession`<a id="appwriteserveruserscreatetokensession"></a>

Returns a token with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [PUT /account/sessions/custom](https://appwrite.io/docs/references/cloud/client-web/account#updateCustomSession) endpoint to complete the login process.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTokenSessionResponse =
  await appwriteserver.users.createTokenSession({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### length: `number`<a id="length-number"></a>

Token length in characters. The default length is 6 characters

##### expire: `number`<a id="expire-number"></a>

Token expiration period in seconds. The default expiration is 15 minutes.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/tokens` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.deleteAuthenticator`<a id="appwriteserverusersdeleteauthenticator"></a>

Delete an authenticator app.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAuthenticatorResponse =
  await appwriteserver.users.deleteAuthenticator({
    userId: "userId_example",
    type: "totp",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/authenticators/{type}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.deleteIdentityById`<a id="appwriteserverusersdeleteidentitybyid"></a>

Delete an identity by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteIdentityByIdResponse =
  await appwriteserver.users.deleteIdentityById({
    identityId: "identityId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identityId: `string`<a id="identityid-string"></a>

Identity ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/identities/{identityId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.deleteSessionById`<a id="appwriteserverusersdeletesessionbyid"></a>

Delete a user sessions by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSessionByIdResponse = await appwriteserver.users.deleteSessionById({
  userId: "userId_example",
  sessionId: "sessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions/{sessionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.deleteTargetMessaging`<a id="appwriteserverusersdeletetargetmessaging"></a>

Delete a messaging target.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTargetMessagingResponse =
  await appwriteserver.users.deleteTargetMessaging({
    userId: "userId_example",
    targetId: "targetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets/{targetId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.deleteUserById`<a id="appwriteserverusersdeleteuserbyid"></a>

Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus) endpoint instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserByIdResponse = await appwriteserver.users.deleteUserById({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.deleteUserSessions`<a id="appwriteserverusersdeleteusersessions"></a>

Delete all user's sessions by using the user's unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserSessionsResponse =
  await appwriteserver.users.deleteUserSessions({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.getById`<a id="appwriteserverusersgetbyid"></a>

Get a user by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteserver.users.getById({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.getMfaRecoveryCodes`<a id="appwriteserverusersgetmfarecoverycodes"></a>

Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMfaRecoveryCodesResponse =
  await appwriteserver.users.getMfaRecoveryCodes({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/recovery-codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.getUserPrefs`<a id="appwriteserverusersgetuserprefs"></a>

Get the user preferences by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPrefsResponse = await appwriteserver.users.getUserPrefs({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.getUserTargetById`<a id="appwriteserverusersgetusertargetbyid"></a>

Get a user's push notification target by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTargetByIdResponse = await appwriteserver.users.getUserTargetById({
  userId: "userId_example",
  targetId: "targetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets/{targetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.listAll`<a id="appwriteserveruserslistall"></a>

Get a list of all the project's users. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await appwriteserver.users.listAll({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[UserList](./models/user-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.listFactors`<a id="appwriteserveruserslistfactors"></a>

List the factors available on the account to be used as a MFA challange.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFactorsResponse = await appwriteserver.users.listFactors({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaFactors](./models/mfa-factors.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/factors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.listIdentities`<a id="appwriteserveruserslistidentities"></a>

Get identities for all users.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listIdentitiesResponse = await appwriteserver.users.listIdentities({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[IdentityList](./models/identity-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/identities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.listMemberships`<a id="appwriteserveruserslistmemberships"></a>

Get the user membership list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembershipsResponse = await appwriteserver.users.listMemberships({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipList](./models/membership-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.listSessions`<a id="appwriteserveruserslistsessions"></a>

Get the user sessions list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSessionsResponse = await appwriteserver.users.listSessions({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[SessionList](./models/session-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.listTargets`<a id="appwriteserveruserslisttargets"></a>

List the messaging targets that are associated with a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTargetsResponse = await appwriteserver.users.listTargets({
  userId: "userId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels

#### 🔄 Return<a id="🔄-return"></a>

[TargetList](./models/target-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.listUserLogs`<a id="appwriteserveruserslistuserlogs"></a>

Get the user activity logs list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserLogsResponse = await appwriteserver.users.listUserLogs({
  userId: "userId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.regenerateMfaRecoveryCodes`<a id="appwriteserverusersregeneratemfarecoverycodes"></a>

Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const regenerateMfaRecoveryCodesResponse =
  await appwriteserver.users.regenerateMfaRecoveryCodes({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/recovery-codes` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updateEmailById`<a id="appwriteserverusersupdateemailbyid"></a>

Update the user email by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailByIdResponse = await appwriteserver.users.updateEmailById({
  userId: "userId_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/email` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updateEmailVerification`<a id="appwriteserverusersupdateemailverification"></a>

Update the user email verification status by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailVerificationResponse =
  await appwriteserver.users.updateEmailVerification({
    userId: "userId_example",
    emailVerification: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### emailVerification: `boolean`<a id="emailverification-boolean"></a>

User email verification status.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/verification` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updateLabelsById`<a id="appwriteserverusersupdatelabelsbyid"></a>

Update the user labels by its unique ID. 

Labels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://appwrite.io/docs/permissions) for more info.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelsByIdResponse = await appwriteserver.users.updateLabelsById({
  userId: "userId_example",
  labels: ["labels_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### labels: `string`[]<a id="labels-string"></a>

Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/labels` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updateMfaStatus`<a id="appwriteserverusersupdatemfastatus"></a>

Enable or disable MFA on a user account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMfaStatusResponse = await appwriteserver.users.updateMfaStatus({
  userId: "userId_example",
  mfa: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mfa: `boolean`<a id="mfa-boolean"></a>

Enable or disable MFA.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updatePasswordById`<a id="appwriteserverusersupdatepasswordbyid"></a>

Update the user password by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePasswordByIdResponse =
  await appwriteserver.users.updatePasswordById({
    userId: "userId_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

New user password. Must be at least 8 chars.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/password` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updatePhoneById`<a id="appwriteserverusersupdatephonebyid"></a>

Update the user phone by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneByIdResponse = await appwriteserver.users.updatePhoneById({
  userId: "userId_example",
  number: "number_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### number: `string`<a id="number-string"></a>

User phone number.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/phone` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updatePhoneVerification`<a id="appwriteserverusersupdatephoneverification"></a>

Update the user phone verification status by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneVerificationResponse =
  await appwriteserver.users.updatePhoneVerification({
    userId: "userId_example",
    phoneVerification: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phoneVerification: `boolean`<a id="phoneverification-boolean"></a>

User phone verification status.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/verification/phone` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updatePreferencesById`<a id="appwriteserverusersupdatepreferencesbyid"></a>

Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePreferencesByIdResponse =
  await appwriteserver.users.updatePreferencesById({
    userId: "userId_example",
    prefs: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/prefs` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updateStatus`<a id="appwriteserverusersupdatestatus"></a>

Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusResponse = await appwriteserver.users.updateStatus({
  userId: "userId_example",
  status: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `boolean`<a id="status-boolean"></a>

User Status. To activate the user pass `true` and to block the user pass `false`.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updateTargetMessaging`<a id="appwriteserverusersupdatetargetmessaging"></a>

Update a messaging target.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTargetMessagingResponse =
  await appwriteserver.users.updateTargetMessaging({
    userId: "userId_example",
    targetId: "targetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.

##### name: `string`<a id="name-string"></a>

Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets/{targetId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteserver.users.updateUserByName`<a id="appwriteserverusersupdateuserbyname"></a>

Update the user name by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserByNameResponse = await appwriteserver.users.updateUserByName({
  userId: "userId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/name` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
