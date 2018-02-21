import fs      from 'fs'
import path    from 'path'
import {JSDOM} from 'jsdom'
import {URL}   from 'url'

export default class VXPayTestFx {
	/**
	 * @param {String} name
	 * @return {String}
	 */
	static getMessage(name) {
		const fixtures = path.resolve(__dirname, './message');
		return fs.readFileSync(path.resolve(fixtures, name + '.json')).toString();
	}

	/**
	 * Just DRY
	 * @param {string} whatever
	 * @return {string}
	 */
	static json(whatever) {
		return JSON.stringify(JSON.parse(whatever));
	}

	/**
	 * @return {Window}
	 */
	static getWindow() {
		const testDocument = "<!DOCTYPE html><html><body id='body'>test</body></html>",
		      window       = new JSDOM(testDocument).window;

		// inject URL (from Node)
		window.URL = URL;

		return window;
	}
}
