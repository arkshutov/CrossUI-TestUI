// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label8")
                .setLeft("6.095238095238095em")
                .setTop("9.142857142857142em")
                .setWidth("32.91428571428571em")
                .setCaption("Label")
                .setHAlign("center")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setName("user_name")
                .setLeft("2.2857142857142856em")
                .setTop("4.571428571428571em")
                .setWidth("22.552380952380954em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelCaption("Input your name")
                .setValue("Test")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setLeft("26.666666666666668em")
                .setTop("4.571428571428571em")
                .setWidth("12.038095238095238em")
                .setCaption("Say Hello!")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Hello",
                            //"Hello, {page.xui_ui_input5.getValue()}"
                            "Hello, {user_name.getValue()}"
                        ],
                        "method" : "pop",
                        "okFlag" : "_confirm_yes",
                        "koFlag" : "_confirm_no",
                        "event" : 1
                    },
                    "_xui_ui_button5_onclick"
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button5_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            
            /*alert(page.xui_ui_input5.getValue(  ));
             */
            _.asyRun(function(){
                user_name.updateValue();
            },1000);
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});