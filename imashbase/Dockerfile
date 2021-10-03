FROM fusuf/whatsasena:latest

RUN git clone https://github.com/COOL1BOT1/IMASH-Z-BOT-2 /root/IMASH-Z-BOT-2
WORKDIR /root/IMASH-Z-BOT-2/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
