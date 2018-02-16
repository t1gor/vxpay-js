import fs   from 'fs'
import path from 'path'

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
}
