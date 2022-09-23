.DEFAULT_GOAL := start
CONDA_ENV=loan-app-be

setup:
	@conda create -y -n ${CONDA_ENV} python=3.9.12 && \
	source $$(conda info --base)/etc/profile.d/conda.sh && \
	conda activate ${CONDA_ENV} && \
	python3 -m pip install -U -r requirements.txt

start:
	@uvicorn app.main:app --port 4000 --reload