.PHONY: help verify verify-repo verify-mirror verify-source build serve-mirror

help:
	@echo "Available targets:"
	@echo "  verify        Run repository and app verification"
	@echo "  verify-repo   Check repository structure and source data links"
	@echo "  verify-mirror Run exact mirror fidelity verification"
	@echo "  verify-source Run source app fidelity verification"
	@echo "  build         Build the app"
	@echo "  serve-mirror  Serve exact mirror on :4173"

verify: verify-repo build

verify-repo:
	python3 scripts/check_repository.py

verify-mirror:
	python3 scripts/verify_fidelity.py

verify-source:
	python3 scripts/verify_source_fidelity.py

build:
	npm run build

serve-mirror:
	./scripts/serve_exact_mirror.sh
