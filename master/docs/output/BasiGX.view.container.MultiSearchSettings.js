Ext.data.JsonP.BasiGX_view_container_MultiSearchSettings({"tagname":"class","name":"BasiGX.view.container.MultiSearchSettings","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MultiSearchSettings.js","href":"MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings"}],"extends":"Ext.container.Container","requires":["BasiGX.util.Layer","Ext.Button","Ext.form.FieldContainer","Ext.form.field.Checkbox"],"aliases":{"widget":["basigx-container-multisearchsettings"]},"alternateClassNames":[],"mixins":[],"uses":[],"members":[{"name":"combo","tagname":"cfg","owner":"BasiGX.view.container.MultiSearchSettings","id":"cfg-combo","meta":{"private":true}},{"name":"autoScroll","tagname":"property","owner":"BasiGX.view.container.MultiSearchSettings","id":"property-autoScroll","meta":{"private":true}},{"name":"constrainHeader","tagname":"property","owner":"BasiGX.view.container.MultiSearchSettings","id":"property-constrainHeader","meta":{"private":true}},{"name":"items","tagname":"property","owner":"BasiGX.view.container.MultiSearchSettings","id":"property-items","meta":{"private":true}},{"name":"layout","tagname":"property","owner":"BasiGX.view.container.MultiSearchSettings","id":"property-layout","meta":{"private":true}},{"name":"padding","tagname":"property","owner":"BasiGX.view.container.MultiSearchSettings","id":"property-padding","meta":{"private":true}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.container.MultiSearchSettings","id":"property-viewModel","meta":{"private":true}},{"name":"addLayers","tagname":"method","owner":"BasiGX.view.container.MultiSearchSettings","id":"method-addLayers","meta":{}},{"name":"getCombo","tagname":"method","owner":"BasiGX.view.container.MultiSearchSettings","id":"method-getCombo","meta":{}},{"name":"initComponent","tagname":"method","owner":"BasiGX.view.container.MultiSearchSettings","id":"method-initComponent","meta":{}},{"name":"onObjectSearchCbChange","tagname":"method","owner":"BasiGX.view.container.MultiSearchSettings","id":"method-onObjectSearchCbChange","meta":{}},{"name":"saveSettings","tagname":"method","owner":"BasiGX.view.container.MultiSearchSettings","id":"method-saveSettings","meta":{}},{"name":"setCombo","tagname":"method","owner":"BasiGX.view.container.MultiSearchSettings","id":"method-setCombo","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.container.MultiSearchSettings","short_doc":"A container showing settings for the multisearch including switching\n gazetter or wfs search on and off, limit search...","component":false,"superclasses":["Ext.container.Container"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.container.Container<div class='subclass '><strong>BasiGX.view.container.MultiSearchSettings</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Layer' rel='BasiGX.util.Layer' class='docClass'>BasiGX.util.Layer</a></div><div class='dependency'>Ext.Button</div><div class='dependency'>Ext.form.FieldContainer</div><div class='dependency'>Ext.form.field.Checkbox</div><h4>Files</h4><div class='dependency'><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings' target='_blank'>MultiSearchSettings.js</a></div></pre><div class='doc-contents'><p>A container showing settings for the multisearch including switching\n gazetter or wfs search on and off, limit search results to visible extent\n and configure layers for wfs search.\n This class is used by <a href=\"#!/api/BasiGX.view.form.field.MultiSearchCombo\" rel=\"BasiGX.view.form.field.MultiSearchCombo\" class=\"docClass\">BasiGX.view.form.field.MultiSearchCombo</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-combo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-cfg-combo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-cfg-combo' class='name expandable'>combo</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoScroll' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-property-autoScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-property-autoScroll' class='name expandable'>autoScroll</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-constrainHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-property-constrainHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-property-constrainHeader' class='name expandable'>constrainHeader</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-property-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-property-items' class='name expandable'>items</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-property-layout' class='name expandable'>layout</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;fit&#39;</code></p></div></div></div><div id='property-padding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-property-padding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-property-padding' class='name expandable'>padding</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>20</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {generalSettingsLabel: &#39;Allgemeine Einstellungen&#39;, limitCboxLabel: &#39;Auf den sichtbaren Kartenbereich einschränken&#39;, gazetteerLabel: &#39;Gazetteer Suche verwenden&#39;, objectSearchLabel: &#39;Objekt Suche verwenden&#39;, objectSearchLayersLabel: &#39;Layer für Objektsuche&#39;, saveBtnText: &#39;Sucheinstellungen speichern&#39;, maxResultCountText: &#39;Maximale Anzahl der Ergebnisse&#39;, documentation: &#39;&lt;h2&gt;Multi-Suche&lt;/h2&gt;• Benutzen Sie die &#39; + &#39;Mutlisuche, um nach beliebigen Begriffen über mehrere &#39; + &#39;Datenquellen hinweg gleichzeitig zu suchen.&lt;br&gt;• Über &#39; + &#39;die Einstellungen können Sie das Suchverhalten genauer steuern&#39;}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addLayers' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-method-addLayers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-method-addLayers' class='name expandable'>addLayers</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>called by OnBeforerender listener to get all configurable search layers\nto display them in the settings window ...</div><div class='long'><p>called by OnBeforerender listener to get all configurable search layers\nto display them in the settings window</p>\n</div></div></div><div id='method-getCombo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-cfg-combo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-method-getCombo' class='name expandable'>getCombo</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of combo. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.container.MultiSearchSettings-cfg-combo\" rel=\"BasiGX.view.container.MultiSearchSettings-cfg-combo\" class=\"docClass\">combo</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onObjectSearchCbChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-method-onObjectSearchCbChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-method-onObjectSearchCbChange' class='name expandable'>onObjectSearchCbChange</a>( <span class='pre'>cb, checked</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disables configuration of searchable layers if \"Object search\" checkbox\nis unchecked. ...</div><div class='long'><p>Disables configuration of searchable layers if \"Object search\" checkbox\nis unchecked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Ext.form.field.Checkbox<div class='sub-desc'><p>Object search checkbox.</p>\n</div></li><li><span class='pre'>checked</span> : boolean<div class='sub-desc'><p>Whether the checkbox is checked.</p>\n</div></li></ul></div></div></div><div id='method-saveSettings' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-method-saveSettings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-method-saveSettings' class='name expandable'>saveSettings</a>( <span class='pre'>btn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by \"save\"-button handler to persist the settings. ...</div><div class='long'><p>Called by \"save\"-button handler to persist the settings.</p>\n\n<p>This includes switching the gazetter or wfs search on and off, limiting\nsearch results to visible map extent and configuring search layers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>btn</span> : Ext.button.Button<div class='sub-desc'><p>The \"save\"-button.</p>\n</div></li></ul></div></div></div><div id='method-setCombo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.container.MultiSearchSettings'>BasiGX.view.container.MultiSearchSettings</span><br/><a href='source/MultiSearchSettings.html#BasiGX-view-container-MultiSearchSettings-cfg-combo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.container.MultiSearchSettings-method-setCombo' class='name expandable'>setCombo</a>( <span class='pre'>combo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of combo. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.container.MultiSearchSettings-cfg-combo\" rel=\"BasiGX.view.container.MultiSearchSettings-cfg-combo\" class=\"docClass\">combo</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>combo</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});