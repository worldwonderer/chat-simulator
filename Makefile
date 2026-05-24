.PHONY: help verify verify-repo verify-ai verify-visual build

help:
	@echo "Available targets:"
	@echo "  verify        Run full repository, AI, build, and visual verification"
	@echo "  verify-repo   Check repository structure and source data links"
	@echo "  verify-ai     Verify AI backend integration"
	@echo "  verify-visual Run visual baseline verification"
	@echo "  build         Build the app"

verify:
	npm run verify

verify-repo:
	python3 scripts/check_repository.py

verify-ai:
	npm run verify:ai

verify-visual:
	python3 scripts/verify_visual_baseline.py

build:
	npm run build
