# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.154.0/containers/ubuntu/.devcontainer/base.Dockerfile

# [Choice] Ubuntu version: bionic, focal
ARG VARIANT="focal"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt update && export DEBIAN_FRONTEND=noninteractive \
    && apt -y install --no-install-recommends \
    build-essential \
    vim
RUN git clone https://github.com/anyenv/anyenv ~/.anyenv \
    && echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bashrc \
    && echo  'eval "$(anyenv init -)"' >> ~/.bashrc \
    && anyenv install --init \
    && anyenv install nodenv \
    && exec $SHELL -l
RUN mkdir -p $(anyenv root)/plugings \
    && git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update
RUN mkdir -p "$(nodenv root)"/plugins \
    && git clone https://github.com/nodenv/nodenv-default-packages.git $(nodenv root)/plugins/nodenv-default-packages
RUN touch $(nodenv root)/default-packages \
    && echo "yarn\ntypescript\nts-node\ntypesync" > $(nodenv root)/default-packages

