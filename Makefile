# Makefile

install: # Выполняется установка зависимостей
				npm ci
publish: # Опубликовать пакет
				npm publish --dry-run
lint: # Запустить линтер на корневой директории
			npx eslint .
brain-games: # Запустить brain-games
				node bin/brain-games.js
