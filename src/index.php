<!DOCTYPE html>
<html lang="pt-br">
   <?php include("includes/head.php"); ?>
   <?php include("includes/header.php"); ?>
   <main>
      <div class="container">
         <div class="row">
            <div class="col-12">
               <div class="filtros">
                    <span class="prev">
                        <i class="fas fa-chevron-left"></i>
                    </span>
                     <ul class="filtroslk">
                        <li class="filtro-es" id="kitberco" data-action>
                           <figure>
                              <img src="assets/img/bercofiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Kit Berço</p>
                        </li>
                        <li class="filtro-es" id="quartodebebe" data-action>
                           <figure>
                              <img src="assets/img/quartofiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Quarto de Bebê</p>
                        </li>
                        <li class="filtro-es" id="bolsas" data-action>
                           <figure>
                              <img src="assets/img/bolsasfiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Bolsas e Malas</p>
                        </li>
                        <li class="filtro-es" id="nichos" data-action>
                           <figure>
                              <img src="assets/img/nichosfiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Nichos</p>
                        </li>
                        <li class="filtro-es" id="roupinhas" data-action>
                           <figure>
                              <img src="assets/img/roupinhafiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Roupinhas</p>
                        </li>
                        <li class="filtro-es" id="cortinas" data-action>
                           <figure>
                              <img src="assets/img/cortinafiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Cortinas</p>
                        </li>
                        <li class="filtro-es" id="poltronas" data-action>
                           <figure>
                              <img src="assets/img/poltronafiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Poltronas</p>
                        </li>
                        <li class="filtro-es" id="cabanas" data-action>
                           <figure>
                              <img src="assets/img/cabanafiltro.png" alt="Filtro"/>
                           </figure>
                           <p>Cabanas</p>
                        </li>
                     </ul>
                    <span class="next">
                        <i class="fas fa-chevron-right"></i>
                    </span>
               </div>
            </div>
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="col-12">
                <div class="cpflt">
                    <button id="rmvflt" data-action>Remover Filtros</button>
                    <p class="fltnt"></p>
                    <ul class="cupons-pR">
                    </ul>
                </div>
            </div>
         </div>
         <div class="row">
            <div class="col-12">
               <div class="more">
                  <button id="vmr">Ver mais cupons</button>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-12">
               <div class="fblgn" id="fblgn">
                  <div class="lgn">
                     <div class="closelgn">
                        <i class="fas fa-times" id="close"></i>
                     </div>
                     <div class="text-oft">
                        <h1>Estamos quase lá</h1>
                        <p>Para habilitar seu cupom, logue com o facebook</p>
                     </div>
                     <div id="fb-root"></div>
                     <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
   <?php include("includes/footer.php"); ?>