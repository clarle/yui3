YUI.add("search",function(b){var c=b.Lang,d=b.Node,g=b.Array,h=b.one("#main-search .search-input"),i;h.plug(b.Plugin.AutoComplete,{maxResults:20,scrollIntoView:true,activateFirstItem:true,align:{node:h,points:["tr","br"]},width:"300px",resultHighlighter:"phraseMatch",resultFormatter:f,resultListLocator:"data.results",resultTextLocator:a,source:"/api/v1/search/suggest?q={query}&count={maxResults}",on:{select:e}});i='<div class="result {_type}"><a href="{url}"><h3 class="title">{name}</h3><span class="type">{_type}</span><div class="description">{description}</div><span class="className">{class}</span></a></div>';function f(k,j){return g.map(j,function(l){var m=b.merge(l.raw),n=m.description||"";n=d.create("<div>"+n+"</div>").get("text");if(n.length>65){n=b.Escape.html(n.substr(0,65))+" &hellip;"}else{n=b.Escape.html(n)}m["class"]||(m["class"]="");m.description=n;m.name=l.highlighted;return c.sub(i,m)})}function a(j){return j.displayName||j.name}function e(k){var j=k.originEvent?k.originEvent.button:null;k.preventDefault();if(j===1||j>3){b.config.win.location=k.result.raw.url}this.hide()}},"3.4.1",{requires:["autocomplete","autocomplete-highlighters","node-pluginhost"]});
YUI.add("hoverable",function(e){var d=".hoverable",b=".hoverable-default",a=".hoverable-group";function c(f){this.initializer(f)}c.prototype={initializer:function(f){this.config=f=e.merge({hoverClass:"hover",hoverDelay:200,srcNode:e.config.doc},f||{});f.srcNode=e.one(f.srcNode);this.bindUI();this.renderUI()},bindUI:function(){var f=this.config.srcNode;f.delegate("hover",this._onHoverOver,this._onHoverOut,d,this)},renderUI:function(){var f=this.config.srcNode;f.all(a+" "+b).addClass(this.config.hoverClass)},addHover:function(f){var g=f.ancestor(a),h=this.config.hoverClass;if(g){g.all(d).removeClass(h)}f.addClass(h)},removeHover:function(f){var g=f.ancestor(a),h=this.config.hoverClass;f.removeClass(h);if(g){g.all(b).addClass(h)}},_onHoverOut:function(g){var f=this;clearTimeout(this._hoverTimeout);this._hoverTimeout=setTimeout(function(){f.removeHover(g.currentTarget)},this.config.hoverDelay)},_onHoverOver:function(f){clearTimeout(this._hoverTimeout);this.addHover(f.currentTarget)}};e.Hoverable=c},"3.4.0",{requires:["event-hover","node-base","node-event-delegate"]});
(function(){var b=navigator.userAgent,c="",a="";if(/windows/i.test(b)){a="pc";c="win"}else{if(/macintosh/i.test(b)){a="mac";c="osx"}else{if(/ios/i.test(b)){c="ios";if(/(?:iphone|ipod)/i.test(b)){a="iphone mac"}else{if(/ipad/i.test(b)){a="ipad mac"}}}else{if(/linux/i.test(b)){if(/android/i.test(b)){a="android pc"}else{a="pc"}c="linux"}}}}document.documentElement.className+=" "+a+" "+c}());YUI().use("hoverable","search",function(b){var a=new b.Hoverable({hoverClass:"nav-tab-hover",srcNode:"#main-nav"})});