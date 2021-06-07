(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(e,r,n){"use strict";n.r(r);var a=n(44),t=Object(a.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"lab02-consumer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lab02-consumer"}},[e._v("#")]),e._v(" Lab02 - Consumer")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Présenter le projet spring boot")]),e._v(" "),n("ul",[n("li",[e._v("La configuration présente dans le fichier "),n("code",[e._v("application.properties")])]),e._v(" "),n("li",[e._v("L'auto configuration de "),n("code",[e._v("ConsumerFactory<String, String>")])])])]),e._v(" "),n("li",[n("p",[e._v("Compléter la méthode `KafkaRestConsumer#consume()``")]),e._v(" "),n("ul",[n("li",[n("em",[e._v("create consumer")])]),e._v(" "),n("li",[n("em",[e._v("consumer close")])]),e._v(" "),n("li",[n("em",[e._v("subscribe on topic")])]),e._v(" "),n("li",[n("em",[e._v("poll and for each")])]),e._v(" "),n("li",[n("em",[e._v("send from emitter")])]),e._v(" "),n("li",[n("em",[e._v("close again")])])])]),e._v(" "),n("li",[n("p",[e._v("Faire la démo avec le front "),n("code",[e._v("http://localhost:8091")])])]),e._v(" "),n("li",[n("p",[e._v("Expliquer, jouer avec le wait, expliquer lag dans akhq, montrer le topic "),n("code",[e._v("__consumer_offset")])])]),e._v(" "),n("li",[n("p",[e._v("Pour builder et démarrer le container")])])]),e._v(" "),n("div",{staticClass:"language-console extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker build -t vp-consumer .\ndocker run --name vp-consumer --network=tz-kafka-network -d vp-consumer\n")])])]),n("ul",[n("li",[n("p",[e._v("Annotation "),n("code",[e._v("@KafkaListener")])]),e._v(" "),n("ul",[n("li",[e._v("Le "),n("code",[e._v("@KafkaListener")]),e._v(" est une annotation pour désigner une méthode comme écouteur/consummer.")])])]),e._v(" "),n("li",[n("p",[e._v("Principe de Dead-Letter Topic (DLT)")]),e._v(" "),n("ul",[n("li",[e._v("Vous pouvez configurer un handler (ex : "),n("code",[e._v("SeekToCurrentErrorHandler")]),e._v(") avec un récupérateur d'enregistrements\nlorsque le nombre maximal d'échecs est atteint pour un record")]),e._v(" "),n("li",[e._v("Spring-Kafka fournit également le "),n("code",[e._v("DeadLetterPublishingRecoverer")]),e._v(", qui publie le message d'échec dans un autre\nrubrique")]),e._v(" "),n("li",[e._v("cf. "),n("a",{attrs:{href:"./consumer/src/main/java/com/zenika/kafka/consumer/config/KafkaConfigListener.java"}},[e._v("KafkaConfigListener")])])])]),e._v(" "),n("li",[n("p",[e._v("Pour utiliser l'annotation "),n("code",[e._v("@KafkaListener")]),e._v(" et le principe de Dead-Letter Topic, il faut activer le profil\nSpring "),n("code",[e._v("listener")]),e._v(", le listener sur le topic "),n("code",[e._v("vehicle-positions")]),e._v(" va générer une exception tous les records avec un\noffset pair, pour rediriger ce record sur une DLT "),n("code",[e._v("vehicle-positions.DLT")]),e._v(".")]),e._v(" "),n("ul",[n("li",[e._v("cf. "),n("a",{attrs:{href:"./consumer/src/main/java/com/zenika/kafka/consumer/service/KafkaListenerConsumer.java"}},[e._v("KafkaListenerConsumer")])])])])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Supprimer le container si déjà présent")]),e._v("\ndocker container stop vp-consumer\ndocker container "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" vp-consumer\ndocker run --name vp-consumer --network"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tz-kafka-network -e "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SPRING_PROFILES_ACTIVE=listener"')]),e._v(" -d vp-consumer\n")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);