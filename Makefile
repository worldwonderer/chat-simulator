.PHONY: help verify verify-repo verify-mirror verify-source build-source serve-mirror

help:
	@echo "Available targets:"
	@echo "  verify        Run repository and source verification"
	@echo "  verify-repo   Check repository structure and expected assets"
	@echo "  verify-mirror Run exact mirror fidelity verification"
	@echo "  verify-source Run recovered source fidelity verification"
	@echo "  build-source  Build recovered-app"
	@echo "  serve-mirror  Serve exact mirror on :4173"

verify: verify-repo build-source

verify-repo:
	python3 scripts/check_repository.py

verify-mirror:
	python3 scripts/verify_fidelity.py

verify-source:
	python3 scripts/verify_recovered_source_fidelity.py

build-source:
	cd recovered-app && npm run build

serve-mirror:
	./scripts/serve_exact_mirror.sh
