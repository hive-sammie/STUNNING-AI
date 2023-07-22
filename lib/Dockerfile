FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Khadher555/STUNNING-AI /root/STUNNING
WORKDIR /root/STUNNING/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
