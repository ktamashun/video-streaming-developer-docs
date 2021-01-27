(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{ojRy:function(e,t,b){"use strict";b.r(t),b.d(t,"_frontmatter",(function(){return i})),b.d(t,"default",(function(){return p}));b("91GP"),b("rGqo"),b("yt8O"),b("Btvt"),b("RW0V"),b("q1tI");var n=b("7ljp"),a=b("XbGe"),c=b("Drr0");b("qKvR");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var b=arguments[t];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&(e[n]=b[n])}return e}).apply(this,arguments)}var i={},O={_frontmatter:i},r=a.a;function p(e){var t=e.components,b=function(e,t){if(null==e)return{};var b,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)b=c[n],t.indexOf(b)>=0||(a[b]=e[b]);return a}(e,["components"]);return Object(n.b)(r,m({},O,b,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Health of ECDN server’s operational services\n(ones that doesn’t affect content delivery)."),Object(n.b)(c.k,{mdxType:"GQLCodeSnippet"},Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.d,{mdxType:"GQLKeyword"},"type")," OperationsHealth ",Object(n.b)(c.h,{mdxType:"GQLOpen"})),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Aggregated health of operational services.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# (ones that doesn't affect content delivery).")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if all services are in GOOD state.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING if at least one is in WARNING and none of them are in POOR state.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if at least one is in POOR state.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"aggregated"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of update service.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if update repositories are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if update repositories are unreachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# If parent proxy feature is enabled:")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD same as before and all parents are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING update repositories are but not all parents are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR same as before or no parents are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"updates"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of ECDN software update.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if server has the latest ECDN version.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING if server version isn't the latest but still supported.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if server version isn't supported anymore.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"softwareVersion"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of API connection.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if ECDN API is reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if ECDN API is unreachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# If parent proxy feature is enabled:")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD same as before and all parents are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING ECDN API is but not all parents are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR same as before or no parents are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# On POOR status content delivery will continue to function properly, but ECDN")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# server won't be able to apply remote configurations or report status.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"apiConnection"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of metric collector service.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if service is up and running.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if service isn't running.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"metrics"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of NTP service.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if ECDN server is in sync with NTP servers.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING if ECDN server is in sync with at least one NTP server but not all of them.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if:")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"#   - ECDN server isn't in sync with any NTP servers.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"#   - NTP service isn't running.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"#   - Time skew is higher than 1 minute.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"ntp"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of log forwarding service. Null if log forwarding is disabled.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if ECDN server can forward logs.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if ECDN server cannot forward logs.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# On POOR status log forwarder service might not be running.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"logForward"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of remote assistance service. Null if remote assistance is disabled.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if remote assistance is working fine.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if remote assistance is working fine.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# On POOR status remote assistance service might not be running or remote")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# assistance server is unreachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"remoteAssistance"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of SNMP polling service. Null if SNMP polling is disabled.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if SNMP service is up and running.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if SNMP service isn't running.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"snmp"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.b,{mdxType:"GQLClose"}))),Object(n.b)("h2",null,"Fields"),Object(n.b)("h3",null,"aggregated: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Aggregated health of operational services.\n(ones that doesn’t affect content delivery)."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if all services are in GOOD state."),Object(n.b)("li",{parentName:"ul"},"WARNING if at least one is in WARNING and none of them are in POOR state."),Object(n.b)("li",{parentName:"ul"},"POOR if at least one is in POOR state.")),Object(n.b)("h3",null,"updates: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Health of update service."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if update repositories are reachable."),Object(n.b)("li",{parentName:"ul"},"POOR if update repositories are unreachable.\nIf parent proxy feature is enabled:"),Object(n.b)("li",{parentName:"ul"},"GOOD same as before and all parents are reachable."),Object(n.b)("li",{parentName:"ul"},"WARNING update repositories are but not all parents are reachable."),Object(n.b)("li",{parentName:"ul"},"POOR same as before or no parents are reachable.")),Object(n.b)("h3",null,"softwareVersion: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Health of ECDN software update."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if server has the latest ECDN version."),Object(n.b)("li",{parentName:"ul"},"WARNING if server version isn’t the latest but still supported."),Object(n.b)("li",{parentName:"ul"},"POOR if server version isn’t supported anymore.")),Object(n.b)("h3",null,"apiConnection: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Health of API connection."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if ECDN API is reachable."),Object(n.b)("li",{parentName:"ul"},"POOR if ECDN API is unreachable.\nIf parent proxy feature is enabled:"),Object(n.b)("li",{parentName:"ul"},"GOOD same as before and all parents are reachable."),Object(n.b)("li",{parentName:"ul"},"WARNING ECDN API is but not all parents are reachable."),Object(n.b)("li",{parentName:"ul"},"POOR same as before or no parents are reachable.\nOn POOR status content delivery will continue to function properly, but ECDN\nserver won’t be able to apply remote configurations or report status.")),Object(n.b)("h3",null,"metrics: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Health of metric collector service."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if service is up and running."),Object(n.b)("li",{parentName:"ul"},"POOR if service isn’t running.")),Object(n.b)("h3",null,"ntp: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Health of NTP service."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if ECDN server is in sync with NTP servers."),Object(n.b)("li",{parentName:"ul"},"WARNING if ECDN server is in sync with at least one NTP server but not all of them."),Object(n.b)("li",{parentName:"ul"},"POOR if:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"ECDN server isn’t in sync with any NTP servers."),Object(n.b)("li",{parentName:"ul"},"NTP service isn’t running."),Object(n.b)("li",{parentName:"ul"},"Time skew is higher than 1 minute.")))),Object(n.b)("h3",null,"logForward: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health")),Object(n.b)("p",null,"Health of log forwarding service. Null if log forwarding is disabled."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if ECDN server can forward logs."),Object(n.b)("li",{parentName:"ul"},"POOR if ECDN server cannot forward logs.\nOn POOR status log forwarder service might not be running.")),Object(n.b)("h3",null,"remoteAssistance: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health")),Object(n.b)("p",null,"Health of remote assistance service. Null if remote assistance is disabled."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if remote assistance is working fine."),Object(n.b)("li",{parentName:"ul"},"POOR if remote assistance is working fine.\nOn POOR status remote assistance service might not be running or remote\nassistance server is unreachable.")),Object(n.b)("h3",null,"snmp: ",Object(n.b)("a",m({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health")),Object(n.b)("p",null,"Health of SNMP polling service. Null if SNMP polling is disabled."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if SNMP service is up and running."),Object(n.b)("li",{parentName:"ul"},"POOR if SNMP service isn’t running.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-objects-operations-health-mdx-4c048e19becda95e5680.js.map