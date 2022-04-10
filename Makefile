# Makefile

install: # Выполняется установка зависимостей
				npm ci
brain-games: # Запустить brain-games
				node bin/brain-games.js
publish: # Опубликовать пакет
				npm publish --dry-run
lint: # Запустить линтер на корневой директории
			npx eslint .