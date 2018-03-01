import fs      from 'fs'
import path    from 'path'
import {JSDOM} from 'jsdom'
import {URL}   from 'url'

class VXPayTestFx {
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
		const window = new JSDOM(VXPayTestFx.DOC).window;

		// inject URL (from Node)
		window.URL = URL;

		return window;
	}

	/**
	 * @return {Document}
	 */
	static getDocument() {
		return (new JSDOM(VXPayTestFx.DOC)).window.document;
	}
}

VXPayTestFx.DOC = "<!DOCTYPE html><html><body id='body'>test</body></html>";

export default VXPayTestFx;
