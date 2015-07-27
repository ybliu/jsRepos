/**
 * getNextNode
 *寻找兄弟节点
 *用 getNextNode 函数封装 IE 和 firefox 的差异
 */

function getNextNode(node){
	node = typeof node == "string" ? document.getElementById(node) : node;
	var nextNode = node.nextSibling;
	if(!nextNode) 
		return null;
	if(!document.all){//document.all ie下面不可用，火狐等可以用
		while(true){
		    if(nextNode.nodeType == 1){
				break;
		    } else {
				if(nextNode.nextSibling){
					nextNode = nextNode.nextSibling;
				} else {
					break;
				}
			}
		}
	}
	return nextNode;
};
/* getNextNode Example
<script type="text/javascript">
      var nextNode = getNextNode("item1");
      alert(nextNode.id);
      var nextNode2 = getNextNode("item2");
      alert(nextNode2.id);
</script>
 */

/**
 * setOpacity
 * 透明度 ie通过滤镜 火狐通过css的opacity
 */
 function setOpacity(node, level){
	node = typeof node == "string" ? document.getElementById(node) : node;
	if (document.all){
		node.style.filter = 'alpha(opacity=' + level + ')';//火狐
	} else {
		node.style.opacity = level / 100;//ie
	}
}
/**
 * 去掉两边空格
 * @param  {[type]} ostr [description]
 * @return {[type]}      [description]
 */
function trim(ostr){
return ostr.replace(/^\s+|\s+$/g,"");
}
/**
 * 定义类型判断函数
 */
function isNumber(s){
	return !isNaN(s);
}
function isString(s){
	return typeof s == "string";
}
function isBoolean(s){
	return typeof s == "boolean";
}
function isFunction(s){
	return typeof s == "function";
}
function isNull(s){
	return s == null;
}
function isUndefined(s){
	return typeof s == "undefined";
}
function isEmpty(s){
	return /^\s*$/.test(s);
}
function isArray(s){
	return s instanceof Array;
}
/**
 * getId函数
 */
function get(node){
node = typeof node == "string" ? document.getElementById(node) : node;
return node;
}
 /**
  * 
  * @param  {[type]} str  [description]
  * @param  {[type]} root [description]
  * @param  {[type]} tag  [description]
  * @return {[type]}      [description]
  */
function getElementsByClassName(str,root,tag){
	if(root){
		root = typeof root == "string" ? document.getElementById(root) : root;
	} else {
		root = document.body;
	}
	tag = tag || "*";
	var els = root.getElementsByTagName(tag),arr = [];
	for(var i=0,n=els.length;i<n;i++){
		for(var j=0,k=els[i].className.split(" "),l=k.length;j<l;j++){
			if(k[j] == str){
			arr.push(els[i]);
			break;
			}
		}
	}
	return arr;
}

/**
 * 
 */
function extend(subClass,superClass){
	var F = function(){};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
	subClass.superclass = superClass.prototype;
	if(superClass.prototype.constructor == Object.prototype.constructor){
		superClass.prototype.constructor = superClass;
	}
}
/**
 * example
 */
/*function Animal(name){
this.name = name;
this.type = "animal"
}
Animal.prototype = {
say : function(){
alert("I'm a(an) " + this.type + " , my name is " + this.name);
}
}
function Bird(name){
this.constructor.superclass.constructor.apply(this,arguments);
this.type = "bird"
}
extend(Bird,Animal);
Bird.prototype.fly = function(){
alert("I'm flying");
}*/