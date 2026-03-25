export const projectsData = [
  {
    id: 1,
    title: { pt: "FWS (Faster Way Service)", en: "FWS (Faster Way Service)", es: "FWS (Faster Way Service)" },
    image: "/Img_fws/titulo1.jpeg",
    description: { 
      pt: "Sistema para modernizar a gestão da unidade Shell Select.", 
      en: "System developed to modernize the management of the Shell Select unit.",
      es: "Sistema desarrollado para modernizar la gestión de la unidad Shell Select."
    },
    techs: ["HTML", "CSS", "JS", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/NikolasLima29/TCC_FWS",
    demo: "/fws-demo",
    nature: { pt: "TCC Acadêmico", en: "Academic Capstone", es: "TCC Académico" },
    fullDescription: {
      pt: `Desenvolvemos o FWS (Faster Way Service) como TCC de conclusão do Ensino Médio Técnico em Desenvolvimento de Sistemas. É um sistema web de <strong>"Peça e Retire"</strong> para a Shell Select Jardim América, dividido em dois módulos principais:
<br><br>
<ul style="padding-left: 20px; list-style-type: square; margin-bottom: 20px;">
  <li><strong>Sistema para clientes:</strong> Funcionalidades de peça e retire, catálogo de produtos reais, interface personalizada com a identidade da Shell e totalmente responsivo (desktop e mobile).</li>
  <li style="margin-top: 10px;"><strong>Sistema de gerenciamento interno:</strong> Controle de produtos, estoque, vendas e fluxo de caixa, simulando o funcionamento real da loja com validação de regras de negócio.</li>
</ul>
<div style="background: rgba(46, 139, 87, 0.2); padding: 15px; border-left: 4px solid #2e8b57; border-radius: 5px;">
  <strong>Observação:</strong> O sistema foi desenvolvido estritamente como Trabalho de Conclusão de Curso (TCC) baseado em um cliente real, sem fins ou de aplicação comercial.
</div>`,
      en: `We developed the FWS (Faster Way Service) as our High School technical capstone project in Systems Development. It's a <strong>"Click & Collect"</strong> web system tailored for Shell Select Jardim América, split into two main modules:
<br><br>
<ul style="padding-left: 20px; list-style-type: square; margin-bottom: 20px;">
  <li><strong>Client System:</strong> Order-and-collect functionality, real product catalog, fully responsive internal Shell branding UX (desktop and mobile).</li>
  <li style="margin-top: 10px;"><strong>Internal Management ERP:</strong> Product lifecycle, inventory, sales, and complex cash flow algorithms simulating actual business rules functionality.</li>
</ul>
<div style="background: rgba(46, 139, 87, 0.2); padding: 15px; border-left: 4px solid #2e8b57; border-radius: 5px;">
  <strong>Notice:</strong> This system was strictly built as a Capstone Academic Project (TCC) drafted upon a real client's request, strictly for educational validation.
</div>`,
      es: `Desarrollamos el FWS (Faster Way Service) como Trabajo de Conclusión de Curso (TCC) a nivel técnico en Desarrollo de Sistemas. Es un sistema web <strong>"Click & Collect"</strong> para Shell Select Jardim América, dividido en dos módulos principales:
<br><br>
<ul style="padding-left: 20px; list-style-type: square; margin-bottom: 20px;">
  <li><strong>Sistema para el cliente:</strong> Funciones de pedido y retiro, amplio catálogo de productos reales, con una interfaz y estructura visual adaptada (responsivo en todos los dispositivos).</li>
  <li style="margin-top: 10px;"><strong>Gestión Interna:</strong> Control de productos, simulación de inventario de ventas e ingresos, evaluando algoritmos reales aplicados al manejo general.</li>
</ul>
<div style="background: rgba(46, 139, 87, 0.2); padding: 15px; border-left: 4px solid #2e8b57; border-radius: 5px;">
  <strong>Observación:</strong> El sistema fue construido estríctamente como un proyecto TCC con un cliente real solo para validación académica, sin fines comerciales.
</div>`
    },
    descImage: [
      "/Img_fws/sobre1.png",
      "/Img_fws/sobre2.png"
    ],
    developmentProcess: {
      pt: `Liderei uma equipe de 4 desenvolvedores na construção da plataforma, com as seguintes divisões de responsabilidade:
<br><br>
<ul style="padding-left: 20px; list-style-type: square; margin-bottom: 20px;">
  <li><strong>Nikolas (Líder):</strong> Desenvolvimento do backend em PHP, modelagem do Banco de Dados MySQL, auxílio na implementação da responsividade com Bootstrap, hospedagem do sistema e aperfeiçoamento geral da plataforma.</li>
  <li style="margin-top: 10px;"><strong>Rafael (Vice-Líder):</strong> Realização de testes, programação em JavaScript e elaboração da documentação técnica.</li>
  <li style="margin-top: 10px;"><strong>Matheus:</strong> Desenvolvimento em PHP, estruturação do Banco de Dados e implementação da conexão entre os módulos Cliente e Administrador.</li>
  <li style="margin-top: 10px;"><strong>Nathally:</strong> Idealização do design e identidade visual da aplicação, além da construção estrutural em HTML e CSS.</li>
  <li style="margin-top: 10px;"><strong>João Gabriel:</strong> Desenvolvimento em HTML e CSS, documentação geral e responsividade do sistema.</li>
</ul>
<p style="margin-bottom: 0;">Utilizamos versionamento com <strong>Git/GitHub</strong> e o servidor local <strong>Laragon</strong> para bateria de testes antes do deploy final online.</p> <br>`,
      en: `I led a team of 4 developers building the overarching platform architecture with the following attributions:
<br><br>
<ul style="padding-left: 20px; list-style-type: square; margin-bottom: 20px;">
  <li><strong>Nikolas (Lead):</strong> PHP backend development, MySQL Database modeling, overarching architecture, Bootstrap responsiveness integrations, server deployment, and final feature polish.</li>
  <li style="margin-top: 10px;"><strong>Rafael (Vice-Lead):</strong> Q&A testing, JavaScript DOM logic programming, and extensive technical documentation modeling.</li>
  <li style="margin-top: 10px;"><strong>Matheus:</strong> PHP integration workflows, Entity-Relationship alignments, and interconnectivity between the ERP & Client structures.</li>
  <li style="margin-top: 10px;"><strong>Nathally:</strong> Application's aesthetic visual drafting, UI/UX concepting and foundational HTML/CSS structural design.</li>
  <li style="margin-top: 10px;"><strong>João Gabriel:</strong> HTML and CSS development, platform wide responsiveness and general reporting mappings.</li>
</ul>
<p style="margin-bottom: 0;">We adopted <strong>Git/GitHub</strong> for CI/CD versioning cycles and <strong>Laragon</strong> as our robust local testing server grounds.</p> <br>`,
      es: `Lideré un equipo de 4 desarrolladores arquitectando la plataforma con las siguientes responsabilidades:
<br><br>
<ul style="padding-left: 20px; list-style-type: square; margin-bottom: 20px;">
  <li><strong>Nikolas (Líder):</strong> Desarrollo backend en PHP, diseño de BD en MySQL, base arquitectónica general, capacidad responsiva con Bootstrap y depuración final.</li>
  <li style="margin-top: 10px;"><strong>Rafael (Sublíder):</strong> Pruebas de calidad y seguridad, lógica general del DOM en JavaScript integrando documentos técnicos exhaustivos.</li>
  <li style="margin-top: 10px;"><strong>Matheus:</strong> Flujos de trabajo e interconectividad sólida PHP abarcando las infraestructuras de ERP y Módulo de Cliente.</li>
  <li style="margin-top: 10px;"><strong>Nathally:</strong> Fundamentos estéticos de diseño, conceptos UI/UX y creación detallada estructural en CSS y HTML.</li>
  <li style="margin-top: 10px;"><strong>João Gabriel:</strong> Apoyo web integral en CSS, HTML e interfaces responsivas universales para varios dispositivos.</li>
</ul>
<p style="margin-bottom: 0;">Usamos fuertemente <strong>Git/GitHub</strong> para el versionado constante y probamos nuestro entorno local sobre el robusto software servidor de <strong>Laragon</strong>.</p> <br>`
    },
    devImage: [
      "/Img_fws/desenvolvimento1.png",
      "/Img_fws/desenvolvimento2.png"
    ],
    carouselImages: [
      "/Img_fws/titulo1.jpeg",
      "/Img_fws/titulo2.jpeg",
      "/Img_fws/titulo3.png"
    ]
  }
];
