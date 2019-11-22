<!DOCTYPE html>
<html lang="pt-br">
   <?php include("includes/head.php"); ?>
   <?php include("includes/header.php"); ?>
   <main class="main">
      <div class="container">
         <div class="row">
            <div class="col-12">
                <div class="cupons">
                  <div class="cupons--filter" style="display: none;">
                     <button id="removeFilter" data-action>Remover Filtros</button>
                     <p class="fltnt" style="display: none;"></p>
                  </div>
                  <div id="cupons--messages" style="display: none;">
                     <p id="cupons--messages-success"></p>
                     <p id="cupons--messages-error"></p>
                  </div>
                  <ul class="cupons--list">
                  </ul>
                  <div class="moreCupoms" style="display: none;">
                     <button id="seeMore">Ver mais cupons</button>
                  </div>
                </div>
            </div>
         </div>
         <div class="modal" id="modal-reward" style="display: none;">
            <div class="modal--container">
               <div class="modal--header">
                  <h1>Estamos quase lá</h1>
                  <i class="fas fa-times" id="close"></i>
               </div>
               <div class="modal--content">
                  <h3>Copie seu código</h3>
                  <div class="cupomCode--area">
                     <input type="text" id="cupomCode" readonly></input>
                     <button id="copyToClipboard"><i class="fas fa-copy"></i></button>
                  </div>
               </div>
               <div class="modal--footer">
               </div>
            </div>
         </div>
      </div>
   </main>
   <?php include("includes/footer.php"); ?>
   </body>
</html>