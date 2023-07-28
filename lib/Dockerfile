FROM quay.io/khadherinc/khadherinc
RUN git clone https://github.com/Khadher555/STUNNING-AI /root/STUNNINGAI
WORKDIR /root/STUNNINGAI/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
