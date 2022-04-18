FROM node:12-alpine

COPY . /workspace
WORKDIR /workspace
RUN npm install --production

EXPOSE 30010

CMD ["npm", "run", "start"]
