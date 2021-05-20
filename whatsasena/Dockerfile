FROM fusuf/whatsasena:latest

RUN git clone https://github.com/asangabro/watalexa /root/watalexa
WORKDIR /root/watalexa/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
