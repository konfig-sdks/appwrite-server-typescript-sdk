/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AccountApi,
  AvatarsApi,
  DatabasesApi,
  FunctionsApi,
  GraphqlApi,
  HealthApi,
  LocaleApi,
  MessagingApi,
  StorageApi,
  TeamsApi,
  UsersApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { AppwriteServerCustom } from "./client-custom";

export class AppwriteServer extends AppwriteServerCustom {
  readonly account: AccountApi;
  readonly avatars: AvatarsApi;
  readonly databases: DatabasesApi;
  readonly functions: FunctionsApi;
  readonly graphql: GraphqlApi;
  readonly health: HealthApi;
  readonly locale: LocaleApi;
  readonly messaging: MessagingApi;
  readonly storage: StorageApi;
  readonly teams: TeamsApi;
  readonly users: UsersApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.account = new AccountApi(configuration);
    this.avatars = new AvatarsApi(configuration);
    this.databases = new DatabasesApi(configuration);
    this.functions = new FunctionsApi(configuration);
    this.graphql = new GraphqlApi(configuration);
    this.health = new HealthApi(configuration);
    this.locale = new LocaleApi(configuration);
    this.messaging = new MessagingApi(configuration);
    this.storage = new StorageApi(configuration);
    this.teams = new TeamsApi(configuration);
    this.users = new UsersApi(configuration);
  }

}
