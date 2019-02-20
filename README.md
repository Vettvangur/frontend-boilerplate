# Hlaup

# Structure

* Umbraco.Extensions
* Umbraco.Frondend
* Umbraco.Site

# Install

First install ``node_modules`` with ``yarn install``

Then to run dev mode for front end

Run ``yarn start`` or ``yarn dev`` 

### Build commands:
``yarn build`` - This command builds the js and scss along with sprites in Hlaup.Frontend/build
``yarn build:deploy`` - This command builds the js and scss along with sprites in Hlaup.Frontend/build and then deploys it to Hlaup.Site/content/hlaup

to build the project run ``yarn build`` or ``yarn build:deploy`` to both build the project and copy build files to ``Hlaup.Site``

To build and deploy sprites fast run ``yarn deploy:sprites``


# Configuration

The base webpack configuration is in ``Hlaup.Frontend/webpack``
The main config files are located in ``Hlaup.Frontend/config/*.extension``