(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{EIIk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n,r=a("k1TG"),o=a("8o2o"),i=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("T0C+"),a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:c},p=s.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"}),Object(i.b)("h2",null,Object(i.b)("strong",{parentName:"h2"},"Automation overview")),Object(i.b)("p",null,"Digital business automation (DBA) allows an organization to improve its operations by streamlining the way people participate in business processes and workflows, automate repeatable decisions, and provide business users with the ability to edit and change the business logic involved in these business processes. DBA projects also aim to make documents easy to store and retrieve, digitize document content, such as with optical character recognition (OCR), and automate data entries with software robots, also referred to as robotic process automation."),Object(i.b)("p",null,"The IBM Cloud Pak for Automation offers a software platform to develop, deploy, run and manage your digital business automation projects, using the capabilities shown in the following digram: "),Object(i.b)("h2",null,Object(i.b)("strong",{parentName:"h2"},"Receipe Overview")),Object(i.b)("p",null,"The intent of this recipe is to provide a simplified set to steps, to set up an instance for PoC or Demos with least effort. Viewer is advised to refer to the original Enterprise install steps once before going ahead with these steps.\nIngredients"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"IBM ROKS Openshift cluster v3.11  (  5 worker nodes with 8 cores x 32 GB RAM )")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A RHEL 7.x VM ( 4 cores x 16 GB RAM) for  DB2, IBM security Directory server and NFS file share.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Cloud Pak for Automation v20.0.1")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"DB2 v11.1")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"IBM Security Directory Server v6.4")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"workstation with oc, kubectl, git  installed for executing the steps during install."))),Object(i.b)("h2",null,Object(i.b)("strong",{parentName:"h2"},"Step-by-step")),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"1. Provision Openshift Cluster")),Object(i.b)("p",null,"Provision an Openshift cluster v3.11 with 4 worker nodes having 8 cores x 32 GB RAM , on IBM Cloud. If it’s provisioned by someone else, the person following the instructions, should have Admin access to the cluster."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"2.Provision 1 or more VMs for shared services. ( 1 would suffice)")),Object(i.b)("p",null,"Some of the install instructions related to DB2 and TDS (Tivoli Directory Server , which is now called – IBM Security Directory server )   require use of RPM so one of the supported linux distros is recommended. Steps have been tested with RHEL 7.x.  ( 4 cores x 16 GB RAM) . 4 x 8 should also suffice."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"3. Clone the github repository for helper scripts")),Object(i.b)("p",null,"1.The original (official)  documentation can be found here:  ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/icp4a/cert-kubernetes/tree/20.0.1"}),"https://github.com/icp4a/cert-kubernetes/tree/20.0.1")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Some additional helper scripts (with some assumptions for Demo installs ) along with sample Custom Resource YAML file have been added in this fork of the official project here:  ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1"}),"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1"))),Object(i.b)("p",null,"You can perform the steps below by cloning the 2nd repo but in case you run into issues, it may be good to check the original repository once for any updates due to bug fixes."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"4.Setup NFS services")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The storage capacity in default disk attached to VMs may not be sufficient. (Default is 25GB and max is 100GB). It’s recommended to add an additional disk (File Storage – 750 GB or more)  from IBM cloud console and use that for NFS.\n")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Once you have added disk run – ‘fdisk -l’ to view the disks attached. See image below for example. here /dev/xvdc is the additional device.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("span",Object(r.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.27777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABdUlEQVQ4y42T16rCYBCEY++9916xFxAU1Pd/qDl8Cwly0OjFkEL+2Skb5/l86ng8arvd6nA4aLPZaDweq9/vq9frqdvtqtVqqVqtqlarfYVzuVzUbrc1mUw0Go2MaDabaTqdql6vq9lsKpVKyXGc33C9XrVYLEwhSiGDIJvNKp1Oq1AoKBgMeggEAr5wUMChTCajeDzuESQSCYXDYeVyOY84FouZCl9CFGJ1uVya0vl8rt1up/1+70WBdYa9kn0idm63m5WAZUgooVgsmiLUgXdZuaT/iR3IUFIqlcx2uVy2j5LJpEKhkL3nniFYj0QiikajnxWiivXgYD6ft+pperVa2aq4zTO0UqlYYW7rbwkfj4cdYgcBLZMnYP86nY4p+9ky2Q0GAyMFtM5H2AXYo3Ua5/lrKVgbDoeWExmSKdZ5x5WB5EpZrlJfwtPp5DVLTuSFXQY1Gg17xsHrH+O7h/f73VSdz2fDer02MpQxCKUo/2bVxR87gjcg2MZ1VQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Cloud Automation NFS",title:"IBM Cloud Automation NFS",src:"/ibm-enterprise-runbooks/static/0ee66ef048c55c295bac338a865df181/3cbba/Automation-NFs.png",srcSet:["/ibm-enterprise-runbooks/static/0ee66ef048c55c295bac338a865df181/7fc1e/Automation-NFs.png 288w","/ibm-enterprise-runbooks/static/0ee66ef048c55c295bac338a865df181/a5df1/Automation-NFs.png 576w","/ibm-enterprise-runbooks/static/0ee66ef048c55c295bac338a865df181/3cbba/Automation-NFs.png 1152w","/ibm-enterprise-runbooks/static/0ee66ef048c55c295bac338a865df181/32b79/Automation-NFs.png 1612w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run folowing commands to create filesystem and mount the disk."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mkfs.ext4 /dev/xvdc"),Object(i.b)("li",{parentName:"ul"},"mkdir /opt/nfs2"),Object(i.b)("li",{parentName:"ul"},"mount /dev/xvdc /opt/nfs2\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Follow the steps ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://linuxconfig.org/quick-nfs-server-configuration-on-redhat-7-linux"}),"here")," for setting up NFS service on RHEL")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Perform following steps to configure the folders required for ICP4Auto components and for updating /etc/exports for NFS"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"copy files ( configure-nfs.sh  and nfs-exports-configuration.txt)  under this link , in the git project to NFS server.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"configure-nfs.sh will create all the folders with required permissions for components which need NFS based storage.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"nfs-exports-configuration.txt  has the place holders for /etc/exports.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Replace the W",Object(i.b)("em",{parentName:"p"},"Public and W"),"Private  in nfs-exports-configuration.tx with Public and Private IPs of 4 worker nodes. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"chmod +x configure-nfs.sh")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"./configure-nfs.sh")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify that  nfs status is green and  /etc/exports is updated with configuration"))))),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"5. Setup other shared Services - LDAP and DB2")),Object(i.b)("p",null,"Follow the steps on this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloudpak8s.io/automation/shared-services/"}),"page")," for installing DB2 and LDAP and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sachinjha/cert-kubernetes/blob/20.0.1/install-helm.md"}),"helm"),". ",Object(i.b)("strong",{parentName:"p"},"( instructions are for Linux only)"),"."),Object(i.b)("p",null,"2nd instance of LDAP ( TDS ) is  required for BAN and FNCM if you want external users to access. Steps to create 2nd instance are ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sachinjha/cert-kubernetes/blob/20.0.1/shared-services/tds%20ext%20ldap%20creation.sh"}),"here"),"."),Object(i.b)("p",null,"helm is required for installing kafka, which is a prerequisiste for BAI. If not installing BAI, you may skip it."),Object(i.b)("p",null,"Some troubleshooting options for DB2 install can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sachinjha/cert-kubernetes/blob/20.0.1/shared-services/db2.md"}),"here"),"."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"6. Identify the suffix for Openshift routes and secure routes")),Object(i.b)("p",null,"Use the following option if routes with self signed certificates are not a problem."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get public IP of loadbalancer using any of the methods given in the image below.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"images/Automation-Routes.png"}),"IBM Cloud openshift routes"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use a suffix like  publicIP.nip.io")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For example, in this case ,  suffix can be “169.44.184.38.nip.io”  and a sample hostname for UMS service, can be “ums.169.44.184.38.nip.io”\n"))),Object(i.b)("p",null,"In case there is a need to create secure routes with certificates signed by known CAs then follow the steps below: ( This hasn’t been completely tested for all components )"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Register a domain  ( e.g. automation.org.xyz.com )   ( “Internet services”, on IBM cloud can be used )"),Object(i.b)("li",{parentName:"ol"},"Create a wildcard subdomain  A record   *  which maps to the above loadbalancer IP."),Object(i.b)("li",{parentName:"ol"},"Generate an SSL certificate with wild card subdomain ( *.automation.org.xyz.com )  ( “Certificate manager” on IBM cloud can be used )   (Certs issued by Let’s encrypt or any well known CA will do ) ."),Object(i.b)("li",{parentName:"ol"},"Use this pair of certificate and key, whereever applicable in the instructions below.")),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"7. Create DB2 databases required for different components")),Object(i.b)("p",null,"Steps for components which are not of interest can be skipped. UMS should be done as UMS is required for all other components."),Object(i.b)("p",null,"Execute all the scripts as user db2inst1. On the DB server, ensure that db2 is in PATH  by running command below and then follow the instructions below for each of the components:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"```     \n$ su db2inst1\n$ ./home/db2inst1/sqllib/db2profile\n```\n \n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"UMS")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"copy ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/blob/20.0.1/UMS/configuration/create-db.sh"}),"file")," or contents of the file and execute them on DB server."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"BACA")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"copy ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1/ACA/configuration-ha/DB2"}),"DB2")," folder to DB server."),Object(i.b)("li",{parentName:"ol"},"Execute the scripts CreateBaseDB.sh  and AddTenant.sh."),Object(i.b)("li",{parentName:"ol"},"See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1/ACA/configuration-ha/db-creation-logs"}),"log")," files for sample values that can be used. ( mostly defaults )\n( bacaadmin is a user created in LDAP when the LDIF file is imported. If you change users, use it accordingly when executing the script)"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"ODM")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Update default passwords in ODM/configuration/security/sample-webSecurity-basic-registry.xml if you don’t want to use defaults."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"BAS")," "),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"copy ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1/BAS/configuration/db2"}),"db2")," folder to DB server."),Object(i.b)("li",{parentName:"ol"},"Execute the .sql files",Object(i.b)("br",{parentName:"li"}),"$  db2 -tvmf bastudio.sql\n$  db2 -tvmg appengine.sql"),Object(i.b)("li",{parentName:"ol"},"Compare output with ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/blob/20.0.1/BAS/configuration/db-creation-logs/db-creation.logs"}),"logfiles")," in case of doubts."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"BAN")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"copy ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1/BAN/configuration/DB2"}),"DB2")," folder to DB server.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Execute the script"))),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ./createICNDB.sh -n ICNDB -s ICNDB -t ICNDB -u db2inst1 -a ceadmin\n")),Object(i.b)("p",{parentName:"li"},"( ceadmin  is a user created in LDAP when the LDIF file is imported. If you change users, use it accordingly when executing the script)"))),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"FNCM")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"copy ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1/FNCM/configuration/DB2"}),"DB2")," folder to DB server."),Object(i.b)("li",{parentName:"ol"},"Execute the scripts",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"$ ./create-gcd.sh "),Object(i.b)("li",{parentName:"ol"},"$ ./create-os.sh"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"IAWS")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"copy ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1/IAWS/configuration/DB2"}),"DB2")," folder to DB server.\n2.Execute the sql files\n$ db2 -tvmf create-db.sql"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"APP Engine:")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"copy ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sachinjha/cert-kubernetes/tree/20.0.1/AAE/configuration/DB2"}),"DB2")," folder to DB server."),Object(i.b)("li",{parentName:"ol"},"Execute the sql files",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"$ db2 -tvmf appengine.sql")))))),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"8. Install Operator")),Object(i.b)("p",null,"1.$ oc new-project automation.   "),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"if you use a different name for the project, you may have to edit multiple files in the next step, where namespaces may be hard coded.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Follow the instruction given ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sachinjha/cert-kubernetes/blob/20.0.1/platform/roks/install.md"}),"here"),". See notes below before executing the steps.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Notes on the instructions in step 3.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use Option 1 in Step 1.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Step 1.8 will not return any images (")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Step 2 is not required at the moment.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Step 3.5 can be ignored – jdbc folder exists under scripts folder in the github project  ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Step 4.1"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),""))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"$ ./scripts/deployOperator.sh -i cp.icr.io/cp/cp4a/icp4a-operator:20.0.1 -p ‘admin.registrykey’ -a accept"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),""))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Step 4.3")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"podname=$(oc get pod | grep ibm-cp4a-operator | awk ‘{print $1}’)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"NAMESPACE=automation")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"kubectl cp ./scripts/jdbc $NAMESPACE/$podname:/opt/ansible/share -c ansible")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify successful copy – "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),""))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"$ oc rsh $podname ls /opt/ansible/share -c ansible"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),""))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Step 5 onwards. Nothing needs to be done at this stage. Read it for understanding, if installing for the first time"))),Object(i.b)("h3",null,"9. Create secrets , Rolebindings, PVs and PVCs for different components."),Object(i.b)("p",null,"PWD = Root folder of cert_kubernetes project."),Object(i.b)("p",null,"1.",Object(i.b)("strong",{parentName:"p"},"UMS"),"\n1.Update the value of keys – oauthDBPassword and tsDBPassword in UMS/configuration/secrets.yaml with password for db2inst1 set during step 5.\n2. $ oc apply -f UMS/UMS/configuration/secrets.yaml\n3. Update the values of keys externalLdapPassword,  ldapPassword and lc_ldap_bind_password to values set during LDAP installation in step 5.\n4.Execute ldap-bind-secret.sh "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1. $ UMS/configuration/ldap-bind-secret.sh\n")),Object(i.b)("p",null,"2.",Object(i.b)("strong",{parentName:"p"},"BACA")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Update the file ACA/configuration/label-nodes.sh  and replace worker node placeholders with actual worker nodes IPs"),Object(i.b)("li",{parentName:"ol"},"Update the namespace value in ACA/ha-configuration/security/create-rolebinding-npol.sh  if not deploying under “automation” namespace."),Object(i.b)("li",{parentName:"ol"},"Update ",Object(i.b)("strong",{parentName:"li"},"NFS-SERVER")," in ACA/configuration/volumes.yaml with NFS server IP configured in step 4.")),Object(i.b)("p",null,"3.",Object(i.b)("strong",{parentName:"p"},"ODM"),"\n1.No customizations required."),Object(i.b)("p",null,"4.",Object(i.b)("strong",{parentName:"p"},"BAS")," ( Includes Resource Registry and App Engine)\n1.Update BAS/configuration/db2/secret.yaml by replacing values of “dbPassword” and “AE_DATABASE_PWD” with password set for db2inst1 in Step 5.\n2.If you are configuring secure routes (discussed in step 6) only then peform the steps below, else ignore."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"    1. copy key and certificate to file BAS/configuration/tls.key and BAS/configuration/tls.crt respectively\n    2. Uncomment the OPTIONAL section related to secure routes for BAS in scripts/create-prerequisites.sh\n")),Object(i.b)("p",null,"5.",Object(i.b)("strong",{parentName:"p"},"BAI")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1. Update BAI/configuration/bai-psp.yaml and replace CR_NAME with actual custom resource name.\n")),Object(i.b)("p",null,"6.",Object(i.b)("strong",{parentName:"p"},"ADW")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1. If you are configuring secure routes (discussed in step 6) then peform the steps below with key and certificate issued by well known CA, else use [openssl to generate self-signed cert.( only step 2 is to be referred in the link)](https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.cmc.doc/task_apionprem_gernerate_self_signed_openSSL.html)\n2. copy key and certificate to file ADW/configuration/tls.key and   ADW/configuration/tls.crt respectively\n3. Update server.key and server.crt in ADW/configuration/adw-secret.yaml  with base64 encoded values\n4. set server.key to –   $cat ADW/configuration/tls/tls.key | base64\n5. set server.crt to  –   $cat ADW/configuration/tls/tls.crt | base64\n")),Object(i.b)("p",null,"7.",Object(i.b)("strong",{parentName:"p"},"BAN")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1. Update the values of navigatorDBPassword, ldapPassword , externalLdapPassword in BAN/configuration/ban-secret.sh\n2. Update the value of **NFS-SERVER** in BAN/configuration/volumes.yaml with with NFS server IP configured in step 4\n")),Object(i.b)("p",null,"8.",Object(i.b)("strong",{parentName:"p"},"FNCM")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1. Update the values of gcdDBPassword, osDBPassword , ldapPassword in FNCM/configuration/ibm-fncm-secret.sh\n2. Update the value of **NFS SERVER** in FNCM/configuration/volumes_cmis.yaml,  graphql_volume.yaml and volumes_cpe.yaml  with with NFS server IP configured in step 4\n")),Object(i.b)("p",null,"9.",Object(i.b)("strong",{parentName:"p"},"App Engine:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1. Update the values of AE_DATABASE_PWD in AAE/configuration/secrets.yaml with DB2 password\n")),Object(i.b)("p",null,"10.",Object(i.b)("strong",{parentName:"p"},"IAWS")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1. Update the value of password under ibm-baw-wfs-server-db-secret in IAWS/configuration/secrets.yaml with db2 password.\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{})," $ cd scripts.  # change to scripts folder.\n $ ./create-prerequisites.sh\n")),Object(i.b)("h3",null,"10. Install Kafka ( if installing Business Automation Insights (BAI) )"),Object(i.b)("p",null,"Steps to install Kafka can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://pages.github.ibm.com/CASE/cloudpak-onboard-residency/automation/install-bai/#install-kafka"}),"here"),"."),Object(i.b)("h3",null,"11. Update the Custom resource YAML"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a copy of descriptors/ibm_cp4a_cr_sample.yaml and make the below updates in the copy."),Object(i.b)("li",{parentName:"ol"},"Remove configuration for applications which are not of interest. ( for e.g.  ca_configuration is for ACA, bastudio_configuration is for BAStudio and so on. Remove or comment out components which are not of interest.   ) ."),Object(i.b)("li",{parentName:"ol"},"Update fields below for different components ( by replacing values in with actual values)"),Object(i.b)("li",{parentName:"ol"},"Make sure shared_configuration, ldap_configuration are uncommented."),Object(i.b)("li",{parentName:"ol"},"Make sure datasource_configuration is uncommented for the component being installed.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"COMMON:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"shared_configuration.sc_deployment_hostname_suffix = HOSTNAME_SUFFIX  # identified in step 6.\nldap_configuration.lc_ldap_server = TDS Server IP #from step 5.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"UMS:"),"\ndatasource_configuration.dc_ums_datasource.dc_ums_oauth_host = DB2 Server IP #from step 5.\ndatasource_configuration.dc_ums_datasource.dc_ums_teamserver_host = DB2 Server IP #from step 5.\nums_configuration.hostname = ums.HOSTNAME SUFFIX  # identified in step 4 in this section."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ACA:"),"\ndatasource_configuration.dc_ca_datasource.database_servername = DB2 Server IP #from step 5.\nca_configuration.frontend_external_hostname= ca-frontend.HOSTNAME SUFFIX\nca_configuration.backend_external_hostname= ca-backend.HOSTNAME SUFFIX"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ODM :"),"\nNone  required for typical install with default UserId/Passwords."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"BAS :"),"\nbastudio_configuration.hostname =  bastudio.HOSTNAME SUFFIX\nbastudio_configuration.database.host = DB2 Server IP # from step 5.\nbastudio_configuration.playback_server.hostname = playback.HOSTNAME SUFFIX\nbastudio_configuration.playback_server.database.host = DB2 Server IP # from step 5.\nresource_registry_configuration.hostname = resource-registry.HOSTNAME SUFFIX\n#only if creating secure routes with custom certificate issued by well know CA add the value below.\n#secret is generated by configuration done in Stpep 9.\nresource_registry_configuration.external_tls_secret: ibm-dba-bas-external-tls-secret  "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"BAI:"),"\nNo changes required. All urls are internal. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ADW:"),"\nadw_configuration.registry.endpoint = ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://resource-registry.HOSTNAME"}),"https://resource-registry.HOSTNAME")," SUFFIX/v3beta\nadw_configuration.designer.externalUrl = ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://adw-designer.HOSTNAME"}),"https://adw-designer.HOSTNAME")," SUFFIX\nadw_configuration.runtime.externalUrl = ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://adw-runtime.HOSTNAME"}),"https://adw-runtime.HOSTNAME")," SUFFIX\nadw_configuration.management.externalUrl = ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://adw-management.HOSTNAME"}),"https://adw-management.HOSTNAME")," SUFFIX\nadw_configuration.baiElasticsearch.kibanaUrl = https://kibana-route-automation.HOSTNAME_SUFFIX/app/kibana\nadw_configuration.oidc.endpoint = https://ums.HOSTNAME_SUFFIX/oidc/endpoint/ums"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"BAN"),"\ndatasource_configuration.dc_icn_datasource.database_servername = DB2 Server IP #from step 5.\nnavigator_configuration.hostname = navigator.HOSTNAME_SUFFIX"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"FNCM"),"\ndatasource_configuration.dc_os_datasources.database_servername = DB2 Server IP #from step 5.\ndatasource_configuration.dc_gcd_datasource.database_servername = DB2 Server IP #from step 5.\ndatasource_configuration.dc_os_datasources.database_servername = DB2 Server IP #from step 5.\necm_configuration.cpe.hostname = cpe-{{ meta.namespace }}.HOSTNAME_SUFFIX\necm_configuration.cmis.hostname = cmis-{{ meta.namespace }}.HOSTNAME_SUFFIX\necm_configuration.graphql.hostname = graphql-{{ meta.namespace }}.HOSTNAME_SUFFIX"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"AAE"),"\napplication_engine_configuration.","[x]",".database.host = DB2 Server IP #from step 5."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IAWS"),"\niaws_configuration.iaws_server.hostname = workstream.HOSTNAME_SUFFIX\niaws_configuration.iaws_server.database.server_name = DB2 Server IP #from step 5"),Object(i.b)("h3",null,"12. Install components"),Object(i.b)("p",null,"$ oc apply -f descriptors/ibm_cp4a_cr_sample.yaml"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Check Operator Logs:")),Object(i.b)("p",null,"oc logs -f operator-pod -c operator"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"check Ansible Logs")," ( Updated after one round of operator reconcilliation for all components is complete ..varies from 8 – 25 mins ) :"),Object(i.b)("p",null,"oc logs -f operator-pod -c ansible"),Object(i.b)("h3",null,"13. Post install steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"UMS Login"),"\nhttps://ums.HOSTNAME_SUFFIX/ums/     umsadmin/password\n"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"BACA"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"See the steps documented here.  for details.  High level steps outlined below."),Object(i.b)("li",{parentName:"ol"},"First hit the backend url ( required for every browser for the first time)  ( not required if using  routes secured by well known CA) : https://ca-backend.HOSTNAME_SUFFIX     "),Object(i.b)("li",{parentName:"ol"},"Hit frontend URL : https://ca-frontend.HOSTNAME_SUFFIX?tid=t4900&ont=default    ( t4900 = tenant ID set  during CATenant DB creation. and default = ontology name set during CATenant DB creation)."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"BAS Login"),"\nhttps://bastudio.HOSTNAME_SUFFIX/BAStudio    umsadmin/password"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"ODM login"),"\nhttps://demo-template-odm-dc-route-automation.HOSTNAME_SUFFIX",Object(i.b)("br",{parentName:"li"}),"https://demo-template-odm-ds-console-route-automation.HOSTNAME_SUFFIX\nFor userId/password check file ODM/configuration/security/sample-webSecurity-basic-registry.xml."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"BAI"),"\nRead throug the steps here. for understanding how to make Kibana and Elastic search accessible outside the cluster.\nNetwork policy to allow default namespace to access kibana /elastic search already exists. Only route needs to be created.\nElasticsearch route is required for debug purspose only.\nKibana route should be created using the hostname configured in adw_configuration. See command below.\noc create route passthrough –namespace=automation –service=demo-template-ibm-dba-ek-kibana kibana –hostname=kibana-route-automation.HOSTNAME_SUFFIX"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"ADW"),"\nhttps://adw-designer.HOSTNAME_SUFFIX/app    umsadmin/password"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"FNCM"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"https://cpe-automation.HOSTNAME_SUFFIX/P8CE/Health   ceadmin/passw0rd",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Check  that there are no X symbols, which would mean something couldn’t be created."),Object(i.b)("li",{parentName:"ol"},"If Object storage doesn’t get created, create it manually by going to https://cpe-automation.HOSTNAME_SUFFIX/acce"),Object(i.b)("li",{parentName:"ol"},"schema is db2inst1. db name is OS1DB. select the db connection from drop down."),Object(i.b)("li",{parentName:"ol"},"If db connection is not found, check operator logs (ansible container) for what went wrong."),Object(i.b)("li",{parentName:"ol"},"Check the extensions to be added ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://pages.github.ibm.com/CASE/cloudpak-onboard-residency/automation/install-ecm/#post-install-tasks"}),"here"),". You can skip this step and let the next reconcillition of operator install  the extensions."),Object(i.b)("li",{parentName:"ol"},"Once the object store is created, let the next run of operator complete the other configuration in initialization_configuration and verification_configuration."))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Navigator:"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"https://navigator.HOSTNAME_SUFFIX/navigator   ceadmin/passw0rd"),Object(i.b)("li",{parentName:"ol"},"Check that you can see the “ICN desktop” in the list of desktops   ( created by initialization script)"),Object(i.b)("li",{parentName:"ol"},"https://navigator.HOSTNAME_SUFFIX/navigator?desktop=demo ")))),Object(i.b)("h3",null,"14. Troubleshooting and ReInstall tips for different components."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"BACA")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Error from server (NotFound): error when creating “./aca-scc.yaml”: the server could not find the requested resource",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use oc  instead of kubectl when applying aca-scc.yaml"))),Object(i.b)("li",{parentName:"ol"},"Operator logs stuck at Run Post setup for Mongo",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Have patience – it may take an hour for the whole setup and during this time spbackend pod may get created multiple times."))),Object(i.b)("li",{parentName:"ol"},"Warning Failed 68s (x4 over 2m39s) kubelet, 10.221.53.62 Failed to pull image “dba-etcd:20.0.1″: rpc error: code = Unknown",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"desc = Error reading manifest 20.0.1 in docker.io/library/dba-etcd: errors:"),Object(i.b)("li",{parentName:"ul"},"denied: requested access to the resource is denied"),Object(i.b)("li",{parentName:"ul"},"unauthorized: authentication required\nAdd the section resource_registry_configuration: in custom resource file.  and apply the custom resource file."))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If Operator logs do not update and appear to be stuck for a long time  at other places ( not mentioned above) ,  may be due to a bug in ansbile playbook."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Delete operator pod"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"ADW")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"If pods are not coming up check pod events or job events or stateful events."),Object(i.b)("li",{parentName:"ol"},"If events do not show any errors and pod is crashing , check pod logs."),Object(i.b)("li",{parentName:"ol"},"Check adw-secret has all the required values as shown in sample and server.crt and server.key are updated for your installation."),Object(i.b)("li",{parentName:"ol"},"If pods are running but application is unreachable check if corresponding openshift service has Endpoints set to Pod IP.  If not delete the pod. When it is recreated, Endpoints should be set in service object."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"FNCM")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"If Object storage is not created as part of initialization configuration,  create it manually.  See Post Install section above"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"UMS")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"umsadmin not able to login and UMS pod logs show this reason: The user registry operation could not be completed. More than one record exists for the umsadmin principal name in the configured user registries. "),Object(i.b)("li",{parentName:"ol"},"Saw this after installation of IAWS as it added this functional ID  ( Need to check once if it’s a bug or there was an error in configuration from my side. )"),Object(i.b)("li",{parentName:"ol"},"Fix is to update the secret – ibm-dba-ums-basicregistry-secret-internal  and remove the entry for umsadmin from both the keys.")))),Object(i.b)("h2",null,"Additional options to install Cloud Pak for Automation"),Object(i.b)("p",null,"Refer here for step by step instructions to install Automation - ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloudpak8s.io/automation/pre-requisites/"}),"https://cloudpak8s.io/automation/pre-requisites/")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-install-automation-index-mdx-ecd0184495893c3fe7d0.js.map