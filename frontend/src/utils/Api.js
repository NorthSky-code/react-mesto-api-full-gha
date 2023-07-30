class Api {
	constructor(options) {
		this._baseUrl = options.baseUrl;
		this._headers = options.headers;
	}

	_responseOutput(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	};


	getInfoProfile() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers
		}).then(this._responseOutput)
	}

	getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers
		}).then(this._responseOutput)
	}

	editInfoProfile({ name, about }) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name,
				about
			})
		}).then(this._responseOutput)
	}

	addCard({ name, link }) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name,
				link
			})
		}).then(this._responseOutput)
	}

	editProfileAvatar({ avatar }) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar,
			})
		}).then(this._responseOutput)
	}

	deleteCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		}).then(this._responseOutput)
	}

	changeLikeCardStatus(id, isLiked) {
		return fetch(`${this._baseUrl}/cards/${id}/likes`, {
			method: isLiked ? 'PUT' : 'DELETE',
			headers: this._headers,
		}).then(this._responseOutput)
	}

}

const token = localStorage.getItem('token');

const api = new Api({
	baseUrl: 'http://api.northsky.students.nomoreparties.co',
	headers: {
		authorization: `Bearer ${token}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export default api;