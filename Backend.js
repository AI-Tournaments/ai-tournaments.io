'use strict'
class Backend{
	static call(module='', data){
		return fetch(new Request(Backend.getBackend()+'?'+module), {method:'POST',body:JSON.stringify(data)}).then(response => response.json());
	}
	static getBackend(){
		let backend = localStorage.getItem('backend');
		return backend === null ? 'https://backend.aitournaments.io' : backend;
	}
	static isOverride(){
		return localStorage.getItem('backend') !== null;
	}
}
