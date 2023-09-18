# SAP Mission Control Digital Twin

[[_TOC_]]

# Documentation/Readme

We use the Readme file of a project as a central starting point for a developer to onboard himself on that application. We do understand that it's impossible to maintain the entire business and application context for an application in this file. Because of that we have the following recommendations of what a Readme file should contain:

## Description

Liquid Studio created a proof of concept using the services of SAP Cloud Foundry, SAP Destination, SAP Services that are provided by SAP Business Technology Platform, SAP HANA Cloud, 3D animations and 3D models in applications implemented in JavaScript consuming React resources, open source JavaScript front-end library focused on creating user interfaces on web pages. Finally, these applications are consumed in a SAPUI5 application, generating a single application.

This project consists of a supply chain mission control using a multi-site reseller.

## How to run

-   This application was generated using the SAP Business Application Studio (SAP BAS) service. To launch the generated application, just run the following commands in each application folder:

DubaiExpoIframe folder:
```
    npm install
    npm run build
```

## How to deploy

-   Basic instructions of how to deploy.

```
    npm run build-deploy
```
Or
```
-   Right-click on the mta.yaml file and select the Build MTA Project option.
-   A new folder will be generated for the project called mta_archives. In this folder, right-click on the file with .mtar extension and select the Deploy MTA Archive option.
```

## Services/APIs

[ls_mssionCtrl_ui5_baseApp](https://dev.azure.com/LiquidStudiosBrazil/SAP/_git/ls_mssionCtrl_ui5_baseApp)

## Request

N/A

## Reference Application

N/A

## External Related applications/Dependencies

N/A

## API Management - Policies configuration

N/A

## Libraries

>*  @material-ui/core@4.12.3
>*  @material-ui/data-grid@4.0.0-alpha.37
>*  @material-ui/icons@4.11.2
>*  @testing-library/jest-dom@5.14.1
>*  @testing-library/react@11.2.7
>*  @testing-library/user-event@12.8.3
>*  @types/jest@26.0.24
>*  @types/node@10.17.60
>*  @types/react-dom@17.0.9
>*  @types/react-router-dom@5.1.8
>*  @types/react-transition-group@4.4.2
>*  @types/react@17.0.20
>*  @types/three@0.129.2
>*  @ui5/webcomponents-fiori@1.0.0-rc.15
>*  @ui5/webcomponents-react@0.16.6
>*  @ui5/webcomponents@1.0.0-rc.15
>*  animate.css@4.1.1
>*  axios@0.21.4
>*  bestzip@2.2.0
>*  classnames@2.3.1
>*  copyfiles@2.4.1
>*  npm-watch@0.9.0
>*  react-countup@5.2.0
>*  react-dom@17.0.2
>*  react-router-dom@5.3.0
>*  react-scripts@4.0.3
>*  react-transition-group@2.9.0
>*  react@17.0.2
>*  recharts@2.1.2
>*  three@0.129.0
>*  typescript@4.4.2
└── web-vitals@1.1.2

## Contribute

N/A