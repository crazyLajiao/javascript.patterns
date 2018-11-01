//懒汉式
var Singleton = (function() {
	var uniqueInstance = null  //存储实例
	var singletonData = ''    //单例的属性
	
	var Singleton = function() {}

	return {
		getInstance(){
			if(uniqueInstance===null){
				uniqueInstance = new Singleton()
			}
			return uniqueInstance
		},
		singletonOperation() {
			//功能处理
		},
		getSingletonData() {
			return singletonData
		}
	}
}())

// 饿汉式
var Singleton = (function() {
	var uniqueInstance = new Singleton()
	var singletonData = ''
	
	function Singleton() {}

	return {
		getInstance() {
			return uniqueInstance
		},
		singletonOperation() {
			//功能处理
		},
		getSingletonData() {
			return singletonData
		}
	}

}())