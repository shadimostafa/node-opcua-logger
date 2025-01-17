# The OPCUA connection parameters. If you want to use anonymous auth, 
# remove the username and password lines.
[opcua]
url             = "opc.tcp://192.168.9.220:4845"

# The InfluxDB connection parameters. Use a connection url containing all 
# details, ie. http(s)://user:password@host:port/database
[influx]
url              = "http://35.229.36.6:8086/mydb"
writeInterval    = 1000          # optional. defaults to 1000ms
writeMaxPoints   = 1000          # optional. defaults to 1000 points

## Monitored (send only when value change)

[[metrics]]
measurement        = "HLA_D592_1"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.HLA_D592_1.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "LLA_D592_2"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.LLA_D592_2.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "HLA_D577_1_1"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.HLA_D577_1_1.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "HLA_D577_1_1"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.HLA_D577_1_1.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "LLA_D576"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.LLA_D576_2.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "HLA_D576"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.HLA_D576_1.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000 


[[metrics]]
measurement        = "HLA_D577_2_1"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.HLA_D577_2_1.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "LLA_D577_2_2"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.LLA_D577_2_2.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "HLA_D577_3_1"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.HLA_D577_3_1.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "LLA_D577_3_2"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.LLA_D577_3_2.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "HLA_D577_4_1"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.HLA_D577_4_1.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

[[metrics]]
measurement        = "LLA_D577_4_2"
datatype           = "boolean"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.DI_DATA.LLA_D577_4_2.BL_LIMIT_SWITCH"
method             = "monitored"
interval           = 5000  

## polled (send on interval)

## water tank

[[metrics]]
measurement        = "LT_D532"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.LCV_D532_1.PV_0_100"
method             = "polled"
interval           = 1000     

## steeping t

[[metrics]]
measurement        = "LT_D201_11"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_11.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_1"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_1.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D201_21"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_21.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_2"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_2.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D201_31"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_31.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_3"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_3.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D201_41"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_41.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_4"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_4.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D201_51"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_51.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_5"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_5.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D201_61"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_61.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_6"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_6.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D201_71"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_71.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_7"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_7.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D201_81"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D201_81.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "TT_D201_8"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.TT_D201_8.PV_0_100"
method             = "polled"
interval           = 1000     

## buffer

[[metrics]]
measurement        = "LT_D210"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D210.PV_0_100"
method             = "polled"
interval           = 1000     

## product tank

[[metrics]]
measurement        = "LT_D739_1"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D739_1.PV_0_100"
method             = "polled"
interval           = 1000     

[[metrics]]
measurement        = "LT_D739_2"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.AI_DATA.LT_D739_2.PV_0_100"
method             = "polled"
interval           = 1000 


[[metrics]]
measurement        = "TCV_D720"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.TCV_720.PV_ENGIN_VALUE"
method             = "polled"
interval           = 1000     


[[metrics]]
measurement        = "TCV_D820"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.TCV_820.PV_ENGIN_VALUE"
method             = "polled"
interval           = 1000  

[[metrics]]
measurement        = "TCV_D830"
datatype           = "number"
tags               = { simulation = "false", location = "yanbu" }
nodeId             = "ns=7;s=SIMATIC 400(1).CPU 414-3 PNDP.TCV_830.PV_ENGIN_VALUE"
method             = "polled"
interval           = 1000  
    
