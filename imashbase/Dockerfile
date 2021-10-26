FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Z-BOT-V-2/IMASHNIDUSHA /root/IMASHNIDUSHA/
WORKDIR /root/IMASHNIDUSHA/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
