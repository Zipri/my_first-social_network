import React from "react";
import s from './FAQ.module.css'

const linkYoutube = "https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8"
const linkBack = "https://social-network.samuraijs.com/"
const linkKey = "https://social-network.samuraijs.com/account/"

const FAQ = () => <div className={s.faqBody}>
    <div className={s.fagBodyChild}>
		<div className={s.faqItem}>
			<h1>Что это за приложение и зачем оно?</h1>
			<w>Cactus Network</w> - социальная сеть, созданная в рамках курса
			<a href={linkYoutube} target={"_blank"}><q> ReactJS - путь самурая</q></a>. По сути -
			это итоговая работа, демонстрирующая владение навыками web-разработки.
		</div>
		<div className={s.faqItem}>
			<h1>Почему нет возможности отправить сообщение или добавить пост?</h1>
			Данная работа представляет исключительно клиентскую часть web-приложения.
			В качестве серверной - был выбран
			<a href={linkBack} target={"_blank"}> сервер</a>,
			предлагаемый автором указанного выше курса,
			находящийся в свободном доступе для проходящих курс людей.
			Функционал приложения в большей степени утверждается его серверной частью.
			В предлагаемом API нет поддержки отправки сообщений и добавлений постов,
			поэтому и в приложении их нет.
		</div>
		<div className={s.faqItem}>
			<h1>Зачем нужен <w>API-KEY</w></h1>
			Для получения возможности использовать доступный функционал приложения
			необходимо на <a href={linkKey} target={"_blank"}> странице</a> сгенерировать этот
			ключ. После чего, перед каким-то действием на странице - добавить его в соотвествующее поле
			в шапке web-страницы.
		</div>
		<div className={s.faqItem}>
			<h1>Будет ли это приложение развиваться дальше?</h1>
			Нет, приложения является лишь демонстрацией моих навыков на конкретный период жизни.
			Но в будущем могут пригодиться элементы, разработанные здесь.
		</div>
	</div>
</div>


export default FAQ;