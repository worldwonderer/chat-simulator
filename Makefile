.PHONY: help verify verify-repo verify-visual build

help:
	@echo "Available targets:"
	@echo "  verify        Run repository and app verification"
	@echo "  verify-repo   Check repository structure and source data links"
	@echo "  verify-visual Run visual baseline verification"
	@echo "  build         Build the app"

verify: verify-repo build

verify-repo:
	python3 scripts/check_repository.py

verify-visual:
	python3 scripts/verify_visual_baseline.py

build:
	npm run build
