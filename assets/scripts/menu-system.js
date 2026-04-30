// Menu System Controller

window.menuSystem = {
	isOpen: false,
	currentMenu: null,
	searchCallback: null,
	levelSelectCallback: null,
	featuredCallback: null,

	init: function() {
		this.setupEventListeners();
	},

	setupEventListeners: function() {
		// Search Menu Events
		const searchCancelBtn = document.getElementById('searchCancelBtn');
		const searchLoadBtn = document.getElementById('searchLoadBtn');
		const searchInput = document.getElementById('searchInput');

		if (searchCancelBtn) {
			searchCancelBtn.addEventListener('click', () => this.closeSearch());
		}

		if (searchLoadBtn) {
			searchLoadBtn.addEventListener('click', () => this.handleSearch());
		}

		if (searchInput) {
			searchInput.addEventListener('keypress', (e) => {
				if (e.key === 'Enter') {
					this.handleSearch();
				}
			});
		}

		// Level Select Menu Events
		const levelSelectCancelBtn = document.getElementById('levelSelectCancelBtn');
		if (levelSelectCancelBtn) {
			levelSelectCancelBtn.addEventListener('click', () => this.closeLevelSelect());
		}

		// Featured Menu Events
		const featuredCancelBtn = document.getElementById('featuredCancelBtn');
		if (featuredCancelBtn) {
			featuredCancelBtn.addEventListener('click', () => this.closeFeatured());
		}

		// Close on background click
		const menuContainer = document.getElementById('menuContainer');
		if (menuContainer) {
			menuContainer.addEventListener('click', (e) => {
				if (e.target === menuContainer) {
					this.hide();
				}
			});
		}
	},

	show: function(menuId) {
		const container = document.getElementById('menuContainer');
		const menu = document.getElementById(menuId);
		if (container && menu) {
			container.style.display = 'block';
			menu.style.display = 'block';
			menu.classList.add('active');
			this.isOpen = true;
			this.currentMenu = menuId;
		}
	},

	hide: function() {
		const container = document.getElementById('menuContainer');
		const menus = container.querySelectorAll('[id$="Menu"]');
		menus.forEach(m => {
			m.style.display = 'none';
			m.classList.remove('active');
		});
		container.style.display = 'none';
		this.isOpen = false;
		this.currentMenu = null;
	},

	// Search Menu Functions
	openSearch: function(callback) {
		this.searchCallback = callback;
		this.show('searchMenu');
		setTimeout(() => {
			const input = document.getElementById('searchInput');
			if (input) {
				input.focus();
				input.value = '';
			}
		}, 100);
	},

	closeSearch: function() {
		this.hide();
	},

	handleSearch: function() {
		const searchInput = document.getElementById('searchInput');
		if (searchInput) {
			const levelId = searchInput.value.trim().replace(/\D/g, '');
			if (levelId) {
				if (this.searchCallback) {
					this.searchCallback(levelId);
				} else if (window.loadLevelById) {
					window.loadLevelById(levelId);
				}
				this.closeSearch();
			} else {
				alert('Please enter a valid level ID');
			}
		}
	},

	// Level Select Menu Functions
	openLevelSelect: function(levels, callback) {
		this.levelSelectCallback = callback;
		const levelsList = document.getElementById('levelsList');
		if (levelsList) {
			levelsList.innerHTML = '';
			levels.forEach(level => {
				const item = document.createElement('div');
				item.className = 'level-item';
				item.textContent = level.name || level.id;
				item.addEventListener('click', () => {
					if (this.levelSelectCallback) {
						this.levelSelectCallback(level);
					} else if (window.loadLevel) {
						window.loadLevel(level);
					}
					this.closeLevelSelect();
				});
				levelsList.appendChild(item);
			});
		}
		this.show('levelSelectMenu');
	},

	closeLevelSelect: function() {
		this.hide();
	},

	// Featured Menu Functions
	openFeatured: function(featuredLevels, callback) {
		this.featuredCallback = callback;
		const featuredList = document.getElementById('featuredList');
		if (featuredList) {
			featuredList.innerHTML = '';
			featuredLevels.forEach(level => {
				const item = document.createElement('div');
				item.className = 'featured-item';
				
				const title = document.createElement('div');
				title.className = 'featured-item-title';
				title.textContent = level.name || 'Featured Level';
				item.appendChild(title);

				if (level.description) {
					const desc = document.createElement('div');
					desc.className = 'featured-item-description';
					desc.textContent = level.description;
					item.appendChild(desc);
				}

				item.addEventListener('click', () => {
					if (this.featuredCallback) {
						this.featuredCallback(level);
					} else if (window.loadLevel) {
						window.loadLevel(level);
					}
					this.closeFeatured();
				});
				featuredList.appendChild(item);
			});
		}
		this.show('featuredMenu');
	},

	closeFeatured: function() {
		this.hide();
	},

	// Utility Functions
	isMenuOpen: function() {
		return this.isOpen;
	},

	getCurrentMenu: function() {
		return this.currentMenu;
	}
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		window.menuSystem.init();
	});
} else {
	window.menuSystem.init();
}
