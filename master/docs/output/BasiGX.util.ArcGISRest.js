Ext.data.JsonP.BasiGX_util_ArcGISRest({"tagname":"class","name":"BasiGX.util.ArcGISRest","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ArcGISRest.js","href":"ArcGISRest.html#BasiGX-util-ArcGISRest"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"createOlLayerFromArcGISRest","tagname":"method","owner":"BasiGX.util.ArcGISRest","id":"static-method-createOlLayerFromArcGISRest","meta":{"static":true}},{"name":"getArcGISRestRootUrl","tagname":"method","owner":"BasiGX.util.ArcGISRest","id":"static-method-getArcGISRestRootUrl","meta":{"static":true}},{"name":"isArcGISRestUrl","tagname":"method","owner":"BasiGX.util.ArcGISRest","id":"static-method-isArcGISRestUrl","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.ArcGISRest","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.ArcGISRest</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ArcGISRest.html#BasiGX-util-ArcGISRest' target='_blank'>ArcGISRest.js</a></div></pre><div class='doc-contents'><p>ArcGISRest Util</p>\n\n<p>Some methods to work with ArcGISRest</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-createOlLayerFromArcGISRest' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.ArcGISRest'>BasiGX.util.ArcGISRest</span><br/><a href='source/ArcGISRest.html#BasiGX-util-ArcGISRest-static-method-createOlLayerFromArcGISRest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.ArcGISRest-static-method-createOlLayerFromArcGISRest' class='name expandable'>createOlLayerFromArcGISRest</a>( <span class='pre'>layerConfig, useDefaultHeader</span> ) : Ext.Promise<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Creates an olLayer from an ArcGISRest layer config. ...</div><div class='long'><p>Creates an olLayer from an ArcGISRest layer config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConfig</span> : object<div class='sub-desc'><p>The layer config to base the olLayer on.</p>\n<ul><li><span class='pre'>service</span> : object<div class='sub-desc'><p>The service config info.</p>\n<ul><li><span class='pre'>type</span> : string<div class='sub-desc'><p>The service type.</p>\n</div></li><li><span class='pre'>name</span> : string<div class='sub-desc'><p>The service name.</p>\n</div></li></ul></div></li><li><span class='pre'>url</span> : string<div class='sub-desc'><p>The service url.</p>\n</div></li></ul></div></li><li><span class='pre'>useDefaultHeader</span> : boolean<div class='sub-desc'><p>Whether to use the default\nXhr header.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Promise</span><div class='sub-desc'><p>A promise containing the olLayer.</p>\n</div></li></ul></div></div></div><div id='static-method-getArcGISRestRootUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.ArcGISRest'>BasiGX.util.ArcGISRest</span><br/><a href='source/ArcGISRest.html#BasiGX-util-ArcGISRest-static-method-getArcGISRestRootUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.ArcGISRest-static-method-getArcGISRestRootUrl' class='name expandable'>getArcGISRestRootUrl</a>( <span class='pre'>url</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Get the root URL of the ArcGISRest service. ...</div><div class='long'><p>Get the root URL of the ArcGISRest service.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : string<div class='sub-desc'><p>The URL to get the root URL from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The root URL.</p>\n</div></li></ul></div></div></div><div id='static-method-isArcGISRestUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.ArcGISRest'>BasiGX.util.ArcGISRest</span><br/><a href='source/ArcGISRest.html#BasiGX-util-ArcGISRest-static-method-isArcGISRestUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.ArcGISRest-static-method-isArcGISRestUrl' class='name expandable'>isArcGISRestUrl</a>( <span class='pre'>url</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Check if a url is an ArcGISRest URL. ...</div><div class='long'><p>Check if a url is an ArcGISRest URL.</p>\n\n<p>ArcGISRest URL must contain a path called '/services/'.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : string<div class='sub-desc'><p>The url to check.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>True, if url is ArcGISRest URL. False otherwise.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});