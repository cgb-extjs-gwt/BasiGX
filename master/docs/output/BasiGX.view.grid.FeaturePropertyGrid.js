Ext.data.JsonP.BasiGX_view_grid_FeaturePropertyGrid({"tagname":"class","name":"BasiGX.view.grid.FeaturePropertyGrid","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"FeaturePropertyGrid.js","href":"FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid"}],"aliases":{"widget":["basigx-grid-featurepropertygrid"]},"alternateClassNames":[],"extends":"Ext.grid.property.Grid","mixins":[],"requires":[],"uses":[],"members":[{"name":"olFeature","tagname":"cfg","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"cfg-olFeature","meta":{"private":true}},{"name":"propertyMapping","tagname":"cfg","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"cfg-propertyMapping","meta":{"private":true}},{"name":"propertyWhiteList","tagname":"cfg","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"cfg-propertyWhiteList","meta":{"private":true}},{"name":"width","tagname":"property","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"property-width","meta":{"private":true}},{"name":"convertToHref","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-convertToHref","meta":{}},{"name":"getOlFeature","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-getOlFeature","meta":{}},{"name":"getPropertyMapping","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-getPropertyMapping","meta":{}},{"name":"getPropertyWhiteList","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-getPropertyWhiteList","meta":{}},{"name":"initComponent","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-initComponent","meta":{}},{"name":"setOlFeature","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-setOlFeature","meta":{}},{"name":"setPropertyMapping","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-setPropertyMapping","meta":{}},{"name":"setPropertyWhiteList","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-setPropertyWhiteList","meta":{}},{"name":"setUpFeatureValues","tagname":"method","owner":"BasiGX.view.grid.FeaturePropertyGrid","id":"method-setUpFeatureValues","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.grid.FeaturePropertyGrid","component":false,"superclasses":["Ext.grid.property.Grid"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.property.Grid<div class='subclass '><strong>BasiGX.view.grid.FeaturePropertyGrid</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid' target='_blank'>FeaturePropertyGrid.js</a></div></pre><div class='doc-contents'><p>FeaturePropertyGrid</p>\n\n<p>A PropertyGrid showing feature values.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-olFeature' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-olFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-olFeature' class='name expandable'>olFeature</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-propertyMapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-propertyMapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyMapping' class='name expandable'>propertyMapping</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-propertyWhiteList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-propertyWhiteList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyWhiteList' class='name expandable'>propertyWhiteList</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-width' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-property-width' class='name expandable'>width</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>300</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-convertToHref' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-method-convertToHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-convertToHref' class='name expandable'>convertToHref</a>( <span class='pre'>value</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Method checks if a value looks like a link and converts it to a\nclickable href ...</div><div class='long'><p>Method checks if a value looks like a link and converts it to a\nclickable href</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><ul>\n<li>the value to check and convert if needed</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>value - the converted html-href string</p>\n</div></li></ul></div></div></div><div id='method-getOlFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-olFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-getOlFeature' class='name expandable'>getOlFeature</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of olFeature. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-olFeature\" rel=\"BasiGX.view.grid.FeaturePropertyGrid-cfg-olFeature\" class=\"docClass\">olFeature</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPropertyMapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-propertyMapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-getPropertyMapping' class='name expandable'>getPropertyMapping</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of propertyMapping. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyMapping\" rel=\"BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyMapping\" class=\"docClass\">propertyMapping</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPropertyWhiteList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-propertyWhiteList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-getPropertyWhiteList' class='name expandable'>getPropertyWhiteList</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of propertyWhiteList. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyWhiteList\" rel=\"BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyWhiteList\" class=\"docClass\">propertyWhiteList</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setOlFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-olFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-setOlFeature' class='name expandable'>setOlFeature</a>( <span class='pre'>olFeature</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of olFeature. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-olFeature\" rel=\"BasiGX.view.grid.FeaturePropertyGrid-cfg-olFeature\" class=\"docClass\">olFeature</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>olFeature</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setPropertyMapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-propertyMapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-setPropertyMapping' class='name expandable'>setPropertyMapping</a>( <span class='pre'>propertyMapping</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of propertyMapping. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyMapping\" rel=\"BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyMapping\" class=\"docClass\">propertyMapping</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyMapping</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setPropertyWhiteList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-cfg-propertyWhiteList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-setPropertyWhiteList' class='name expandable'>setPropertyWhiteList</a>( <span class='pre'>propertyWhiteList</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of propertyWhiteList. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyWhiteList\" rel=\"BasiGX.view.grid.FeaturePropertyGrid-cfg-propertyWhiteList\" class=\"docClass\">propertyWhiteList</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyWhiteList</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setUpFeatureValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.grid.FeaturePropertyGrid'>BasiGX.view.grid.FeaturePropertyGrid</span><br/><a href='source/FeaturePropertyGrid.html#BasiGX-view-grid-FeaturePropertyGrid-method-setUpFeatureValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.grid.FeaturePropertyGrid-method-setUpFeatureValues' class='name expandable'>setUpFeatureValues</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Prepares the values by handling the property whitelist and mapping ...</div><div class='long'><p>Prepares the values by handling the property whitelist and mapping</p>\n</div></div></div></div></div></div></div>","meta":{}});