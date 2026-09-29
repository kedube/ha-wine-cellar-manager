const WCM_TRANSLATIONS = {
  "en": {
    "cellars": "Cellars",
    "compact": "Compact",
    "all_bottles": "All Bottles",
    "stats": "Stats",
    "wine_name": "Wine name",
    "producer": "Producer",
    "varietal": "Varietal",
    "region": "Region",
    "country": "Country",
    "vintage": "Vintage",
    "type": "Type",
    "price": "Price",
    "rating": "Rating",
    "notes": "Notes",
    "shelf": "Shelf",
    "front": "Front",
    "back": "Back",
    "consume": "Consume",
    "delete": "Delete",
    "save": "Save",
    "cancel": "Cancel",
    "close": "Close",
    "serving_temp": "Serving temperature",
    "alcohol_pct": "Alcohol level",
    "not_specified": "Not specified",
    "cleanup_btn": "Clean-Up",
    "cleanup_title": "Duplicate Search & Clean-Up Tool",
    "cleanup_search_btn": "Search for Duplicates",
    "cleanup_merge_all": "Merge All",
    "cleanup_no_duplicates": "No syntax duplicates detected!",
    "cleanup_searching": "Analyzing cellar data...",
    "cleanup_welcome": "Click the button above to start the search and analyze your cellar data.",
    "updating_field": "Updating field...",
    "update_failed": "Update failed: ",
    "merging_all_selections": "Merging all selections...",
    "global_error": "Error: ",
    "bottle_s": "bottle(s)",
    "cellar_name_required": "Cellar name is required.",
    "add_cellar_short": "+ Cellar",
    "drink_now": "Drink now",
    "red": "Red",
    "white": "White",
    "rose": "Rosé",
    "sparkling": "Sparkling",
    "orange": "Orange",
    "sweet": "Sweet",
    "other": "Other",
    "wine": "Wine",
    "region_varietal": "Region/Varietal",
    "total_bottles": "Total Bottles",
    "different_wines": "Different Wines",
    "average_age": "Average Age",
    "years": "years",
    "total_value": "Total Value",
    "distribution_by_type": "Distribution by Type",
    "top_countries_of_origin": "Top Countries of Origin",
    "unnamed_wine": "Unnamed Wine",
    "drinking_window": "Drinking Window",
    "from_prefix": "From ",
    "to_infix": " to ",
    "no_data": "No data",
    "physical_location": "Physical Location",
    "copy": "Copy",
    "edit": "Edit",
    "cellar": "Cellar",
    "view": "View",
    "shelf_name": "Shelf Name",
    "edit_cellar": "Edit cellar",
    "cellar_name": "Name",
    "shelves": "Shelves",
    "add_shelf": "Add shelf",
    "no_barcode_found": "No barcode found.",
    "barcode_extraction_failed": "Barcode extraction failed.",
    "confirm_reanalyze": "This wine has already been analyzed successfully. Overwrite the data and run the analysis again?",
    "provide_barcode_or_label": "Please provide a barcode (digits) or upload a label image before running the analysis.",
    "confirm_merge_all": "Do you want to merge and standardize all listed syntaxes?",
    "scanner_error": "Scanner error: ",
    "file_not_image": "Selected file is not an image.",
    "shelf_front_capacity_min": "Each shelf must have a front capacity of at least 1.",
    "add_at_least_one_shelf": "Add at least one shelf.",
    "cellar_save_failed": "Cellar save failed: ",
    "confirm_delete_cellar": "Delete this cellar and all its bottles?",
    "bottle_copied_to_memory": "Bottle copied to memory. Click an empty slot to paste.",
    "cellar_needs_shelf": "A cellar must have at least one shelf.",
    "unknown_error": "unknown error",
    "clear_filters": "Clear filters",
    "no_bottles_yet": "No bottles in your cellars yet.",
    "add_bottle_short": "+ Bottle",
    "all_slots_full": "Every slot in your cellars is taken. Free a slot, or add a shelf or a cellar, to add a bottle.",
    "wine_details": "Wine details",
    "cellar_editor": "Cellar editor",
    "bottle_editor": "Bottle editor",
    "unknown_cellar": "Unknown cellar",
    "status_young": "Too young",
    "status_ready": "Ready",
    "status_peak": "At peak",
    "status_past": "Past peak",
    "location": "Location",
    "no_shelves": "No shelves configured.",
    "add_first_cellar": "Add a first cellar to get started!",
    "discard_title": "Discard your changes?",
    "discard_body": "What you typed in this form will be lost.",
    "keep_editing": "Keep editing",
    "discard": "Discard",
    "delete_bottle_title": "Delete “{name}”?",
    "delete_bottle_body": "The bottle is removed for good and does not go to your history. This cannot be undone.",
    "delete_cellar_title": "Delete the cellar “{name}”?",
    "delete_cellar_body": "This also deletes its {bottles} bottle(s), {history} history entry(ies) and their label photos. This cannot be undone.",
    "delete_cellar_body_empty": "The cellar is empty. This cannot be undone.",
    "delete_cellar_confirm": "Delete cellar",
    "merge_all_title": "Merge {n} spelling pair(s)?",
    "merge_all_body": "{m} bottle(s) will be updated to the selected spelling. Pairs marked for checking are left as they are.",
    "action_failed": "That did not work: {error}",
    "err_shelf_missing": "The selected shelf no longer exists.",
    "err_no_back_lane": "This shelf has no back row.",
    "err_position_out_of_range": "That position is beyond the shelf's capacity for this row.",
    "err_rating_range": "Rating must be between 0 and 5.",
    "err_slot_taken_server": "That slot is already taken. Choose another position.",
    "err_shelf_has_bottles": "A shelf that still holds bottles cannot be removed. Move its bottles first.",
    "err_shrink_front": "A front row cannot be made smaller than its last occupied position. Move those bottles first.",
    "err_shrink_back": "A back row cannot be made smaller than its last occupied position. Move those bottles first.",
    "err_remove_back_lane": "The back row still holds bottles, so it cannot be removed. Move them first.",
    "err_bottle_missing": "This bottle no longer exists. It may have been removed elsewhere.",
    "err_no_entry": "The Wine Cellar Manager integration is not set up.",
    "err_shelf_front_min": "“{shelf}” holds a bottle in front position {n}, so it needs at least {n} front positions.",
    "err_shelf_back_min": "“{shelf}” holds a bottle in back position {n}, so it needs at least {n} back positions.",
    "shelf_n": "Shelf {n}",
    "shelf_empty": "Empty",
    "pasted_details": "Details copied from “{name}”. Check them and save.",
    "cleanup_check_pair": "Similar spelling, but it may be a different name. Check it before merging; Merge All skips it.",
    "depth_back_row": "Back row",
    "depth_behind": "Behind {names}",
    "depth_behind_aria": "behind {names}",
    "depth_move_first": "move it first",
    "depth_move_first_n": "move them first",
    "depth_front_reach": "Front row — reach straight in",
    "depth_back_clear": "Back row — nothing in front of it",
    "depth_top_view": "Top view",
    "depth_shelf_of": "Shelf {n} of {total}",
    "depth_more_left": "{count} more to the left",
    "depth_more_right": "{count} more to the right",
    "depth_more_slots_left": "More slots to the left",
    "depth_more_slots_right": "More slots to the right",
    "depth_pull": "Pull out {shelf} to see its back row ({count} bottles)",
    "depth_push": "Push {shelf} back in",
    "depth_shelf_named": "Shelf {n} · {name}",
    "depth_plan_back": "Back · wall",
    "depth_plan_front": "Front · door",
    "depth_blocker": "{name} (front, position {pos})",
    "depth_no_slots": "No slots on this shelf yet",
    "bt_needs_details": "Needs details",
    "bt_add_details": "Add details",
    "bt_no_window": "No window",
    "bt_no_window_long": "No drinking window set",
    "bt_add_label_photo": "Add label photo",
    "bt_open_photo": "Open full label photo",
    "bt_show_in_cellar": "Show in cellar",
    "bt_more_actions": "More actions",
    "bt_identical": "{n} identical bottles",
    "bt_in_cellars": "{n} of this wine in your cellars",
    "bt_only_one": "The only bottle of this wine",
    "bt_find_all": "Find all",
    "bt_stars": "{n} of 5 stars",
    "bt_needs_details_hint": "This bottle is missing its type, producer or vintage. Add them so it is easy to find again.",
    "bt_details": "Details",
    "bt_front_row_pos": "Front row · position {pos}",
    "bt_back_row_pos": "Back row · position {pos}",
    "bt_photo_missing": "Label photo unavailable",
    "bt_photo_missing_sub": "The saved photo can’t be loaded right now.",
    "bt_replace_photo": "Replace photo",
    "slot_empty_label": "Empty slot, add a bottle: {loc}",
    "loc_front_pos": "{cellar}, {shelf}, front row, position {pos}",
    "loc_back_pos": "{cellar}, {shelf}, back row, position {pos}",
    "sheet_add_title": "Add bottle",
    "sheet_editing": "Editing",
    "sheet_sec_label": "Label",
    "sheet_sec_wine": "The wine",
    "sheet_sec_place": "Where it goes",
    "sheet_more": "More details",
    "sheet_more_hint": "Region, price, drinking window, rating, notes",
    "sheet_more_filled": "{n} filled",
    "sheet_take_photo": "Take photo",
    "sheet_upload_photo": "Upload label photo",
    "sheet_choose_library": "Choose from library",
    "sheet_type_instead": "Type it instead",
    "sheet_scan_barcode": "Scan SAQ barcode",
    "sheet_photo_title": "Photograph the label",
    "sheet_photo_title_plain": "Add a label photo",
    "sheet_photo_sub_ai": "We'll read the name, producer and vintage for you.",
    "sheet_photo_sub": "A label photo makes the bottle easy to spot on the shelf.",
    "sheet_photo_drop": "or drop an image here",
    "sheet_photo_ready": "Label photo",
    "sheet_photo_replace": "Replace",
    "sheet_photo_rotate": "Rotate",
    "sheet_photo_remove": "Remove",
    "sheet_photo_read": "Read label",
    "sheet_st_preparing": "Preparing photo…",
    "sheet_st_uploading": "Uploading…",
    "sheet_st_reading": "Reading the label…",
    "sheet_st_barcode": "Reading the barcode…",
    "sheet_note_reading": "Reading the label. Keep typing if you like: only empty fields get filled.",
    "sheet_note_ai_one": "Filled {n} detail from the label. Give it a quick check.",
    "sheet_note_ai_other": "Filled {n} details from the label. Give them a quick check.",
    "sheet_note_cellar_one": "Filled {n} detail from {name} in your cellar.",
    "sheet_note_cellar_other": "Filled {n} details from {name} in your cellar.",
    "sheet_note_none": "Nothing new found on the label.",
    "sheet_note_fail": "Couldn't read this label automatically. Fill in the details below.",
    "undo": "Undo",
    "undone": "Undone",
    "sheet_mark_ai": "AI",
    "sheet_mark_cellar": "From cellar",
    "sheet_name_ph": "e.g. Barolo, Château Margaux…",
    "sheet_in_cellar": "{n} in cellar",
    "sheet_had_before": "Had before",
    "sheet_dup": "You already have {n} of this wine · {where}",
    "sheet_type_unset": "Not sure",
    "sheet_window": "Drinking window",
    "sheet_from": "From",
    "sheet_to": "To",
    "sheet_win_none": "Add the years to see when it will be ready.",
    "sheet_win_young": "Too young · opens in {y}",
    "sheet_win_ready": "Ready to drink · until {y}",
    "sheet_win_peak": "At its peak this year",
    "sheet_win_past": "Past its peak since {y}",
    "sheet_rating_none": "None",
    "sheet_link": "Product link",
    "sheet_barcode": "Barcode",
    "sheet_lookup": "Look up",
    "pick_bottles": "How many bottles",
    "pick_qty_less": "One bottle fewer",
    "pick_qty_more": "One more bottle",
    "pick_free_one": "{n} free",
    "pick_free_other": "{n} free",
    "pick_full": "Full",
    "pick_hint": "Tap a free slot to choose where it goes.",
    "pick_hint_n": "Fills {n} free slots in order, starting at the one you tap.",
    "pick_hint_edit": "Tap a free slot to move the bottle there when you save.",
    "sheet_plan_n": "{n} bottles · {where}",
    "pick_move_from": "Moves from {from}",
    "pick_occupied": "Taken · {name}",
    "pick_slot_free": "{shelf}, {lane}, position {pos}, free",
    "pick_slot_current": "{shelf}, {lane}, position {pos}, current slot",
    "pick_no_free": "Every slot is full.",
    "pick_no_free_sub": "Add a shelf or a cellar to make room, then add the bottle.",
    "pick_add_shelves_to": "Add shelves to {name}",
    "pick_new_cellar": "New cellar",
    "sheet_only_name": "Only the name is required.",
    "sheet_save_n": "Save {n} bottles",
    "sheet_save_next": "Save & add another",
    "sheet_save_changes": "Save changes",
    "sheet_saving": "Saving…",
    "sheet_saving_n": "Saving {i} of {n}…",
    "sheet_saved_one": "Added {name} · {where}",
    "sheet_saved_n": "Added {n} bottles · {where}",
    "sheet_saved_edit": "Changes saved",
    "sheet_err_name": "Give the wine a name.",
    "sheet_err_year": "Use a 4-digit year.",
    "sheet_err_window": "The window can't end before it starts.",
    "sheet_err_no_slot": "Choose a free slot.",
    "sheet_err_slot_taken": "That slot is taken by “{name}”. Pick another one.",
    "sheet_err_slot_moved": "That slot was just taken, so we picked the next free one. Tap Save again.",
    "sheet_err_not_enough_one": "Only {n} free slot in {cellar}.",
    "sheet_err_not_enough_other": "Only {n} free slots in {cellar}.",
    "sheet_err_partial_left_one": "Saved {i} of {total}. {error} Save again to add the last one.",
    "sheet_err_partial_left_other": "Saved {i} of {total}. {error} Save again to add the other {n}.",
    "sheet_err_number": "Enter a number.",
    "sheet_err_photo_format": "This photo format isn't supported here. Try a JPEG or PNG.",
    "sheet_err_photo_upload": "The photo couldn't be uploaded. {error}",
    "sheet_err_save": "Couldn't save: {error}",
    "move_action": "Move",
    "move_moving": "Moving {name}",
    "move_hint": "Tap an empty slot, or a bottle to swap.",
    "move_hint_kb": "Esc cancels.",
    "move_done": "Moved {name} to {where}",
    "move_swapped": "Swapped {a} and {b}",
    "move_failed": "Couldn't move the bottle: {error}",
    "builder_title_new": "New cellar",
    "builder_name_ph": "e.g. Kitchen wine fridge",
    "builder_finish": "Frame finish",
    "builder_quick": "Quick start",
    "builder_tpl_fridge": "Wine fridge",
    "builder_tpl_stagger": "Staggered rack",
    "builder_tpl_rack": "Open rack",
    "builder_tpl_sub": "{s} shelves × {f}",
    "builder_tpl_sub2": "{s} shelves × {f} + {b} behind",
    "builder_shelves_hint": "Top shelf first. The back row sits behind the front row, offset so every label stays visible.",
    "builder_front_slots": "Front slots",
    "builder_back_slots": "Back slots",
    "builder_fewer": "Fewer {lane} slots",
    "builder_more": "More {lane} slots",
    "builder_stored": "{n} stored",
    "builder_up": "Move shelf up",
    "builder_down": "Move shelf down",
    "builder_remove": "Remove shelf",
    "builder_remove_blocked_one": "Move the bottle on this shelf first.",
    "builder_remove_blocked_other": "Move the {n} bottles on this shelf first.",
    "builder_min_hint": "A bottle sits in slot {n}.",
    "builder_preview": "Preview",
    "builder_legend_stored": "Stored",
    "builder_legend_free": "Free",
    "builder_save": "Save cellar",
    "builder_create": "Create cellar",
    "builder_saved": "Cellar saved",
    "sheet_wait_photo": "Waiting for the photo…",
    "builder_position": "Position among your cellars",
    "builder_pos_first": "First",
    "builder_pos_after": "After {name}",
    "builder_order_failed": "Cellar saved, but the order of the other cellars could not be updated.",
    "builder_fin_bordeaux": "Bordeaux lacquer",
    "builder_fin_oak": "Oak",
    "builder_fin_olive": "Olive",
    "builder_fin_azure": "Azure",
    "builder_fin_slate": "Slate",
    "builder_fin_steel": "Brushed steel",
    "builder_fin_custom": "Custom",
    "builder_shelves_one": "{n} shelf",
    "builder_shelves_other": "{n} shelves",
    "builder_slots_one": "{n} slot",
    "builder_slots_other": "{n} slots",
    "builder_fin_graphite": "Graphite",
    "find_placeholder": "Search wine, producer, vintage, cellar…",
    "find_placeholder_short": "Search your cellar…",
    "find_search_label": "Search bottles",
    "find_views_label": "View",
    "find_tab_bottles": "Bottles",
    "find_filters": "Filters",
    "find_filters_n_one": "Filters, {n} selected",
    "find_filters_n_other": "Filters, {n} selected",
    "find_clear_all": "Clear all",
    "find_clear_search": "Clear search",
    "find_status_group": "Drinking status",
    "find_type_group": "Wine type",
    "find_country_group": "Country",
    "find_cellar_group": "Cellar",
    "find_drink_now_hint": "At peak or past peak: open these first",
    "find_remove": "Remove filter: {x}",
    "find_matches_one": "{n} match",
    "find_matches_other": "{n} matches",
    "find_no_match": "No match",
    "find_in_cellar": "in {name}",
    "find_in_cellars_one": "in {n} cellar",
    "find_in_cellars_other": "in {n} cellars",
    "find_more_n": "+{n} more",
    "find_more_label": "Show all {n} matches in All Bottles",
    "find_step_hint": "next match",
    "find_matches_label": "Matching bottles",
    "find_no_results_q": "No bottle matches “{q}”",
    "find_no_results_f": "No bottle matches these filters",
    "find_did_you_mean": "Did you mean {x}?",
    "find_try_other": "Check the spelling, or search by producer, vintage or cellar.",
    "find_found_one": "{n} bottle found",
    "find_found_other": "{n} bottles found",
    "find_found_none": "No bottle found",
    "find_state_match": "matching",
    "find_state_other": "not matching",
    "find_show_one": "Show {n} bottle",
    "find_show_other": "Show {n} bottles",
    "find_crumb_shelf": "{name} (shelf {n})",
    "find_crumb_back": "Back #{pos}",
    "find_crumb_front": "Front #{pos}",
    "find_crumb_pos": "#{pos}",
    "consume_done": "Enjoyed {name}",
    "consume_restored": "{name} is back in its slot",
    "consume_failed": "Couldn't mark {name} as consumed: {error}",
    "consume_undo_taken": "Couldn't put {name} back: its slot is taken now. It stays under Recently enjoyed, in Stats.",
    "consume_undo_failed": "Couldn't put {name} back: {error}",
    "delete_done": "{name} deleted",
    "delete_failed": "Couldn't delete {name}: {error}",
    "list_empty_body": "Add your first bottle: snap its label and pick its slot.",
    "list_sort_by": "Sort by",
    "list_reverse": "Reverse order",
    "list_title_one": "{n} bottle",
    "list_title_other": "{n} bottles",
    "list_title_of_one": "{shown} of {n} bottle",
    "list_title_of_other": "{shown} of {n} bottles",
    "stats_empty_title": "No statistics yet",
    "stats_empty_body": "Add bottles to see what to drink, when, and what your cellar holds.",
    "stats_free_one": "{n} free slot",
    "stats_free_other": "{n} free slots",
    "stats_producers_one": "{n} producer",
    "stats_producers_other": "{n} producers",
    "stats_oldest": "Oldest vintage {y}",
    "stats_per_bottle": "≈ {v} per bottle",
    "stats_open_hint": "Opens All Bottles showing only these bottles.",
    "stats_window_title": "Drinking window",
    "stats_window_sub": "Bottles inside their drinking window, year by year",
    "stats_window_none": "No bottle has a drinking window in the coming years.",
    "stats_window_caption": "Bottles inside their drinking window per year, by wine type",
    "stats_now": "now",
    "stats_year_bottles_one": "{year}: {n} bottle",
    "stats_year_bottles_other": "{year}: {n} bottles",
    "stats_now_empty": "Nothing to hurry: no bottle is at or past its peak.",
    "stats_now_all_one": "See {n} bottle in All Bottles",
    "stats_now_all_other": "See all {n} in All Bottles",
    "stats_bottle_word_one": "bottle",
    "stats_bottle_word_other": "bottles",
    "ready_to_drink": "Ready to drink",
    "find_ready_to_drink_hint": "Ready or at peak: good to open now",
    "toast_undo_keys": "Press {keys} to undo",
    "stats_recent_title": "Recently enjoyed",
    "stats_recent_sub": "Marked as enjoyed by mistake? Put the bottle back in its slot.",
    "stats_recent_on": "Enjoyed {date}",
    "stats_put_back": "Put back",
    "stats_put_back_label": "Put {name} back in its slot",
    "stats_recent_taken": "Its slot is taken",
    "stats_recent_gone": "Its shelf no longer exists",
    "err_consumed_missing": "This bottle is no longer in the history. It may have been put back or deleted elsewhere.",
    "consume_undo_noshelf": "Couldn't put {name} back: its shelf no longer exists.",
    "find_words_unfiltered_one": "{n} bottle matches “{q}” without the filters.",
    "find_words_unfiltered_other": "{n} bottles match “{q}” without the filters.",
    "list_sorted_asc": "sorted ascending",
    "list_sorted_desc": "sorted descending"
  },
  "fr": {
    "cellars": "Celliers",
    "compact": "Compact",
    "all_bottles": "Toutes les bouteilles",
    "stats": "Statistiques",
    "wine_name": "Nom du vin",
    "producer": "Vignoble",
    "varietal": "Cépage",
    "region": "Région",
    "country": "Pays",
    "vintage": "Millésime",
    "type": "Type",
    "price": "Prix",
    "rating": "Évaluation",
    "notes": "Notes",
    "shelf": "Tablette",
    "front": "Avant",
    "back": "Arrière",
    "consume": "Consommer",
    "delete": "Supprimer",
    "save": "Enregistrer",
    "cancel": "Annuler",
    "close": "Fermer",
    "serving_temp": "Température de service",
    "alcohol_pct": "Degré d'alcool",
    "not_specified": "Non spécifié",
    "cleanup_btn": "Nettoyage",
    "cleanup_title": "Outil de recherche et nettoyage de doublons",
    "cleanup_search_btn": "Rechercher les doublons",
    "cleanup_merge_all": "Fusionner tout",
    "cleanup_no_duplicates": "Aucun doublon de syntaxe détecté !",
    "cleanup_searching": "Analyse de la cave en cours...",
    "cleanup_welcome": "Cliquez sur le bouton ci-dessus pour lancer la recherche et l'analyse de votre cave.",
    "updating_field": "Mise à jour du champ en cours...",
    "update_failed": "Erreur lors de la mise à jour : ",
    "merging_all_selections": "Fusion de tous les choix en cours...",
    "global_error": "Erreur globale : ",
    "bottle_s": "bouteille(s)",
    "cellar_name_required": "Le nom du cellier est requis.",
    "add_cellar_short": "+ Cellier",
    "drink_now": "Boire maintenant",
    "red": "Rouge",
    "white": "Blanc",
    "rose": "Rosé",
    "sparkling": "Mousseux",
    "orange": "Orange",
    "sweet": "Sucré",
    "other": "Autre",
    "wine": "Vin",
    "region_varietal": "Région / Cépage",
    "total_bottles": "Bouteilles au total",
    "different_wines": "Vins différents",
    "average_age": "Âge moyen",
    "years": "ans",
    "total_value": "Valeur totale",
    "distribution_by_type": "Distribution par type",
    "top_countries_of_origin": "Top des pays d'origine",
    "unnamed_wine": "Nom inconnu",
    "drinking_window": "Apogée",
    "from_prefix": "De ",
    "to_infix": " à ",
    "no_data": "Pas d'information",
    "physical_location": "Emplacement physique",
    "copy": "Copier",
    "edit": "Modifier",
    "cellar": "Cellier",
    "view": "Voir",
    "shelf_name": "Nom de la tablette",
    "edit_cellar": "Modifier le cellier",
    "cellar_name": "Nom du cellier",
    "shelves": "Tablettes",
    "add_shelf": "+ Ajouter",
    "no_barcode_found": "Aucun code-barres trouvé.",
    "barcode_extraction_failed": "L'extraction du code-barres a échoué.",
    "confirm_reanalyze": "Ce vin a déjà été analysé avec succès. Voulez-vous écraser les données et relancer l'analyse ?",
    "provide_barcode_or_label": "Veuillez fournir un code-barres (chiffres) ou téléverser une étiquette avant de lancer l'analyse.",
    "confirm_merge_all": "Voulez-vous fusionner et uniformiser toutes les syntaxes listées ?",
    "scanner_error": "Erreur du lecteur : ",
    "file_not_image": "Le fichier sélectionné n'est pas une image.",
    "shelf_front_capacity_min": "Chaque tablette doit avoir une capacité avant d'au moins 1.",
    "add_at_least_one_shelf": "Ajoutez au moins une tablette.",
    "cellar_save_failed": "L'enregistrement du cellier a échoué : ",
    "confirm_delete_cellar": "Supprimer ce cellier et toutes ses bouteilles ?",
    "bottle_copied_to_memory": "Bouteille copiée en mémoire. Cliquez sur un emplacement vide pour la coller.",
    "cellar_needs_shelf": "Un cellier doit avoir au moins une tablette.",
    "unknown_error": "erreur inconnue",
    "clear_filters": "Effacer les filtres",
    "no_bottles_yet": "Aucune bouteille dans vos celliers pour l'instant.",
    "add_bottle_short": "+ Bouteille",
    "all_slots_full": "Tous les emplacements de vos celliers sont occupés. Libérez un emplacement, ou ajoutez une tablette ou un cellier, pour ajouter une bouteille.",
    "wine_details": "Détails du vin",
    "cellar_editor": "Éditeur de cellier",
    "bottle_editor": "Éditeur de bouteille",
    "unknown_cellar": "Cellier inconnu",
    "status_young": "Trop jeune",
    "status_ready": "Prêt",
    "status_peak": "À l'apogée",
    "status_past": "Apogée passée",
    "location": "Emplacement",
    "no_shelves": "Aucune tablette configurée.",
    "add_first_cellar": "Ajoutez un premier cellier pour commencer !",
    "discard_title": "Abandonner vos modifications ?",
    "discard_body": "Ce que vous avez saisi dans ce formulaire sera perdu.",
    "keep_editing": "Continuer la saisie",
    "discard": "Abandonner",
    "delete_bottle_title": "Supprimer « {name} » ?",
    "delete_bottle_body": "La bouteille est supprimée définitivement et ne va pas dans l'historique. Cette action est irréversible.",
    "delete_cellar_title": "Supprimer le cellier « {name} » ?",
    "delete_cellar_body": "Cela supprime aussi ses {bottles} bouteille(s), {history} entrée(s) d'historique et leurs photos d'étiquette. Cette action est irréversible.",
    "delete_cellar_body_empty": "Le cellier est vide. Cette action est irréversible.",
    "delete_cellar_confirm": "Supprimer le cellier",
    "merge_all_title": "Fusionner {n} paire(s) d'orthographes ?",
    "merge_all_body": "{m} bouteille(s) prendront l'orthographe choisie. Les paires à vérifier ne sont pas modifiées.",
    "action_failed": "L'opération a échoué : {error}",
    "err_shelf_missing": "La tablette choisie n'existe plus.",
    "err_no_back_lane": "Cette tablette n'a pas de rang arrière.",
    "err_position_out_of_range": "Cette position dépasse la capacité de la tablette pour ce rang.",
    "err_rating_range": "L'évaluation doit être comprise entre 0 et 5.",
    "err_slot_taken_server": "Cet emplacement est déjà occupé. Choisissez une autre position.",
    "err_shelf_has_bottles": "Une tablette qui contient encore des bouteilles ne peut pas être retirée. Déplacez d'abord ses bouteilles.",
    "err_shrink_front": "Un rang avant ne peut pas être plus petit que sa dernière position occupée. Déplacez d'abord ces bouteilles.",
    "err_shrink_back": "Un rang arrière ne peut pas être plus petit que sa dernière position occupée. Déplacez d'abord ces bouteilles.",
    "err_remove_back_lane": "Le rang arrière contient encore des bouteilles et ne peut pas être retiré. Déplacez-les d'abord.",
    "err_bottle_missing": "Cette bouteille n'existe plus. Elle a peut-être été supprimée ailleurs.",
    "err_no_entry": "L'intégration Wine Cellar Manager n'est pas configurée.",
    "err_shelf_front_min": "« {shelf} » contient une bouteille en position avant {n} : il lui faut au moins {n} positions avant.",
    "err_shelf_back_min": "« {shelf} » contient une bouteille en position arrière {n} : il lui faut au moins {n} positions arrière.",
    "shelf_n": "Tablette {n}",
    "shelf_empty": "Vide",
    "pasted_details": "Détails copiés depuis « {name} ». Vérifiez-les puis enregistrez.",
    "cleanup_check_pair": "Orthographe proche, mais il peut s'agir d'un autre nom. Vérifiez avant de fusionner ; « Fusionner tout » l'ignore.",
    "depth_back_row": "Rang arrière",
    "depth_behind": "Derrière {names}",
    "depth_behind_aria": "derrière {names}",
    "depth_move_first": "à déplacer d’abord",
    "depth_move_first_n": "à déplacer d’abord",
    "depth_front_reach": "Rang avant — accès direct",
    "depth_back_clear": "Rang arrière — rien devant",
    "depth_top_view": "Vue de dessus",
    "depth_shelf_of": "Tablette {n} sur {total}",
    "depth_more_left": "{count} de plus à gauche",
    "depth_more_right": "{count} de plus à droite",
    "depth_more_slots_left": "Autres emplacements à gauche",
    "depth_more_slots_right": "Autres emplacements à droite",
    "depth_pull": "Sortir la tablette {shelf} pour voir le rang arrière ({count} bouteilles)",
    "depth_push": "Rentrer la tablette {shelf}",
    "depth_shelf_named": "Tablette {n} · {name}",
    "depth_plan_back": "Arrière · paroi",
    "depth_plan_front": "Avant · porte",
    "depth_blocker": "{name} (avant, position {pos})",
    "depth_no_slots": "Aucun emplacement sur cette tablette",
    "bt_needs_details": "À compléter",
    "bt_add_details": "Compléter",
    "bt_no_window": "Sans apogée",
    "bt_no_window_long": "Aucune période d'apogée",
    "bt_add_label_photo": "Ajouter une photo",
    "bt_open_photo": "Ouvrir la photo de l'étiquette",
    "bt_show_in_cellar": "Voir dans le cellier",
    "bt_more_actions": "Plus d'actions",
    "bt_identical": "{n} bouteilles identiques",
    "bt_in_cellars": "{n} bouteilles de ce vin dans vos celliers",
    "bt_only_one": "La seule bouteille de ce vin",
    "bt_find_all": "Tout trouver",
    "bt_stars": "{n} étoiles sur 5",
    "bt_needs_details_hint": "Il manque le type, le producteur ou le millésime. Complétez-les pour retrouver facilement cette bouteille.",
    "bt_details": "Détails",
    "bt_front_row_pos": "Rang avant · position {pos}",
    "bt_back_row_pos": "Rang arrière · position {pos}",
    "bt_photo_missing": "Photo d’étiquette indisponible",
    "bt_photo_missing_sub": "La photo enregistrée ne peut pas être chargée pour le moment.",
    "bt_replace_photo": "Remplacer la photo",
    "slot_empty_label": "Emplacement vide, ajouter une bouteille : {loc}",
    "loc_front_pos": "{cellar}, {shelf}, rang avant, position {pos}",
    "loc_back_pos": "{cellar}, {shelf}, rang arrière, position {pos}",
    "sheet_add_title": "Ajouter une bouteille",
    "sheet_editing": "Modification",
    "sheet_sec_label": "Étiquette",
    "sheet_sec_wine": "Le vin",
    "sheet_sec_place": "Emplacement",
    "sheet_more": "Plus de détails",
    "sheet_more_hint": "Région, prix, fenêtre de dégustation, note, notes",
    "sheet_more_filled": "{n} remplis",
    "sheet_take_photo": "Prendre une photo",
    "sheet_upload_photo": "Téléverser une photo",
    "sheet_choose_library": "Choisir dans la galerie",
    "sheet_type_instead": "Saisir à la main",
    "sheet_scan_barcode": "Scanner le code-barres SAQ",
    "sheet_photo_title": "Photographiez l’étiquette",
    "sheet_photo_title_plain": "Ajouter une photo de l’étiquette",
    "sheet_photo_sub_ai": "Nous lirons le nom, le producteur et le millésime pour vous.",
    "sheet_photo_sub": "Une photo de l’étiquette aide à repérer la bouteille.",
    "sheet_photo_drop": "ou déposez une image ici",
    "sheet_photo_ready": "Photo de l’étiquette",
    "sheet_photo_replace": "Remplacer",
    "sheet_photo_rotate": "Pivoter",
    "sheet_photo_remove": "Retirer",
    "sheet_photo_read": "Lire l’étiquette",
    "sheet_st_preparing": "Préparation de la photo…",
    "sheet_st_uploading": "Téléversement…",
    "sheet_st_reading": "Lecture de l’étiquette…",
    "sheet_st_barcode": "Lecture du code-barres…",
    "sheet_note_reading": "Lecture de l’étiquette. Vous pouvez continuer : seuls les champs vides seront remplis.",
    "sheet_note_ai_one": "{n} détail rempli depuis l’étiquette. Vérifiez-le rapidement.",
    "sheet_note_ai_other": "{n} détails remplis depuis l’étiquette. Vérifiez-les rapidement.",
    "sheet_note_cellar_one": "{n} détail rempli depuis {name} de votre cave.",
    "sheet_note_cellar_other": "{n} détails remplis depuis {name} de votre cave.",
    "sheet_note_none": "Rien de nouveau trouvé sur l’étiquette.",
    "sheet_note_fail": "Impossible de lire cette étiquette automatiquement. Complétez les détails ci-dessous.",
    "undo": "Annuler",
    "undone": "Annulé",
    "sheet_mark_ai": "IA",
    "sheet_mark_cellar": "De la cave",
    "sheet_name_ph": "ex. Barolo, Château Margaux…",
    "sheet_in_cellar": "{n} en cave",
    "sheet_had_before": "Déjà bue",
    "sheet_dup": "Vous avez déjà {n} bouteille(s) de ce vin · {where}",
    "sheet_type_unset": "Je ne sais pas",
    "sheet_window": "Fenêtre de dégustation",
    "sheet_from": "De",
    "sheet_to": "À",
    "sheet_win_none": "Ajoutez les années pour savoir quand la boire.",
    "sheet_win_young": "Trop jeune · s’ouvre en {y}",
    "sheet_win_ready": "Prête à boire · jusqu’en {y}",
    "sheet_win_peak": "À son apogée cette année",
    "sheet_win_past": "Passée depuis {y}",
    "sheet_rating_none": "Aucune",
    "sheet_link": "Lien du produit",
    "sheet_barcode": "Code-barres",
    "sheet_lookup": "Rechercher",
    "pick_bottles": "Combien de bouteilles",
    "pick_qty_less": "Une bouteille de moins",
    "pick_qty_more": "Une bouteille de plus",
    "pick_free_one": "{n} libre",
    "pick_free_other": "{n} libres",
    "pick_full": "Pleine",
    "pick_hint": "Touchez un emplacement libre pour choisir.",
    "pick_hint_n": "Remplit {n} emplacements libres dans l’ordre, à partir de celui choisi.",
    "pick_hint_edit": "Touchez un emplacement libre pour y déplacer la bouteille à l’enregistrement.",
    "sheet_plan_n": "{n} bouteilles · {where}",
    "pick_move_from": "Déplacée depuis {from}",
    "pick_occupied": "Occupé · {name}",
    "pick_slot_free": "{shelf}, {lane}, position {pos}, libre",
    "pick_slot_current": "{shelf}, {lane}, position {pos}, emplacement actuel",
    "pick_no_free": "Tous les emplacements sont occupés.",
    "pick_no_free_sub": "Ajoutez une tablette ou un cellier pour faire de la place.",
    "pick_add_shelves_to": "Ajouter des tablettes à {name}",
    "pick_new_cellar": "Nouveau cellier",
    "sheet_only_name": "Seul le nom est obligatoire.",
    "sheet_save_n": "Enregistrer {n} bouteilles",
    "sheet_save_next": "Enregistrer et ajouter",
    "sheet_save_changes": "Enregistrer",
    "sheet_saving": "Enregistrement…",
    "sheet_saving_n": "Enregistrement {i} sur {n}…",
    "sheet_saved_one": "{name} ajoutée · {where}",
    "sheet_saved_n": "{n} bouteilles ajoutées · {where}",
    "sheet_saved_edit": "Modifications enregistrées",
    "sheet_err_name": "Donnez un nom au vin.",
    "sheet_err_year": "Utilisez une année à 4 chiffres.",
    "sheet_err_window": "La fenêtre ne peut pas finir avant de commencer.",
    "sheet_err_no_slot": "Choisissez un emplacement libre.",
    "sheet_err_slot_taken": "Cet emplacement est occupé par « {name} ». Choisissez-en un autre.",
    "sheet_err_slot_moved": "Cet emplacement vient d’être pris : nous avons choisi le suivant. Touchez Enregistrer à nouveau.",
    "sheet_err_not_enough_one": "Seulement {n} emplacement libre dans {cellar}.",
    "sheet_err_not_enough_other": "Seulement {n} emplacements libres dans {cellar}.",
    "sheet_err_partial_left_one": "{i} sur {total} enregistrées. {error} Enregistrez à nouveau pour ajouter la dernière.",
    "sheet_err_partial_left_other": "{i} sur {total} enregistrées. {error} Enregistrez à nouveau pour ajouter les {n} autres.",
    "sheet_err_number": "Entrez un nombre.",
    "sheet_err_photo_format": "Ce format de photo n’est pas pris en charge. Essayez JPEG ou PNG.",
    "sheet_err_photo_upload": "La photo n’a pas pu être téléversée. {error}",
    "sheet_err_save": "Enregistrement impossible : {error}",
    "move_action": "Déplacer",
    "move_moving": "Déplacement de {name}",
    "move_hint": "Touchez un emplacement vide, ou une bouteille pour échanger.",
    "move_hint_kb": "Échap annule.",
    "move_done": "{name} déplacée vers {where}",
    "move_swapped": "{a} et {b} échangées",
    "move_failed": "Déplacement impossible : {error}",
    "builder_title_new": "Nouveau cellier",
    "builder_name_ph": "ex. Cave de la cuisine",
    "builder_finish": "Finition du cadre",
    "builder_quick": "Démarrage rapide",
    "builder_tpl_fridge": "Cave à vin",
    "builder_tpl_stagger": "Casier en quinconce",
    "builder_tpl_rack": "Casier ouvert",
    "builder_tpl_sub": "{s} tablettes × {f}",
    "builder_tpl_sub2": "{s} tablettes × {f} + {b} derrière",
    "builder_shelves_hint": "Du haut vers le bas. La rangée arrière est derrière la rangée avant, décalée pour garder les étiquettes visibles.",
    "builder_front_slots": "Emplacements avant",
    "builder_back_slots": "Emplacements arrière",
    "builder_fewer": "Moins d’emplacements ({lane})",
    "builder_more": "Plus d’emplacements ({lane})",
    "builder_stored": "{n} stockées",
    "builder_up": "Monter la tablette",
    "builder_down": "Descendre la tablette",
    "builder_remove": "Retirer la tablette",
    "builder_remove_blocked_one": "Déplacez d’abord la bouteille de cette tablette.",
    "builder_remove_blocked_other": "Déplacez d’abord les {n} bouteilles de cette tablette.",
    "builder_min_hint": "Une bouteille occupe l’emplacement {n}.",
    "builder_preview": "Aperçu",
    "builder_legend_stored": "Stockée",
    "builder_legend_free": "Libre",
    "builder_save": "Enregistrer le cellier",
    "builder_create": "Créer le cellier",
    "builder_saved": "Cellier enregistré",
    "sheet_wait_photo": "En attente de la photo…",
    "builder_position": "Position parmi vos celliers",
    "builder_pos_first": "En premier",
    "builder_pos_after": "Après {name}",
    "builder_order_failed": "Cellier enregistré, mais l’ordre des autres celliers n’a pas pu être mis à jour.",
    "builder_fin_bordeaux": "Laque bordeaux",
    "builder_fin_oak": "Chêne",
    "builder_fin_olive": "Olive",
    "builder_fin_azure": "Azur",
    "builder_fin_slate": "Ardoise",
    "builder_fin_steel": "Acier brossé",
    "builder_fin_custom": "Personnalisée",
    "builder_shelves_one": "{n} tablette",
    "builder_shelves_other": "{n} tablettes",
    "builder_slots_one": "{n} emplacement",
    "builder_slots_other": "{n} emplacements",
    "builder_fin_graphite": "Graphite",
    "find_placeholder": "Rechercher vin, producteur, millésime, cellier…",
    "find_placeholder_short": "Rechercher dans la cave…",
    "find_search_label": "Rechercher des bouteilles",
    "find_views_label": "Affichage",
    "find_tab_bottles": "Bouteilles",
    "find_filters": "Filtres",
    "find_filters_n_one": "Filtres, {n} sélectionné",
    "find_filters_n_other": "Filtres, {n} sélectionnés",
    "find_clear_all": "Tout effacer",
    "find_clear_search": "Effacer la recherche",
    "find_status_group": "Maturité",
    "find_type_group": "Type de vin",
    "find_country_group": "Pays",
    "find_cellar_group": "Cellier",
    "find_drink_now_hint": "À l'apogée ou apogée passée : à ouvrir en premier",
    "find_remove": "Retirer le filtre : {x}",
    "find_matches_one": "{n} résultat",
    "find_matches_other": "{n} résultats",
    "find_no_match": "Aucun résultat",
    "find_in_cellar": "dans {name}",
    "find_in_cellars_one": "dans {n} cellier",
    "find_in_cellars_other": "dans {n} celliers",
    "find_more_n": "+{n} autres",
    "find_more_label": "Voir les {n} résultats dans Toutes les bouteilles",
    "find_step_hint": "résultat suivant",
    "find_matches_label": "Bouteilles correspondantes",
    "find_no_results_q": "Aucune bouteille ne correspond à « {q} »",
    "find_no_results_f": "Aucune bouteille ne correspond à ces filtres",
    "find_did_you_mean": "Vouliez-vous dire {x} ?",
    "find_try_other": "Vérifiez l'orthographe, ou cherchez par producteur, millésime ou cellier.",
    "find_found_one": "{n} bouteille trouvée",
    "find_found_other": "{n} bouteilles trouvées",
    "find_found_none": "Aucune bouteille trouvée",
    "find_state_match": "correspond",
    "find_state_other": "ne correspond pas",
    "find_show_one": "Voir {n} bouteille",
    "find_show_other": "Voir {n} bouteilles",
    "find_crumb_shelf": "{name} (tablette {n})",
    "find_crumb_back": "Arrière #{pos}",
    "find_crumb_front": "Avant #{pos}",
    "find_crumb_pos": "#{pos}",
    "consume_done": "Dégustée : {name}",
    "consume_restored": "De retour à sa place : {name}",
    "consume_failed": "Impossible de marquer {name} comme consommée : {error}",
    "consume_undo_taken": "Impossible de remettre {name} : son emplacement est désormais occupé. Elle reste dans Dégustées récemment, dans les statistiques.",
    "consume_undo_failed": "Impossible de remettre {name} : {error}",
    "delete_done": "Bouteille supprimée : {name}",
    "delete_failed": "Impossible de supprimer {name} : {error}",
    "list_empty_body": "Ajoutez votre première bouteille : photographiez l'étiquette et choisissez son emplacement.",
    "list_sort_by": "Trier par",
    "list_reverse": "Inverser l'ordre",
    "list_title_one": "{n} bouteille",
    "list_title_other": "{n} bouteilles",
    "list_title_of_one": "{shown} sur {n} bouteille",
    "list_title_of_other": "{shown} sur {n} bouteilles",
    "stats_empty_title": "Pas encore de statistiques",
    "stats_empty_body": "Ajoutez des bouteilles pour voir quoi boire, quand, et ce que contient votre cave.",
    "stats_free_one": "{n} place libre",
    "stats_free_other": "{n} places libres",
    "stats_producers_one": "{n} producteur",
    "stats_producers_other": "{n} producteurs",
    "stats_oldest": "Plus ancien millésime : {y}",
    "stats_per_bottle": "≈ {v} par bouteille",
    "stats_open_hint": "Ouvre Toutes les bouteilles en ne montrant que celles-ci.",
    "stats_window_title": "Fenêtre de dégustation",
    "stats_window_sub": "Bouteilles dans leur fenêtre de dégustation, année par année",
    "stats_window_none": "Aucune bouteille n'a de fenêtre de dégustation dans les années à venir.",
    "stats_window_caption": "Bouteilles dans leur fenêtre de dégustation par année et par type de vin",
    "stats_now": "en cours",
    "stats_year_bottles_one": "{year} : {n} bouteille",
    "stats_year_bottles_other": "{year} : {n} bouteilles",
    "stats_now_empty": "Rien ne presse : aucune bouteille n'est à son apogée ou au-delà.",
    "stats_now_all_one": "Voir {n} bouteille dans Toutes les bouteilles",
    "stats_now_all_other": "Voir les {n} dans Toutes les bouteilles",
    "stats_bottle_word_one": "bouteille",
    "stats_bottle_word_other": "bouteilles",
    "ready_to_drink": "Prêt à boire",
    "find_ready_to_drink_hint": "Prêtes ou à l'apogée : bonnes à ouvrir",
    "toast_undo_keys": "Appuyez sur {keys} pour annuler",
    "stats_recent_title": "Dégustées récemment",
    "stats_recent_sub": "Marquée comme dégustée par erreur ? Remettez la bouteille à sa place.",
    "stats_recent_on": "Dégustée le {date}",
    "stats_put_back": "Remettre",
    "stats_put_back_label": "Remettre {name} à sa place",
    "stats_recent_taken": "Sa place est prise",
    "stats_recent_gone": "Sa tablette n'existe plus",
    "err_consumed_missing": "Cette bouteille n'est plus dans l'historique. Elle a peut-être été remise ou supprimée ailleurs.",
    "consume_undo_noshelf": "Impossible de remettre {name} : sa tablette n'existe plus.",
    "find_words_unfiltered_one": "{n} bouteille correspond à « {q} » sans les filtres.",
    "find_words_unfiltered_other": "{n} bouteilles correspondent à « {q} » sans les filtres.",
    "list_sorted_asc": "tri croissant",
    "list_sorted_desc": "tri décroissant"
  },
  "de": {
    "cellars": "Weinkeller",
    "compact": "Kompakt",
    "all_bottles": "Alle Flaschen",
    "stats": "Statistik",
    "wine_name": "Weinname",
    "producer": "Erzeuger",
    "varietal": "Rebsorte",
    "region": "Region",
    "country": "Land",
    "vintage": "Jahrgang",
    "type": "Typ",
    "price": "Preis",
    "rating": "Bewertung",
    "notes": "Notizen",
    "shelf": "Regal",
    "front": "Vorne",
    "back": "Hinten",
    "consume": "Trinken",
    "delete": "Löschen",
    "save": "Speichern",
    "cancel": "Abbrechen",
    "close": "Schließen",
    "serving_temp": "Serviertemperatur",
    "alcohol_pct": "Alkoholgehalt",
    "not_specified": "Nicht angegeben",
    "cleanup_btn": "Bereinigen",
    "cleanup_title": "Duplikatsuche und Bereinigung",
    "cleanup_search_btn": "Duplikate suchen",
    "cleanup_merge_all": "Alle zusammenführen",
    "cleanup_no_duplicates": "Keine Schreibweisen-Duplikate gefunden!",
    "cleanup_searching": "Kellerdaten werden analysiert...",
    "cleanup_welcome": "Klicken Sie oben auf die Schaltfläche, um die Suche zu starten und Ihre Kellerdaten zu analysieren.",
    "updating_field": "Feld wird aktualisiert...",
    "update_failed": "Aktualisierung fehlgeschlagen: ",
    "merging_all_selections": "Alle Auswahlen werden zusammengeführt...",
    "global_error": "Fehler: ",
    "bottle_s": "Flasche(n)",
    "cellar_name_required": "Der Kellername ist erforderlich.",
    "add_cellar_short": "+ Keller",
    "drink_now": "Jetzt trinken",
    "red": "Rot",
    "white": "Weiß",
    "rose": "Rosé",
    "sparkling": "Schaumwein",
    "orange": "Orange",
    "sweet": "Süß",
    "other": "Sonstige",
    "wine": "Wein",
    "region_varietal": "Region/Rebsorte",
    "total_bottles": "Flaschen gesamt",
    "different_wines": "Verschiedene Weine",
    "average_age": "Durchschnittsalter",
    "years": "Jahre",
    "total_value": "Gesamtwert",
    "distribution_by_type": "Verteilung nach Typ",
    "top_countries_of_origin": "Top-Herkunftsländer",
    "unnamed_wine": "Unbenannter Wein",
    "drinking_window": "Trinkfenster",
    "from_prefix": "Von ",
    "to_infix": " bis ",
    "no_data": "Keine Daten",
    "physical_location": "Lagerort",
    "copy": "Kopieren",
    "edit": "Bearbeiten",
    "cellar": "Keller",
    "view": "Ansehen",
    "shelf_name": "Regalname",
    "edit_cellar": "Keller bearbeiten",
    "cellar_name": "Name",
    "shelves": "Regale",
    "add_shelf": "Regal hinzufügen",
    "no_barcode_found": "Kein Barcode gefunden.",
    "barcode_extraction_failed": "Barcode-Erkennung fehlgeschlagen.",
    "confirm_reanalyze": "Dieser Wein wurde bereits erfolgreich analysiert. Daten überschreiben und Analyse erneut ausführen?",
    "provide_barcode_or_label": "Bitte geben Sie einen Barcode (Ziffern) ein oder laden Sie ein Etikettenbild hoch, bevor Sie die Analyse starten.",
    "confirm_merge_all": "Möchten Sie alle aufgeführten Schreibweisen zusammenführen und vereinheitlichen?",
    "scanner_error": "Scannerfehler: ",
    "file_not_image": "Die ausgewählte Datei ist kein Bild.",
    "shelf_front_capacity_min": "Jedes Regal braucht vorne eine Kapazität von mindestens 1.",
    "add_at_least_one_shelf": "Fügen Sie mindestens ein Regal hinzu.",
    "cellar_save_failed": "Speichern des Kellers fehlgeschlagen: ",
    "confirm_delete_cellar": "Diesen Keller und alle seine Flaschen löschen?",
    "bottle_copied_to_memory": "Flasche zwischengespeichert. Klicken Sie auf einen leeren Platz zum Einfügen.",
    "cellar_needs_shelf": "Ein Keller muss mindestens ein Regal haben.",
    "unknown_error": "unbekannter Fehler",
    "clear_filters": "Filter zurücksetzen",
    "no_bottles_yet": "Noch keine Flaschen in Ihren Kellern.",
    "add_bottle_short": "+ Flasche",
    "all_slots_full": "Alle Plätze in Ihren Kellern sind belegt. Geben Sie einen Platz frei oder fügen Sie ein Regal oder einen Keller hinzu, um eine Flasche hinzuzufügen.",
    "wine_details": "Weindetails",
    "cellar_editor": "Keller-Editor",
    "bottle_editor": "Flaschen-Editor",
    "unknown_cellar": "Unbekannter Keller",
    "status_young": "Zu jung",
    "status_ready": "Trinkreif",
    "status_peak": "Auf dem Höhepunkt",
    "status_past": "Über dem Höhepunkt",
    "location": "Lagerort",
    "no_shelves": "Keine Regale konfiguriert.",
    "add_first_cellar": "Legen Sie einen ersten Keller an, um loszulegen!",
    "discard_title": "Änderungen verwerfen?",
    "discard_body": "Was Sie in dieses Formular eingegeben haben, geht verloren.",
    "keep_editing": "Weiter bearbeiten",
    "discard": "Verwerfen",
    "delete_bottle_title": "„{name}“ löschen?",
    "delete_bottle_body": "Die Flasche wird endgültig entfernt und nicht in den Verlauf übernommen. Dies kann nicht rückgängig gemacht werden.",
    "delete_cellar_title": "Keller „{name}“ löschen?",
    "delete_cellar_body": "Damit werden auch seine {bottles} Flasche(n), {history} Verlaufseintrag/-einträge und deren Etikettenfotos gelöscht. Dies kann nicht rückgängig gemacht werden.",
    "delete_cellar_body_empty": "Der Keller ist leer. Dies kann nicht rückgängig gemacht werden.",
    "delete_cellar_confirm": "Keller löschen",
    "merge_all_title": "{n} Schreibweisen-Paar(e) zusammenführen?",
    "merge_all_body": "{m} Flasche(n) erhalten die ausgewählte Schreibweise. Zu prüfende Paare bleiben unverändert.",
    "action_failed": "Das hat nicht geklappt: {error}",
    "shelf_n": "Regal {n}",
    "shelf_empty": "Leer",
    "err_slot_taken_server": "Dieser Platz ist bereits belegt. Wählen Sie eine andere Position.",
    "cleanup_check_pair": "Ähnliche Schreibweise, aber vielleicht ein anderer Name. Vor dem Zusammenführen prüfen; „Alle zusammenführen“ überspringt dieses Paar.",
    "pasted_details": "Angaben von „{name}“ übernommen. Prüfen und speichern.",
    "err_shelf_missing": "Das gewählte Regal existiert nicht mehr.",
    "err_no_back_lane": "Dieses Regal hat keine hintere Reihe.",
    "err_position_out_of_range": "Diese Position liegt außerhalb der Kapazität dieser Reihe.",
    "err_rating_range": "Die Bewertung muss zwischen 0 und 5 liegen.",
    "err_shelf_has_bottles": "Ein Regal mit Flaschen kann nicht entfernt werden. Verschieben Sie zuerst die Flaschen.",
    "err_shrink_front": "Eine vordere Reihe kann nicht kleiner als ihre letzte belegte Position werden. Verschieben Sie zuerst diese Flaschen.",
    "err_shrink_back": "Eine hintere Reihe kann nicht kleiner als ihre letzte belegte Position werden. Verschieben Sie zuerst diese Flaschen.",
    "err_remove_back_lane": "In der hinteren Reihe liegen noch Flaschen, daher kann sie nicht entfernt werden. Verschieben Sie sie zuerst.",
    "err_bottle_missing": "Diese Flasche existiert nicht mehr. Sie wurde möglicherweise an anderer Stelle entfernt.",
    "err_no_entry": "Die Integration Wine Cellar Manager ist nicht eingerichtet.",
    "err_shelf_front_min": "„{shelf}“ hat eine Flasche auf der vorderen Position {n} und braucht daher mindestens {n} vordere Positionen.",
    "err_shelf_back_min": "„{shelf}“ hat eine Flasche auf der hinteren Position {n} und braucht daher mindestens {n} hintere Positionen.",
    "depth_back_row": "Hintere Reihe",
    "depth_behind": "Hinter {names}",
    "depth_behind_aria": "hinter {names}",
    "depth_move_first": "zuerst herausnehmen",
    "depth_move_first_n": "zuerst herausnehmen",
    "depth_front_reach": "Vordere Reihe – direkt greifbar",
    "depth_back_clear": "Hintere Reihe – nichts davor",
    "depth_top_view": "Draufsicht",
    "depth_shelf_of": "Regal {n} von {total}",
    "depth_more_left": "{count} weitere links",
    "depth_more_right": "{count} weitere rechts",
    "depth_more_slots_left": "Weitere Plätze links",
    "depth_more_slots_right": "Weitere Plätze rechts",
    "depth_pull": "{shelf} herausziehen, um die hintere Reihe zu sehen ({count} Flaschen)",
    "depth_push": "{shelf} wieder einschieben",
    "depth_shelf_named": "Regal {n} · {name}",
    "depth_plan_back": "Hinten · Rückwand",
    "depth_plan_front": "Vorne · Tür",
    "depth_blocker": "{name} (vorne, Position {pos})",
    "depth_no_slots": "Dieses Regal hat noch keine Plätze",
    "bt_needs_details": "Details fehlen",
    "bt_add_details": "Details ergänzen",
    "bt_no_window": "Kein Fenster",
    "bt_no_window_long": "Kein Trinkfenster festgelegt",
    "bt_add_label_photo": "Etikettenfoto hinzufügen",
    "bt_open_photo": "Etikettenfoto groß öffnen",
    "bt_show_in_cellar": "Im Keller zeigen",
    "bt_more_actions": "Weitere Aktionen",
    "bt_identical": "{n} identische Flaschen",
    "bt_in_cellars": "{n} Flaschen dieses Weins in Ihren Kellern",
    "bt_only_one": "Die einzige Flasche dieses Weins",
    "bt_find_all": "Alle finden",
    "bt_stars": "{n} von 5 Sternen",
    "bt_needs_details_hint": "Bei dieser Flasche fehlen Typ, Erzeuger oder Jahrgang. Ergänzen Sie sie, damit Sie sie leicht wiederfinden.",
    "bt_details": "Details",
    "bt_front_row_pos": "Vordere Reihe · Position {pos}",
    "bt_back_row_pos": "Hintere Reihe · Position {pos}",
    "bt_photo_missing": "Etikettenfoto nicht verfügbar",
    "bt_photo_missing_sub": "Das gespeicherte Foto kann gerade nicht geladen werden.",
    "bt_replace_photo": "Foto ersetzen",
    "slot_empty_label": "Freier Platz, Flasche hinzufügen: {loc}",
    "loc_front_pos": "{cellar}, {shelf}, vordere Reihe, Position {pos}",
    "loc_back_pos": "{cellar}, {shelf}, hintere Reihe, Position {pos}",
    "sheet_add_title": "Flasche hinzufügen",
    "sheet_editing": "Bearbeiten",
    "sheet_sec_label": "Etikett",
    "sheet_sec_wine": "Der Wein",
    "sheet_sec_place": "Lagerplatz",
    "sheet_more": "Weitere Details",
    "sheet_more_hint": "Region, Preis, Trinkfenster, Bewertung, Notizen",
    "sheet_more_filled": "{n} ausgefüllt",
    "sheet_take_photo": "Foto aufnehmen",
    "sheet_upload_photo": "Etikettenfoto hochladen",
    "sheet_choose_library": "Aus Mediathek wählen",
    "sheet_type_instead": "Lieber eintippen",
    "sheet_scan_barcode": "SAQ-Barcode scannen",
    "sheet_photo_title": "Etikett fotografieren",
    "sheet_photo_title_plain": "Etikettenfoto hinzufügen",
    "sheet_photo_sub_ai": "Wir lesen Name, Erzeuger und Jahrgang für Sie aus.",
    "sheet_photo_sub": "Mit Etikettenfoto finden Sie die Flasche im Regal sofort.",
    "sheet_photo_drop": "oder ein Bild hierher ziehen",
    "sheet_photo_ready": "Etikettenfoto",
    "sheet_photo_replace": "Ersetzen",
    "sheet_photo_rotate": "Drehen",
    "sheet_photo_remove": "Entfernen",
    "sheet_photo_read": "Etikett auslesen",
    "sheet_st_preparing": "Foto wird vorbereitet…",
    "sheet_st_uploading": "Wird hochgeladen…",
    "sheet_st_reading": "Etikett wird gelesen…",
    "sheet_st_barcode": "Barcode wird gelesen…",
    "sheet_note_reading": "Das Etikett wird gelesen. Tippen Sie ruhig weiter: nur leere Felder werden ausgefüllt.",
    "sheet_note_ai_one": "{n} Angabe vom Etikett übernommen. Bitte kurz prüfen.",
    "sheet_note_ai_other": "{n} Angaben vom Etikett übernommen. Bitte kurz prüfen.",
    "sheet_note_cellar_one": "{n} Angabe von {name} aus Ihrem Keller übernommen.",
    "sheet_note_cellar_other": "{n} Angaben von {name} aus Ihrem Keller übernommen.",
    "sheet_note_none": "Auf dem Etikett wurde nichts Neues gefunden.",
    "sheet_note_fail": "Dieses Etikett konnte nicht automatisch gelesen werden. Bitte füllen Sie die Angaben unten aus.",
    "undo": "Rückgängig",
    "undone": "Rückgängig gemacht",
    "sheet_mark_ai": "KI",
    "sheet_mark_cellar": "Aus dem Keller",
    "sheet_name_ph": "z. B. Barolo, Château Margaux…",
    "sheet_in_cellar": "{n} im Keller",
    "sheet_had_before": "Schon gehabt",
    "sheet_dup": "Sie haben bereits {n} Flaschen dieses Weins · {where}",
    "sheet_type_unset": "Weiß nicht",
    "sheet_window": "Trinkfenster",
    "sheet_from": "Ab",
    "sheet_to": "Bis",
    "sheet_win_none": "Tragen Sie die Jahre ein, um zu sehen, wann er trinkreif ist.",
    "sheet_win_young": "Zu jung · trinkreif ab {y}",
    "sheet_win_ready": "Trinkreif · bis {y}",
    "sheet_win_peak": "Dieses Jahr auf dem Höhepunkt",
    "sheet_win_past": "Über dem Höhepunkt seit {y}",
    "sheet_rating_none": "Keine",
    "sheet_link": "Produktlink",
    "sheet_barcode": "Barcode",
    "sheet_lookup": "Nachschlagen",
    "pick_bottles": "Anzahl Flaschen",
    "pick_qty_less": "Eine Flasche weniger",
    "pick_qty_more": "Eine Flasche mehr",
    "pick_free_one": "{n} frei",
    "pick_free_other": "{n} frei",
    "pick_full": "Voll",
    "pick_hint": "Tippen Sie auf einen freien Platz, um den Lagerplatz zu wählen.",
    "pick_hint_n": "Füllt der Reihe nach {n} freie Plätze, beginnend bei dem angetippten.",
    "pick_hint_edit": "Tippen Sie auf einen freien Platz, um die Flasche beim Speichern dorthin zu stellen.",
    "sheet_plan_n": "{n} Flaschen · {where}",
    "pick_move_from": "Wird verschoben von {from}",
    "pick_occupied": "Belegt · {name}",
    "pick_slot_free": "{shelf}, {lane}, Position {pos}, frei",
    "pick_slot_current": "{shelf}, {lane}, Position {pos}, aktueller Platz",
    "pick_no_free": "Alle Plätze sind belegt.",
    "pick_no_free_sub": "Fügen Sie ein Regal oder einen Keller hinzu und legen Sie dann die Flasche an.",
    "pick_add_shelves_to": "Regale zu {name} hinzufügen",
    "pick_new_cellar": "Neuer Keller",
    "sheet_only_name": "Nur der Name ist Pflicht.",
    "sheet_save_n": "{n} Flaschen speichern",
    "sheet_save_next": "Speichern & nächste",
    "sheet_save_changes": "Änderungen speichern",
    "sheet_saving": "Wird gespeichert…",
    "sheet_saving_n": "Speichere {i} von {n}…",
    "sheet_saved_one": "{name} hinzugefügt · {where}",
    "sheet_saved_n": "{n} Flaschen hinzugefügt · {where}",
    "sheet_saved_edit": "Änderungen gespeichert",
    "sheet_err_name": "Geben Sie dem Wein einen Namen.",
    "sheet_err_year": "Verwenden Sie eine vierstellige Jahreszahl.",
    "sheet_err_window": "Das Fenster kann nicht vor seinem Beginn enden.",
    "sheet_err_no_slot": "Wählen Sie einen freien Platz.",
    "sheet_err_slot_taken": "Dieser Platz ist durch „{name}“ belegt. Wählen Sie einen anderen.",
    "sheet_err_slot_moved": "Dieser Platz wurde gerade belegt, daher haben wir den nächsten freien gewählt. Tippen Sie erneut auf Speichern.",
    "sheet_err_not_enough_one": "Nur {n} freier Platz in {cellar}.",
    "sheet_err_not_enough_other": "Nur {n} freie Plätze in {cellar}.",
    "sheet_err_partial_left_one": "{i} von {total} gespeichert. {error} Speichern Sie erneut, um die letzte hinzuzufügen.",
    "sheet_err_partial_left_other": "{i} von {total} gespeichert. {error} Speichern Sie erneut, um die übrigen {n} hinzuzufügen.",
    "sheet_err_number": "Geben Sie eine Zahl ein.",
    "sheet_err_photo_format": "Dieses Fotoformat wird hier nicht unterstützt. Versuchen Sie JPEG oder PNG.",
    "sheet_err_photo_upload": "Das Foto konnte nicht hochgeladen werden. {error}",
    "sheet_err_save": "Speichern fehlgeschlagen: {error}",
    "move_action": "Umstellen",
    "move_moving": "{name} wird umgestellt",
    "move_hint": "Tippen Sie auf einen freien Platz oder auf eine Flasche zum Tauschen.",
    "move_hint_kb": "Esc bricht ab.",
    "move_done": "{name} nach {where} umgestellt",
    "move_swapped": "{a} und {b} getauscht",
    "move_failed": "Die Flasche konnte nicht umgestellt werden: {error}",
    "builder_title_new": "Neuer Keller",
    "builder_name_ph": "z. B. Weinkühlschrank Küche",
    "builder_finish": "Gehäuse-Finish",
    "builder_quick": "Schnellstart",
    "builder_tpl_fridge": "Weinkühlschrank",
    "builder_tpl_stagger": "Versetztes Regal",
    "builder_tpl_rack": "Offenes Regal",
    "builder_tpl_sub": "{s} Regale × {f}",
    "builder_tpl_sub2": "{s} Regale × {f} + {b} dahinter",
    "builder_shelves_hint": "Oberstes Regal zuerst. Die hintere Reihe steht versetzt hinter der vorderen, damit jedes Etikett sichtbar bleibt.",
    "builder_front_slots": "Plätze vorne",
    "builder_back_slots": "Plätze hinten",
    "builder_fewer": "Weniger Plätze ({lane})",
    "builder_more": "Mehr Plätze ({lane})",
    "builder_stored": "{n} belegt",
    "builder_up": "Regal nach oben",
    "builder_down": "Regal nach unten",
    "builder_remove": "Regal entfernen",
    "builder_remove_blocked_one": "Stellen Sie zuerst die Flasche auf diesem Regal um.",
    "builder_remove_blocked_other": "Stellen Sie zuerst die {n} Flaschen auf diesem Regal um.",
    "builder_min_hint": "Auf Platz {n} steht eine Flasche.",
    "builder_preview": "Vorschau",
    "builder_legend_stored": "Belegt",
    "builder_legend_free": "Frei",
    "builder_save": "Keller speichern",
    "builder_create": "Keller anlegen",
    "builder_saved": "Keller gespeichert",
    "sheet_wait_photo": "Warte auf das Foto…",
    "builder_position": "Position unter Ihren Kellern",
    "builder_pos_first": "An erster Stelle",
    "builder_pos_after": "Nach {name}",
    "builder_order_failed": "Keller gespeichert, aber die Reihenfolge der anderen Keller konnte nicht aktualisiert werden.",
    "builder_fin_bordeaux": "Bordeaux-Lack",
    "builder_fin_oak": "Eiche",
    "builder_fin_olive": "Oliv",
    "builder_fin_azure": "Azur",
    "builder_fin_slate": "Schiefer",
    "builder_fin_steel": "Gebürsteter Stahl",
    "builder_fin_custom": "Eigene Farbe",
    "builder_shelves_one": "{n} Regal",
    "builder_shelves_other": "{n} Regale",
    "builder_slots_one": "{n} Platz",
    "builder_slots_other": "{n} Plätze",
    "builder_fin_graphite": "Graphit",
    "find_placeholder": "Wein, Erzeuger, Jahrgang, Keller suchen…",
    "find_placeholder_short": "Im Keller suchen…",
    "find_search_label": "Flaschen suchen",
    "find_views_label": "Ansicht",
    "find_tab_bottles": "Flaschen",
    "find_filters": "Filter",
    "find_filters_n_one": "Filter, {n} ausgewählt",
    "find_filters_n_other": "Filter, {n} ausgewählt",
    "find_clear_all": "Alles zurücksetzen",
    "find_clear_search": "Suche löschen",
    "find_status_group": "Trinkreife",
    "find_type_group": "Weinart",
    "find_country_group": "Land",
    "find_cellar_group": "Keller",
    "find_drink_now_hint": "Auf oder über dem Höhepunkt: zuerst öffnen",
    "find_remove": "Filter entfernen: {x}",
    "find_matches_one": "{n} Treffer",
    "find_matches_other": "{n} Treffer",
    "find_no_match": "Kein Treffer",
    "find_in_cellar": "in {name}",
    "find_in_cellars_one": "in {n} Keller",
    "find_in_cellars_other": "in {n} Kellern",
    "find_more_n": "+{n} weitere",
    "find_more_label": "Alle {n} Treffer unter „Alle Flaschen“ zeigen",
    "find_step_hint": "nächster Treffer",
    "find_matches_label": "Passende Flaschen",
    "find_no_results_q": "Keine Flasche passt zu „{q}“",
    "find_no_results_f": "Keine Flasche passt zu diesen Filtern",
    "find_did_you_mean": "Meinten Sie {x}?",
    "find_try_other": "Prüfen Sie die Schreibweise oder suchen Sie nach Erzeuger, Jahrgang oder Keller.",
    "find_found_one": "{n} Flasche gefunden",
    "find_found_other": "{n} Flaschen gefunden",
    "find_found_none": "Keine Flasche gefunden",
    "find_state_match": "passt",
    "find_state_other": "passt nicht",
    "find_show_one": "{n} Flasche zeigen",
    "find_show_other": "{n} Flaschen zeigen",
    "find_crumb_shelf": "{name} (Regal {n})",
    "find_crumb_back": "Hinten #{pos}",
    "find_crumb_front": "Vorne #{pos}",
    "find_crumb_pos": "#{pos}",
    "consume_done": "Getrunken: {name}",
    "consume_restored": "Wieder an ihrem Platz: {name}",
    "consume_failed": "{name} konnte nicht als getrunken markiert werden: {error}",
    "consume_undo_taken": "{name} konnte nicht zurückgestellt werden: Der Platz ist inzwischen belegt. Die Flasche bleibt unter „Zuletzt getrunken“ in der Statistik.",
    "consume_undo_failed": "{name} konnte nicht zurückgestellt werden: {error}",
    "delete_done": "Gelöscht: {name}",
    "delete_failed": "{name} konnte nicht gelöscht werden: {error}",
    "list_empty_body": "Fügen Sie Ihre erste Flasche hinzu: Etikett fotografieren und Platz wählen.",
    "list_sort_by": "Sortieren nach",
    "list_reverse": "Reihenfolge umkehren",
    "list_title_one": "{n} Flasche",
    "list_title_other": "{n} Flaschen",
    "list_title_of_one": "{shown} von {n} Flasche",
    "list_title_of_other": "{shown} von {n} Flaschen",
    "stats_empty_title": "Noch keine Statistik",
    "stats_empty_body": "Fügen Sie Flaschen hinzu, um zu sehen, was Sie wann trinken sollten und was Ihr Keller enthält.",
    "stats_free_one": "{n} freier Platz",
    "stats_free_other": "{n} freie Plätze",
    "stats_producers_one": "{n} Erzeuger",
    "stats_producers_other": "{n} Erzeuger",
    "stats_oldest": "Ältester Jahrgang: {y}",
    "stats_per_bottle": "≈ {v} pro Flasche",
    "stats_open_hint": "Öffnet „Alle Flaschen“ mit nur diesen Flaschen.",
    "stats_window_title": "Trinkfenster",
    "stats_window_sub": "Flaschen in ihrem Trinkfenster, Jahr für Jahr",
    "stats_window_none": "Keine Flasche hat ein Trinkfenster in den kommenden Jahren.",
    "stats_window_caption": "Flaschen im Trinkfenster pro Jahr, nach Weinart",
    "stats_now": "jetzt",
    "stats_year_bottles_one": "{year}: {n} Flasche",
    "stats_year_bottles_other": "{year}: {n} Flaschen",
    "stats_now_empty": "Nichts eilt: Keine Flasche ist auf oder über dem Höhepunkt.",
    "stats_now_all_one": "{n} Flasche unter „Alle Flaschen“ zeigen",
    "stats_now_all_other": "Alle {n} unter „Alle Flaschen“ zeigen",
    "stats_bottle_word_one": "Flasche",
    "stats_bottle_word_other": "Flaschen",
    "ready_to_drink": "Bereit zum Trinken",
    "find_ready_to_drink_hint": "Trinkreif oder auf dem Höhepunkt: gut zum Öffnen",
    "toast_undo_keys": "Mit {keys} rückgängig machen",
    "stats_recent_title": "Zuletzt getrunken",
    "stats_recent_sub": "Versehentlich als getrunken markiert? Stellen Sie die Flasche an ihren Platz zurück.",
    "stats_recent_on": "Getrunken am {date}",
    "stats_put_back": "Zurückstellen",
    "stats_put_back_label": "{name} an ihren Platz zurückstellen",
    "stats_recent_taken": "Ihr Platz ist belegt",
    "stats_recent_gone": "Ihr Regal existiert nicht mehr",
    "err_consumed_missing": "Diese Flasche ist nicht mehr im Verlauf. Sie wurde möglicherweise an anderer Stelle zurückgestellt oder gelöscht.",
    "consume_undo_noshelf": "{name} konnte nicht zurückgestellt werden: Das Regal existiert nicht mehr.",
    "find_words_unfiltered_one": "{n} Flasche passt ohne die Filter zu „{q}“.",
    "find_words_unfiltered_other": "{n} Flaschen passen ohne die Filter zu „{q}“.",
    "list_sorted_asc": "aufsteigend sortiert",
    "list_sorted_desc": "absteigend sortiert"
  },
  "es": {
    "cellars": "Bodegas",
    "compact": "Compacto",
    "all_bottles": "Todas las botellas",
    "stats": "Estadísticas",
    "wine_name": "Nombre del vino",
    "producer": "Productor",
    "varietal": "Variedad",
    "region": "Región",
    "country": "País",
    "vintage": "Añada",
    "type": "Tipo",
    "price": "Precio",
    "rating": "Valoración",
    "notes": "Notas",
    "shelf": "Estante",
    "front": "Delante",
    "back": "Detrás",
    "consume": "Consumir",
    "delete": "Eliminar",
    "save": "Guardar",
    "cancel": "Cancelar",
    "close": "Cerrar",
    "serving_temp": "Temperatura de servicio",
    "alcohol_pct": "Graduación alcohólica",
    "not_specified": "No especificado",
    "cleanup_btn": "Limpieza",
    "cleanup_title": "Herramienta de búsqueda y limpieza de duplicados",
    "cleanup_search_btn": "Buscar duplicados",
    "cleanup_merge_all": "Fusionar todo",
    "cleanup_no_duplicates": "¡No se detectaron duplicados de sintaxis!",
    "cleanup_searching": "Analizando los datos de la bodega...",
    "cleanup_welcome": "Haga clic en el botón de arriba para iniciar la búsqueda y analizar los datos de su bodega.",
    "updating_field": "Actualizando campo...",
    "update_failed": "Error al actualizar: ",
    "merging_all_selections": "Fusionando todas las selecciones...",
    "global_error": "Error: ",
    "bottle_s": "botella(s)",
    "cellar_name_required": "El nombre de la bodega es obligatorio.",
    "add_cellar_short": "+ Bodega",
    "drink_now": "Beber ahora",
    "red": "Tinto",
    "white": "Blanco",
    "rose": "Rosado",
    "sparkling": "Espumoso",
    "orange": "Naranja",
    "sweet": "Dulce",
    "other": "Otro",
    "wine": "Vino",
    "region_varietal": "Región/Variedad",
    "total_bottles": "Botellas totales",
    "different_wines": "Vinos diferentes",
    "average_age": "Edad media",
    "years": "años",
    "total_value": "Valor total",
    "distribution_by_type": "Distribución por tipo",
    "top_countries_of_origin": "Principales países de origen",
    "unnamed_wine": "Vino sin nombre",
    "drinking_window": "Ventana de consumo",
    "from_prefix": "De ",
    "to_infix": " a ",
    "no_data": "Sin datos",
    "physical_location": "Ubicación física",
    "copy": "Copiar",
    "edit": "Editar",
    "cellar": "Bodega",
    "view": "Ver",
    "shelf_name": "Nombre del estante",
    "edit_cellar": "Editar bodega",
    "cellar_name": "Nombre",
    "shelves": "Estantes",
    "add_shelf": "Añadir estante",
    "no_barcode_found": "No se encontró ningún código de barras.",
    "barcode_extraction_failed": "Error al extraer el código de barras.",
    "confirm_reanalyze": "Este vino ya se analizó correctamente. ¿Desea sobrescribir los datos y volver a ejecutar el análisis?",
    "provide_barcode_or_label": "Introduzca un código de barras (dígitos) o suba una imagen de la etiqueta antes de iniciar el análisis.",
    "confirm_merge_all": "¿Desea fusionar y estandarizar todas las sintaxis listadas?",
    "scanner_error": "Error del escáner: ",
    "file_not_image": "El archivo seleccionado no es una imagen.",
    "shelf_front_capacity_min": "Cada estante debe tener una capacidad delantera de al menos 1.",
    "add_at_least_one_shelf": "Añada al menos un estante.",
    "cellar_save_failed": "Error al guardar la bodega: ",
    "confirm_delete_cellar": "¿Eliminar esta bodega y todas sus botellas?",
    "bottle_copied_to_memory": "Botella copiada en memoria. Haga clic en una posición vacía para pegar.",
    "cellar_needs_shelf": "Una bodega debe tener al menos un estante.",
    "unknown_error": "error desconocido",
    "clear_filters": "Borrar filtros",
    "no_bottles_yet": "Todavía no hay botellas en sus bodegas.",
    "add_bottle_short": "+ Botella",
    "all_slots_full": "Todos los espacios de sus bodegas están ocupados. Libere un espacio, o añada un estante o una bodega, para añadir una botella.",
    "wine_details": "Detalles del vino",
    "cellar_editor": "Editor de bodega",
    "bottle_editor": "Editor de botella",
    "unknown_cellar": "Bodega desconocida",
    "status_young": "Demasiado joven",
    "status_ready": "Listo",
    "status_peak": "En su apogeo",
    "status_past": "Pasado su apogeo",
    "location": "Ubicación",
    "no_shelves": "No hay estantes configurados.",
    "add_first_cellar": "¡Añada una primera bodega para empezar!",
    "discard_title": "¿Descartar los cambios?",
    "discard_body": "Se perderá lo que ha escrito en este formulario.",
    "keep_editing": "Seguir editando",
    "discard": "Descartar",
    "delete_bottle_title": "¿Eliminar «{name}»?",
    "delete_bottle_body": "La botella se elimina definitivamente y no pasa al historial. Esta acción no se puede deshacer.",
    "delete_cellar_title": "¿Eliminar la bodega «{name}»?",
    "delete_cellar_body": "También se eliminarán sus {bottles} botella(s), {history} entrada(s) del historial y sus fotos de etiqueta. Esta acción no se puede deshacer.",
    "delete_cellar_body_empty": "La bodega está vacía. Esta acción no se puede deshacer.",
    "delete_cellar_confirm": "Eliminar bodega",
    "merge_all_title": "¿Fusionar {n} par(es) de grafías?",
    "merge_all_body": "{m} botella(s) tomarán la grafía seleccionada. Los pares por revisar no se modifican.",
    "action_failed": "No se pudo completar: {error}",
    "shelf_n": "Estante {n}",
    "shelf_empty": "Vacío",
    "err_slot_taken_server": "Esa posición ya está ocupada. Elija otra.",
    "cleanup_check_pair": "Grafía parecida, pero puede ser otro nombre. Revíselo antes de fusionar; «Fusionar todo» lo omite.",
    "pasted_details": "Datos copiados de «{name}». Revíselos y guarde.",
    "err_shelf_missing": "El estante seleccionado ya no existe.",
    "err_no_back_lane": "Este estante no tiene fila trasera.",
    "err_position_out_of_range": "Esa posición supera la capacidad de esta fila del estante.",
    "err_rating_range": "La valoración debe estar entre 0 y 5.",
    "err_shelf_has_bottles": "No se puede quitar un estante que aún tiene botellas. Mueva primero sus botellas.",
    "err_shrink_front": "Una fila delantera no puede ser más pequeña que su última posición ocupada. Mueva primero esas botellas.",
    "err_shrink_back": "Una fila trasera no puede ser más pequeña que su última posición ocupada. Mueva primero esas botellas.",
    "err_remove_back_lane": "La fila trasera todavía tiene botellas, así que no se puede quitar. Muévalas primero.",
    "err_bottle_missing": "Esta botella ya no existe. Puede que se haya eliminado en otro lugar.",
    "err_no_entry": "La integración Wine Cellar Manager no está configurada.",
    "err_shelf_front_min": "«{shelf}» tiene una botella en la posición delantera {n}, así que necesita al menos {n} posiciones delanteras.",
    "err_shelf_back_min": "«{shelf}» tiene una botella en la posición trasera {n}, así que necesita al menos {n} posiciones traseras.",
    "depth_back_row": "Fila trasera",
    "depth_behind": "Detrás de {names}",
    "depth_behind_aria": "detrás de {names}",
    "depth_move_first": "sáquela primero",
    "depth_move_first_n": "sáquelas primero",
    "depth_front_reach": "Fila delantera: al alcance de la mano",
    "depth_back_clear": "Fila trasera: nada delante",
    "depth_top_view": "Vista superior",
    "depth_shelf_of": "Estante {n} de {total}",
    "depth_more_left": "{count} más a la izquierda",
    "depth_more_right": "{count} más a la derecha",
    "depth_more_slots_left": "Más posiciones a la izquierda",
    "depth_more_slots_right": "Más posiciones a la derecha",
    "depth_pull": "Sacar {shelf} para ver la fila trasera ({count} botellas)",
    "depth_push": "Volver a meter {shelf}",
    "depth_shelf_named": "Estante {n} · {name}",
    "depth_plan_back": "Detrás · pared",
    "depth_plan_front": "Delante · puerta",
    "depth_blocker": "{name} (delante, posición {pos})",
    "depth_no_slots": "Este estante aún no tiene posiciones",
    "bt_needs_details": "Faltan datos",
    "bt_add_details": "Añadir datos",
    "bt_no_window": "Sin ventana",
    "bt_no_window_long": "Sin ventana de consumo",
    "bt_add_label_photo": "Añadir foto de la etiqueta",
    "bt_open_photo": "Abrir la foto de la etiqueta",
    "bt_show_in_cellar": "Mostrar en la bodega",
    "bt_more_actions": "Más acciones",
    "bt_identical": "{n} botellas idénticas",
    "bt_in_cellars": "{n} botellas de este vino en sus bodegas",
    "bt_only_one": "La única botella de este vino",
    "bt_find_all": "Buscar todas",
    "bt_stars": "{n} de 5 estrellas",
    "bt_needs_details_hint": "A esta botella le falta el tipo, el productor o la añada. Añádalos para encontrarla fácilmente.",
    "bt_details": "Detalles",
    "bt_front_row_pos": "Fila delantera · posición {pos}",
    "bt_back_row_pos": "Fila trasera · posición {pos}",
    "bt_photo_missing": "Foto de la etiqueta no disponible",
    "bt_photo_missing_sub": "La foto guardada no se puede cargar ahora.",
    "bt_replace_photo": "Reemplazar foto",
    "slot_empty_label": "Posición libre, añadir una botella: {loc}",
    "loc_front_pos": "{cellar}, {shelf}, fila delantera, posición {pos}",
    "loc_back_pos": "{cellar}, {shelf}, fila trasera, posición {pos}",
    "sheet_add_title": "Añadir botella",
    "sheet_editing": "Editando",
    "sheet_sec_label": "Etiqueta",
    "sheet_sec_wine": "El vino",
    "sheet_sec_place": "Dónde va",
    "sheet_more": "Más detalles",
    "sheet_more_hint": "Región, precio, ventana de consumo, valoración, notas",
    "sheet_more_filled": "{n} completados",
    "sheet_take_photo": "Hacer foto",
    "sheet_upload_photo": "Subir foto de la etiqueta",
    "sheet_choose_library": "Elegir de la galería",
    "sheet_type_instead": "Escribirlo a mano",
    "sheet_scan_barcode": "Escanear código SAQ",
    "sheet_photo_title": "Fotografíe la etiqueta",
    "sheet_photo_title_plain": "Añadir una foto de la etiqueta",
    "sheet_photo_sub_ai": "Leeremos el nombre, el productor y la añada por usted.",
    "sheet_photo_sub": "Con una foto de la etiqueta, la botella se reconoce fácilmente en el estante.",
    "sheet_photo_drop": "o suelte una imagen aquí",
    "sheet_photo_ready": "Foto de la etiqueta",
    "sheet_photo_replace": "Reemplazar",
    "sheet_photo_rotate": "Girar",
    "sheet_photo_remove": "Quitar",
    "sheet_photo_read": "Leer etiqueta",
    "sheet_st_preparing": "Preparando la foto…",
    "sheet_st_uploading": "Subiendo…",
    "sheet_st_reading": "Leyendo la etiqueta…",
    "sheet_st_barcode": "Leyendo el código de barras…",
    "sheet_note_reading": "Leyendo la etiqueta. Puede seguir escribiendo: solo se rellenan los campos vacíos.",
    "sheet_note_ai_one": "Se completó {n} dato desde la etiqueta. Revíselo un momento.",
    "sheet_note_ai_other": "Se completaron {n} datos desde la etiqueta. Revíselos un momento.",
    "sheet_note_cellar_one": "Se completó {n} dato desde {name} de su bodega.",
    "sheet_note_cellar_other": "Se completaron {n} datos desde {name} de su bodega.",
    "sheet_note_none": "No se encontró nada nuevo en la etiqueta.",
    "sheet_note_fail": "No se pudo leer esta etiqueta automáticamente. Complete los datos abajo.",
    "undo": "Deshacer",
    "undone": "Deshecho",
    "sheet_mark_ai": "IA",
    "sheet_mark_cellar": "De la bodega",
    "sheet_name_ph": "p. ej., Barolo, Château Margaux…",
    "sheet_in_cellar": "{n} en la bodega",
    "sheet_had_before": "Ya la tuvo",
    "sheet_dup": "Ya tiene {n} botellas de este vino · {where}",
    "sheet_type_unset": "No lo sé",
    "sheet_window": "Ventana de consumo",
    "sheet_from": "Desde",
    "sheet_to": "Hasta",
    "sheet_win_none": "Añada los años para ver cuándo estará listo.",
    "sheet_win_young": "Demasiado joven · se abre en {y}",
    "sheet_win_ready": "Listo para beber · hasta {y}",
    "sheet_win_peak": "En su apogeo este año",
    "sheet_win_past": "Pasado su apogeo desde {y}",
    "sheet_rating_none": "Ninguna",
    "sheet_link": "Enlace del producto",
    "sheet_barcode": "Código de barras",
    "sheet_lookup": "Buscar",
    "pick_bottles": "Cuántas botellas",
    "pick_qty_less": "Una botella menos",
    "pick_qty_more": "Una botella más",
    "pick_free_one": "{n} libre",
    "pick_free_other": "{n} libres",
    "pick_full": "Lleno",
    "pick_hint": "Toque una posición libre para elegir dónde va.",
    "pick_hint_n": "Ocupa {n} posiciones libres en orden, empezando por la que toque.",
    "pick_hint_edit": "Toque una posición libre para mover la botella allí al guardar.",
    "sheet_plan_n": "{n} botellas · {where}",
    "pick_move_from": "Se mueve desde {from}",
    "pick_occupied": "Ocupada · {name}",
    "pick_slot_free": "{shelf}, {lane}, posición {pos}, libre",
    "pick_slot_current": "{shelf}, {lane}, posición {pos}, posición actual",
    "pick_no_free": "Todas las posiciones están ocupadas.",
    "pick_no_free_sub": "Añada un estante o una bodega para hacer sitio y luego añada la botella.",
    "pick_add_shelves_to": "Añadir estantes a {name}",
    "pick_new_cellar": "Nueva bodega",
    "sheet_only_name": "Solo el nombre es obligatorio.",
    "sheet_save_n": "Guardar {n} botellas",
    "sheet_save_next": "Guardar y añadir otra",
    "sheet_save_changes": "Guardar cambios",
    "sheet_saving": "Guardando…",
    "sheet_saving_n": "Guardando {i} de {n}…",
    "sheet_saved_one": "{name} añadida · {where}",
    "sheet_saved_n": "{n} botellas añadidas · {where}",
    "sheet_saved_edit": "Cambios guardados",
    "sheet_err_name": "Ponga un nombre al vino.",
    "sheet_err_year": "Use un año de 4 cifras.",
    "sheet_err_window": "La ventana no puede terminar antes de empezar.",
    "sheet_err_no_slot": "Elija una posición libre.",
    "sheet_err_slot_taken": "Esa posición la ocupa «{name}». Elija otra.",
    "sheet_err_slot_moved": "Esa posición se acaba de ocupar, así que elegimos la siguiente libre. Pulse Guardar otra vez.",
    "sheet_err_not_enough_one": "Solo hay {n} posición libre en {cellar}.",
    "sheet_err_not_enough_other": "Solo hay {n} posiciones libres en {cellar}.",
    "sheet_err_partial_left_one": "Guardadas {i} de {total}. {error} Guarde otra vez para añadir la última.",
    "sheet_err_partial_left_other": "Guardadas {i} de {total}. {error} Guarde otra vez para añadir las otras {n}.",
    "sheet_err_number": "Introduzca un número.",
    "sheet_err_photo_format": "Este formato de foto no es compatible aquí. Pruebe con JPEG o PNG.",
    "sheet_err_photo_upload": "No se pudo subir la foto. {error}",
    "sheet_err_save": "No se pudo guardar: {error}",
    "move_action": "Mover",
    "move_moving": "Moviendo {name}",
    "move_hint": "Toque una posición vacía o una botella para intercambiarlas.",
    "move_hint_kb": "Esc cancela.",
    "move_done": "{name} movida a {where}",
    "move_swapped": "{a} y {b} intercambiadas",
    "move_failed": "No se pudo mover la botella: {error}",
    "builder_title_new": "Nueva bodega",
    "builder_name_ph": "p. ej., Vinoteca de la cocina",
    "builder_finish": "Acabado del marco",
    "builder_quick": "Inicio rápido",
    "builder_tpl_fridge": "Vinoteca",
    "builder_tpl_stagger": "Botellero escalonado",
    "builder_tpl_rack": "Botellero abierto",
    "builder_tpl_sub": "{s} estantes × {f}",
    "builder_tpl_sub2": "{s} estantes × {f} + {b} detrás",
    "builder_shelves_hint": "Primero el estante superior. La fila trasera queda detrás de la delantera, desplazada para que se vean todas las etiquetas.",
    "builder_front_slots": "Posiciones delanteras",
    "builder_back_slots": "Posiciones traseras",
    "builder_fewer": "Menos posiciones ({lane})",
    "builder_more": "Más posiciones ({lane})",
    "builder_stored": "{n} ocupadas",
    "builder_up": "Subir estante",
    "builder_down": "Bajar estante",
    "builder_remove": "Quitar estante",
    "builder_remove_blocked_one": "Primero mueva la botella de este estante.",
    "builder_remove_blocked_other": "Primero mueva las {n} botellas de este estante.",
    "builder_min_hint": "Hay una botella en la posición {n}.",
    "builder_preview": "Vista previa",
    "builder_legend_stored": "Ocupada",
    "builder_legend_free": "Libre",
    "builder_save": "Guardar bodega",
    "builder_create": "Crear bodega",
    "builder_saved": "Bodega guardada",
    "sheet_wait_photo": "Esperando la foto…",
    "builder_position": "Posición entre sus bodegas",
    "builder_pos_first": "En primer lugar",
    "builder_pos_after": "Después de {name}",
    "builder_order_failed": "Bodega guardada, pero no se pudo actualizar el orden de las demás bodegas.",
    "builder_fin_bordeaux": "Laca burdeos",
    "builder_fin_oak": "Roble",
    "builder_fin_olive": "Oliva",
    "builder_fin_azure": "Azur",
    "builder_fin_slate": "Pizarra",
    "builder_fin_steel": "Acero cepillado",
    "builder_fin_custom": "Personalizado",
    "builder_shelves_one": "{n} estante",
    "builder_shelves_other": "{n} estantes",
    "builder_slots_one": "{n} posición",
    "builder_slots_other": "{n} posiciones",
    "builder_fin_graphite": "Grafito",
    "find_placeholder": "Buscar vino, productor, añada, bodega…",
    "find_placeholder_short": "Buscar en la bodega…",
    "find_search_label": "Buscar botellas",
    "find_views_label": "Vista",
    "find_tab_bottles": "Botellas",
    "find_filters": "Filtros",
    "find_filters_n_one": "Filtros, {n} seleccionado",
    "find_filters_n_other": "Filtros, {n} seleccionados",
    "find_clear_all": "Quitar todo",
    "find_clear_search": "Borrar búsqueda",
    "find_status_group": "Estado de consumo",
    "find_type_group": "Tipo de vino",
    "find_country_group": "País",
    "find_cellar_group": "Bodega",
    "find_drink_now_hint": "En su apogeo o pasadas: ábralas primero",
    "find_remove": "Quitar filtro: {x}",
    "find_matches_one": "{n} resultado",
    "find_matches_other": "{n} resultados",
    "find_no_match": "Sin resultados",
    "find_in_cellar": "en {name}",
    "find_in_cellars_one": "en {n} bodega",
    "find_in_cellars_other": "en {n} bodegas",
    "find_more_n": "+{n} más",
    "find_more_label": "Ver los {n} resultados en Todas las botellas",
    "find_step_hint": "siguiente resultado",
    "find_matches_label": "Botellas que coinciden",
    "find_no_results_q": "Ninguna botella coincide con «{q}»",
    "find_no_results_f": "Ninguna botella coincide con estos filtros",
    "find_did_you_mean": "¿Quiso decir {x}?",
    "find_try_other": "Revise la ortografía o busque por productor, añada o bodega.",
    "find_found_one": "{n} botella encontrada",
    "find_found_other": "{n} botellas encontradas",
    "find_found_none": "Ninguna botella encontrada",
    "find_state_match": "coincide",
    "find_state_other": "no coincide",
    "find_show_one": "Mostrar {n} botella",
    "find_show_other": "Mostrar {n} botellas",
    "find_crumb_shelf": "{name} (estante {n})",
    "find_crumb_back": "Detrás #{pos}",
    "find_crumb_front": "Delante #{pos}",
    "find_crumb_pos": "#{pos}",
    "consume_done": "Disfrutada: {name}",
    "consume_restored": "De vuelta en su posición: {name}",
    "consume_failed": "No se pudo marcar {name} como consumida: {error}",
    "consume_undo_taken": "No se pudo devolver {name}: su posición ya está ocupada. Sigue en Disfrutadas recientemente, en Estadísticas.",
    "consume_undo_failed": "No se pudo devolver {name}: {error}",
    "delete_done": "Eliminada: {name}",
    "delete_failed": "No se pudo eliminar {name}: {error}",
    "list_empty_body": "Añada su primera botella: fotografíe la etiqueta y elija su posición.",
    "list_sort_by": "Ordenar por",
    "list_reverse": "Invertir orden",
    "list_title_one": "{n} botella",
    "list_title_other": "{n} botellas",
    "list_title_of_one": "{shown} de {n} botella",
    "list_title_of_other": "{shown} de {n} botellas",
    "stats_empty_title": "Aún no hay estadísticas",
    "stats_empty_body": "Añada botellas para ver qué beber, cuándo, y qué guarda su bodega.",
    "stats_free_one": "{n} posición libre",
    "stats_free_other": "{n} posiciones libres",
    "stats_producers_one": "{n} productor",
    "stats_producers_other": "{n} productores",
    "stats_oldest": "Añada más antigua: {y}",
    "stats_per_bottle": "≈ {v} por botella",
    "stats_open_hint": "Abre Todas las botellas mostrando solo estas.",
    "stats_window_title": "Ventana de consumo",
    "stats_window_sub": "Botellas dentro de su ventana de consumo, año por año",
    "stats_window_none": "Ninguna botella tiene ventana de consumo en los próximos años.",
    "stats_window_caption": "Botellas dentro de su ventana de consumo por año y tipo de vino",
    "stats_now": "ahora",
    "stats_year_bottles_one": "{year}: {n} botella",
    "stats_year_bottles_other": "{year}: {n} botellas",
    "stats_now_empty": "Nada urgente: ninguna botella está en su apogeo ni lo ha pasado.",
    "stats_now_all_one": "Ver {n} botella en Todas las botellas",
    "stats_now_all_other": "Ver las {n} en Todas las botellas",
    "stats_bottle_word_one": "botella",
    "stats_bottle_word_other": "botellas",
    "ready_to_drink": "Listo para beber",
    "find_ready_to_drink_hint": "Listas o en su apogeo: buenas para abrir",
    "toast_undo_keys": "Pulse {keys} para deshacer",
    "stats_recent_title": "Disfrutadas recientemente",
    "stats_recent_sub": "¿Marcada como disfrutada por error? Devuelva la botella a su posición.",
    "stats_recent_on": "Disfrutada el {date}",
    "stats_put_back": "Devolver",
    "stats_put_back_label": "Devolver {name} a su posición",
    "stats_recent_taken": "Su posición está ocupada",
    "stats_recent_gone": "Su estante ya no existe",
    "err_consumed_missing": "Esta botella ya no está en el historial. Puede que se haya devuelto o eliminado en otro lugar.",
    "consume_undo_noshelf": "No se pudo devolver {name}: su estante ya no existe.",
    "find_words_unfiltered_one": "{n} botella coincide con «{q}» sin los filtros.",
    "find_words_unfiltered_other": "{n} botellas coinciden con «{q}» sin los filtros.",
    "list_sorted_asc": "orden ascendente",
    "list_sorted_desc": "orden descendente"
  },
  "it": {
    "cellars": "Cantine",
    "compact": "Compatto",
    "all_bottles": "Tutte le bottiglie",
    "stats": "Statistiche",
    "wine_name": "Nome del vino",
    "producer": "Produttore",
    "varietal": "Vitigno",
    "region": "Regione",
    "country": "Paese",
    "vintage": "Annata",
    "type": "Tipo",
    "price": "Prezzo",
    "rating": "Valutazione",
    "notes": "Note",
    "shelf": "Ripiano",
    "front": "Davanti",
    "back": "Dietro",
    "consume": "Consuma",
    "delete": "Elimina",
    "save": "Salva",
    "cancel": "Annulla",
    "close": "Chiudi",
    "serving_temp": "Temperatura di servizio",
    "alcohol_pct": "Gradazione alcolica",
    "not_specified": "Non specificato",
    "cleanup_btn": "Pulizia",
    "cleanup_title": "Strumento di ricerca e pulizia duplicati",
    "cleanup_search_btn": "Cerca duplicati",
    "cleanup_merge_all": "Unisci tutto",
    "cleanup_no_duplicates": "Nessun duplicato di sintassi rilevato!",
    "cleanup_searching": "Analisi dei dati della cantina...",
    "cleanup_welcome": "Fai clic sul pulsante qui sopra per avviare la ricerca e analizzare i dati della tua cantina.",
    "updating_field": "Aggiornamento del campo...",
    "update_failed": "Aggiornamento non riuscito: ",
    "merging_all_selections": "Unione di tutte le selezioni...",
    "global_error": "Errore: ",
    "bottle_s": "bottiglia/e",
    "cellar_name_required": "Il nome della cantina è obbligatorio.",
    "add_cellar_short": "+ Cantina",
    "drink_now": "Da bere ora",
    "red": "Rosso",
    "white": "Bianco",
    "rose": "Rosato",
    "sparkling": "Spumante",
    "orange": "Orange",
    "sweet": "Dolce",
    "other": "Altro",
    "wine": "Vino",
    "region_varietal": "Regione/Vitigno",
    "total_bottles": "Bottiglie totali",
    "different_wines": "Vini diversi",
    "average_age": "Età media",
    "years": "anni",
    "total_value": "Valore totale",
    "distribution_by_type": "Distribuzione per tipo",
    "top_countries_of_origin": "Principali paesi di origine",
    "unnamed_wine": "Vino senza nome",
    "drinking_window": "Finestra di consumo",
    "from_prefix": "Dal ",
    "to_infix": " al ",
    "no_data": "Nessun dato",
    "physical_location": "Posizione fisica",
    "copy": "Copia",
    "edit": "Modifica",
    "cellar": "Cantina",
    "view": "Visualizza",
    "shelf_name": "Nome del ripiano",
    "edit_cellar": "Modifica cantina",
    "cellar_name": "Nome",
    "shelves": "Ripiani",
    "add_shelf": "Aggiungi ripiano",
    "no_barcode_found": "Nessun codice a barre trovato.",
    "barcode_extraction_failed": "Estrazione del codice a barre non riuscita.",
    "confirm_reanalyze": "Questo vino è già stato analizzato con successo. Sovrascrivere i dati ed eseguire di nuovo l'analisi?",
    "provide_barcode_or_label": "Inserisci un codice a barre (cifre) o carica un'immagine dell'etichetta prima di avviare l'analisi.",
    "confirm_merge_all": "Vuoi unire e uniformare tutte le sintassi elencate?",
    "scanner_error": "Errore dello scanner: ",
    "file_not_image": "Il file selezionato non è un'immagine.",
    "shelf_front_capacity_min": "Ogni ripiano deve avere una capacità anteriore di almeno 1.",
    "add_at_least_one_shelf": "Aggiungi almeno un ripiano.",
    "cellar_save_failed": "Salvataggio della cantina non riuscito: ",
    "confirm_delete_cellar": "Eliminare questa cantina e tutte le sue bottiglie?",
    "bottle_copied_to_memory": "Bottiglia copiata in memoria. Fai clic su una posizione vuota per incollare.",
    "cellar_needs_shelf": "Una cantina deve avere almeno un ripiano.",
    "unknown_error": "errore sconosciuto",
    "clear_filters": "Cancella filtri",
    "no_bottles_yet": "Ancora nessuna bottiglia nelle tue cantine.",
    "add_bottle_short": "+ Bottiglia",
    "all_slots_full": "Tutti i posti delle tue cantine sono occupati. Libera un posto, oppure aggiungi un ripiano o una cantina, per aggiungere una bottiglia.",
    "wine_details": "Dettagli del vino",
    "cellar_editor": "Editor cantina",
    "bottle_editor": "Editor bottiglia",
    "unknown_cellar": "Cantina sconosciuta",
    "status_young": "Troppo giovane",
    "status_ready": "Pronto",
    "status_peak": "Al culmine",
    "status_past": "Oltre il culmine",
    "location": "Collocazione",
    "no_shelves": "Nessun ripiano configurato.",
    "add_first_cellar": "Aggiungi una prima cantina per iniziare!",
    "discard_title": "Scartare le modifiche?",
    "discard_body": "Quello che hai scritto in questo modulo andrà perso.",
    "keep_editing": "Continua a modificare",
    "discard": "Scarta",
    "delete_bottle_title": "Eliminare «{name}»?",
    "delete_bottle_body": "La bottiglia viene eliminata definitivamente e non passa nella cronologia. L'operazione non può essere annullata.",
    "delete_cellar_title": "Eliminare la cantina «{name}»?",
    "delete_cellar_body": "Verranno eliminate anche le sue {bottles} bottiglia/e, {history} voce/i della cronologia e le foto delle etichette. L'operazione non può essere annullata.",
    "delete_cellar_body_empty": "La cantina è vuota. L'operazione non può essere annullata.",
    "delete_cellar_confirm": "Elimina cantina",
    "merge_all_title": "Unire {n} coppia/e di grafie?",
    "merge_all_body": "{m} bottiglia/e prenderanno la grafia selezionata. Le coppie da verificare restano invariate.",
    "action_failed": "Operazione non riuscita: {error}",
    "shelf_n": "Ripiano {n}",
    "shelf_empty": "Vuoto",
    "err_slot_taken_server": "Questa posizione è già occupata. Scegline un'altra.",
    "cleanup_check_pair": "Grafia simile, ma potrebbe essere un altro nome. Verifica prima di unire; «Unisci tutto» la salta.",
    "pasted_details": "Dati copiati da «{name}». Controlla e salva.",
    "err_shelf_missing": "Il ripiano selezionato non esiste più.",
    "err_no_back_lane": "Questo ripiano non ha una fila posteriore.",
    "err_position_out_of_range": "Questa posizione supera la capacità di questa fila del ripiano.",
    "err_rating_range": "La valutazione deve essere compresa tra 0 e 5.",
    "err_shelf_has_bottles": "Non puoi rimuovere un ripiano che contiene ancora bottiglie. Sposta prima le bottiglie.",
    "err_shrink_front": "Una fila anteriore non può diventare più piccola della sua ultima posizione occupata. Sposta prima quelle bottiglie.",
    "err_shrink_back": "Una fila posteriore non può diventare più piccola della sua ultima posizione occupata. Sposta prima quelle bottiglie.",
    "err_remove_back_lane": "La fila posteriore contiene ancora bottiglie, quindi non può essere rimossa. Spostale prima.",
    "err_bottle_missing": "Questa bottiglia non esiste più. Potrebbe essere stata rimossa altrove.",
    "err_no_entry": "L'integrazione Wine Cellar Manager non è configurata.",
    "err_shelf_front_min": "«{shelf}» ha una bottiglia nella posizione anteriore {n}, quindi servono almeno {n} posizioni anteriori.",
    "err_shelf_back_min": "«{shelf}» ha una bottiglia nella posizione posteriore {n}, quindi servono almeno {n} posizioni posteriori.",
    "depth_back_row": "Fila dietro",
    "depth_behind": "Dietro {names}",
    "depth_behind_aria": "dietro {names}",
    "depth_move_first": "spostala prima",
    "depth_move_first_n": "spostale prima",
    "depth_front_reach": "Fila davanti: si prende subito",
    "depth_back_clear": "Fila dietro: niente davanti",
    "depth_top_view": "Vista dall’alto",
    "depth_shelf_of": "Ripiano {n} di {total}",
    "depth_more_left": "Altre {count} a sinistra",
    "depth_more_right": "Altre {count} a destra",
    "depth_more_slots_left": "Altri posti a sinistra",
    "depth_more_slots_right": "Altri posti a destra",
    "depth_pull": "Estrai {shelf} per vedere la fila dietro ({count} bottiglie)",
    "depth_push": "Rimetti dentro {shelf}",
    "depth_shelf_named": "Ripiano {n} · {name}",
    "depth_plan_back": "Dietro · parete",
    "depth_plan_front": "Davanti · porta",
    "depth_blocker": "{name} (davanti, posizione {pos})",
    "depth_no_slots": "Questo ripiano non ha ancora posti",
    "bt_needs_details": "Dati mancanti",
    "bt_add_details": "Aggiungi dettagli",
    "bt_no_window": "Senza finestra",
    "bt_no_window_long": "Nessuna finestra di consumo",
    "bt_add_label_photo": "Aggiungi foto dell’etichetta",
    "bt_open_photo": "Apri la foto dell’etichetta",
    "bt_show_in_cellar": "Mostra in cantina",
    "bt_more_actions": "Altre azioni",
    "bt_identical": "{n} bottiglie identiche",
    "bt_in_cellars": "{n} bottiglie di questo vino nelle tue cantine",
    "bt_only_one": "L’unica bottiglia di questo vino",
    "bt_find_all": "Trova tutte",
    "bt_stars": "{n} stelle su 5",
    "bt_needs_details_hint": "A questa bottiglia mancano tipo, produttore o annata. Aggiungili per ritrovarla facilmente.",
    "bt_details": "Dettagli",
    "bt_front_row_pos": "Fila davanti · posizione {pos}",
    "bt_back_row_pos": "Fila dietro · posizione {pos}",
    "bt_photo_missing": "Foto dell’etichetta non disponibile",
    "bt_photo_missing_sub": "La foto salvata non si può caricare adesso.",
    "bt_replace_photo": "Sostituisci foto",
    "slot_empty_label": "Posto libero, aggiungi una bottiglia: {loc}",
    "loc_front_pos": "{cellar}, {shelf}, fila davanti, posizione {pos}",
    "loc_back_pos": "{cellar}, {shelf}, fila dietro, posizione {pos}",
    "sheet_add_title": "Aggiungi bottiglia",
    "sheet_editing": "Modifica",
    "sheet_sec_label": "Etichetta",
    "sheet_sec_wine": "Il vino",
    "sheet_sec_place": "Dove va",
    "sheet_more": "Altri dettagli",
    "sheet_more_hint": "Regione, prezzo, finestra di consumo, valutazione, note",
    "sheet_more_filled": "{n} compilati",
    "sheet_take_photo": "Scatta foto",
    "sheet_upload_photo": "Carica foto dell’etichetta",
    "sheet_choose_library": "Scegli dalla galleria",
    "sheet_type_instead": "Scrivilo a mano",
    "sheet_scan_barcode": "Scansiona codice SAQ",
    "sheet_photo_title": "Fotografa l’etichetta",
    "sheet_photo_title_plain": "Aggiungi una foto dell’etichetta",
    "sheet_photo_sub_ai": "Leggiamo per te nome, produttore e annata.",
    "sheet_photo_sub": "Con una foto dell’etichetta la bottiglia si riconosce subito sul ripiano.",
    "sheet_photo_drop": "o trascina qui un’immagine",
    "sheet_photo_ready": "Foto dell’etichetta",
    "sheet_photo_replace": "Sostituisci",
    "sheet_photo_rotate": "Ruota",
    "sheet_photo_remove": "Rimuovi",
    "sheet_photo_read": "Leggi etichetta",
    "sheet_st_preparing": "Preparazione della foto…",
    "sheet_st_uploading": "Caricamento…",
    "sheet_st_reading": "Lettura dell’etichetta…",
    "sheet_st_barcode": "Lettura del codice a barre…",
    "sheet_note_reading": "Lettura dell’etichetta. Puoi continuare a scrivere: si compilano solo i campi vuoti.",
    "sheet_note_ai_one": "Compilato {n} dettaglio dall’etichetta. Dagli un’occhiata veloce.",
    "sheet_note_ai_other": "Compilati {n} dettagli dall’etichetta. Dai un’occhiata veloce.",
    "sheet_note_cellar_one": "Compilato {n} dettaglio da {name} nella tua cantina.",
    "sheet_note_cellar_other": "Compilati {n} dettagli da {name} nella tua cantina.",
    "sheet_note_none": "Nessuna novità trovata sull’etichetta.",
    "sheet_note_fail": "Impossibile leggere l’etichetta automaticamente. Compila i dettagli qui sotto.",
    "undo": "Annulla",
    "undone": "Annullato",
    "sheet_mark_ai": "IA",
    "sheet_mark_cellar": "Dalla cantina",
    "sheet_name_ph": "es. Barolo, Château Margaux…",
    "sheet_in_cellar": "{n} in cantina",
    "sheet_had_before": "Già avuta",
    "sheet_dup": "Hai già {n} bottiglie di questo vino · {where}",
    "sheet_type_unset": "Non so",
    "sheet_window": "Finestra di consumo",
    "sheet_from": "Dal",
    "sheet_to": "Al",
    "sheet_win_none": "Aggiungi gli anni per vedere quando sarà pronto.",
    "sheet_win_young": "Troppo giovane · pronto dal {y}",
    "sheet_win_ready": "Pronto da bere · fino al {y}",
    "sheet_win_peak": "Al culmine quest’anno",
    "sheet_win_past": "Oltre il culmine dal {y}",
    "sheet_rating_none": "Nessuna",
    "sheet_link": "Link del prodotto",
    "sheet_barcode": "Codice a barre",
    "sheet_lookup": "Cerca",
    "pick_bottles": "Quante bottiglie",
    "pick_qty_less": "Una bottiglia in meno",
    "pick_qty_more": "Una bottiglia in più",
    "pick_free_one": "{n} libero",
    "pick_free_other": "{n} liberi",
    "pick_full": "Pieno",
    "pick_hint": "Tocca un posto libero per scegliere dove va.",
    "pick_hint_n": "Occupa {n} posti liberi in ordine, partendo da quello che tocchi.",
    "pick_hint_edit": "Tocca un posto libero per spostarci la bottiglia al salvataggio.",
    "sheet_plan_n": "{n} bottiglie · {where}",
    "pick_move_from": "Si sposta da {from}",
    "pick_occupied": "Occupato · {name}",
    "pick_slot_free": "{shelf}, {lane}, posizione {pos}, libero",
    "pick_slot_current": "{shelf}, {lane}, posizione {pos}, posto attuale",
    "pick_no_free": "Tutti i posti sono occupati.",
    "pick_no_free_sub": "Aggiungi un ripiano o una cantina per fare spazio, poi aggiungi la bottiglia.",
    "pick_add_shelves_to": "Aggiungi ripiani a {name}",
    "pick_new_cellar": "Nuova cantina",
    "sheet_only_name": "Solo il nome è obbligatorio.",
    "sheet_save_n": "Salva {n} bottiglie",
    "sheet_save_next": "Salva e aggiungi un’altra",
    "sheet_save_changes": "Salva modifiche",
    "sheet_saving": "Salvataggio…",
    "sheet_saving_n": "Salvataggio {i} di {n}…",
    "sheet_saved_one": "{name} aggiunta · {where}",
    "sheet_saved_n": "{n} bottiglie aggiunte · {where}",
    "sheet_saved_edit": "Modifiche salvate",
    "sheet_err_name": "Dai un nome al vino.",
    "sheet_err_year": "Usa un anno di 4 cifre.",
    "sheet_err_window": "La finestra non può finire prima di iniziare.",
    "sheet_err_no_slot": "Scegli un posto libero.",
    "sheet_err_slot_taken": "Quel posto è occupato da «{name}». Scegline un altro.",
    "sheet_err_slot_moved": "Quel posto è appena stato occupato, quindi abbiamo scelto il successivo libero. Tocca di nuovo Salva.",
    "sheet_err_not_enough_one": "Solo {n} posto libero in {cellar}.",
    "sheet_err_not_enough_other": "Solo {n} posti liberi in {cellar}.",
    "sheet_err_partial_left_one": "Salvate {i} di {total}. {error} Salva di nuovo per aggiungere l’ultima.",
    "sheet_err_partial_left_other": "Salvate {i} di {total}. {error} Salva di nuovo per aggiungere le altre {n}.",
    "sheet_err_number": "Inserisci un numero.",
    "sheet_err_photo_format": "Questo formato di foto non è supportato qui. Prova JPEG o PNG.",
    "sheet_err_photo_upload": "Impossibile caricare la foto. {error}",
    "sheet_err_save": "Salvataggio non riuscito: {error}",
    "move_action": "Sposta",
    "move_moving": "Spostamento di {name}",
    "move_hint": "Tocca un posto vuoto o una bottiglia per scambiarle.",
    "move_hint_kb": "Esc annulla.",
    "move_done": "{name} spostata in {where}",
    "move_swapped": "{a} e {b} scambiate",
    "move_failed": "Impossibile spostare la bottiglia: {error}",
    "builder_title_new": "Nuova cantina",
    "builder_name_ph": "es. Cantinetta della cucina",
    "builder_finish": "Finitura della cornice",
    "builder_quick": "Avvio rapido",
    "builder_tpl_fridge": "Cantinetta",
    "builder_tpl_stagger": "Scaffale sfalsato",
    "builder_tpl_rack": "Scaffale aperto",
    "builder_tpl_sub": "{s} ripiani × {f}",
    "builder_tpl_sub2": "{s} ripiani × {f} + {b} dietro",
    "builder_shelves_hint": "Prima il ripiano più alto. La fila dietro sta dietro quella davanti, sfalsata perché ogni etichetta resti visibile.",
    "builder_front_slots": "Posti davanti",
    "builder_back_slots": "Posti dietro",
    "builder_fewer": "Meno posti ({lane})",
    "builder_more": "Più posti ({lane})",
    "builder_stored": "{n} occupati",
    "builder_up": "Sposta ripiano su",
    "builder_down": "Sposta ripiano giù",
    "builder_remove": "Rimuovi ripiano",
    "builder_remove_blocked_one": "Prima sposta la bottiglia di questo ripiano.",
    "builder_remove_blocked_other": "Prima sposta le {n} bottiglie di questo ripiano.",
    "builder_min_hint": "C’è una bottiglia nel posto {n}.",
    "builder_preview": "Anteprima",
    "builder_legend_stored": "Occupato",
    "builder_legend_free": "Libero",
    "builder_save": "Salva cantina",
    "builder_create": "Crea cantina",
    "builder_saved": "Cantina salvata",
    "sheet_wait_photo": "In attesa della foto…",
    "builder_position": "Posizione tra le tue cantine",
    "builder_pos_first": "In prima posizione",
    "builder_pos_after": "Dopo {name}",
    "builder_order_failed": "Cantina salvata, ma non è stato possibile aggiornare l’ordine delle altre cantine.",
    "builder_fin_bordeaux": "Laccato bordeaux",
    "builder_fin_oak": "Rovere",
    "builder_fin_olive": "Oliva",
    "builder_fin_azure": "Azzurro",
    "builder_fin_slate": "Ardesia",
    "builder_fin_steel": "Acciaio spazzolato",
    "builder_fin_custom": "Personalizzato",
    "builder_shelves_one": "{n} ripiano",
    "builder_shelves_other": "{n} ripiani",
    "builder_slots_one": "{n} posto",
    "builder_slots_other": "{n} posti",
    "builder_fin_graphite": "Grafite",
    "find_placeholder": "Cerca vino, produttore, annata, cantina…",
    "find_placeholder_short": "Cerca in cantina…",
    "find_search_label": "Cerca bottiglie",
    "find_views_label": "Vista",
    "find_tab_bottles": "Bottiglie",
    "find_filters": "Filtri",
    "find_filters_n_one": "Filtri, {n} selezionato",
    "find_filters_n_other": "Filtri, {n} selezionati",
    "find_clear_all": "Rimuovi tutto",
    "find_clear_search": "Cancella ricerca",
    "find_status_group": "Stato di consumo",
    "find_type_group": "Tipo di vino",
    "find_country_group": "Paese",
    "find_cellar_group": "Cantina",
    "find_drink_now_hint": "Al culmine o oltre: da aprire per prime",
    "find_remove": "Rimuovi filtro: {x}",
    "find_matches_one": "{n} risultato",
    "find_matches_other": "{n} risultati",
    "find_no_match": "Nessun risultato",
    "find_in_cellar": "in {name}",
    "find_in_cellars_one": "in {n} cantina",
    "find_in_cellars_other": "in {n} cantine",
    "find_more_n": "+{n} altre",
    "find_more_label": "Vedi tutti i {n} risultati in Tutte le bottiglie",
    "find_step_hint": "risultato successivo",
    "find_matches_label": "Bottiglie corrispondenti",
    "find_no_results_q": "Nessuna bottiglia corrisponde a «{q}»",
    "find_no_results_f": "Nessuna bottiglia corrisponde a questi filtri",
    "find_did_you_mean": "Forse cercavi {x}?",
    "find_try_other": "Controlla l’ortografia o cerca per produttore, annata o cantina.",
    "find_found_one": "{n} bottiglia trovata",
    "find_found_other": "{n} bottiglie trovate",
    "find_found_none": "Nessuna bottiglia trovata",
    "find_state_match": "corrisponde",
    "find_state_other": "non corrisponde",
    "find_show_one": "Mostra {n} bottiglia",
    "find_show_other": "Mostra {n} bottiglie",
    "find_crumb_shelf": "{name} (ripiano {n})",
    "find_crumb_back": "Dietro #{pos}",
    "find_crumb_front": "Davanti #{pos}",
    "find_crumb_pos": "#{pos}",
    "consume_done": "Gustata: {name}",
    "consume_restored": "Di nuovo al suo posto: {name}",
    "consume_failed": "Impossibile segnare {name} come consumata: {error}",
    "consume_undo_taken": "Impossibile rimettere {name} al suo posto: ora è occupato. Resta in Bevute di recente, nelle statistiche.",
    "consume_undo_failed": "Impossibile rimettere {name} al suo posto: {error}",
    "delete_done": "Eliminata: {name}",
    "delete_failed": "Impossibile eliminare {name}: {error}",
    "list_empty_body": "Aggiungi la prima bottiglia: fotografa l’etichetta e scegli il posto.",
    "list_sort_by": "Ordina per",
    "list_reverse": "Inverti ordine",
    "list_title_one": "{n} bottiglia",
    "list_title_other": "{n} bottiglie",
    "list_title_of_one": "{shown} di {n} bottiglia",
    "list_title_of_other": "{shown} di {n} bottiglie",
    "stats_empty_title": "Ancora nessuna statistica",
    "stats_empty_body": "Aggiungi bottiglie per vedere cosa bere, quando, e cosa contiene la tua cantina.",
    "stats_free_one": "{n} posto libero",
    "stats_free_other": "{n} posti liberi",
    "stats_producers_one": "{n} produttore",
    "stats_producers_other": "{n} produttori",
    "stats_oldest": "Annata più vecchia: {y}",
    "stats_per_bottle": "≈ {v} a bottiglia",
    "stats_open_hint": "Apre Tutte le bottiglie mostrando solo queste.",
    "stats_window_title": "Finestra di consumo",
    "stats_window_sub": "Bottiglie nella loro finestra di consumo, anno per anno",
    "stats_window_none": "Nessuna bottiglia ha una finestra di consumo nei prossimi anni.",
    "stats_window_caption": "Bottiglie nella finestra di consumo per anno e tipo di vino",
    "stats_now": "ora",
    "stats_year_bottles_one": "{year}: {n} bottiglia",
    "stats_year_bottles_other": "{year}: {n} bottiglie",
    "stats_now_empty": "Niente di urgente: nessuna bottiglia è al culmine o oltre.",
    "stats_now_all_one": "Vedi {n} bottiglia in Tutte le bottiglie",
    "stats_now_all_other": "Vedi tutte le {n} in Tutte le bottiglie",
    "stats_bottle_word_one": "bottiglia",
    "stats_bottle_word_other": "bottiglie",
    "ready_to_drink": "Pronto da bere",
    "find_ready_to_drink_hint": "Pronte o al culmine: buone da aprire",
    "toast_undo_keys": "Premi {keys} per annullare",
    "stats_recent_title": "Bevute di recente",
    "stats_recent_sub": "Segnata come bevuta per errore? Rimetti la bottiglia al suo posto.",
    "stats_recent_on": "Bevuta il {date}",
    "stats_put_back": "Rimetti",
    "stats_put_back_label": "Rimetti {name} al suo posto",
    "stats_recent_taken": "Il suo posto è occupato",
    "stats_recent_gone": "Il suo ripiano non esiste più",
    "err_consumed_missing": "Questa bottiglia non è più nella cronologia. Potrebbe essere stata rimessa o eliminata altrove.",
    "consume_undo_noshelf": "Impossibile rimettere {name} al suo posto: il suo ripiano non esiste più.",
    "find_words_unfiltered_one": "{n} bottiglia corrisponde a «{q}» senza i filtri.",
    "find_words_unfiltered_other": "{n} bottiglie corrispondono a «{q}» senza i filtri.",
    "list_sorted_asc": "ordine crescente",
    "list_sorted_desc": "ordine decrescente"
  },
  "nl": {
    "cellars": "Wijnkelders",
    "compact": "Compact",
    "all_bottles": "Alle flessen",
    "stats": "Statistieken",
    "wine_name": "Wijnnaam",
    "producer": "Producent",
    "varietal": "Druivensoort",
    "region": "Regio",
    "country": "Land",
    "vintage": "Jaargang",
    "type": "Type",
    "price": "Prijs",
    "rating": "Beoordeling",
    "notes": "Notities",
    "shelf": "Plank",
    "front": "Voor",
    "back": "Achter",
    "consume": "Drinken",
    "delete": "Verwijderen",
    "save": "Opslaan",
    "cancel": "Annuleren",
    "close": "Sluiten",
    "serving_temp": "Serveertemperatuur",
    "alcohol_pct": "Alcoholpercentage",
    "not_specified": "Niet opgegeven",
    "cleanup_btn": "Opschonen",
    "cleanup_title": "Duplicaten zoeken en opschonen",
    "cleanup_search_btn": "Duplicaten zoeken",
    "cleanup_merge_all": "Alles samenvoegen",
    "cleanup_no_duplicates": "Geen schrijfwijze-duplicaten gevonden!",
    "cleanup_searching": "Keldergegevens worden geanalyseerd...",
    "cleanup_welcome": "Klik op de knop hierboven om de zoekopdracht te starten en uw keldergegevens te analyseren.",
    "updating_field": "Veld wordt bijgewerkt...",
    "update_failed": "Bijwerken mislukt: ",
    "merging_all_selections": "Alle selecties worden samengevoegd...",
    "global_error": "Fout: ",
    "bottle_s": "fles(sen)",
    "cellar_name_required": "De keldernaam is verplicht.",
    "add_cellar_short": "+ Kelder",
    "drink_now": "Nu drinken",
    "red": "Rood",
    "white": "Wit",
    "rose": "Rosé",
    "sparkling": "Mousserend",
    "orange": "Oranje",
    "sweet": "Zoet",
    "other": "Overig",
    "wine": "Wijn",
    "region_varietal": "Regio/Druivensoort",
    "total_bottles": "Totaal flessen",
    "different_wines": "Verschillende wijnen",
    "average_age": "Gemiddelde leeftijd",
    "years": "jaar",
    "total_value": "Totale waarde",
    "distribution_by_type": "Verdeling per type",
    "top_countries_of_origin": "Top landen van herkomst",
    "unnamed_wine": "Naamloze wijn",
    "drinking_window": "Drinkvenster",
    "from_prefix": "Van ",
    "to_infix": " tot ",
    "no_data": "Geen gegevens",
    "physical_location": "Fysieke locatie",
    "copy": "Kopiëren",
    "edit": "Bewerken",
    "cellar": "Kelder",
    "view": "Bekijken",
    "shelf_name": "Planknaam",
    "edit_cellar": "Kelder bewerken",
    "cellar_name": "Naam",
    "shelves": "Planken",
    "add_shelf": "Plank toevoegen",
    "no_barcode_found": "Geen barcode gevonden.",
    "barcode_extraction_failed": "Uitlezen van de barcode mislukt.",
    "confirm_reanalyze": "Deze wijn is al succesvol geanalyseerd. Gegevens overschrijven en de analyse opnieuw uitvoeren?",
    "provide_barcode_or_label": "Voer een barcode (cijfers) in of upload een etiketafbeelding voordat u de analyse start.",
    "confirm_merge_all": "Wilt u alle vermelde schrijfwijzen samenvoegen en standaardiseren?",
    "scanner_error": "Scannerfout: ",
    "file_not_image": "Het geselecteerde bestand is geen afbeelding.",
    "shelf_front_capacity_min": "Elke plank moet een capaciteit voor van minimaal 1 hebben.",
    "add_at_least_one_shelf": "Voeg minimaal één plank toe.",
    "cellar_save_failed": "Opslaan van kelder mislukt: ",
    "confirm_delete_cellar": "Deze kelder en alle flessen erin verwijderen?",
    "bottle_copied_to_memory": "Fles gekopieerd naar geheugen. Klik op een lege plaats om te plakken.",
    "cellar_needs_shelf": "Een kelder moet minimaal één plank hebben.",
    "unknown_error": "onbekende fout",
    "clear_filters": "Filters wissen",
    "no_bottles_yet": "Nog geen flessen in de kelders.",
    "add_bottle_short": "+ Fles",
    "all_slots_full": "Alle plaatsen in de kelders zijn bezet. Maak een plaats vrij, of voeg een plank of kelder toe, om een fles toe te voegen.",
    "wine_details": "Wijngegevens",
    "cellar_editor": "Keldereditor",
    "bottle_editor": "Fleseditor",
    "unknown_cellar": "Onbekende kelder",
    "status_young": "Te jong",
    "status_ready": "Drinkklaar",
    "status_peak": "Op hoogtepunt",
    "status_past": "Over hoogtepunt",
    "location": "Locatie",
    "no_shelves": "Geen planken geconfigureerd.",
    "add_first_cellar": "Voeg een eerste kelder toe om te beginnen!",
    "discard_title": "Wijzigingen verwerpen?",
    "discard_body": "Wat u in dit formulier hebt ingevuld, gaat verloren.",
    "keep_editing": "Verder bewerken",
    "discard": "Verwerpen",
    "delete_bottle_title": "“{name}” verwijderen?",
    "delete_bottle_body": "De fles wordt definitief verwijderd en komt niet in de geschiedenis. Dit kan niet ongedaan worden gemaakt.",
    "delete_cellar_title": "Kelder “{name}” verwijderen?",
    "delete_cellar_body": "Hiermee worden ook de {bottles} fles(sen), {history} geschiedenisitem(s) en hun etiketfoto's verwijderd. Dit kan niet ongedaan worden gemaakt.",
    "delete_cellar_body_empty": "De kelder is leeg. Dit kan niet ongedaan worden gemaakt.",
    "delete_cellar_confirm": "Kelder verwijderen",
    "merge_all_title": "{n} paar/paren schrijfwijzen samenvoegen?",
    "merge_all_body": "{m} fles(sen) krijgen de gekozen schrijfwijze. Paren om te controleren blijven ongewijzigd.",
    "action_failed": "Dat is niet gelukt: {error}",
    "shelf_n": "Plank {n}",
    "shelf_empty": "Leeg",
    "err_slot_taken_server": "Deze plaats is al bezet. Kies een andere positie.",
    "cleanup_check_pair": "Vergelijkbare schrijfwijze, maar mogelijk een andere naam. Controleer dit vóór het samenvoegen; “Alles samenvoegen” slaat het over.",
    "pasted_details": "Gegevens overgenomen van “{name}”. Controleer en sla op.",
    "err_shelf_missing": "De gekozen plank bestaat niet meer.",
    "err_no_back_lane": "Deze plank heeft geen achterste rij.",
    "err_position_out_of_range": "Die positie valt buiten de capaciteit van deze rij.",
    "err_rating_range": "De beoordeling moet tussen 0 en 5 liggen.",
    "err_shelf_has_bottles": "Een plank met flessen kan niet worden verwijderd. Verplaats eerst de flessen.",
    "err_shrink_front": "Een voorste rij kan niet kleiner worden dan de laatst bezette positie. Verplaats eerst die flessen.",
    "err_shrink_back": "Een achterste rij kan niet kleiner worden dan de laatst bezette positie. Verplaats eerst die flessen.",
    "err_remove_back_lane": "Op de achterste rij liggen nog flessen, dus die kan niet worden verwijderd. Verplaats ze eerst.",
    "err_bottle_missing": "Deze fles bestaat niet meer. Mogelijk is ze elders verwijderd.",
    "err_no_entry": "De integratie Wine Cellar Manager is niet ingesteld.",
    "err_shelf_front_min": "‘{shelf}’ heeft een fles op voorste positie {n} en heeft daarom minstens {n} posities vooraan nodig.",
    "err_shelf_back_min": "‘{shelf}’ heeft een fles op achterste positie {n} en heeft daarom minstens {n} posities achteraan nodig.",
    "depth_back_row": "Achterste rij",
    "depth_behind": "Achter {names}",
    "depth_behind_aria": "achter {names}",
    "depth_move_first": "eerst weghalen",
    "depth_move_first_n": "eerst weghalen",
    "depth_front_reach": "Voorste rij – direct te pakken",
    "depth_back_clear": "Achterste rij – niets ervoor",
    "depth_top_view": "Bovenaanzicht",
    "depth_shelf_of": "Plank {n} van {total}",
    "depth_more_left": "Nog {count} links",
    "depth_more_right": "Nog {count} rechts",
    "depth_more_slots_left": "Meer plekken links",
    "depth_more_slots_right": "Meer plekken rechts",
    "depth_pull": "{shelf} uittrekken om de achterste rij te zien ({count} flessen)",
    "depth_push": "{shelf} terugschuiven",
    "depth_shelf_named": "Plank {n} · {name}",
    "depth_plan_back": "Achter · wand",
    "depth_plan_front": "Voor · deur",
    "depth_blocker": "{name} (voor, positie {pos})",
    "depth_no_slots": "Deze plank heeft nog geen plekken",
    "bt_needs_details": "Aan te vullen",
    "bt_add_details": "Gegevens aanvullen",
    "bt_no_window": "Geen venster",
    "bt_no_window_long": "Geen drinkvenster ingesteld",
    "bt_add_label_photo": "Etiketfoto toevoegen",
    "bt_open_photo": "Etiketfoto groot openen",
    "bt_show_in_cellar": "Tonen in kelder",
    "bt_more_actions": "Meer acties",
    "bt_identical": "{n} identieke flessen",
    "bt_in_cellars": "{n} flessen van deze wijn in uw kelders",
    "bt_only_one": "De enige fles van deze wijn",
    "bt_find_all": "Alles zoeken",
    "bt_stars": "{n} van 5 sterren",
    "bt_needs_details_hint": "Bij deze fles ontbreken type, producent of jaargang. Vul ze aan zodat u hem makkelijk terugvindt.",
    "bt_details": "Details",
    "bt_front_row_pos": "Voorste rij · positie {pos}",
    "bt_back_row_pos": "Achterste rij · positie {pos}",
    "bt_photo_missing": "Etiketfoto niet beschikbaar",
    "bt_photo_missing_sub": "De opgeslagen foto kan nu niet worden geladen.",
    "bt_replace_photo": "Foto vervangen",
    "slot_empty_label": "Lege plek, fles toevoegen: {loc}",
    "loc_front_pos": "{cellar}, {shelf}, voorste rij, positie {pos}",
    "loc_back_pos": "{cellar}, {shelf}, achterste rij, positie {pos}",
    "sheet_add_title": "Fles toevoegen",
    "sheet_editing": "Bewerken",
    "sheet_sec_label": "Etiket",
    "sheet_sec_wine": "De wijn",
    "sheet_sec_place": "Waar hij komt",
    "sheet_more": "Meer gegevens",
    "sheet_more_hint": "Regio, prijs, drinkvenster, beoordeling, notities",
    "sheet_more_filled": "{n} ingevuld",
    "sheet_take_photo": "Foto maken",
    "sheet_upload_photo": "Etiketfoto uploaden",
    "sheet_choose_library": "Kiezen uit bibliotheek",
    "sheet_type_instead": "Liever typen",
    "sheet_scan_barcode": "SAQ-barcode scannen",
    "sheet_photo_title": "Fotografeer het etiket",
    "sheet_photo_title_plain": "Etiketfoto toevoegen",
    "sheet_photo_sub_ai": "Wij lezen naam, producent en jaargang voor u uit.",
    "sheet_photo_sub": "Met een etiketfoto herkent u de fles meteen op de plank.",
    "sheet_photo_drop": "of sleep hier een afbeelding",
    "sheet_photo_ready": "Etiketfoto",
    "sheet_photo_replace": "Vervangen",
    "sheet_photo_rotate": "Draaien",
    "sheet_photo_remove": "Verwijderen",
    "sheet_photo_read": "Etiket uitlezen",
    "sheet_st_preparing": "Foto voorbereiden…",
    "sheet_st_uploading": "Uploaden…",
    "sheet_st_reading": "Etiket wordt gelezen…",
    "sheet_st_barcode": "Barcode wordt gelezen…",
    "sheet_note_reading": "Het etiket wordt gelezen. Typ gerust verder: alleen lege velden worden ingevuld.",
    "sheet_note_ai_one": "{n} gegeven van het etiket ingevuld. Controleer het even.",
    "sheet_note_ai_other": "{n} gegevens van het etiket ingevuld. Controleer ze even.",
    "sheet_note_cellar_one": "{n} gegeven ingevuld vanuit {name} in uw kelder.",
    "sheet_note_cellar_other": "{n} gegevens ingevuld vanuit {name} in uw kelder.",
    "sheet_note_none": "Niets nieuws gevonden op het etiket.",
    "sheet_note_fail": "Dit etiket kon niet automatisch worden gelezen. Vul de gegevens hieronder in.",
    "undo": "Ongedaan maken",
    "undone": "Ongedaan gemaakt",
    "sheet_mark_ai": "AI",
    "sheet_mark_cellar": "Uit de kelder",
    "sheet_name_ph": "bijv. Barolo, Château Margaux…",
    "sheet_in_cellar": "{n} in de kelder",
    "sheet_had_before": "Eerder gehad",
    "sheet_dup": "U heeft al {n} flessen van deze wijn · {where}",
    "sheet_type_unset": "Weet ik niet",
    "sheet_window": "Drinkvenster",
    "sheet_from": "Vanaf",
    "sheet_to": "Tot",
    "sheet_win_none": "Vul de jaren in om te zien wanneer hij klaar is.",
    "sheet_win_young": "Te jong · drinkklaar vanaf {y}",
    "sheet_win_ready": "Drinkklaar · tot {y}",
    "sheet_win_peak": "Dit jaar op zijn hoogtepunt",
    "sheet_win_past": "Over zijn hoogtepunt sinds {y}",
    "sheet_rating_none": "Geen",
    "sheet_link": "Productlink",
    "sheet_barcode": "Barcode",
    "sheet_lookup": "Opzoeken",
    "pick_bottles": "Aantal flessen",
    "pick_qty_less": "Eén fles minder",
    "pick_qty_more": "Eén fles meer",
    "pick_free_one": "{n} vrij",
    "pick_free_other": "{n} vrij",
    "pick_full": "Vol",
    "pick_hint": "Tik op een vrije plek om te kiezen waar hij komt.",
    "pick_hint_n": "Vult {n} vrije plekken op volgorde, te beginnen bij de plek die u aantikt.",
    "pick_hint_edit": "Tik op een vrije plek om de fles daarheen te verplaatsen bij opslaan.",
    "sheet_plan_n": "{n} flessen · {where}",
    "pick_move_from": "Verplaatst van {from}",
    "pick_occupied": "Bezet · {name}",
    "pick_slot_free": "{shelf}, {lane}, positie {pos}, vrij",
    "pick_slot_current": "{shelf}, {lane}, positie {pos}, huidige plek",
    "pick_no_free": "Alle plekken zijn bezet.",
    "pick_no_free_sub": "Voeg een plank of kelder toe om ruimte te maken en voeg dan de fles toe.",
    "pick_add_shelves_to": "Planken toevoegen aan {name}",
    "pick_new_cellar": "Nieuwe kelder",
    "sheet_only_name": "Alleen de naam is verplicht.",
    "sheet_save_n": "{n} flessen opslaan",
    "sheet_save_next": "Opslaan & volgende",
    "sheet_save_changes": "Wijzigingen opslaan",
    "sheet_saving": "Opslaan…",
    "sheet_saving_n": "{i} van {n} opslaan…",
    "sheet_saved_one": "{name} toegevoegd · {where}",
    "sheet_saved_n": "{n} flessen toegevoegd · {where}",
    "sheet_saved_edit": "Wijzigingen opgeslagen",
    "sheet_err_name": "Geef de wijn een naam.",
    "sheet_err_year": "Gebruik een jaartal van 4 cijfers.",
    "sheet_err_window": "Het venster kan niet eindigen voordat het begint.",
    "sheet_err_no_slot": "Kies een vrije plek.",
    "sheet_err_slot_taken": "Die plek is bezet door „{name}”. Kies een andere.",
    "sheet_err_slot_moved": "Die plek is net bezet, dus we hebben de volgende vrije gekozen. Tik nogmaals op Opslaan.",
    "sheet_err_not_enough_one": "Maar {n} vrije plek in {cellar}.",
    "sheet_err_not_enough_other": "Maar {n} vrije plekken in {cellar}.",
    "sheet_err_partial_left_one": "{i} van {total} opgeslagen. {error} Sla opnieuw op om de laatste toe te voegen.",
    "sheet_err_partial_left_other": "{i} van {total} opgeslagen. {error} Sla opnieuw op om de overige {n} toe te voegen.",
    "sheet_err_number": "Voer een getal in.",
    "sheet_err_photo_format": "Dit fotoformaat wordt hier niet ondersteund. Probeer JPEG of PNG.",
    "sheet_err_photo_upload": "De foto kon niet worden geüpload. {error}",
    "sheet_err_save": "Opslaan mislukt: {error}",
    "move_action": "Verplaatsen",
    "move_moving": "{name} verplaatsen",
    "move_hint": "Tik op een lege plek, of op een fles om te wisselen.",
    "move_hint_kb": "Esc annuleert.",
    "move_done": "{name} verplaatst naar {where}",
    "move_swapped": "{a} en {b} gewisseld",
    "move_failed": "De fles kon niet worden verplaatst: {error}",
    "builder_title_new": "Nieuwe kelder",
    "builder_name_ph": "bijv. Wijnkoelkast keuken",
    "builder_finish": "Afwerking van de kast",
    "builder_quick": "Snelle start",
    "builder_tpl_fridge": "Wijnkoelkast",
    "builder_tpl_stagger": "Verspringend rek",
    "builder_tpl_rack": "Open rek",
    "builder_tpl_sub": "{s} planken × {f}",
    "builder_tpl_sub2": "{s} planken × {f} + {b} erachter",
    "builder_shelves_hint": "Bovenste plank eerst. De achterste rij staat verspringend achter de voorste, zodat elk etiket zichtbaar blijft.",
    "builder_front_slots": "Plekken voor",
    "builder_back_slots": "Plekken achter",
    "builder_fewer": "Minder plekken ({lane})",
    "builder_more": "Meer plekken ({lane})",
    "builder_stored": "{n} bezet",
    "builder_up": "Plank omhoog",
    "builder_down": "Plank omlaag",
    "builder_remove": "Plank verwijderen",
    "builder_remove_blocked_one": "Verplaats eerst de fles op deze plank.",
    "builder_remove_blocked_other": "Verplaats eerst de {n} flessen op deze plank.",
    "builder_min_hint": "Er staat een fles op plek {n}.",
    "builder_preview": "Voorbeeld",
    "builder_legend_stored": "Bezet",
    "builder_legend_free": "Vrij",
    "builder_save": "Kelder opslaan",
    "builder_create": "Kelder aanmaken",
    "builder_saved": "Kelder opgeslagen",
    "sheet_wait_photo": "Wachten op de foto…",
    "builder_position": "Positie tussen uw kelders",
    "builder_pos_first": "Als eerste",
    "builder_pos_after": "Na {name}",
    "builder_order_failed": "Kelder opgeslagen, maar de volgorde van de andere kelders kon niet worden bijgewerkt.",
    "builder_fin_bordeaux": "Bordeauxlak",
    "builder_fin_oak": "Eiken",
    "builder_fin_olive": "Olijf",
    "builder_fin_azure": "Azuur",
    "builder_fin_slate": "Leisteen",
    "builder_fin_steel": "Geborsteld staal",
    "builder_fin_custom": "Aangepast",
    "builder_shelves_one": "{n} plank",
    "builder_shelves_other": "{n} planken",
    "builder_slots_one": "{n} plek",
    "builder_slots_other": "{n} plekken",
    "builder_fin_graphite": "Grafiet",
    "find_placeholder": "Zoek wijn, producent, jaargang, kelder…",
    "find_placeholder_short": "Zoeken in kelder…",
    "find_search_label": "Flessen zoeken",
    "find_views_label": "Weergave",
    "find_tab_bottles": "Flessen",
    "find_filters": "Filters",
    "find_filters_n_one": "Filters, {n} geselecteerd",
    "find_filters_n_other": "Filters, {n} geselecteerd",
    "find_clear_all": "Alles wissen",
    "find_clear_search": "Zoekopdracht wissen",
    "find_status_group": "Drinkrijpheid",
    "find_type_group": "Wijnsoort",
    "find_country_group": "Land",
    "find_cellar_group": "Kelder",
    "find_drink_now_hint": "Op of over hun hoogtepunt: open deze eerst",
    "find_remove": "Filter verwijderen: {x}",
    "find_matches_one": "{n} treffer",
    "find_matches_other": "{n} treffers",
    "find_no_match": "Geen treffer",
    "find_in_cellar": "in {name}",
    "find_in_cellars_one": "in {n} kelder",
    "find_in_cellars_other": "in {n} kelders",
    "find_more_n": "+{n} meer",
    "find_more_label": "Alle {n} treffers tonen in Alle flessen",
    "find_step_hint": "volgende treffer",
    "find_matches_label": "Gevonden flessen",
    "find_no_results_q": "Geen fles gevonden voor „{q}”",
    "find_no_results_f": "Geen fles past bij deze filters",
    "find_did_you_mean": "Bedoelde u {x}?",
    "find_try_other": "Controleer de spelling of zoek op producent, jaargang of kelder.",
    "find_found_one": "{n} fles gevonden",
    "find_found_other": "{n} flessen gevonden",
    "find_found_none": "Geen fles gevonden",
    "find_state_match": "past",
    "find_state_other": "past niet",
    "find_show_one": "{n} fles tonen",
    "find_show_other": "{n} flessen tonen",
    "find_crumb_shelf": "{name} (plank {n})",
    "find_crumb_back": "Achter #{pos}",
    "find_crumb_front": "Voor #{pos}",
    "find_crumb_pos": "#{pos}",
    "consume_done": "Gedronken: {name}",
    "consume_restored": "Weer op zijn plek: {name}",
    "consume_failed": "{name} kon niet als gedronken worden gemarkeerd: {error}",
    "consume_undo_taken": "{name} kon niet worden teruggezet: de plek is intussen bezet. De fles blijft bij Onlangs gedronken, in Statistieken.",
    "consume_undo_failed": "{name} kon niet worden teruggezet: {error}",
    "delete_done": "Verwijderd: {name}",
    "delete_failed": "{name} kon niet worden verwijderd: {error}",
    "list_empty_body": "Voeg uw eerste fles toe: fotografeer het etiket en kies een plek.",
    "list_sort_by": "Sorteren op",
    "list_reverse": "Volgorde omkeren",
    "list_title_one": "{n} fles",
    "list_title_other": "{n} flessen",
    "list_title_of_one": "{shown} van {n} fles",
    "list_title_of_other": "{shown} van {n} flessen",
    "stats_empty_title": "Nog geen statistieken",
    "stats_empty_body": "Voeg flessen toe om te zien wat u wanneer drinkt en wat uw kelder bevat.",
    "stats_free_one": "{n} vrije plek",
    "stats_free_other": "{n} vrije plekken",
    "stats_producers_one": "{n} producent",
    "stats_producers_other": "{n} producenten",
    "stats_oldest": "Oudste jaargang: {y}",
    "stats_per_bottle": "≈ {v} per fles",
    "stats_open_hint": "Opent Alle flessen met alleen deze flessen.",
    "stats_window_title": "Drinkvenster",
    "stats_window_sub": "Flessen binnen hun drinkvenster, per jaar",
    "stats_window_none": "Geen enkele fles heeft een drinkvenster in de komende jaren.",
    "stats_window_caption": "Flessen binnen hun drinkvenster per jaar, per wijnsoort",
    "stats_now": "nu",
    "stats_year_bottles_one": "{year}: {n} fles",
    "stats_year_bottles_other": "{year}: {n} flessen",
    "stats_now_empty": "Niets dringends: geen enkele fles is op of over zijn hoogtepunt.",
    "stats_now_all_one": "{n} fles tonen in Alle flessen",
    "stats_now_all_other": "Alle {n} tonen in Alle flessen",
    "stats_bottle_word_one": "fles",
    "stats_bottle_word_other": "flessen",
    "ready_to_drink": "Klaar om te drinken",
    "find_ready_to_drink_hint": "Drinkklaar of op hun hoogtepunt: goed om te openen",
    "toast_undo_keys": "Druk op {keys} om ongedaan te maken",
    "stats_recent_title": "Onlangs gedronken",
    "stats_recent_sub": "Per ongeluk als gedronken gemarkeerd? Zet de fles terug op haar plek.",
    "stats_recent_on": "Gedronken op {date}",
    "stats_put_back": "Terugzetten",
    "stats_put_back_label": "{name} terugzetten op haar plek",
    "stats_recent_taken": "Haar plek is bezet",
    "stats_recent_gone": "Haar plank bestaat niet meer",
    "err_consumed_missing": "Deze fles staat niet meer in de geschiedenis. Mogelijk is ze elders teruggezet of verwijderd.",
    "consume_undo_noshelf": "{name} kon niet worden teruggezet: de plank bestaat niet meer.",
    "find_words_unfiltered_one": "{n} fles past bij „{q}” zonder de filters.",
    "find_words_unfiltered_other": "{n} flessen passen bij „{q}” zonder de filters.",
    "list_sorted_asc": "oplopend gesorteerd",
    "list_sorted_desc": "aflopend gesorteerd"
  },
  "pt": {
    "cellars": "Adegas",
    "compact": "Compacto",
    "all_bottles": "Todas as garrafas",
    "stats": "Estatísticas",
    "wine_name": "Nome do vinho",
    "producer": "Produtor",
    "varietal": "Casta",
    "region": "Região",
    "country": "País",
    "vintage": "Safra",
    "type": "Tipo",
    "price": "Preço",
    "rating": "Avaliação",
    "notes": "Notas",
    "shelf": "Prateleira",
    "front": "Frente",
    "back": "Trás",
    "consume": "Consumir",
    "delete": "Excluir",
    "save": "Salvar",
    "cancel": "Cancelar",
    "close": "Fechar",
    "serving_temp": "Temperatura de serviço",
    "alcohol_pct": "Teor alcoólico",
    "not_specified": "Não especificado",
    "cleanup_btn": "Limpeza",
    "cleanup_title": "Ferramenta de busca e limpeza de duplicados",
    "cleanup_search_btn": "Buscar duplicados",
    "cleanup_merge_all": "Mesclar tudo",
    "cleanup_no_duplicates": "Nenhum duplicado de sintaxe detectado!",
    "cleanup_searching": "Analisando os dados da adega...",
    "cleanup_welcome": "Clique no botão acima para iniciar a busca e analisar os dados da sua adega.",
    "updating_field": "Atualizando campo...",
    "update_failed": "Falha na atualização: ",
    "merging_all_selections": "Mesclando todas as seleções...",
    "global_error": "Erro: ",
    "bottle_s": "garrafa(s)",
    "cellar_name_required": "O nome da adega é obrigatório.",
    "add_cellar_short": "+ Adega",
    "drink_now": "Beber agora",
    "red": "Tinto",
    "white": "Branco",
    "rose": "Rosé",
    "sparkling": "Espumante",
    "orange": "Laranja",
    "sweet": "Doce",
    "other": "Outro",
    "wine": "Vinho",
    "region_varietal": "Região/Casta",
    "total_bottles": "Total de garrafas",
    "different_wines": "Vinhos diferentes",
    "average_age": "Idade média",
    "years": "anos",
    "total_value": "Valor total",
    "distribution_by_type": "Distribuição por tipo",
    "top_countries_of_origin": "Principais países de origem",
    "unnamed_wine": "Vinho sem nome",
    "drinking_window": "Janela de consumo",
    "from_prefix": "De ",
    "to_infix": " a ",
    "no_data": "Sem dados",
    "physical_location": "Localização física",
    "copy": "Copiar",
    "edit": "Editar",
    "cellar": "Adega",
    "view": "Ver",
    "shelf_name": "Nome da prateleira",
    "edit_cellar": "Editar adega",
    "cellar_name": "Nome",
    "shelves": "Prateleiras",
    "add_shelf": "Adicionar prateleira",
    "no_barcode_found": "Nenhum código de barras encontrado.",
    "barcode_extraction_failed": "Falha ao extrair o código de barras.",
    "confirm_reanalyze": "Este vinho já foi analisado com sucesso. Sobrescrever os dados e executar a análise novamente?",
    "provide_barcode_or_label": "Informe um código de barras (dígitos) ou envie uma imagem do rótulo antes de iniciar a análise.",
    "confirm_merge_all": "Deseja mesclar e padronizar todas as sintaxes listadas?",
    "scanner_error": "Erro do leitor: ",
    "file_not_image": "O arquivo selecionado não é uma imagem.",
    "shelf_front_capacity_min": "Cada prateleira deve ter capacidade frontal de pelo menos 1.",
    "add_at_least_one_shelf": "Adicione pelo menos uma prateleira.",
    "cellar_save_failed": "Falha ao salvar a adega: ",
    "confirm_delete_cellar": "Excluir esta adega e todas as suas garrafas?",
    "bottle_copied_to_memory": "Garrafa copiada para a memória. Clique em uma posição vazia para colar.",
    "cellar_needs_shelf": "Uma adega deve ter pelo menos uma prateleira.",
    "unknown_error": "erro desconhecido",
    "clear_filters": "Limpar filtros",
    "no_bottles_yet": "Ainda não há garrafas nas suas adegas.",
    "add_bottle_short": "+ Garrafa",
    "all_slots_full": "Todas as posições das suas adegas estão ocupadas. Esvazie uma posição, ou adicione uma prateleira ou uma adega, para adicionar uma garrafa.",
    "wine_details": "Detalhes do vinho",
    "cellar_editor": "Editor de adega",
    "bottle_editor": "Editor de garrafa",
    "unknown_cellar": "Adega desconhecida",
    "status_young": "Muito novo",
    "status_ready": "Pronto",
    "status_peak": "No auge",
    "status_past": "Passou do auge",
    "location": "Localização",
    "no_shelves": "Nenhuma prateleira configurada.",
    "add_first_cellar": "Adicione uma primeira adega para começar!",
    "discard_title": "Descartar as alterações?",
    "discard_body": "O que você digitou neste formulário será perdido.",
    "keep_editing": "Continuar editando",
    "discard": "Descartar",
    "delete_bottle_title": "Excluir “{name}”?",
    "delete_bottle_body": "A garrafa é excluída definitivamente e não vai para o histórico. Isso não pode ser desfeito.",
    "delete_cellar_title": "Excluir a adega “{name}”?",
    "delete_cellar_body": "Isso também exclui suas {bottles} garrafa(s), {history} registro(s) do histórico e as fotos dos rótulos. Isso não pode ser desfeito.",
    "delete_cellar_body_empty": "A adega está vazia. Isso não pode ser desfeito.",
    "delete_cellar_confirm": "Excluir adega",
    "merge_all_title": "Mesclar {n} par(es) de grafias?",
    "merge_all_body": "{m} garrafa(s) passarão a usar a grafia selecionada. Os pares a verificar não são alterados.",
    "action_failed": "Não foi possível concluir: {error}",
    "shelf_n": "Prateleira {n}",
    "shelf_empty": "Vazia",
    "err_slot_taken_server": "Essa posição já está ocupada. Escolha outra.",
    "cleanup_check_pair": "Grafia parecida, mas pode ser outro nome. Verifique antes de mesclar; “Mesclar tudo” ignora este par.",
    "pasted_details": "Dados copiados de “{name}”. Verifique e salve.",
    "err_shelf_missing": "A prateleira selecionada não existe mais.",
    "err_no_back_lane": "Esta prateleira não tem fila de trás.",
    "err_position_out_of_range": "Essa posição ultrapassa a capacidade desta fila da prateleira.",
    "err_rating_range": "A avaliação deve estar entre 0 e 5.",
    "err_shelf_has_bottles": "Não é possível remover uma prateleira que ainda tem garrafas. Mova as garrafas primeiro.",
    "err_shrink_front": "Uma fila da frente não pode ficar menor que sua última posição ocupada. Mova essas garrafas primeiro.",
    "err_shrink_back": "Uma fila de trás não pode ficar menor que sua última posição ocupada. Mova essas garrafas primeiro.",
    "err_remove_back_lane": "A fila de trás ainda tem garrafas, então não pode ser removida. Mova-as primeiro.",
    "err_bottle_missing": "Esta garrafa não existe mais. Ela pode ter sido removida em outro lugar.",
    "err_no_entry": "A integração Wine Cellar Manager não está configurada.",
    "err_shelf_front_min": "“{shelf}” tem uma garrafa na posição da frente {n}, então precisa de pelo menos {n} posições na frente.",
    "err_shelf_back_min": "“{shelf}” tem uma garrafa na posição de trás {n}, então precisa de pelo menos {n} posições atrás.",
    "depth_back_row": "Fila de trás",
    "depth_behind": "Atrás de {names}",
    "depth_behind_aria": "atrás de {names}",
    "depth_move_first": "retire-a primeiro",
    "depth_move_first_n": "retire-as primeiro",
    "depth_front_reach": "Fila da frente: é só pegar",
    "depth_back_clear": "Fila de trás: nada na frente",
    "depth_top_view": "Vista de cima",
    "depth_shelf_of": "Prateleira {n} de {total}",
    "depth_more_left": "Mais {count} à esquerda",
    "depth_more_right": "Mais {count} à direita",
    "depth_more_slots_left": "Mais posições à esquerda",
    "depth_more_slots_right": "Mais posições à direita",
    "depth_pull": "Puxar {shelf} para ver a fila de trás ({count} garrafas)",
    "depth_push": "Empurrar {shelf} de volta",
    "depth_shelf_named": "Prateleira {n} · {name}",
    "depth_plan_back": "Atrás · parede",
    "depth_plan_front": "Frente · porta",
    "depth_blocker": "{name} (frente, posição {pos})",
    "depth_no_slots": "Esta prateleira ainda não tem posições",
    "bt_needs_details": "A completar",
    "bt_add_details": "Adicionar detalhes",
    "bt_no_window": "Sem janela",
    "bt_no_window_long": "Sem janela de consumo definida",
    "bt_add_label_photo": "Adicionar foto do rótulo",
    "bt_open_photo": "Abrir a foto do rótulo",
    "bt_show_in_cellar": "Mostrar na adega",
    "bt_more_actions": "Mais ações",
    "bt_identical": "{n} garrafas idênticas",
    "bt_in_cellars": "{n} garrafas deste vinho nas suas adegas",
    "bt_only_one": "A única garrafa deste vinho",
    "bt_find_all": "Encontrar todas",
    "bt_stars": "{n} de 5 estrelas",
    "bt_needs_details_hint": "Faltam o tipo, o produtor ou a safra desta garrafa. Adicione-os para encontrá-la com facilidade.",
    "bt_details": "Detalhes",
    "bt_front_row_pos": "Fila da frente · posição {pos}",
    "bt_back_row_pos": "Fila de trás · posição {pos}",
    "bt_photo_missing": "Foto do rótulo indisponível",
    "bt_photo_missing_sub": "A foto salva não pode ser carregada agora.",
    "bt_replace_photo": "Substituir foto",
    "slot_empty_label": "Posição livre, adicionar uma garrafa: {loc}",
    "loc_front_pos": "{cellar}, {shelf}, fila da frente, posição {pos}",
    "loc_back_pos": "{cellar}, {shelf}, fila de trás, posição {pos}",
    "sheet_add_title": "Adicionar garrafa",
    "sheet_editing": "Editando",
    "sheet_sec_label": "Rótulo",
    "sheet_sec_wine": "O vinho",
    "sheet_sec_place": "Onde vai ficar",
    "sheet_more": "Mais detalhes",
    "sheet_more_hint": "Região, preço, janela de consumo, avaliação, notas",
    "sheet_more_filled": "{n} preenchidos",
    "sheet_take_photo": "Tirar foto",
    "sheet_upload_photo": "Enviar foto do rótulo",
    "sheet_choose_library": "Escolher da galeria",
    "sheet_type_instead": "Digitar em vez disso",
    "sheet_scan_barcode": "Ler código SAQ",
    "sheet_photo_title": "Fotografe o rótulo",
    "sheet_photo_title_plain": "Adicionar uma foto do rótulo",
    "sheet_photo_sub_ai": "Nós lemos o nome, o produtor e a safra para você.",
    "sheet_photo_sub": "Com uma foto do rótulo, a garrafa é fácil de achar na prateleira.",
    "sheet_photo_drop": "ou solte uma imagem aqui",
    "sheet_photo_ready": "Foto do rótulo",
    "sheet_photo_replace": "Substituir",
    "sheet_photo_rotate": "Girar",
    "sheet_photo_remove": "Remover",
    "sheet_photo_read": "Ler rótulo",
    "sheet_st_preparing": "Preparando a foto…",
    "sheet_st_uploading": "Enviando…",
    "sheet_st_reading": "Lendo o rótulo…",
    "sheet_st_barcode": "Lendo o código de barras…",
    "sheet_note_reading": "Lendo o rótulo. Pode continuar digitando: só os campos vazios são preenchidos.",
    "sheet_note_ai_one": "{n} detalhe preenchido pelo rótulo. Dê uma conferida rápida.",
    "sheet_note_ai_other": "{n} detalhes preenchidos pelo rótulo. Dê uma conferida rápida.",
    "sheet_note_cellar_one": "{n} detalhe preenchido a partir de {name} da sua adega.",
    "sheet_note_cellar_other": "{n} detalhes preenchidos a partir de {name} da sua adega.",
    "sheet_note_none": "Nada de novo encontrado no rótulo.",
    "sheet_note_fail": "Não foi possível ler este rótulo automaticamente. Preencha os detalhes abaixo.",
    "undo": "Desfazer",
    "undone": "Desfeito",
    "sheet_mark_ai": "IA",
    "sheet_mark_cellar": "Da adega",
    "sheet_name_ph": "ex.: Barolo, Château Margaux…",
    "sheet_in_cellar": "{n} na adega",
    "sheet_had_before": "Já teve",
    "sheet_dup": "Você já tem {n} garrafas deste vinho · {where}",
    "sheet_type_unset": "Não sei",
    "sheet_window": "Janela de consumo",
    "sheet_from": "De",
    "sheet_to": "Até",
    "sheet_win_none": "Adicione os anos para ver quando estará pronto.",
    "sheet_win_young": "Muito novo · pronto a partir de {y}",
    "sheet_win_ready": "Pronto para beber · até {y}",
    "sheet_win_peak": "No auge este ano",
    "sheet_win_past": "Passou do auge desde {y}",
    "sheet_rating_none": "Nenhuma",
    "sheet_link": "Link do produto",
    "sheet_barcode": "Código de barras",
    "sheet_lookup": "Consultar",
    "pick_bottles": "Quantas garrafas",
    "pick_qty_less": "Uma garrafa a menos",
    "pick_qty_more": "Uma garrafa a mais",
    "pick_free_one": "{n} livre",
    "pick_free_other": "{n} livres",
    "pick_full": "Cheio",
    "pick_hint": "Toque numa posição livre para escolher onde vai ficar.",
    "pick_hint_n": "Ocupa {n} posições livres em ordem, a partir da que você tocar.",
    "pick_hint_edit": "Toque numa posição livre para mover a garrafa para lá ao salvar.",
    "sheet_plan_n": "{n} garrafas · {where}",
    "pick_move_from": "Sai de {from}",
    "pick_occupied": "Ocupada · {name}",
    "pick_slot_free": "{shelf}, {lane}, posição {pos}, livre",
    "pick_slot_current": "{shelf}, {lane}, posição {pos}, posição atual",
    "pick_no_free": "Todas as posições estão ocupadas.",
    "pick_no_free_sub": "Adicione uma prateleira ou adega para abrir espaço e depois a garrafa.",
    "pick_add_shelves_to": "Adicionar prateleiras a {name}",
    "pick_new_cellar": "Nova adega",
    "sheet_only_name": "Só o nome é obrigatório.",
    "sheet_save_n": "Salvar {n} garrafas",
    "sheet_save_next": "Salvar e adicionar outra",
    "sheet_save_changes": "Salvar alterações",
    "sheet_saving": "Salvando…",
    "sheet_saving_n": "Salvando {i} de {n}…",
    "sheet_saved_one": "{name} adicionada · {where}",
    "sheet_saved_n": "{n} garrafas adicionadas · {where}",
    "sheet_saved_edit": "Alterações salvas",
    "sheet_err_name": "Dê um nome ao vinho.",
    "sheet_err_year": "Use um ano com 4 dígitos.",
    "sheet_err_window": "A janela não pode terminar antes de começar.",
    "sheet_err_no_slot": "Escolha uma posição livre.",
    "sheet_err_slot_taken": "Essa posição está ocupada por “{name}”. Escolha outra.",
    "sheet_err_slot_moved": "Essa posição acabou de ser ocupada, então escolhemos a próxima livre. Toque em Salvar de novo.",
    "sheet_err_not_enough_one": "Só {n} posição livre em {cellar}.",
    "sheet_err_not_enough_other": "Só {n} posições livres em {cellar}.",
    "sheet_err_partial_left_one": "{i} de {total} salvas. {error} Salve de novo para adicionar a última.",
    "sheet_err_partial_left_other": "{i} de {total} salvas. {error} Salve de novo para adicionar as outras {n}.",
    "sheet_err_number": "Digite um número.",
    "sheet_err_photo_format": "Este formato de foto não é compatível aqui. Tente JPEG ou PNG.",
    "sheet_err_photo_upload": "Não foi possível enviar a foto. {error}",
    "sheet_err_save": "Não foi possível salvar: {error}",
    "move_action": "Mover",
    "move_moving": "Movendo {name}",
    "move_hint": "Toque numa posição vazia ou numa garrafa para trocar.",
    "move_hint_kb": "Esc cancela.",
    "move_done": "{name} movida para {where}",
    "move_swapped": "{a} e {b} trocadas",
    "move_failed": "Não foi possível mover a garrafa: {error}",
    "builder_title_new": "Nova adega",
    "builder_name_ph": "ex.: Adega da cozinha",
    "builder_finish": "Acabamento da moldura",
    "builder_quick": "Início rápido",
    "builder_tpl_fridge": "Adega climatizada",
    "builder_tpl_stagger": "Rack escalonado",
    "builder_tpl_rack": "Rack aberto",
    "builder_tpl_sub": "{s} prateleiras × {f}",
    "builder_tpl_sub2": "{s} prateleiras × {f} + {b} atrás",
    "builder_shelves_hint": "Prateleira de cima primeiro. A fila de trás fica atrás da da frente, desencontrada para que todo rótulo apareça.",
    "builder_front_slots": "Posições na frente",
    "builder_back_slots": "Posições atrás",
    "builder_fewer": "Menos posições ({lane})",
    "builder_more": "Mais posições ({lane})",
    "builder_stored": "{n} ocupadas",
    "builder_up": "Subir prateleira",
    "builder_down": "Descer prateleira",
    "builder_remove": "Remover prateleira",
    "builder_remove_blocked_one": "Primeiro mova a garrafa desta prateleira.",
    "builder_remove_blocked_other": "Primeiro mova as {n} garrafas desta prateleira.",
    "builder_min_hint": "Há uma garrafa na posição {n}.",
    "builder_preview": "Pré-visualização",
    "builder_legend_stored": "Ocupada",
    "builder_legend_free": "Livre",
    "builder_save": "Salvar adega",
    "builder_create": "Criar adega",
    "builder_saved": "Adega salva",
    "sheet_wait_photo": "Aguardando a foto…",
    "builder_position": "Posição entre suas adegas",
    "builder_pos_first": "Em primeiro lugar",
    "builder_pos_after": "Depois de {name}",
    "builder_order_failed": "Adega salva, mas não foi possível atualizar a ordem das outras adegas.",
    "builder_fin_bordeaux": "Laca bordô",
    "builder_fin_oak": "Carvalho",
    "builder_fin_olive": "Oliva",
    "builder_fin_azure": "Azul-celeste",
    "builder_fin_slate": "Ardósia",
    "builder_fin_steel": "Aço escovado",
    "builder_fin_custom": "Personalizado",
    "builder_shelves_one": "{n} prateleira",
    "builder_shelves_other": "{n} prateleiras",
    "builder_slots_one": "{n} posição",
    "builder_slots_other": "{n} posições",
    "builder_fin_graphite": "Grafite",
    "find_placeholder": "Pesquisar vinho, produtor, safra, adega…",
    "find_placeholder_short": "Pesquisar na adega…",
    "find_search_label": "Pesquisar garrafas",
    "find_views_label": "Visualização",
    "find_tab_bottles": "Garrafas",
    "find_filters": "Filtros",
    "find_filters_n_one": "Filtros, {n} selecionado",
    "find_filters_n_other": "Filtros, {n} selecionados",
    "find_clear_all": "Limpar tudo",
    "find_clear_search": "Limpar pesquisa",
    "find_status_group": "Estado de consumo",
    "find_type_group": "Tipo de vinho",
    "find_country_group": "País",
    "find_cellar_group": "Adega",
    "find_drink_now_hint": "No auge ou passadas: abra estas primeiro",
    "find_remove": "Remover filtro: {x}",
    "find_matches_one": "{n} resultado",
    "find_matches_other": "{n} resultados",
    "find_no_match": "Nenhum resultado",
    "find_in_cellar": "em {name}",
    "find_in_cellars_one": "em {n} adega",
    "find_in_cellars_other": "em {n} adegas",
    "find_more_n": "+{n} mais",
    "find_more_label": "Ver os {n} resultados em Todas as garrafas",
    "find_step_hint": "próximo resultado",
    "find_matches_label": "Garrafas correspondentes",
    "find_no_results_q": "Nenhuma garrafa corresponde a “{q}”",
    "find_no_results_f": "Nenhuma garrafa corresponde a estes filtros",
    "find_did_you_mean": "Você quis dizer {x}?",
    "find_try_other": "Verifique a grafia ou pesquise por produtor, safra ou adega.",
    "find_found_one": "{n} garrafa encontrada",
    "find_found_other": "{n} garrafas encontradas",
    "find_found_none": "Nenhuma garrafa encontrada",
    "find_state_match": "corresponde",
    "find_state_other": "não corresponde",
    "find_show_one": "Mostrar {n} garrafa",
    "find_show_other": "Mostrar {n} garrafas",
    "find_crumb_shelf": "{name} (prateleira {n})",
    "find_crumb_back": "Trás #{pos}",
    "find_crumb_front": "Frente #{pos}",
    "find_crumb_pos": "#{pos}",
    "consume_done": "Apreciada: {name}",
    "consume_restored": "De volta à sua posição: {name}",
    "consume_failed": "Não foi possível marcar {name} como consumida: {error}",
    "consume_undo_taken": "Não foi possível devolver {name}: a posição agora está ocupada. Ela continua em Apreciadas recentemente, nas Estatísticas.",
    "consume_undo_failed": "Não foi possível devolver {name}: {error}",
    "delete_done": "Excluída: {name}",
    "delete_failed": "Não foi possível excluir {name}: {error}",
    "list_empty_body": "Adicione sua primeira garrafa: fotografe o rótulo e escolha a posição.",
    "list_sort_by": "Ordenar por",
    "list_reverse": "Inverter ordem",
    "list_title_one": "{n} garrafa",
    "list_title_other": "{n} garrafas",
    "list_title_of_one": "{shown} de {n} garrafa",
    "list_title_of_other": "{shown} de {n} garrafas",
    "stats_empty_title": "Ainda sem estatísticas",
    "stats_empty_body": "Adicione garrafas para ver o que beber, quando, e o que sua adega guarda.",
    "stats_free_one": "{n} posição livre",
    "stats_free_other": "{n} posições livres",
    "stats_producers_one": "{n} produtor",
    "stats_producers_other": "{n} produtores",
    "stats_oldest": "Safra mais antiga: {y}",
    "stats_per_bottle": "≈ {v} por garrafa",
    "stats_open_hint": "Abre Todas as garrafas mostrando só estas.",
    "stats_window_title": "Janela de consumo",
    "stats_window_sub": "Garrafas dentro da janela de consumo, ano a ano",
    "stats_window_none": "Nenhuma garrafa tem janela de consumo nos próximos anos.",
    "stats_window_caption": "Garrafas dentro da janela de consumo por ano e tipo de vinho",
    "stats_now": "agora",
    "stats_year_bottles_one": "{year}: {n} garrafa",
    "stats_year_bottles_other": "{year}: {n} garrafas",
    "stats_now_empty": "Nada urgente: nenhuma garrafa está no auge ou passou dele.",
    "stats_now_all_one": "Ver {n} garrafa em Todas as garrafas",
    "stats_now_all_other": "Ver as {n} em Todas as garrafas",
    "stats_bottle_word_one": "garrafa",
    "stats_bottle_word_other": "garrafas",
    "ready_to_drink": "Pronto para beber",
    "find_ready_to_drink_hint": "Prontas ou no auge: boas para abrir",
    "toast_undo_keys": "Pressione {keys} para desfazer",
    "stats_recent_title": "Apreciadas recentemente",
    "stats_recent_sub": "Marcada como apreciada por engano? Devolva a garrafa à sua posição.",
    "stats_recent_on": "Apreciada em {date}",
    "stats_put_back": "Devolver",
    "stats_put_back_label": "Devolver {name} à sua posição",
    "stats_recent_taken": "A posição está ocupada",
    "stats_recent_gone": "A prateleira não existe mais",
    "err_consumed_missing": "Esta garrafa não está mais no histórico. Ela pode ter sido devolvida ou removida em outro lugar.",
    "consume_undo_noshelf": "Não foi possível devolver {name}: a prateleira não existe mais.",
    "find_words_unfiltered_one": "{n} garrafa corresponde a “{q}” sem os filtros.",
    "find_words_unfiltered_other": "{n} garrafas correspondem a “{q}” sem os filtros.",
    "list_sorted_asc": "ordem crescente",
    "list_sorted_desc": "ordem decrescente"
  },
  "pl": {
    "cellars": "Piwnice",
    "compact": "Kompaktowy",
    "all_bottles": "Wszystkie butelki",
    "stats": "Statystyki",
    "wine_name": "Nazwa wina",
    "producer": "Producent",
    "varietal": "Szczep",
    "region": "Region",
    "country": "Kraj",
    "vintage": "Rocznik",
    "type": "Rodzaj",
    "price": "Cena",
    "rating": "Ocena",
    "notes": "Notatki",
    "shelf": "Półka",
    "front": "Przód",
    "back": "Tył",
    "consume": "Wypij",
    "delete": "Usuń",
    "save": "Zapisz",
    "cancel": "Anuluj",
    "close": "Zamknij",
    "serving_temp": "Temperatura podawania",
    "alcohol_pct": "Zawartość alkoholu",
    "not_specified": "Nie określono",
    "cleanup_btn": "Porządkowanie",
    "cleanup_title": "Narzędzie wyszukiwania i porządkowania duplikatów",
    "cleanup_search_btn": "Szukaj duplikatów",
    "cleanup_merge_all": "Scal wszystko",
    "cleanup_no_duplicates": "Nie wykryto duplikatów pisowni!",
    "cleanup_searching": "Analizowanie danych piwnicy...",
    "cleanup_welcome": "Kliknij przycisk powyżej, aby rozpocząć wyszukiwanie i przeanalizować dane piwnicy.",
    "updating_field": "Aktualizowanie pola...",
    "update_failed": "Aktualizacja nie powiodła się: ",
    "merging_all_selections": "Scalanie wszystkich wyborów...",
    "global_error": "Błąd: ",
    "bottle_s": "butelka(-ki)",
    "cellar_name_required": "Nazwa piwnicy jest wymagana.",
    "add_cellar_short": "+ Piwnica",
    "drink_now": "Pij teraz",
    "red": "Czerwone",
    "white": "Białe",
    "rose": "Różowe",
    "sparkling": "Musujące",
    "orange": "Pomarańczowe",
    "sweet": "Słodkie",
    "other": "Inne",
    "wine": "Wino",
    "region_varietal": "Region/Szczep",
    "total_bottles": "Łącznie butelek",
    "different_wines": "Różnych win",
    "average_age": "Średni wiek",
    "years": "lat",
    "total_value": "Łączna wartość",
    "distribution_by_type": "Podział według rodzaju",
    "top_countries_of_origin": "Najczęstsze kraje pochodzenia",
    "unnamed_wine": "Wino bez nazwy",
    "drinking_window": "Okno picia",
    "from_prefix": "Od ",
    "to_infix": " do ",
    "no_data": "Brak danych",
    "physical_location": "Lokalizacja fizyczna",
    "copy": "Kopiuj",
    "edit": "Edytuj",
    "cellar": "Piwnica",
    "view": "Pokaż",
    "shelf_name": "Nazwa półki",
    "edit_cellar": "Edytuj piwnicę",
    "cellar_name": "Nazwa",
    "shelves": "Półki",
    "add_shelf": "Dodaj półkę",
    "no_barcode_found": "Nie znaleziono kodu kreskowego.",
    "barcode_extraction_failed": "Odczyt kodu kreskowego nie powiódł się.",
    "confirm_reanalyze": "To wino zostało już pomyślnie przeanalizowane. Nadpisać dane i uruchomić analizę ponownie?",
    "provide_barcode_or_label": "Podaj kod kreskowy (cyfry) lub wgraj zdjęcie etykiety przed uruchomieniem analizy.",
    "confirm_merge_all": "Czy chcesz scalić i ujednolicić wszystkie wymienione pisownie?",
    "scanner_error": "Błąd skanera: ",
    "file_not_image": "Wybrany plik nie jest obrazem.",
    "shelf_front_capacity_min": "Każda półka musi mieć pojemność z przodu co najmniej 1.",
    "add_at_least_one_shelf": "Dodaj co najmniej jedną półkę.",
    "cellar_save_failed": "Zapisywanie piwnicy nie powiodło się: ",
    "confirm_delete_cellar": "Usunąć tę piwnicę i wszystkie jej butelki?",
    "bottle_copied_to_memory": "Butelka skopiowana do pamięci. Kliknij puste miejsce, aby wkleić.",
    "cellar_needs_shelf": "Piwnica musi mieć co najmniej jedną półkę.",
    "unknown_error": "nieznany błąd",
    "clear_filters": "Wyczyść filtry",
    "no_bottles_yet": "Brak butelek w Twoich piwnicach.",
    "add_bottle_short": "+ Butelka",
    "all_slots_full": "Wszystkie miejsca w Twoich piwnicach są zajęte. Zwolnij miejsce albo dodaj półkę lub piwnicę, aby dodać butelkę.",
    "wine_details": "Szczegóły wina",
    "cellar_editor": "Edytor piwnicy",
    "bottle_editor": "Edytor butelki",
    "unknown_cellar": "Nieznana piwnica",
    "status_young": "Za młode",
    "status_ready": "Gotowe",
    "status_peak": "W szczycie",
    "status_past": "Po szczycie",
    "location": "Lokalizacja",
    "no_shelves": "Brak skonfigurowanych półek.",
    "add_first_cellar": "Dodaj pierwszą piwnicę, aby rozpocząć!",
    "discard_title": "Odrzucić zmiany?",
    "discard_body": "To, co wpisano w tym formularzu, zostanie utracone.",
    "keep_editing": "Edytuj dalej",
    "discard": "Odrzuć",
    "delete_bottle_title": "Usunąć „{name}”?",
    "delete_bottle_body": "Butelka zostanie trwale usunięta i nie trafi do historii. Tej operacji nie można cofnąć.",
    "delete_cellar_title": "Usunąć piwnicę „{name}”?",
    "delete_cellar_body": "Zostaną też usunięte jej butelki ({bottles}), wpisy w historii ({history}) i zdjęcia etykiet. Tej operacji nie można cofnąć.",
    "delete_cellar_body_empty": "Piwnica jest pusta. Tej operacji nie można cofnąć.",
    "delete_cellar_confirm": "Usuń piwnicę",
    "merge_all_title": "Scalić pary pisowni ({n})?",
    "merge_all_body": "Liczba butelek, które otrzymają wybraną pisownię: {m}. Pary do sprawdzenia pozostaną bez zmian.",
    "action_failed": "Nie udało się: {error}",
    "shelf_n": "Półka {n}",
    "shelf_empty": "Pusta",
    "err_slot_taken_server": "To miejsce jest już zajęte. Wybierz inną pozycję.",
    "cleanup_check_pair": "Podobna pisownia, ale może to być inna nazwa. Sprawdź przed scaleniem; „Scal wszystko” ją pomija.",
    "pasted_details": "Skopiowano dane z „{name}”. Sprawdź i zapisz.",
    "err_shelf_missing": "Wybrana półka już nie istnieje.",
    "err_no_back_lane": "Ta półka nie ma tylnego rzędu.",
    "err_position_out_of_range": "Ta pozycja przekracza pojemność tego rzędu półki.",
    "err_rating_range": "Ocena musi mieścić się w przedziale od 0 do 5.",
    "err_shelf_has_bottles": "Nie można usunąć półki, na której są jeszcze butelki. Najpierw przenieś butelki.",
    "err_shrink_front": "Przedni rząd nie może być mniejszy niż jego ostatnia zajęta pozycja. Najpierw przenieś te butelki.",
    "err_shrink_back": "Tylny rząd nie może być mniejszy niż jego ostatnia zajęta pozycja. Najpierw przenieś te butelki.",
    "err_remove_back_lane": "W tylnym rzędzie wciąż są butelki, więc nie można go usunąć. Najpierw je przenieś.",
    "err_bottle_missing": "Ta butelka już nie istnieje. Mogła zostać usunięta w innym miejscu.",
    "err_no_entry": "Integracja Wine Cellar Manager nie jest skonfigurowana.",
    "err_shelf_front_min": "„{shelf}” ma butelkę na przedniej pozycji {n}, więc potrzebuje co najmniej {n} pozycji z przodu.",
    "err_shelf_back_min": "„{shelf}” ma butelkę na tylnej pozycji {n}, więc potrzebuje co najmniej {n} pozycji z tyłu.",
    "depth_back_row": "Tylny rząd",
    "depth_behind": "Za: {names}",
    "depth_behind_aria": "za: {names}",
    "depth_move_first": "najpierw ją wyjmij",
    "depth_move_first_n": "najpierw je wyjmij",
    "depth_front_reach": "Przedni rząd – sięgnij od razu",
    "depth_back_clear": "Tylny rząd – nic przed nią",
    "depth_top_view": "Widok z góry",
    "depth_shelf_of": "Półka {n} z {total}",
    "depth_more_left": "Więcej po lewej: {count}",
    "depth_more_right": "Więcej po prawej: {count}",
    "depth_more_slots_left": "Więcej miejsc po lewej",
    "depth_more_slots_right": "Więcej miejsc po prawej",
    "depth_pull": "Wysuń {shelf}, aby zobaczyć tylny rząd (butelki: {count})",
    "depth_push": "Wsuń z powrotem {shelf}",
    "depth_shelf_named": "Półka {n} · {name}",
    "depth_plan_back": "Tył · ściana",
    "depth_plan_front": "Przód · drzwi",
    "depth_blocker": "{name} (przód, pozycja {pos})",
    "depth_no_slots": "Ta półka nie ma jeszcze miejsc",
    "bt_needs_details": "Niekompletne",
    "bt_add_details": "Uzupełnij szczegóły",
    "bt_no_window": "Brak okna",
    "bt_no_window_long": "Nie ustawiono okna picia",
    "bt_add_label_photo": "Dodaj zdjęcie etykiety",
    "bt_open_photo": "Otwórz pełne zdjęcie etykiety",
    "bt_show_in_cellar": "Pokaż w piwnicy",
    "bt_more_actions": "Więcej działań",
    "bt_identical": "Identyczne butelki: {n}",
    "bt_in_cellars": "Butelki tego wina w piwnicach: {n}",
    "bt_only_one": "Jedyna butelka tego wina",
    "bt_find_all": "Znajdź wszystkie",
    "bt_stars": "{n} na 5 gwiazdek",
    "bt_needs_details_hint": "Tej butelce brakuje rodzaju, producenta lub rocznika. Uzupełnij je, aby łatwo ją znaleźć.",
    "bt_details": "Szczegóły",
    "bt_front_row_pos": "Przedni rząd · pozycja {pos}",
    "bt_back_row_pos": "Tylny rząd · pozycja {pos}",
    "bt_photo_missing": "Zdjęcie etykiety niedostępne",
    "bt_photo_missing_sub": "Nie można teraz wczytać zapisanego zdjęcia.",
    "bt_replace_photo": "Zamień zdjęcie",
    "slot_empty_label": "Wolne miejsce, dodaj butelkę: {loc}",
    "loc_front_pos": "{cellar}, {shelf}, przedni rząd, pozycja {pos}",
    "loc_back_pos": "{cellar}, {shelf}, tylny rząd, pozycja {pos}",
    "sheet_add_title": "Dodaj butelkę",
    "sheet_editing": "Edycja",
    "sheet_sec_label": "Etykieta",
    "sheet_sec_wine": "Wino",
    "sheet_sec_place": "Gdzie ją położyć",
    "sheet_more": "Więcej szczegółów",
    "sheet_more_hint": "Region, cena, okno picia, ocena, notatki",
    "sheet_more_filled": "Wypełnione: {n}",
    "sheet_take_photo": "Zrób zdjęcie",
    "sheet_upload_photo": "Wgraj zdjęcie etykiety",
    "sheet_choose_library": "Wybierz z galerii",
    "sheet_type_instead": "Wpisz ręcznie",
    "sheet_scan_barcode": "Zeskanuj kod SAQ",
    "sheet_photo_title": "Sfotografuj etykietę",
    "sheet_photo_title_plain": "Dodaj zdjęcie etykiety",
    "sheet_photo_sub_ai": "Odczytamy za ciebie nazwę, producenta i rocznik.",
    "sheet_photo_sub": "Zdjęcie etykiety pozwala łatwo wypatrzyć butelkę na półce.",
    "sheet_photo_drop": "lub upuść tutaj obraz",
    "sheet_photo_ready": "Zdjęcie etykiety",
    "sheet_photo_replace": "Zamień",
    "sheet_photo_rotate": "Obróć",
    "sheet_photo_remove": "Usuń",
    "sheet_photo_read": "Odczytaj etykietę",
    "sheet_st_preparing": "Przygotowywanie zdjęcia…",
    "sheet_st_uploading": "Wgrywanie…",
    "sheet_st_reading": "Odczytywanie etykiety…",
    "sheet_st_barcode": "Odczytywanie kodu kreskowego…",
    "sheet_note_reading": "Odczytujemy etykietę. Możesz dalej pisać: wypełniamy tylko puste pola.",
    "sheet_note_ai_one": "Uzupełniono z etykiety: {n}. Rzuć na to okiem.",
    "sheet_note_ai_other": "Uzupełniono z etykiety: {n}. Rzuć na to okiem.",
    "sheet_note_cellar_one": "Uzupełniono na podstawie {name} z piwnicy: {n}.",
    "sheet_note_cellar_other": "Uzupełniono na podstawie {name} z piwnicy: {n}.",
    "sheet_note_none": "Na etykiecie nie znaleziono nic nowego.",
    "sheet_note_fail": "Nie udało się automatycznie odczytać etykiety. Uzupełnij dane poniżej.",
    "undo": "Cofnij",
    "undone": "Cofnięto",
    "sheet_mark_ai": "AI",
    "sheet_mark_cellar": "Z piwnicy",
    "sheet_name_ph": "np. Barolo, Château Margaux…",
    "sheet_in_cellar": "W piwnicy: {n}",
    "sheet_had_before": "Już była",
    "sheet_dup": "Masz już butelki tego wina ({n}) · {where}",
    "sheet_type_unset": "Nie wiem",
    "sheet_window": "Okno picia",
    "sheet_from": "Od",
    "sheet_to": "Do",
    "sheet_win_none": "Dodaj lata, aby zobaczyć, kiedy będzie gotowe.",
    "sheet_win_young": "Za młode · gotowe od {y}",
    "sheet_win_ready": "Gotowe do picia · do {y}",
    "sheet_win_peak": "W szczycie w tym roku",
    "sheet_win_past": "Po szczycie od {y}",
    "sheet_rating_none": "Brak",
    "sheet_link": "Link do produktu",
    "sheet_barcode": "Kod kreskowy",
    "sheet_lookup": "Wyszukaj",
    "pick_bottles": "Ile butelek",
    "pick_qty_less": "O jedną butelkę mniej",
    "pick_qty_more": "O jedną butelkę więcej",
    "pick_free_one": "Wolne: {n}",
    "pick_free_other": "Wolne: {n}",
    "pick_full": "Pełna",
    "pick_hint": "Dotknij wolnego miejsca, aby wybrać, gdzie ją położyć.",
    "pick_hint_n": "Wypełnia po kolei wolne miejsca ({n}), zaczynając od dotkniętego.",
    "pick_hint_edit": "Dotknij wolnego miejsca, aby przenieść tam butelkę przy zapisie.",
    "sheet_plan_n": "Butelki: {n} · {where}",
    "pick_move_from": "Przenoszona z: {from}",
    "pick_occupied": "Zajęte · {name}",
    "pick_slot_free": "{shelf}, {lane}, pozycja {pos}, wolne",
    "pick_slot_current": "{shelf}, {lane}, pozycja {pos}, obecne miejsce",
    "pick_no_free": "Wszystkie miejsca są zajęte.",
    "pick_no_free_sub": "Dodaj półkę lub piwnicę, aby zrobić miejsce, a potem dodaj butelkę.",
    "pick_add_shelves_to": "Dodaj półki do: {name}",
    "pick_new_cellar": "Nowa piwnica",
    "sheet_only_name": "Wymagana jest tylko nazwa.",
    "sheet_save_n": "Zapisz butelki ({n})",
    "sheet_save_next": "Zapisz i dodaj kolejną",
    "sheet_save_changes": "Zapisz zmiany",
    "sheet_saving": "Zapisywanie…",
    "sheet_saving_n": "Zapisywanie {i} z {n}…",
    "sheet_saved_one": "Dodano {name} · {where}",
    "sheet_saved_n": "Dodano butelki ({n}) · {where}",
    "sheet_saved_edit": "Zapisano zmiany",
    "sheet_err_name": "Nadaj winu nazwę.",
    "sheet_err_year": "Podaj rok w formacie 4-cyfrowym.",
    "sheet_err_window": "Okno nie może kończyć się przed początkiem.",
    "sheet_err_no_slot": "Wybierz wolne miejsce.",
    "sheet_err_slot_taken": "To miejsce zajmuje „{name}”. Wybierz inne.",
    "sheet_err_slot_moved": "To miejsce zostało właśnie zajęte, więc wybraliśmy następne wolne. Kliknij Zapisz ponownie.",
    "sheet_err_not_enough_one": "Wolnych miejsc w {cellar}: tylko {n}.",
    "sheet_err_not_enough_other": "Wolnych miejsc w {cellar}: tylko {n}.",
    "sheet_err_partial_left_one": "Zapisano {i} z {total}. {error} Zapisz ponownie, aby dodać pozostałe ({n}).",
    "sheet_err_partial_left_other": "Zapisano {i} z {total}. {error} Zapisz ponownie, aby dodać pozostałe ({n}).",
    "sheet_err_number": "Podaj liczbę.",
    "sheet_err_photo_format": "Ten format zdjęcia nie jest tu obsługiwany. Użyj JPEG lub PNG.",
    "sheet_err_photo_upload": "Nie udało się wgrać zdjęcia. {error}",
    "sheet_err_save": "Nie udało się zapisać: {error}",
    "move_action": "Przenieś",
    "move_moving": "Przenoszenie: {name}",
    "move_hint": "Dotknij pustego miejsca albo butelki, aby je zamienić.",
    "move_hint_kb": "Esc anuluje.",
    "move_done": "Przeniesiono {name}: {where}",
    "move_swapped": "Zamieniono {a} i {b}",
    "move_failed": "Nie udało się przenieść butelki: {error}",
    "builder_title_new": "Nowa piwnica",
    "builder_name_ph": "np. Chłodziarka w kuchni",
    "builder_finish": "Wykończenie obudowy",
    "builder_quick": "Szybki start",
    "builder_tpl_fridge": "Chłodziarka do wina",
    "builder_tpl_stagger": "Regał przestawny",
    "builder_tpl_rack": "Otwarty regał",
    "builder_tpl_sub": "Półki: {s} × {f}",
    "builder_tpl_sub2": "Półki: {s} × {f} + {b} z tyłu",
    "builder_shelves_hint": "Najpierw górna półka. Tylny rząd stoi za przednim, przesunięty, aby każda etykieta była widoczna.",
    "builder_front_slots": "Miejsca z przodu",
    "builder_back_slots": "Miejsca z tyłu",
    "builder_fewer": "Mniej miejsc ({lane})",
    "builder_more": "Więcej miejsc ({lane})",
    "builder_stored": "Zajęte: {n}",
    "builder_up": "Przesuń półkę w górę",
    "builder_down": "Przesuń półkę w dół",
    "builder_remove": "Usuń półkę",
    "builder_remove_blocked_one": "Najpierw przenieś butelki z tej półki ({n}).",
    "builder_remove_blocked_other": "Najpierw przenieś butelki z tej półki ({n}).",
    "builder_min_hint": "Na miejscu {n} stoi butelka.",
    "builder_preview": "Podgląd",
    "builder_legend_stored": "Zajęte",
    "builder_legend_free": "Wolne",
    "builder_save": "Zapisz piwnicę",
    "builder_create": "Utwórz piwnicę",
    "builder_saved": "Zapisano piwnicę",
    "sheet_wait_photo": "Czekamy na zdjęcie…",
    "builder_position": "Pozycja wśród piwnic",
    "builder_pos_first": "Na początku",
    "builder_pos_after": "Po „{name}”",
    "builder_order_failed": "Zapisano piwnicę, ale nie udało się zmienić kolejności pozostałych piwnic.",
    "builder_fin_bordeaux": "Lakier bordo",
    "builder_fin_oak": "Dąb",
    "builder_fin_olive": "Oliwkowy",
    "builder_fin_azure": "Lazur",
    "builder_fin_slate": "Łupek",
    "builder_fin_steel": "Szczotkowana stal",
    "builder_fin_custom": "Własny",
    "builder_shelves_one": "{n} półka",
    "builder_shelves_other": "{n} półki",
    "builder_slots_one": "{n} miejsce",
    "builder_slots_other": "{n} miejsca",
    "builder_shelves_few": "{n} półki",
    "builder_shelves_many": "{n} półek",
    "builder_slots_few": "{n} miejsca",
    "builder_slots_many": "{n} miejsc",
    "builder_fin_graphite": "Grafit",
    "find_placeholder": "Szukaj wina, producenta, rocznika, piwnicy…",
    "find_placeholder_short": "Szukaj w piwnicy…",
    "find_search_label": "Szukaj butelek",
    "find_views_label": "Widok",
    "find_tab_bottles": "Butelki",
    "find_filters": "Filtry",
    "find_filters_n_one": "Filtry, wybrane: {n}",
    "find_filters_n_other": "Filtry, wybrane: {n}",
    "find_clear_all": "Wyczyść wszystko",
    "find_clear_search": "Wyczyść wyszukiwanie",
    "find_status_group": "Gotowość do picia",
    "find_type_group": "Rodzaj wina",
    "find_country_group": "Kraj",
    "find_cellar_group": "Piwnica",
    "find_drink_now_hint": "W szczycie lub po nim: otwórz je najpierw",
    "find_remove": "Usuń filtr: {x}",
    "find_matches_one": "{n} wynik",
    "find_matches_other": "{n} wyniku",
    "find_no_match": "Brak wyników",
    "find_in_cellar": "w piwnicy {name}",
    "find_in_cellars_one": "w {n} piwnicy",
    "find_in_cellars_other": "w {n} piwnicy",
    "find_more_n": "+{n} więcej",
    "find_more_label": "Pokaż wszystkie wyniki ({n}) w widoku Wszystkie butelki",
    "find_step_hint": "następny wynik",
    "find_matches_label": "Pasujące butelki",
    "find_no_results_q": "Żadna butelka nie pasuje do „{q}”",
    "find_no_results_f": "Żadna butelka nie pasuje do tych filtrów",
    "find_did_you_mean": "Czy chodziło o {x}?",
    "find_try_other": "Sprawdź pisownię albo szukaj po producencie, roczniku lub piwnicy.",
    "find_found_one": "Znaleziono {n} butelkę",
    "find_found_other": "Znaleziono {n} butelki",
    "find_found_none": "Nie znaleziono butelek",
    "find_state_match": "pasuje",
    "find_state_other": "nie pasuje",
    "find_show_one": "Pokaż {n} butelkę",
    "find_show_other": "Pokaż {n} butelki",
    "find_crumb_shelf": "{name} (półka {n})",
    "find_crumb_back": "Tył #{pos}",
    "find_crumb_front": "Przód #{pos}",
    "find_crumb_pos": "#{pos}",
    "find_filters_n_few": "Filtry, wybrane: {n}",
    "find_filters_n_many": "Filtry, wybrane: {n}",
    "find_matches_few": "{n} wyniki",
    "find_matches_many": "{n} wyników",
    "find_in_cellars_few": "w {n} piwnicach",
    "find_in_cellars_many": "w {n} piwnicach",
    "find_found_few": "Znaleziono {n} butelki",
    "find_found_many": "Znaleziono {n} butelek",
    "find_show_few": "Pokaż {n} butelki",
    "find_show_many": "Pokaż {n} butelek",
    "consume_done": "Wypita: {name}",
    "consume_restored": "Znów na swoim miejscu: {name}",
    "consume_failed": "Nie udało się oznaczyć {name} jako wypitej: {error}",
    "consume_undo_taken": "Nie udało się odłożyć {name}: to miejsce jest już zajęte. Butelka zostaje w sekcji Ostatnio wypite, w statystykach.",
    "consume_undo_failed": "Nie udało się odłożyć {name}: {error}",
    "delete_done": "Usunięto: {name}",
    "delete_failed": "Nie udało się usunąć {name}: {error}",
    "list_empty_body": "Dodaj pierwszą butelkę: zrób zdjęcie etykiety i wybierz miejsce.",
    "list_sort_by": "Sortuj według",
    "list_reverse": "Odwróć kolejność",
    "list_title_one": "{n} butelka",
    "list_title_other": "{n} butelki",
    "list_title_of_one": "{shown} z {n} butelki",
    "list_title_of_other": "{shown} z {n} butelek",
    "stats_empty_title": "Brak statystyk",
    "stats_empty_body": "Dodaj butelki, aby zobaczyć, co i kiedy pić oraz co jest w piwnicy.",
    "stats_free_one": "{n} wolne miejsce",
    "stats_free_other": "{n} wolnego miejsca",
    "stats_producers_one": "Producenci: {n}",
    "stats_producers_other": "Producenci: {n}",
    "stats_oldest": "Najstarszy rocznik: {y}",
    "stats_per_bottle": "≈ {v} za butelkę",
    "stats_open_hint": "Otwiera widok Wszystkie butelki tylko z tymi butelkami.",
    "stats_window_title": "Okno picia",
    "stats_window_sub": "Butelki w oknie picia, rok po roku",
    "stats_window_none": "Żadna butelka nie ma okna picia w najbliższych latach.",
    "stats_window_caption": "Butelki w oknie picia według roku i rodzaju wina",
    "stats_now": "teraz",
    "stats_year_bottles_one": "{year}: {n} butelka",
    "stats_year_bottles_other": "{year}: {n} butelki",
    "stats_now_empty": "Nic pilnego: żadna butelka nie jest w szczycie ani po nim.",
    "stats_now_all_one": "Pokaż w widoku Wszystkie butelki ({n})",
    "stats_now_all_other": "Pokaż w widoku Wszystkie butelki ({n})",
    "stats_bottle_word_one": "butelka",
    "stats_bottle_word_other": "butelki",
    "list_title_few": "{n} butelki",
    "list_title_many": "{n} butelek",
    "list_title_of_few": "{shown} z {n} butelek",
    "list_title_of_many": "{shown} z {n} butelek",
    "stats_free_few": "{n} wolne miejsca",
    "stats_free_many": "{n} wolnych miejsc",
    "stats_producers_few": "Producenci: {n}",
    "stats_producers_many": "Producenci: {n}",
    "stats_year_bottles_few": "{year}: {n} butelki",
    "stats_year_bottles_many": "{year}: {n} butelek",
    "stats_now_all_few": "Pokaż w widoku Wszystkie butelki ({n})",
    "stats_now_all_many": "Pokaż w widoku Wszystkie butelki ({n})",
    "stats_bottle_word_few": "butelki",
    "stats_bottle_word_many": "butelek",
    "ready_to_drink": "Gotowe do picia",
    "find_ready_to_drink_hint": "Gotowe lub w szczycie: dobre do otwarcia",
    "toast_undo_keys": "Naciśnij {keys}, aby cofnąć",
    "stats_recent_title": "Ostatnio wypite",
    "stats_recent_sub": "Oznaczona jako wypita przez pomyłkę? Odłóż butelkę na jej miejsce.",
    "stats_recent_on": "Wypita {date}",
    "stats_put_back": "Odłóż",
    "stats_put_back_label": "Odłóż {name} na jej miejsce",
    "stats_recent_taken": "Jej miejsce jest zajęte",
    "stats_recent_gone": "Jej półka już nie istnieje",
    "err_consumed_missing": "Tej butelki nie ma już w historii. Mogła zostać odłożona lub usunięta w innym miejscu.",
    "consume_undo_noshelf": "Nie udało się odłożyć {name}: jej półka już nie istnieje.",
    "find_words_unfiltered_one": "{n} butelka pasuje do „{q}” bez filtrów.",
    "find_words_unfiltered_few": "{n} butelki pasują do „{q}” bez filtrów.",
    "find_words_unfiltered_many": "{n} butelek pasuje do „{q}” bez filtrów.",
    "find_words_unfiltered_other": "{n} butelki pasuje do „{q}” bez filtrów.",
    "list_sorted_asc": "sortowanie rosnąco",
    "list_sorted_desc": "sortowanie malejąco"
  }
};

let _wcmLang = "en";

function _wcmSetLang(lang) {
  _wcmLang = String(lang || "en");
}

function _T(key, vars) {
  var lang = _wcmLang.toLowerCase();
  var table = WCM_TRANSLATIONS[lang] || WCM_TRANSLATIONS[lang.split(/[-_]/)[0]] || WCM_TRANSLATIONS.en;
  var text = table[key];
  if (text === undefined) text = WCM_TRANSLATIONS.en[key];
  if (text === undefined) return key;
  if (vars) {
    Object.keys(vars).forEach(function (name) {
      text = text.split("{" + name + "}").join(String(vars[name]));
    });
  }
  return text;
}

// A count in words that follow the language's plural rules: "1 shelf",
// "2 shelves", and Polish's 2-4 / 5+ forms. Looks up base_one, base_few,
// base_many or base_other, and falls back to base_other. The rules are made
// once per language (the live filter counts on every keystroke).
const _wcmPluralRules = {};
function _TN(base, n, vars) {
  var cat = "other";
  try {
    var rules = _wcmPluralRules[_wcmLang] || (_wcmPluralRules[_wcmLang] = new Intl.PluralRules(_wcmLang));
    cat = rules.select(Number(n));
  } catch (err) {
    cat = Number(n) === 1 ? "one" : "other";
  }
  var lang = _wcmLang.toLowerCase();
  var table = WCM_TRANSLATIONS[lang] || WCM_TRANSLATIONS[lang.split(/[-_]/)[0]] || WCM_TRANSLATIONS.en;
  var key = base + "_" + cat;
  if (table[key] === undefined && WCM_TRANSLATIONS.en[key] === undefined) key = base + "_other";
  return _T(key, Object.assign({ n: n }, vars || {}));
}

// Label photos are shrunk in the browser before they are uploaded: decoded
// with their EXIF orientation, the long edge capped and re-encoded as JPEG.
// A 12 MP phone photo becomes a few hundred KB, far below Home Assistant's
// websocket message limit, and HEIC becomes JPEG wherever the browser can
// decode it. rotate turns the picture by 90° steps.
function _wcmLoadImage(src) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () { resolve(img); };
    img.onerror = function () { reject(new Error("decode")); };
    img.src = src;
  });
}

function _wcmDownscaleImage(source, maxEdge, quality, rotate) {
  var objectUrl = null;
  function viaImage() {
    if (typeof source === "string") return _wcmLoadImage(source);
    objectUrl = URL.createObjectURL(source);
    return _wcmLoadImage(objectUrl);
  }
  var decoded = typeof source !== "string" && window.createImageBitmap
    ? createImageBitmap(source, { imageOrientation: "from-image" }).catch(viaImage)
    : viaImage();
  return decoded.then(function (img) {
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    if (!w || !h) throw new Error("decode");
    var scale = Math.min(1, maxEdge / Math.max(w, h));
    var dw = Math.round(w * scale);
    var dh = Math.round(h * scale);
    var turn = rotate === 90 || rotate === 270;
    var canvas = document.createElement("canvas");
    canvas.width = turn ? dh : dw;
    canvas.height = turn ? dw : dh;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (rotate) {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.drawImage(img, -dw / 2, -dh / 2, dw, dh);
    } else {
      ctx.drawImage(img, 0, 0, dw, dh);
    }
    if (img.close) img.close();
    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        if (blob) resolve(blob);
        else reject(new Error("encode"));
      }, "image/jpeg", quality);
    });
  }).finally(function () {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  });
}

function _wcmBlobToBase64(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () { resolve(String(reader.result).split(",")[1] || ""); };
    reader.onerror = function () { reject(new Error("read")); };
    reader.readAsDataURL(blob);
  });
}

// The wine types the add sheet offers, "not sure" last, and the frame
// finishes of the cellar editor (the cellar colors that draw as a material,
// see _WCM_MATERIALS; "" is the default graphite frame).
const _WCM_SHEET_TYPES = ["red", "white", "rosé", "sparkling", "orange", "sweet", "other", "unset"];
// The facets a search can be narrowed by (see _filterModel), the status
// presets _setFacet accepts, and how many result chips the strip shows.
const _WCM_FACETS = ["status", "type", "country", "cellar"];
const _WCM_STATUS_PRESETS = { drink_now: ["peak", "past"], ready_to_drink: ["ready", "peak"] };
const _WCM_WHERE_CHIPS = 24;
// All Bottles sorts by these columns (the header buttons, and the select of
// narrow screens), each with its label.
const _WCM_LIST_SORTS = ["wine_name", "producer", "vintage", "location", "aging", "rating", "price", "region_varietal"];
const _WCM_LIST_SORT_LABELS = {
  wine_name: "wine", producer: "producer", vintage: "vintage", location: "location",
  aging: "drinking_window", rating: "rating", price: "price", region_varietal: "region_varietal"
};
// Stats: the drinking-window chart covers this year and the next 10, like
// the integration's own statistics; up to 6 countries and 6 bottles to drink.
const _WCM_STATS_YEARS = 10;
const _WCM_STATS_COUNTRIES = 6;
const _WCM_STATS_DRINK_NOW = 6;
// Recently enjoyed (Stats): how many of the last bottles marked as consumed.
const _WCM_STATS_RECENT = 5;

// A round step for chart ticks: about `target` steps up to max, each 1, 2 or
// 5 times a power of ten (34 bottles: steps of 10 up to 40).
function _wcmNiceStep(max, target) {
  if (!(max > 0)) return 1;
  var raw = max / (target || 4);
  var magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
  var n = raw / magnitude;
  return Math.max(1, (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * magnitude);
}
const _WCM_FINISHES = [
  { value: "", key: "builder_fin_graphite" },
  { value: "#7b2130", key: "builder_fin_bordeaux" },
  { value: "#8c6239", key: "builder_fin_oak" },
  { value: "#556b2f", key: "builder_fin_olive" },
  { value: "#1e3a8a", key: "builder_fin_azure" },
  { value: "#374151", key: "builder_fin_slate" },
  { value: "#fbfbfbff", key: "builder_fin_steel" }
];
// Quick starts for a new cellar: shelves, front slots, back slots.
const _WCM_CELLAR_TEMPLATES = [
  { key: "builder_tpl_fridge", shelves: 8, front: 6, back: 0 },
  { key: "builder_tpl_stagger", shelves: 5, front: 6, back: 5 },
  { key: "builder_tpl_rack", shelves: 4, front: 8, back: 0 }
];
// Most slots a shelf row can have in the cellar editor.
const _WCM_MAX_ROW = 24;


// The wooden slats of a shelf floor, converging toward the back wall (the same
// 3% inset as the floor's clip-path), and the wooden rail of the Compact and
// mini cabinets. Built once, as a data: URI so they work offline.
const _WCM_SLATS = (function () {
  var s = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>";
  var n = 22;
  for (var i = 0; i <= n; i++) {
    var xb = (i * 100) / n;
    var xb2 = xb + 0.55;
    s += "<line x1='" + xb.toFixed(2) + "' y1='10' x2='" + (3 + xb * 0.94).toFixed(2) + "' y2='0' stroke='rgba(0,0,0,.34)' stroke-width='1.2' vector-effect='non-scaling-stroke'/>";
    s += "<line x1='" + xb2.toFixed(2) + "' y1='10' x2='" + (3 + xb2 * 0.94).toFixed(2) + "' y2='0' stroke='rgba(255,226,196,.06)' stroke-width='1' vector-effect='non-scaling-stroke'/>";
  }
  return 'url("data:image/svg+xml,' + encodeURIComponent(s + "</svg>") + '")';
})();
const _WCM_WOOD_RAIL = "linear-gradient(180deg,#e0bc92 0,#c79a6c 1.5px,#b3875c 3px,#946841 45%,#6b4629 100%)";

// Static stylesheet for the card. Built once at module load instead of being
// re-concatenated (~20KB) on every render. Every surface and text color is
// derived from the active Home Assistant theme so the card follows light/dark
// mode and custom themes; only wine types and aging states use fixed colors.
const _WCM_STYLES =
        ":host{--wcm-surface:var(--ha-card-background,var(--card-background-color,#fff));--wcm-bg:var(--primary-background-color,#fafafa);--wcm-text:var(--primary-text-color,#212121);--wcm-muted:var(--secondary-text-color,#727272);--wcm-divider:var(--divider-color,rgba(127,127,127,.2));--wcm-border:var(--ha-card-border-color,var(--wcm-divider));--wcm-accent:var(--primary-color,#03a9f4);--wcm-on-accent:var(--text-primary-color,#fff);--wcm-danger:var(--error-color,#db4437);--wcm-radius:var(--ha-card-border-radius,12px);--wcm-dialog:var(--ha-dialog-surface-background,var(--mdc-theme-surface,var(--wcm-surface)));--wcm-tonal:color-mix(in srgb,var(--wcm-text) 7%,transparent);--wcm-tonal-strong:color-mix(in srgb,var(--wcm-text) 12%,transparent);--wcm-young:#7c6cf2;--wcm-ready:#22a55b;--wcm-peak:#e8961c;--wcm-past:#d44a3a;--wcm-none:color-mix(in srgb,var(--wcm-text) 34%,transparent);--wcm-star:#f5b400;--wcm-font-display:ui-serif,'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif;--wcm-fs-xs:.75rem;--wcm-fs-sm:.8125rem;--wcm-fs-md:.875rem;--wcm-fs-base:1rem;--wcm-fs-lg:1.25rem;--wcm-fs-xl:1.5rem}" +
        "*{box-sizing:border-box}" +
        ":host{display:flex !important;flex-direction:column !important;position:absolute !important;top:var(--header-height, 56px) !important;left:0 !important;right:0 !important;bottom:0 !important;height:calc(100vh - var(--header-height, 56px)) !important;width:100% !important;box-sizing:border-box !important}" +
        "ha-card{display:flex !important;flex-direction:column !important;flex:1 1 100% !important;height:100% !important;min-height:0 !important;border:none !important;box-shadow:none !important;border-radius:0 !important;background:transparent !important}" +
        ".wrap{color:var(--wcm-text);padding:16px;flex:1 1 100%;display:flex;flex-direction:column;gap:14px;overflow:hidden;height:100%}" +
        ".wcm-defs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}" +
        ".wrap.wood{background-image:linear-gradient(rgba(0,0,0,0.20),rgba(0,0,0,0.20)),url('/wine-cellar-manager-frontend/cellar_pattern.jpg');background-repeat:repeat;background-position:top left}" +
        ".main-scroll-content{flex:1 1 auto;overflow-y:auto;min-height:0;padding:2px 2px 16px}" +
        ".empty-state{padding:32px 24px;text-align:center;color:var(--wcm-muted);font-size:1rem}" +

        /* Buttons */
        ".btn,.icon-btn,.seg-btn,select,input,textarea{font:inherit}" +
        ".btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:none;background:var(--wcm-tonal);color:var(--wcm-text);font-size:.9rem;font-weight:500;height:40px;padding:0 16px;border-radius:999px;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background-color .15s ease,filter .15s ease}" +
        ".btn:hover{background:var(--wcm-tonal-strong)}" +
        ".btn:disabled{opacity:.45;cursor:default}" +
        ".btn.primary{background:var(--wcm-accent);color:var(--wcm-on-accent)}" +
        ".btn.primary:hover{filter:brightness(1.08)}" +
        ".btn.danger{background:color-mix(in srgb,var(--wcm-danger) 14%,transparent);color:var(--wcm-danger)}" +
        ".btn.danger:hover{background:color-mix(in srgb,var(--wcm-danger) 22%,transparent)}" +
        ".btn.warning{background:color-mix(in srgb,var(--wcm-peak) 20%,transparent)}" +
        ".btn.warning:hover{background:color-mix(in srgb,var(--wcm-peak) 30%,transparent)}" +
        ".btn.ghost{background:transparent;box-shadow:inset 0 0 0 1px var(--wcm-divider)}" +
        ".btn.ghost:hover{background:var(--wcm-tonal)}" +
        ".btn svg{width:18px;height:18px;flex:0 0 auto;fill:currentColor}" +
        ".small-btn{height:32px;padding:0 12px;font-size:.84rem}" +
        ".icon-btn{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:36px;height:36px;padding:0;border:none;border-radius:50%;background:transparent;color:inherit;font-size:1.5rem;line-height:1;cursor:pointer;transition:background-color .15s ease}" +
        ".icon-btn:hover{background:var(--wcm-tonal)}" +
        ".icon-btn svg{width:20px;height:20px;fill:currentColor}" +
        ".btn:focus-visible,.icon-btn:focus-visible,.seg-btn:focus-visible,.slot:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:2px}" +

        /* Toolbar: row 1 holds the views, the inventory and the actions; row 2 the search, Filters and the
           status chips (the legend of the glyphs, which also filter). Under them, while in use: the filters
           panel and the strip of results. */
        ".toolbar{flex:0 0 auto;display:flex;flex-direction:column;gap:12px;min-width:0;padding:12px 14px;background:var(--wcm-surface);border:1px solid var(--wcm-border);border-radius:calc(var(--wcm-radius) + 2px);box-shadow:var(--ha-card-box-shadow,none);--wcm-accent-ink:color-mix(in srgb,var(--wcm-accent) 62%,var(--wcm-text))}" +
        ".toolbar [hidden]{display:none !important}" +
        /* Row 1 wraps rather than cutting anything: where the views, the inventory and the actions do not
           fit on one line (long languages, tablets), what does not fit goes to a second line, the actions
           kept at its end. */
        ".tb-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-width:0}" +
        ".seg{flex:0 0 auto;display:inline-flex;gap:2px;padding:3px;border-radius:999px;background:var(--wcm-tonal);max-width:100%;overflow-x:auto;scrollbar-width:none}" +
        ".seg::-webkit-scrollbar{display:none}" +
        ".seg-btn{border:none;background:transparent;color:var(--wcm-muted);font-size:var(--wcm-fs-md);font-weight:500;height:34px;padding:0 16px;border-radius:999px;cursor:pointer;white-space:nowrap;transition:background-color .18s ease-out,color .18s ease-out}" +
        ".seg-btn:hover{color:var(--wcm-text)}" +
        ".seg-btn.active{background:var(--wcm-accent);color:var(--wcm-on-accent)}" +
        ".tab-short{display:none}" +
        ".tb-inv{flex:1 0 auto;padding:0 6px;text-align:right;font-size:var(--wcm-fs-sm);color:var(--wcm-muted);white-space:nowrap;font-variant-numeric:tabular-nums}" +
        ".tb-inv strong{color:var(--wcm-text);font-weight:600}" +
        ".tb-inv>span{white-space:nowrap}" +
        ".tb-inv i{display:inline-block;width:3px;height:3px;margin:0 8px;border-radius:50%;background:currentColor;vertical-align:middle;opacity:.7}" +
        ".tb-actions{flex:0 0 auto;display:flex;align-items:center;gap:6px;margin-left:auto}" +
        ".btn.tb-quiet{background:transparent;color:var(--wcm-muted);padding:0 12px}" +
        ".btn.tb-quiet:hover{background:var(--wcm-tonal);color:var(--wcm-text)}" +
        ".btn.tb-outline{background:transparent;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-text) 22%,transparent)}" +
        ".btn.tb-outline:hover{background:var(--wcm-tonal)}" +
        ".tb-actions .btn.primary{padding:0 18px 0 14px;font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.18),0 4px 12px -6px color-mix(in srgb,var(--wcm-accent) 80%,transparent)}" +
        ".toolbar-notice{display:flex;align-items:center;gap:8px;padding:6px 6px 6px 14px;border-radius:12px;background:color-mix(in srgb,var(--wcm-peak) 18%,transparent);color:var(--wcm-text);font-size:.88rem;line-height:1.35}" +
        ".toolbar-notice span{flex:1 1 auto;min-width:0}" +
        /* Row 2: the search (340-470px) and the chips beside it; when the chips do not fit there (long
           languages) they take a row of their own, still one line. Clear all keeps its room while hidden,
           so typing never moves the rows. */
        ".tb-find-row{display:flex;flex-wrap:wrap;align-items:center;gap:10px 12px;min-width:0}" +
        ".tb-find{flex:1 1 300px;min-width:300px;max-width:470px;display:flex;align-items:center;gap:8px}" +
        ".tb-find-row.chips-below .tb-find{max-width:none}" +
        ".tb-search{position:relative;flex:1 1 auto;min-width:0;display:flex;align-items:center;height:42px;border-radius:999px;background:var(--wcm-tonal);cursor:text;transition:background-color .18s ease-out,box-shadow .18s ease-out}" +
        ".tb-search:hover{box-shadow:inset 0 0 0 1px var(--wcm-divider)}" +
        ".tb-search:focus-within{background:var(--wcm-surface);box-shadow:inset 0 0 0 1.5px var(--wcm-accent),0 0 0 4px color-mix(in srgb,var(--wcm-accent) 16%,transparent)}" +
        ".tb-search > svg{position:absolute;left:14px;width:19px;height:19px;color:var(--wcm-muted);pointer-events:none}" +
        ".tb-search input{flex:1 1 auto;min-width:0;width:100%;height:100%;border:0;background:transparent;color:var(--wcm-text);padding:0 6px 0 42px;font-size:.9375rem;outline:none;-webkit-appearance:none;appearance:none}" +
        ".tb-search input::-webkit-search-cancel-button,.tb-search input::-webkit-search-decoration{-webkit-appearance:none;display:none}" +
        ".tb-search input::placeholder{color:var(--wcm-muted);opacity:1}" +
        ".tb-kbd{flex:0 0 auto;margin-right:12px;min-width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;border-radius:6px;font:600 .75rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--wcm-muted);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-text) 20%,transparent),inset 0 -1px 0 color-mix(in srgb,var(--wcm-text) 20%,transparent)}" +
        ".tb-search.has-value .tb-kbd,.tb-search:focus-within .tb-kbd{display:none}" +
        ".tb-x{display:none;flex:0 0 auto;width:32px;height:32px;margin-right:5px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--wcm-muted);cursor:pointer;align-items:center;justify-content:center}" +
        ".tb-x svg{width:18px;height:18px}" +
        ".tb-x:hover{background:var(--wcm-tonal-strong);color:var(--wcm-text)}" +
        ".tb-search.has-value .tb-x{display:inline-flex}" +
        ".tb-filter-btn{position:relative;flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;height:42px;padding:0 14px 0 12px;border:0;border-radius:999px;background:var(--wcm-tonal);color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-md);font-weight:500;cursor:pointer;transition:background-color .18s ease-out,box-shadow .18s ease-out}" +
        ".tb-filter-btn svg{width:18px;height:18px}" +
        ".tb-filter-btn:hover{background:var(--wcm-tonal-strong)}" +
        ".tb-filter-btn[aria-expanded=\"true\"]{background:color-mix(in srgb,var(--wcm-accent) 14%,var(--wcm-surface));box-shadow:inset 0 0 0 1.5px var(--wcm-accent)}" +
        ".tb-badge{min-width:20px;height:20px;padding:0 6px;border-radius:999px;background:color-mix(in srgb,var(--wcm-accent) 72%,#000);color:#fff;font-size:.75rem;font-weight:700;display:inline-flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums}" +
        ".tb-badge:empty{display:none}" +
        /* Chips: one row that scrolls sideways (fading at the edge that has more); Clear all stays outside it,
           always in reach. */
        ".tb-facets{flex:0 0 auto;max-width:100%;min-width:0;display:flex;align-items:center;gap:6px}" +
        "@media (min-width:1101px){.toolbar .tb-facets > .tb-clear[hidden]{display:inline-flex !important;visibility:hidden}}" +
        ".tb-chips{flex:0 1 auto;min-width:0;display:flex;align-items:center;gap:6px;overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;padding:3px;margin:-3px}" +
        ".tb-chips::-webkit-scrollbar{display:none}" +
        ".x-fade.more-r{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 32px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 32px),transparent)}" +
        ".x-fade.more-l{-webkit-mask-image:linear-gradient(90deg,transparent,#000 32px);mask-image:linear-gradient(90deg,transparent,#000 32px)}" +
        ".x-fade.more-l.more-r{-webkit-mask-image:linear-gradient(90deg,transparent,#000 32px,#000 calc(100% - 32px),transparent);mask-image:linear-gradient(90deg,transparent,#000 32px,#000 calc(100% - 32px),transparent)}" +
        ".tb-group{flex:0 0 auto;display:flex;align-items:center;gap:6px}" +
        ".tb-sep{flex:0 0 auto;width:1px;height:20px;margin:0 4px;background:var(--wcm-divider)}" +
        ".fchip{flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 12px 0 6px;border:0;border-radius:999px;background:var(--wcm-tonal);color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-sm);font-weight:500;line-height:1;cursor:pointer;white-space:nowrap;transition:background-color .18s ease-out,box-shadow .18s ease-out,opacity .18s ease-out}" +
        ".fchip:hover{background:var(--wcm-tonal-strong)}" +
        ".fchip[aria-pressed=\"true\"]{background:color-mix(in srgb,var(--wcm-accent) 15%,var(--wcm-surface));box-shadow:inset 0 0 0 1.5px var(--wcm-accent);font-weight:600}" +
        /* Small numbers: a darker grey than --wcm-muted, so they keep 4.5:1 on the tonal chip. */
        ".fchip .n{font-variant-numeric:tabular-nums;color:color-mix(in srgb,var(--wcm-text) 72%,var(--wcm-surface));font-weight:600}" +
        ".fchip[aria-pressed=\"true\"] .n{color:var(--wcm-text)}" +
        ".fchip.is-zero{opacity:.45;cursor:default}" +
        ".fchip.is-zero:hover{background:var(--wcm-tonal)}" +
        ".fchip.plain{padding-left:12px}" +
        ".fchip .bt-glyph{width:20px;height:20px}" +
        ".fchip .bt-glyph svg{width:12px;height:12px}" +
        ".bt-glyph.is-soon{background:linear-gradient(135deg,color-mix(in srgb,var(--wcm-peak) 85%,#000),var(--wcm-past))}" +
        ".bt-glyph.is-drinkable{background:linear-gradient(135deg,color-mix(in srgb,var(--wcm-ready) 70%,#000),var(--wcm-ready))}" +
        ".bt-glyph.is-soon svg,.bt-glyph.is-drinkable svg{width:13px;height:13px}" +
        ".fchip.token{gap:6px;padding:0 4px 0 10px;background:color-mix(in srgb,var(--wcm-accent) 15%,var(--wcm-surface));box-shadow:inset 0 0 0 1.5px var(--wcm-accent);font-weight:600}" +
        ".fchip.token .x{width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;opacity:.75}" +
        ".fchip.token .x svg{width:14px;height:14px}" +
        ".fchip.token:hover .x{background:color-mix(in srgb,var(--wcm-text) 12%,transparent);opacity:1}" +
        ".fp-swatch{width:14px;height:14px;flex:0 0 auto;border-radius:4px;background:var(--type);box-shadow:inset 0 0 0 1px rgba(0,0,0,.18),inset 0 1px 0 rgba(255,255,255,.3)}" +
        ".fp-cdot{width:12px;height:12px;flex:0 0 auto;border-radius:3px;background:var(--cellar,var(--wcm-tonal-strong));box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}" +
        ".tb-clear{flex:0 0 auto;height:32px;padding:0 10px;border:0;border-radius:999px;background:transparent;color:var(--wcm-accent-ink);font:inherit;font-size:var(--wcm-fs-sm);font-weight:600;cursor:pointer;white-space:nowrap}" +
        ".tb-clear:hover{background:color-mix(in srgb,var(--wcm-accent) 12%,transparent)}" +
        ".fchip:focus-visible,.tb-filter-btn:focus-visible,.tb-x:focus-visible,.tb-clear:focus-visible,.wchip:focus-visible,.wmore:focus-visible,.find-suggest:focus-visible,.toolbar .btn:focus-visible,.toolbar .seg-btn:focus-visible{outline:2px solid var(--wcm-accent-ink);outline-offset:2px}" +
        /* Filters panel: under the toolbar on wider screens; a bottom sheet on phones (see the small-screen
           rules). */
        ".tb-panel{display:grid;gap:10px;padding-top:12px;border-top:1px solid var(--wcm-divider)}" +
        ".fp-head,.fp-foot,.fp-group.fp-status,.fp-scrim{display:none}" +
        ".fp-body{display:grid;gap:10px}" +
        ".fp-group{display:grid;grid-template-columns:120px minmax(0,1fr);gap:8px 12px;align-items:start}" +
        ".fp-label{padding-top:9px;font-size:var(--wcm-fs-xs);font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--wcm-muted)}" +
        ".fp-chips{display:flex;flex-wrap:wrap;gap:6px;min-width:0}" +
        /* Result strip: how many bottles match, where, and each one as a chip that takes you to it. */
        ".tb-where{display:flex;align-items:center;gap:14px;min-width:0;padding-top:12px;border-top:1px solid var(--wcm-divider)}" +
        ".wh-head{flex:0 0 auto;display:grid;gap:2px;padding-left:2px;line-height:1.15}" +
        ".wh-count{font-size:var(--wcm-fs-sm);font-weight:500;color:var(--wcm-text);white-space:nowrap}" +
        ".wh-n{margin-right:5px;font-family:var(--wcm-font-display);font-size:var(--wcm-fs-xl);font-weight:600;line-height:1;vertical-align:-3px;font-variant-numeric:tabular-nums lining-nums}" +
        ".wh-sub{font-size:var(--wcm-fs-xs);color:var(--wcm-muted);white-space:nowrap}" +
        ".wh-scroll{position:relative;flex:1 1 auto;min-width:0;display:flex;gap:8px;overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;padding:3px 28px 3px 3px;margin:-3px 0;scroll-padding:0 28px}" +
        ".wh-scroll::-webkit-scrollbar{display:none}" +
        ".wchip{position:relative;flex:0 0 auto;display:flex;align-items:center;gap:10px;height:50px;max-width:320px;padding:0 14px 0 10px;border-radius:12px;border:1px solid var(--wcm-divider);background:var(--wcm-surface);color:var(--wcm-text);cursor:pointer;text-align:left;font:inherit;box-shadow:0 1px 2px rgba(0,0,0,.06);transition:border-color .18s ease-out,box-shadow .18s ease-out}" +
        ".wchip:hover{border-color:color-mix(in srgb,var(--wcm-accent) 55%,var(--wcm-divider));box-shadow:0 6px 16px -8px rgba(0,0,0,.35)}" +
        ".wchip.is-current{border-color:var(--wcm-accent);box-shadow:0 0 0 1px var(--wcm-accent),0 6px 16px -8px color-mix(in srgb,var(--wcm-accent) 70%,transparent)}" +
        ".wchip .bt-bottle{flex:0 0 auto;width:auto;height:36px;filter:drop-shadow(0 1px 1px rgba(0,0,0,.25))}" +
        ".wchip-t{display:grid;gap:3px;min-width:0}" +
        ".wchip-name{font-family:var(--wcm-font-display);font-size:.9375rem;font-weight:600;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".wchip-vin{font-weight:500;color:var(--wcm-muted);font-variant-numeric:tabular-nums lining-nums}" +
        ".wchip-crumb{font-size:var(--wcm-fs-xs);line-height:1.1;color:var(--wcm-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".wchip-crumb b{font-weight:600;color:var(--wcm-text)}" +
        ".cs-short{display:none}" +
        ".cs-part::before{content:'\\203A\\200B';content:'\\203A\\200B' / '';margin:0 .3em;opacity:.6}" +
        ".wchip .bt-glyph{width:18px;height:18px;margin-left:2px}" +
        ".wchip .bt-glyph svg{width:11px;height:11px}" +
        ".wmore{flex:0 0 auto;align-self:center;height:34px;padding:0 14px;border:0;border-radius:999px;background:var(--wcm-tonal);color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-sm);font-weight:600;cursor:pointer;white-space:nowrap}" +
        ".wmore:hover{background:var(--wcm-tonal-strong)}" +
        ".wmore.is-current{box-shadow:inset 0 0 0 1.5px var(--wcm-accent)}" +
        ".wh-hint{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;font-size:var(--wcm-fs-xs);color:var(--wcm-muted);white-space:nowrap}" +
        ".wh-hint kbd{min-width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;border-radius:6px;font:600 .75rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-text) 20%,transparent),inset 0 -1px 0 color-mix(in srgb,var(--wcm-text) 20%,transparent)}" +
        "@media (hover:none){.tb-kbd,.wh-hint{display:none}}" +
        /* No results: what was looked for, the closest spellings in the cellar, and a way back. */
        ".find-empty{flex:1 1 auto;display:flex;align-items:center;gap:14px;min-width:0;flex-wrap:wrap}" +
        ".find-empty-ico{width:42px;height:42px;flex:0 0 auto;border-radius:50%;display:grid;place-items:center;background:var(--wcm-tonal);color:var(--wcm-muted)}" +
        ".find-empty-ico svg{width:22px;height:22px}" +
        ".find-empty-t{display:grid;gap:3px;min-width:0;flex:1 1 240px}" +
        ".find-empty-title{font-weight:600;font-size:.9375rem;color:var(--wcm-text);overflow-wrap:anywhere}" +
        ".find-empty-sub{font-size:var(--wcm-fs-sm);color:var(--wcm-muted);line-height:1.4}" +
        ".find-suggest{border:0;background:none;padding:0 1px;color:var(--wcm-accent-ink);font:inherit;font-weight:600;cursor:pointer;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;border-radius:4px}" +
        ".find-empty-actions{display:flex;flex-wrap:wrap;gap:8px}" +
        ".find-empty-actions .btn{margin-top:0}" +
        ".find-empty-actions .btn svg{width:16px;height:16px}" +
        ".empty-state .find-empty{flex-direction:column;justify-content:center;text-align:center;gap:12px;max-width:520px;margin:0 auto}" +
        ".empty-state .find-empty-t{flex:0 0 auto;justify-items:center}" +
        ".empty-state .find-empty-actions{justify-content:center}" +
        ".paste-row{display:flex}" +
        ".paste-row .paste-banner{margin-left:0}" +
        ".paste-banner{margin-left:auto;display:inline-flex;align-items:center;gap:6px;padding:2px 2px 2px 12px;border-radius:999px;background:color-mix(in srgb,var(--wcm-accent) 16%,transparent);color:var(--wcm-text)}" +
        ".paste-banner .icon-btn{width:28px;height:28px}" +
        ".paste-banner .icon-btn svg{width:16px;height:16px}" +
        /* Tablets: the search and the chips each take a row of their own. */
        "@media (max-width:1100px){.tb-find-row{flex-direction:column;align-items:stretch}.tb-find{flex:0 0 auto;max-width:none;min-width:0}.tb-facets{flex:0 0 auto}}" +
        "@media (max-width:900px){.tab-long{display:none}.tab-short{display:inline}.tb-actions .btn.tb-quiet,.tb-actions .btn.tb-outline{width:40px;padding:0}.tb-actions .btn.tb-quiet .tb-lbl,.tb-actions .btn.tb-outline .tb-lbl{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}}" +
        /* Where the page scrolls (phones, tablets), the toolbar sticks under the dashboard header with only
           its search row showing; the rows above it are clipped while it is stuck (see _layoutToolbar). The
           chips then sit above the search. Not on short screens (a phone held sideways): there the pinned
           rows would take half the screen, so the toolbar scrolls away with the page. */
        "@media (max-width:600px),(max-width:780px) and (min-height:501px){.toolbar{position:sticky;top:calc(var(--header-height,56px) + env(safe-area-inset-top,0px) - var(--tb-stick,0px));z-index:6}}" +
        "@media (max-width:780px){.toolbar{padding:10px;gap:10px}.toolbar.is-stuck{box-shadow:0 14px 28px -18px rgba(0,0,0,.55),0 1px 0 var(--wcm-divider)}.toolbar.is-stuck:not(.sheet-open){clip-path:inset(var(--tb-clip,0px) -40px -60px -40px)}.tb-find-row{flex-direction:column-reverse;gap:10px}.tb-kbd{display:none}.tb-where{padding-top:10px;gap:10px}.wh-n{font-size:var(--wcm-fs-lg)}.wh-sub{display:none}.wchip{height:46px;max-width:232px;padding:0 10px 0 9px;gap:8px}.wchip:only-child{flex:1 1 auto;min-width:0;max-width:none}.cs-full{display:none}.cs-short{display:inline}.wchip .bt-glyph,.wh-hint{display:none}.find-empty{gap:10px}}" +
        /* Phones: views on their own row, then the inventory and actions, the chips, and the search with
           Filters. The filters open as a bottom sheet. */
        "@media (max-width:600px){.toolbar{padding:8px 10px;gap:8px}.tb-find-row{gap:8px}.tb-row{flex-wrap:wrap;row-gap:8px}.tb-row .seg{flex:1 1 100%;min-width:0}.tb-row .seg-btn{flex:1 1 auto;min-width:0;height:32px;padding:0 6px;font-size:var(--wcm-fs-sm);overflow:hidden;text-overflow:ellipsis}.tb-inv{flex:1 1 0;min-width:0;text-align:left;padding:0 2px;white-space:normal;line-height:1.25;font-size:var(--wcm-fs-xs)}.tb-inv i{margin:0 5px}.tb-actions .btn{height:36px}.tb-actions .btn.tb-quiet,.tb-actions .btn.tb-outline{width:36px}.tb-actions .btn.primary{padding:0 14px 0 10px}.tb-find{gap:6px}.tb-search{height:40px}.tb-filter-btn{width:40px;height:40px;padding:0;justify-content:center}.tb-filter-btn .tb-lbl{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.tb-filter-btn .tb-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;box-shadow:0 0 0 2px var(--wcm-surface)}.fchip{gap:5px;padding:0 10px 0 5px}.fchip .bt-glyph{width:18px;height:18px}.tb-sep{margin:0 2px}.tb-clear{padding:0 6px}}" +
        "@media (max-width:600px){.fp-scrim{display:block;position:fixed;inset:0;z-index:20;background:rgba(0,0,0,.45)}.tb-panel{position:fixed;left:0;right:0;bottom:0;z-index:21;display:flex;flex-direction:column;gap:0;max-height:82vh;max-height:82dvh;padding:0;border:0;border-radius:20px 20px 0 0;background:var(--wcm-dialog);color:var(--wcm-text);box-shadow:0 -18px 48px rgba(0,0,0,.4)}.fp-head{display:flex;align-items:center;gap:8px;position:relative;flex:0 0 auto;padding:22px 16px 12px;border-bottom:1px solid var(--wcm-divider)}.fp-grip{position:absolute;top:8px;left:50%;width:40px;height:4px;margin-left:-20px;border-radius:2px;background:color-mix(in srgb,var(--wcm-text) 25%,transparent)}.fp-title{margin:0 auto 0 0;font-size:var(--wcm-fs-lg);font-weight:600;outline:none}.fp-body{flex:1 1 auto;min-height:0;overflow:auto;overscroll-behavior:contain;gap:16px;padding:14px 16px}.fp-group.fp-status{display:grid}.fp-group{grid-template-columns:minmax(0,1fr);gap:8px}.fp-label{padding-top:0}.fp-body .fchip{height:36px}.fp-foot{display:flex;flex:0 0 auto;padding:10px 16px calc(12px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--wcm-divider)}.fp-foot .btn{flex:1 1 auto;height:44px}}" +
        "@media (prefers-reduced-motion:no-preference) and (max-width:600px){.tb-panel{animation:wcm-sheet-up .22s ease-out}.fp-scrim{animation:wcm-fade .2s ease-out}}" +
        "@keyframes wcm-sheet-up{from{transform:translateY(24px);opacity:.4}to{transform:none;opacity:1}}" +
        "@keyframes wcm-fade{from{opacity:0}}" +
        "@media (prefers-reduced-motion:reduce){.toolbar *{transition:none !important}}" +
        "select option{background:var(--wcm-dialog);color:var(--wcm-text);font-weight:normal}" +
        ".empty-state .btn{margin-top:14px}" +

        /* Cellars: each cellar is drawn as a lit wine cabinet seen at eye level. Its frame is a material
           chosen from the cellar color; inside, every shelf is a compartment with an LED strip, a receding
           wooden floor and a wooden lip, and the back row stands behind the front row. Inside a shelf the
           stacking order lives only on .slot (empty 0, back row 1, front row 2, lip 3, lifted back bottle 4,
           focused front bottle 5, lip plate and row tags 8); every decoration is a pointer-events:none
           pseudo-element. */
        ".cellars-grid{--slot-w:7.75rem;--slot-h:11.75rem;--slot-gap:10px;--tag-w:16px;display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start;justify-content:center}" +
        ".cellars-grid.compact{--slot-w:28px;--slot-h:28px;--slot-gap:10px;--tag-w:0px;gap:16px}" +
        ".cellar{min-width:220px;max-width:100%;display:flex;flex-direction:column;gap:12px;padding:14px;background:var(--wcm-surface);border:1px solid var(--wcm-border);border-radius:var(--wcm-radius);box-shadow:var(--ha-card-box-shadow,none)}" +
        ".cellar-head{display:flex;align-items:center;gap:10px;min-width:0;padding-left:2px}" +
        ".cellar-title{flex:1 1 auto;min-width:0}" +
        ".cellar-title h3{margin:0;font-size:1.1rem;font-weight:600;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".cellar-sub{display:flex;align-items:center;gap:8px;margin-top:5px;font-size:.8rem;color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".meter{width:64px;height:6px;border-radius:3px;background:var(--wcm-tonal-strong);overflow:hidden;flex:0 0 auto}" +
        ".meter span{display:block;height:100%;border-radius:3px;background:var(--wcm-accent)}" +
        /* The lit interior (default) redefines the text and surface tokens inside the cabinet, so bottle cards
           read on the dark back wall in both HA themes; the card option interior: theme keeps the theme's own
           colors. */
        ".cabinet{--cab-wall-top:#1c1512;--cab-wall-bottom:#0f0b09;--cab-led:rgba(255,214,170,.16);--cab-led-line:rgba(255,224,188,.62);--cab-floor-near:#6b4a31;--cab-floor-far:#3a281b;--cab-ring-gap:#130e0b;--cab-fade:rgba(12,8,6,.94);--cab-inner:rgba(0,0,0,.72);--floor-vig:.5;--floor-dim-far:.38;--floor-dim-near:.14;position:relative;isolation:isolate;max-width:100%;padding:10px;border-radius:15px;background:linear-gradient(180deg,rgba(255,255,255,.24),rgba(255,255,255,0) 12%,rgba(0,0,0,0) 84%,rgba(0,0,0,.32)),linear-gradient(90deg,rgba(0,0,0,.18),rgba(255,255,255,.07) 9%,rgba(255,255,255,0) 40%,rgba(0,0,0,0) 80%,rgba(0,0,0,.16)),var(--mat,linear-gradient(#444,#222));box-shadow:0 0 0 1px var(--mat-edge,rgba(0,0,0,.5)),inset 0 1px 0 rgba(255,255,255,.32),inset 0 -1px 0 rgba(0,0,0,.35),0 24px 40px -22px rgba(0,0,0,.65),0 6px 14px -8px rgba(0,0,0,.4)}" +
        ".cabinet.lit .interior{--wcm-text:#f2ebe4;--wcm-muted:#b9aca2;--wcm-surface:#241c18;--wcm-divider:rgba(255,240,225,.12);--wcm-tonal:rgba(255,240,225,.07);--wcm-tonal-strong:rgba(255,240,225,.13);--wcm-none:#8f837a;color:var(--wcm-text)}" +
        ".cabinet.themed{--cab-wall-top:color-mix(in srgb,var(--wcm-bg) 95%,#000);--cab-wall-bottom:color-mix(in srgb,var(--wcm-bg) 86%,#000);--cab-led:rgba(255,214,170,.14);--cab-led-line:rgba(255,214,170,.5);--cab-floor-near:color-mix(in srgb,#9a7250 55%,var(--wcm-bg));--cab-floor-far:color-mix(in srgb,#6b4a31 45%,var(--wcm-bg));--cab-ring-gap:var(--wcm-bg);--cab-fade:color-mix(in srgb,var(--wcm-bg) 92%,transparent);--cab-inner:rgba(0,0,0,.28);--floor-vig:.16;--floor-dim-far:.06;--floor-dim-near:0}" +
        /* Frame materials (--mat, --mat-edge): the cabinets' frames, and the finish swatches and cellar chips
           of the cellar editor and the add sheet. */
        ".mat-graphite{--mat:linear-gradient(160deg,#4d4742,#2f2a26 45%,#1b1816);--mat-edge:#0c0a09}" +
        ".mat-bordeaux{--mat:linear-gradient(115deg,rgba(255,255,255,0) 30%,rgba(255,235,240,.14) 38%,rgba(255,255,255,0) 46%),linear-gradient(160deg,#a8374c,#7b2130 42%,#511320);--mat-edge:#32070f}" +
        ".mat-oak{--mat:repeating-linear-gradient(91deg,rgba(60,33,12,.16) 0 2px,rgba(0,0,0,0) 2px 9px,rgba(255,226,190,.08) 9px 10px,rgba(0,0,0,0) 10px 17px),repeating-linear-gradient(1deg,rgba(60,33,12,.12) 0 1px,rgba(0,0,0,0) 1px 6px),linear-gradient(160deg,#ad7d50,#8c6239 45%,#634225);--mat-edge:#3a2512}" +
        ".mat-olive{--mat:linear-gradient(115deg,rgba(255,255,255,0) 30%,rgba(245,255,225,.10) 38%,rgba(255,255,255,0) 46%),linear-gradient(160deg,#748d49,#556b2f 45%,#38471d);--mat-edge:#212b11}" +
        ".mat-azure{--mat:linear-gradient(115deg,rgba(255,255,255,0) 30%,rgba(225,235,255,.14) 38%,rgba(255,255,255,0) 46%),linear-gradient(160deg,#3a60c2,#1e3a8a 45%,#132660);--mat-edge:#0a1536}" +
        ".mat-slate{--mat:radial-gradient(rgba(255,255,255,.05) 1px,rgba(0,0,0,0) 1.5px) 0 0/5px 5px,linear-gradient(160deg,#667285,#434d5e 42%,#2a313d);--mat-edge:#151a22}" +
        ".mat-steel{--mat:repeating-linear-gradient(0deg,rgba(255,255,255,.20) 0 1px,rgba(0,0,0,.04) 1px 2px,rgba(0,0,0,0) 2px 3px),linear-gradient(180deg,color-mix(in srgb,#f4f3ef 72%,var(--wcm-surface)),color-mix(in srgb,#d7d5cf 72%,var(--wcm-surface)) 50%,color-mix(in srgb,#b9b6af 72%,var(--wcm-surface)));--mat-edge:color-mix(in srgb,#77746e 75%,var(--wcm-surface))}" +
        ".mat-custom{--mat:linear-gradient(160deg,color-mix(in srgb,var(--cellar) 76%,#fff),var(--cellar) 45%,color-mix(in srgb,var(--cellar) 68%,#000));--mat-edge:color-mix(in srgb,var(--cellar) 48%,#000)}" +
        ".interior{position:relative;border-radius:8px;background:linear-gradient(var(--cab-wall-top),var(--cab-wall-bottom));overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scrollbar-width:thin;scrollbar-color:rgba(255,236,214,.28) transparent}" +
        ".cabinet.themed .interior{scrollbar-color:auto}" +
        /* A cabinet that fits never scrolls sideways (the staggered rows' quarter-pitch nudge would otherwise
           leave a few px of scroll). */
        ".cabinet[data-cellar-id]:not(.overflows) > .interior{overflow-x:hidden}" +
        /* The inner gasket shadow is drawn above the shelves and never takes a click. */
        ".cabinet::after{content:'';position:absolute;inset:10px;border-radius:8px;pointer-events:none;z-index:7;box-shadow:inset 0 0 0 1px var(--cab-inner),inset 0 12px 14px -10px var(--cab-inner),inset 16px 0 18px -14px var(--cab-inner),inset -16px 0 18px -14px var(--cab-inner)}" +
        ".cab-fade{position:absolute;top:10px;bottom:10px;width:44px;pointer-events:none;z-index:6;opacity:0;transition:opacity .2s ease-out}" +
        ".cab-fade-l{left:10px;border-radius:8px 0 0 8px;background:linear-gradient(90deg,var(--cab-fade),rgba(0,0,0,0))}" +
        ".cab-fade-r{right:10px;border-radius:0 8px 8px 0;background:linear-gradient(270deg,var(--cab-fade),rgba(0,0,0,0))}" +
        ".cabinet.can-l .cab-fade-l,.cabinet.can-r .cab-fade-r{opacity:1}" +
        ".shelves{display:grid;min-width:max-content}" +
        ".shelf{--pitch:calc(var(--slot-w) + var(--slot-gap));position:relative;display:grid}" +
        ".shelf-head{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}" +
        ".shelf-name{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:260px}" +
        ".shelf-count{white-space:nowrap;font-variant-numeric:tabular-nums}" +
        ".compact .shelf-count{display:none}" +
        ".sh-l,.sh-r{position:sticky;z-index:8;display:inline-flex;align-items:center;gap:6px;min-width:0}" +
        ".sh-l{left:12px}" +
        ".sh-r{right:12px}" +
        /* "More this way" chips on a cabinet wider than the screen: LED amber so they read as scroll cues. */
        ".hs-chip{display:inline-flex;align-items:center;gap:3px;height:20px;padding:0 7px;border:none;border-radius:999px;background:rgba(255,196,128,.16);color:#ffd9ae;font:inherit;font-size:.6875rem;font-weight:700;font-variant-numeric:tabular-nums;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(255,206,150,.40)}" +
        ".hs-chip::before,.hs-chip::after{content:'';width:5px;height:5px;border:solid currentColor;border-width:0 1.8px 1.8px 0;flex:0 0 auto}" +
        ".hs-chip[data-hs=\"-1\"]::before{transform:rotate(135deg);margin-left:2px}" +
        ".hs-chip[data-hs=\"-1\"]::after{display:none}" +
        ".hs-chip[data-hs=\"1\"]::after{transform:rotate(-45deg);margin-right:2px}" +
        ".hs-chip[data-hs=\"1\"]::before{display:none}" +
        ".hs-chip[hidden]{display:none}" +
        ".hs-chip:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:1px}" +
        ".cabinet.themed .hs-chip{background:color-mix(in srgb,var(--wcm-accent) 14%,transparent);color:var(--wcm-text);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-accent) 45%,transparent)}" +
        ".lane{display:grid;grid-template-columns:var(--tag-w) 1fr var(--tag-w);align-items:center}" +
        ".lane-tag{writing-mode:vertical-rl;transform:rotate(180deg);justify-self:center;font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--wcm-muted);white-space:nowrap;user-select:none}" +
        ".lane-row{grid-column:2;display:flex;justify-content:center;gap:var(--slot-gap)}" +
        /* Front/back rows are centered as a pair. With the same parity their slots would line up, so each row
           is nudged a quarter pitch in opposite directions (position:relative, never a transform) and the back
           row shows in the gaps of the front row. A shelf with layout_mode "inline" puts each back bottle
           straight behind its front one. */
        ".shelf.staggered .lane-row{padding:0 calc(var(--pitch) / 4)}" +
        ".shelf.staggered .lane-back .lane-row{position:relative;left:calc(var(--pitch) / 4)}" +
        ".shelf.staggered .lane-front .lane-row,.shelf.staggered .lip-row{position:relative;left:calc(var(--pitch) / -4)}" +
        ".shelf.staggered .lip-row{padding:0 calc(var(--pitch) / 4)}" +
        ".shelf.inline :is(.lane-row,.lip-row){justify-content:flex-start;justify-self:center;width:calc(var(--nmax) * var(--pitch) - var(--slot-gap))}" +
        /* Cellars view: a shelf compartment. At rest the back row stands behind the front row (smaller, in
           shade, partly covered); pulled out (the lip, its plate, or a back-row search hit) the rows separate
           over a deeper floor.
           Shelves out of view skip layout and paint (content-visibility). Their stand-in height is the one
           the shelf last had (--ish-c at rest, --ish-o pulled out; set by _rememberShelfHeights), else the
           height the rows below add up to (head 20px + rows + lip), so a re-render or a jump to a bottle
           never moves what is on screen. */
        ".cellars-grid:not(.compact) .cabinet .shelf{--bs:.86;--band:8.75rem;--ov:calc((var(--slot-h) - var(--band)) * var(--bs));--row-gap:0px;--lip-h:26px;--floor-h:calc(var(--slot-h) * .34);--rw:calc(var(--nmax) * var(--pitch) - var(--slot-gap));padding:9px 10px 0;background:radial-gradient(46% 2px at 50% 5px,var(--cab-led-line),rgba(0,0,0,0)),linear-gradient(180deg,rgba(0,0,0,.62) 0,rgba(0,0,0,.18) 5px,rgba(0,0,0,0) 10px),radial-gradient(62% 120px at 50% 0,var(--cab-led),rgba(0,0,0,0)),radial-gradient(34% 44px at 50% 0,var(--cab-led),rgba(0,0,0,0)),linear-gradient(90deg,rgba(0,0,0,.45),rgba(0,0,0,0) 48px,rgba(0,0,0,0) calc(100% - 48px),rgba(0,0,0,.45)),linear-gradient(var(--cab-wall-top),var(--cab-wall-bottom));content-visibility:auto;contain-intrinsic-size:auto calc(var(--rw) + 20px + 2 * var(--tag-w)) auto var(--ish-c,calc(var(--slot-h) + var(--lip-h) + 18px))}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.staggered{--rw:calc(var(--nmax) * var(--pitch) - var(--slot-gap) + var(--pitch) / 2)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row{--floor-h:calc(var(--slot-h) - var(--ov));contain-intrinsic-size:auto calc(var(--rw) + 20px + 2 * var(--tag-w)) auto var(--ish-c,calc(var(--slot-h) * (1 + var(--bs)) - var(--ov) + 44px))}" +
        /* An empty front row is only as tall as its footprints (or, on a two-row shelf, its Front tag). */
        ".cellars-grid:not(.compact) .cabinet .shelf.one-row.front-empty{contain-intrinsic-size:auto calc(var(--rw) + 20px + 2 * var(--tag-w)) auto var(--ish-c,calc(var(--slot-h) * .3 + 50px))}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row.front-empty{contain-intrinsic-size:auto calc(var(--rw) + 20px + 2 * var(--tag-w)) auto var(--ish-c,calc(var(--slot-h) * var(--bs) + 114px))}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row:is(.open,.auto-open){--bs:.95;--row-gap:30px;--floor-h:calc(var(--slot-h) + var(--row-gap));contain-intrinsic-size:auto calc(var(--rw) + 20px + 2 * var(--tag-w)) auto var(--ish-o,calc(var(--slot-h) * (1 + var(--bs)) + var(--row-gap) + 44px))}" +
        ".cellars-grid:not(.compact) .cabinet .shelf::before{content:'';position:absolute;left:0;right:0;bottom:calc(var(--lip-h) - 9px);height:var(--floor-h);z-index:0;pointer-events:none;clip-path:polygon(3% 0,97% 0,100% 100%,0 100%);transition:height .22s ease-out;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,0) 18px),linear-gradient(90deg,rgba(0,0,0,var(--floor-vig)),rgba(0,0,0,0) 16%,rgba(0,0,0,0) 84%,rgba(0,0,0,var(--floor-vig))),radial-gradient(52% 110% at 50% 100%,rgba(255,206,150,.10),rgba(0,0,0,0) 70%)," + _WCM_SLATS + " 0 0/100% 100% no-repeat,linear-gradient(rgba(0,0,0,var(--floor-dim-far)),rgba(0,0,0,var(--floor-dim-near))),linear-gradient(var(--cab-floor-far),var(--cab-floor-near))}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row:is(.open,.auto-open)::before{background:linear-gradient(rgba(0,0,0,.66),rgba(0,0,0,0) 26px),linear-gradient(90deg,rgba(0,0,0,var(--floor-vig)),rgba(0,0,0,0) 16%,rgba(0,0,0,0) 84%,rgba(0,0,0,var(--floor-vig))),radial-gradient(60% 80% at 50% 100%,rgba(255,206,150,.14),rgba(0,0,0,0) 70%)," + _WCM_SLATS + " 0 0/100% 100% no-repeat,linear-gradient(rgba(0,0,0,var(--floor-dim-far)),rgba(0,0,0,var(--floor-dim-near))),linear-gradient(var(--cab-floor-far),var(--cab-floor-near))}" +
        ".cellars-grid:not(.compact) .cabinet .shelf-head{position:relative;z-index:1;min-height:18px;padding:0 calc(var(--tag-w) + 6px);font-size:.75rem;color:var(--wcm-muted)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf-name{color:var(--wcm-text);font-size:.8125rem;letter-spacing:.01em}" +
        ".cellars-grid:not(.compact) .cabinet .shelf-count{display:inline-flex;align-items:center;gap:3px;height:20px;padding:0 8px;border-radius:999px;background:rgba(255,240,225,.07);box-shadow:inset 0 0 0 1px rgba(255,240,225,.12);font-size:.75rem;line-height:1;color:var(--wcm-muted)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf-count b{font-weight:700;color:var(--wcm-text)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf-count.is-full{background:color-mix(in srgb,var(--wcm-ready) 16%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-ready) 45%,transparent)}" +
        ".cabinet.themed .shelf-count{background:color-mix(in srgb,var(--wcm-text) 6%,transparent);box-shadow:inset 0 0 0 1px var(--wcm-divider)}" +
        /* Theme colors inside the cabinets: the small secondary lines sit in the back row's shade and the
           front row's shadow, so they take more of the text color than the theme's muted gray. */
        ".cellars-grid:not(.compact) .cabinet.themed :is(.bt-origin,.bt-producer,.shelf-count,.slot-pos){color:color-mix(in srgb,var(--wcm-text) 60%,var(--wcm-muted))}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row .lane-back{margin-top:calc(var(--slot-h) * (var(--bs) - 1) + 4px);transition:margin-top .22s ease-out}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row .lane-front{margin-top:calc(var(--ov) * -1);transition:margin-top .22s ease-out}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row:is(.open,.auto-open) .lane-front{margin-top:var(--row-gap)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.one-row .lane-front{margin-top:4px}" +
        /* BACK / FRONT tags stay pinned while a phone scrolls the shelf sideways. */
        ".cellars-grid:not(.compact) .cabinet .lane-tag{position:sticky;left:0;z-index:8;pointer-events:none;padding:7px 2px;border-radius:6px;background:rgba(10,7,5,.78);color:#e3d8ce;font-size:.625rem;letter-spacing:.14em;box-shadow:0 0 0 1px rgba(255,236,214,.12)}" +
        ".cellars-grid:not(.compact) .cabinet .lane-front .lane-tag{align-self:start;margin-top:calc(var(--ov) + 14px);transition:margin-top .22s ease-out}" +
        ".cellars-grid:not(.compact) .cabinet .shelf:is(.open,.auto-open) .lane-front .lane-tag{margin-top:24px}" +
        ".cellars-grid:not(.compact) .cabinet .slot{transition:transform .22s ease-out,box-shadow .15s ease-out,opacity .2s ease-out,filter .2s ease-out,border-color .15s ease-out,background-color .15s ease-out}" +
        ".cellars-grid:not(.compact) .cabinet .lane-back .slot{z-index:1;transform:scale(var(--bs));transform-origin:50% 100%}" +
        ".cellars-grid:not(.compact) .cabinet .lane-front .slot{z-index:2}" +
        /* The lip overlaps a front card's bottom 6px: keep the stars clear of it. */
        ".cellars-grid:not(.compact) .cabinet .lane-front .slot.filled{padding-bottom:11px}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled .bt-name{flex-shrink:0}" +
        ".cellars-grid:not(.compact) .cabinet .lane-front .slot.filled .bt-stars{margin-top:2px}" +
        /* Empty positions sit under every filled bottle, so they can never take its clicks. */
        ".cellars-grid:not(.compact) .cabinet .slot.empty{z-index:0}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled{border-color:color-mix(in srgb,var(--type) 38%,rgba(255,240,225,.10))}" +
        ".cellars-grid:not(.compact) .cabinet .lane-front .slot.filled{--depth-sh:0 -12px 16px -8px rgba(0,0,0,.62),0 2px 3px rgba(0,0,0,.45);box-shadow:var(--depth-sh)}" +
        ".cellars-grid:not(.compact) .cabinet .lane-back .slot.filled{--depth-sh:0 10px 12px -8px rgba(0,0,0,.85);box-shadow:var(--depth-sh)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.one-row .lane-front .slot.filled,.cellars-grid:not(.compact) .cabinet .shelf:is(.open,.auto-open) .slot.filled{--depth-sh:0 2px 3px rgba(0,0,0,.45),0 14px 20px -12px rgba(0,0,0,.7)}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled::after{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(180deg,rgba(255,236,214,.05),rgba(0,0,0,0) 28%,rgba(0,0,0,.14));transition:opacity .2s ease-out}" +
        ".cellars-grid:not(.compact) .cabinet .lane-back .slot.filled::after{background:linear-gradient(180deg,rgba(10,6,4,.20),rgba(10,6,4,.34) 70%)}" +
        /* At rest a back bottle shows its label, status, a two-line name and the vintage, all inside the band
           above the front row; producer and stars wait until it is lifted or pulled out, so no text is ever
           half covered. */
        ".cellars-grid:not(.compact) .cabinet .shelf:not(.open):not(.auto-open) .lane-back .slot.filled:not(:focus-visible):not(.match){--bt-stage-h:calc(var(--slot-h) * .38)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf:not(.open):not(.auto-open) .lane-back .slot.filled:not(:focus-visible):not(.match) :is(.bt-producer,.bt-stars){display:none}" +
        ".cellars-grid:not(.compact) .cabinet .shelf:not(.open):not(.auto-open) .lane-back .slot.filled:not(:focus-visible):not(.match) .bt-meta{margin-top:2px}" +
        /* Lift: keyboard focus and a search match bring a back bottle forward over the front row. A pointer
           never does (it always crosses the back row first on its way down): hovering or dragging over a back
           bottle only lights it and nudges it up inside its own visible band. */
        ".cellars-grid:not(.compact) .cabinet .lane-back .slot.filled:focus-visible{z-index:4;transform:scale(1)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf:not(.open):not(.auto-open) .lane-back .slot.filled.match{z-index:4;transform:scale(.98)}" +
        "@media (hover:hover){.cellars-grid:not(.compact) .cabinet .shelf:not(.open):not(.auto-open) .lane-back .slot.filled:not(.match):not(:focus-visible):hover{transform:translateY(-3px) scale(var(--bs))}}" +
        ".cellars-grid:not(.compact) .cabinet .lane-back .slot.filled:is(:hover,:focus-visible,.drag-over,.match)::after,.cellars-grid:not(.compact) .cabinet .shelf:is(.open,.auto-open) .lane-back .slot.filled::after{opacity:0}" +
        ".cellars-grid:not(.compact) .cabinet .lane-back .slot.filled:focus-visible{--depth-sh:0 18px 26px -12px rgba(0,0,0,.9)}" +
        ".cellars-grid:not(.compact) .cabinet .lane-front .slot:focus-visible,.cellars-grid:not(.compact) .cabinet .lane-front .slot.drag-over,.cellars-grid:not(.compact) .cabinet .lane-front .slot.filled.match{z-index:5}" +
        /* State rings compose with the depth shadow instead of replacing it. */
        ".cellars-grid:not(.compact) .cabinet .slot.filled:hover{box-shadow:0 0 0 2px var(--wcm-accent),var(--depth-sh)}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled.match{box-shadow:0 0 0 2px var(--wcm-accent),0 0 20px 1px color-mix(in srgb,var(--wcm-accent) 55%,transparent),var(--depth-sh)}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled.drag-over{box-shadow:0 0 0 3px var(--wcm-accent),var(--depth-sh)}" +
        ".cellars-grid:not(.compact) .cabinet .slot:focus-visible{outline:3px solid var(--wcm-accent);outline-offset:2px}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled:focus-visible{box-shadow:0 0 0 2px #fff6ec,var(--depth-sh)}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty:focus-visible{box-shadow:0 0 0 2px #fff6ec}" +
        /* Empty positions: in front, a low footprint on the floor (never covers a back bottle); at the back, a
           faint ghost against the back wall. */
        ".cellars-grid:not(.compact) .cabinet .slot.empty{color:var(--wcm-muted);border:1.5px dashed rgba(255,236,214,.24);background:rgba(255,240,225,.025)}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty .slot-pos{font-size:.75rem;font-weight:600;opacity:1}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty.ghost{justify-content:flex-start;padding-top:20px;gap:6px}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty.ghost .bottle-ghost{height:74px;opacity:.55}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty.footprint{align-self:flex-end;height:calc(var(--slot-h) * .3);margin-bottom:6px;flex-direction:row;gap:5px;border-radius:14px;border-color:rgba(255,236,214,.34);background:linear-gradient(180deg,rgba(8,5,3,.62),rgba(8,5,3,.40));box-shadow:inset 0 2px 6px rgba(0,0,0,.5);transition:height .15s ease-out,border-color .15s ease-out,background-color .15s ease-out,opacity .2s ease-out}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty.footprint .fp-plus{display:inline-flex}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty.footprint .fp-plus svg{width:16px;height:16px}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty.footprint .slot-pos{color:var(--wcm-text);opacity:.85}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty:hover,.cellars-grid:not(.compact) .cabinet .slot.empty:focus-visible,.cellars-grid:not(.compact) .cabinet .slot.empty.drag-over{border-color:var(--wcm-accent);border-style:solid;color:var(--wcm-text);background:color-mix(in srgb,var(--wcm-accent) 22%,rgba(8,5,3,.5))}" +
        ".cellars-grid:not(.compact) .cabinet .slot.empty:hover .fp-plus,.cellars-grid:not(.compact) .cabinet .slot.empty.drag-over .fp-plus{color:var(--wcm-accent)}" +
        /* While a bottle is dragged, every empty front position grows to a full-size drop target. */
        ".cellars-grid:is(.dragging,.placing):not(.compact) .cabinet .slot.empty.footprint{height:var(--slot-h);margin-bottom:0;border-radius:12px;flex-direction:column;border-style:dashed;border-color:color-mix(in srgb,var(--wcm-accent) 70%,transparent);background:color-mix(in srgb,var(--wcm-accent) 10%,rgba(8,5,3,.35))}" +
        ".cellars-grid:is(.dragging,.placing):not(.compact) .cabinet .slot.empty.ghost{border-color:color-mix(in srgb,var(--wcm-accent) 70%,transparent);background:color-mix(in srgb,var(--wcm-accent) 8%,rgba(8,5,3,.3))}" +
        ".cellars-grid:not(.compact) .cabinet.themed .slot.empty.footprint{background:color-mix(in srgb,var(--wcm-surface) 70%,transparent);border-color:color-mix(in srgb,var(--wcm-text) 34%,transparent);box-shadow:0 2px 6px -2px rgba(0,0,0,.25)}" +
        ".cellars-grid:not(.compact) .cabinet.themed .slot.empty.ghost{border-color:color-mix(in srgb,var(--wcm-text) 22%,transparent);background:color-mix(in srgb,var(--wcm-surface) 35%,transparent)}" +
        ".cellars-grid:not(.compact) .cabinet.themed .lane-back .slot.filled::after{background:linear-gradient(180deg,rgba(0,0,0,.06),rgba(0,0,0,.14) 70%)}" +
        /* The lip: a wooden front rail with each front position's number set into it. On a two-row shelf the
           whole lip, and the "Back row" plate in it, pull the shelf out. */
        ".cellars-grid:not(.compact) .cabinet .rail{position:relative;z-index:3;display:grid;grid-template-columns:var(--tag-w) 1fr var(--tag-w);align-items:center;height:var(--lip-h);margin:-6px -10px 0;padding:0 10px;border-radius:2px 2px 3px 3px;background:repeating-linear-gradient(90deg,rgba(40,20,6,.12) 0 1px,rgba(0,0,0,0) 1px 7px,rgba(255,226,190,.05) 7px 8px,rgba(0,0,0,0) 8px 19px),linear-gradient(180deg,#e2bf95 0,#c79a6c 1.5px,#a47a51 3.5px,#8d6443 42%,#734f33 86%,#583a23 100%);box-shadow:0 1px 0 rgba(0,0,0,.6),inset 0 -1px 0 rgba(0,0,0,.35),0 9px 12px -6px rgba(0,0,0,.8)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row > .rail{cursor:pointer}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.two-row > .rail:hover{background:repeating-linear-gradient(90deg,rgba(40,20,6,.12) 0 1px,rgba(0,0,0,0) 1px 7px,rgba(255,226,190,.05) 7px 8px,rgba(0,0,0,0) 8px 19px),linear-gradient(180deg,#ecd0a8 0,#d4a878 1.5px,#b0865b 3.5px,#98704c 42%,#7c573a 86%,#5f4027 100%)}" +
        ".cellars-grid:not(.compact) .cabinet .lip-row{grid-column:2;grid-row:1;display:flex;justify-content:center;gap:var(--slot-gap);pointer-events:none}" +
        ".cellars-grid:not(.compact) .cabinet .lip-row i{flex:0 0 var(--slot-w);display:flex;justify-content:center;font-style:normal}" +
        ".cellars-grid:not(.compact) .cabinet .lip-row b{min-width:20px;height:15px;margin-top:1px;padding:0 4px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(#2e2016,#1d140e);color:#f6e7d2;font-size:.75rem;font-weight:700;line-height:1;font-variant-numeric:tabular-nums;box-shadow:inset 0 1px 2px rgba(0,0,0,.7),0 1px 0 rgba(255,236,210,.32)}" +
        /* The pull plate is set into the lip, so it never covers a bottle. Its ::before widens the touch
           target to the whole height of the lip and the gap under it (35px), never above the lip, where the
           bottom of the front bottle standing over the plate shows; the lip itself pulls the shelf too. */
        ".pull-btn{position:sticky;left:12px;z-index:8;justify-self:start;margin:calc(5px - var(--lip-h,26px)) 0 5px 12px;display:inline-flex;align-items:center;gap:5px;height:16px;padding:0 7px 0 5px;border-radius:4px;border:none;background:linear-gradient(#2e2016,#1d140e);color:#f3e7da;font:inherit;font-size:.6875rem;font-weight:600;letter-spacing:.02em;line-height:1;white-space:nowrap;cursor:pointer;box-shadow:inset 0 1px 2px rgba(0,0,0,.7),0 1px 0 rgba(255,236,210,.35);transition:background-color .15s ease-out,color .15s ease-out}" +
        ".pull-btn::before{content:'';position:absolute;left:-6px;right:-6px;top:-5px;bottom:-14px}" +
        ".pull-btn svg{width:12px;height:12px;fill:currentColor;flex:0 0 auto;transition:transform .22s ease-out}" +
        ".pull-btn[aria-expanded=\"true\"] svg{transform:rotate(180deg)}" +
        ".pull-btn .peek-n{min-width:14px;height:12px;padding:0 3px;border-radius:3px;background:rgba(255,236,214,.16);font-size:.625rem;display:inline-flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums}" +
        ".pull-btn:hover{background:linear-gradient(#4a3526,#2c2017)}" +
        ".pull-btn[aria-expanded=\"true\"]{background:color-mix(in srgb,var(--wcm-accent) 52%,#000);color:#fff;box-shadow:inset 0 1px 2px rgba(0,0,0,.5),0 0 0 1px var(--wcm-accent)}" +
        ".pull-btn[aria-expanded=\"true\"] .peek-n{background:rgba(0,0,0,.18)}" +
        ".pull-btn:focus-visible{outline:2px solid #fff6ec;outline-offset:1px;box-shadow:0 0 0 4px var(--wcm-accent)}" +
        ".cellars-grid:not(.compact) .cabinet.overflows .pull-btn .pull-txt{display:none}" +
        ".cellars-grid:not(.compact) .cabinet .shelf-noslots{position:relative;z-index:1;padding:12px 0 20px;text-align:center;font-size:.8125rem;font-style:italic;color:var(--wcm-muted)}" +
        ".cellars-grid:not(.compact) .cabinet .shelf.no-anim,.cellars-grid:not(.compact) .cabinet .shelf.no-anim *,.cellars-grid:not(.compact) .cabinet .shelf.no-anim::before{transition:none !important}" +
        /* A cabinet wider than its screen: sideways scrolling snaps to bottle starts, the first paint lands on
           position 1, and only the shelves really wider than the view start at the left edge (--iw is the
           interior width, set by the card). */
        ".cellars-grid:not(.compact) .cabinet.overflows > .interior{scroll-snap-type:x proximity;scroll-padding-inline:30px}" +
        ".cellars-grid:not(.compact) .cabinet.overflows .lane-front .slot,.cellars-grid:not(.compact) .cabinet.overflows .shelf.one-row .slot{scroll-snap-align:start}" +
        ".cellars-grid:not(.compact) .cabinet.overflows .shelf :is(.lane-row,.lip-row){justify-self:start;justify-content:center;width:var(--rw);margin-left:max(0px,calc((var(--iw,0px) - 20px - 2 * var(--tag-w) - var(--rw)) / 2))}" +
        /* Filtering: empty positions step back; bottles that do not match fall into shadow but stay opaque, so
           overlapping rows and the floor never show through them. */
        ".cellars-grid.filtering .cabinet .slot.empty{opacity:.3}" +
        ".cellars-grid.filtering .cabinet .slot.empty:hover,.cellars-grid.filtering .cabinet .slot.empty:focus-visible,.cellars-grid.filtering .cabinet .slot.empty.drag-over{opacity:1}" +
        ".cabinet.lit .slot.filled.dimmed{filter:grayscale(.85) brightness(.42)}" +
        ".cabinet.lit .lane-back .slot.filled.dimmed{filter:grayscale(.85) brightness(.36)}" +
        ".cabinet.themed .slot.filled.dimmed{filter:grayscale(.9) contrast(.55)}" +
        /* Bottle cards (Cellars view): a lit stage with the bottle drawn in its style (or the label photo,
           never cropped), a status chip pairing a glyph with the drinking window, then name, producer, vintage
           and origin, and stars. */
        ".slot{position:relative;width:var(--slot-w);height:var(--slot-h);flex:0 0 var(--slot-w);border-radius:12px;display:flex;flex-direction:column;align-items:stretch;text-align:center;cursor:pointer;color:var(--wcm-text);overflow:hidden;outline:none;-webkit-tap-highlight-color:transparent;transition:box-shadow .15s ease,opacity .2s ease,filter .2s ease,border-color .15s ease,background-color .15s ease}" +
        ".slot.bt{--bt-star:color-mix(in srgb,#f5b400 60%,var(--wcm-text));--bt-stage-h:calc(var(--slot-h) * .44);padding:0 7px 7px;gap:0;background:linear-gradient(180deg,color-mix(in srgb,var(--wcm-text) 4%,var(--wcm-surface)),var(--wcm-surface) 60%);border:1px solid color-mix(in srgb,var(--wcm-text) 13%,transparent);box-shadow:0 1px 2px rgba(0,0,0,.18),0 8px 16px -10px rgba(0,0,0,.5)}" +
        ".slot.bt::before{content:'';position:absolute;left:0;right:0;top:0;height:3px;z-index:3;background:linear-gradient(90deg,color-mix(in srgb,var(--type) 70%,#000),var(--type) 30%,var(--type) 70%,color-mix(in srgb,var(--type) 70%,#000))}" +
        ".bt-stage{position:relative;flex:0 0 var(--bt-stage-h);height:var(--bt-stage-h);margin:0 -7px;padding:5px 0 11px;overflow:hidden;display:flex;align-items:flex-end;justify-content:center;background:radial-gradient(80% 62% at 50% -6%,rgba(255,236,214,.20),transparent 72%),radial-gradient(46% 26% at 50% 86%,color-mix(in srgb,var(--type) 50%,transparent),transparent 80%),linear-gradient(color-mix(in srgb,var(--wcm-text) 9%,var(--wcm-surface)),color-mix(in srgb,var(--wcm-text) 4%,var(--wcm-surface)));box-shadow:inset 0 -1px 0 color-mix(in srgb,var(--wcm-text) 10%,transparent)}" +
        ".bt-stage::after{content:'';position:absolute;left:0;right:0;bottom:0;height:34%;pointer-events:none;background:linear-gradient(transparent,rgba(0,0,0,.10))}" +
        ".bt-stage > .bt-bottle{position:relative;z-index:1;height:100%;width:auto;filter:drop-shadow(0 3px 3px rgba(0,0,0,.35))}" +
        ".bt-bottle{display:block;overflow:visible}" +
        ".bt-bottle .bt-glass{fill:var(--type)}" +
        ".bt-bottle .bt-cap{fill:var(--cap)}" +
        ".bt-bottle .bt-paper{fill:#f4eee3}" +
        ".bt-bottle .bt-ink{fill:none;stroke:color-mix(in srgb,var(--type) 55%,#2a1d16);stroke-linecap:round}" +
        ".bt-bottle .bt-rim{fill:none;stroke:color-mix(in srgb,var(--wcm-text) 34%,transparent);stroke-width:1;vector-effect:non-scaling-stroke}" +
        ".bt-bottle .bt-foil-line{fill:none;stroke:rgba(0,0,0,.28);stroke-width:.5}" +
        ".bt-bottle .bt-bubble{fill:rgba(255,255,255,.75)}" +
        ".bt-bottle.bt-unknown .bt-glass{fill:color-mix(in srgb,var(--wcm-text) 7%,transparent)}" +
        ".bt-bottle.bt-unknown .bt-rim{stroke:color-mix(in srgb,var(--wcm-text) 55%,transparent);stroke-dasharray:3 2.5}" +
        ".bt-bottle .bt-q{font:700 20px/1 system-ui,sans-serif;fill:color-mix(in srgb,var(--wcm-text) 70%,transparent)}" +
        /* A label photo is shown whole (contain) on a type-tinted stage, with a small drawn bottle in the
           corner so the type still reads. */
        ".bt-photo{position:absolute;inset:0;z-index:1;overflow:hidden;background:radial-gradient(90% 75% at 50% 18%,rgba(255,226,190,.14),transparent 70%),radial-gradient(100% 90% at 50% 70%,color-mix(in srgb,var(--type) 34%,#1b130f),#120c09)}" +
        ".bt-photo::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(90% 70% at 50% 0%,rgba(255,226,190,.16),transparent 70%),radial-gradient(120% 90% at 50% 40%,transparent 55%,rgba(8,5,4,.45)),linear-gradient(rgba(40,24,14,.18),rgba(20,12,8,.22))}" +
        ".bt-photo-fg{position:absolute;z-index:1;left:5px;right:5px;top:6px;bottom:12px;width:calc(100% - 10px);height:calc(100% - 18px);object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,.55))}" +
        ".bt-photo-fg.is-wide{left:17px;width:calc(100% - 22px)}" +
        ".bt-stage.has-twins .bt-photo-fg{top:24px;height:calc(100% - 36px)}" +
        ".bt-stage .bt-mini{position:absolute;left:3px;bottom:3px;z-index:2;height:44%;width:auto;filter:drop-shadow(0 1px 2px rgba(0,0,0,.7))}" +
        ".bt-stage .bt-mini .bt-rim{stroke:rgba(255,255,255,.55)}" +
        ".bt-twins{position:absolute;top:4px;right:5px;z-index:3;display:inline-flex;align-items:center;gap:3px;height:17px;padding:0 6px 0 4px;border-radius:999px;background:rgba(15,11,9,.82);color:#f2ebe4;box-shadow:0 0 0 1px rgba(255,240,225,.16);font-size:.75rem;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}" +
        ".bt-twins svg{width:11px;height:11px;fill:currentColor;opacity:.85}" +
        /* Hovering or focusing a bottle rings every other bottle of the same wine. */
        ".slot.bt.bt-sibling{outline:2px dashed var(--wcm-accent);outline-offset:3px}" +
        ".slot.bt.bt-sibling-src{outline:2px solid var(--wcm-accent);outline-offset:3px}" +
        /* Status chip: glyph and years, straddling the stage edge, never on the label. It may reach into
           the card's side padding, so a word status ("Needs details") fits a phone-sized card. */
        ".bt-chip{align-self:center;position:relative;z-index:2;display:inline-flex;align-items:center;gap:4px;max-width:calc(100% + 12px);height:20px;margin-top:-10px;padding:0 7px 0 3px;border-radius:999px;background:var(--wcm-surface);color:var(--wcm-text);box-shadow:0 0 0 1px color-mix(in srgb,var(--wcm-text) 16%,transparent),0 2px 6px -1px rgba(0,0,0,.35);font-size:.75rem;font-weight:600;line-height:1;white-space:nowrap;font-variant-numeric:tabular-nums}" +
        ".bt-chip > span{overflow:hidden;text-overflow:ellipsis}" +
        ".bt-chip.is-none{color:var(--wcm-muted);font-weight:500}" +
        ".bt-chip.is-needs{box-shadow:0 0 0 1px var(--wcm-accent),0 2px 6px -1px rgba(0,0,0,.35)}" +
        ".bt-name{min-height:0;margin-top:5px;font-family:var(--wcm-font-display);font-size:.8125rem;font-weight:600;line-height:1.18;letter-spacing:.005em;color:var(--wcm-text);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:break-word;hyphens:auto}" +
        ".bt-producer{margin-top:2px;font-size:.75rem;line-height:1.25;color:var(--wcm-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".bt-meta{margin-top:auto;display:flex;justify-content:center;align-items:baseline;gap:4px;min-width:0;font-size:.75rem;line-height:1.3;color:var(--wcm-muted)}" +
        ".bt-vintage{flex:0 0 auto;font-weight:700;color:var(--wcm-text);font-variant-numeric:tabular-nums;letter-spacing:.02em}" +
        ".bt-origin{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".bt-meta > .bt-origin:not(:first-child)::before{content:'·';margin-right:4px;color:var(--wcm-muted)}" +
        ".bt-stars{flex:0 0 auto;height:12px;margin-top:3px;font-size:.75rem;line-height:1;letter-spacing:1.5px;color:var(--bt-star)}" +
        ".bt-stars .off{color:color-mix(in srgb,var(--wcm-text) 22%,transparent)}" +
        ".slot.bt.bt-needs .bt-name{font-style:italic}" +
        /* Status glyphs (the shared vocabulary: too young, ready, at peak, past peak, no window, needs
           details): a white symbol on the status color, so status never relies on color alone. */
        ".bt-glyph{flex:0 0 auto;display:inline-grid;place-items:center;width:14px;height:14px;border-radius:50%;background:var(--bt-glyph-bg,var(--wcm-none));color:#fff;font-style:normal}" +
        ".bt-glyph svg{width:10px;height:10px}" +
        ".bt-glyph.is-young{--bt-glyph-bg:color-mix(in srgb,var(--wcm-young) 88%,#000)}" +
        ".bt-glyph.is-ready{--bt-glyph-bg:color-mix(in srgb,var(--wcm-ready) 80%,#000)}" +
        ".bt-glyph.is-peak{--bt-glyph-bg:color-mix(in srgb,var(--wcm-peak) 80%,#000)}" +
        ".bt-glyph.is-past{--bt-glyph-bg:var(--wcm-past)}" +
        ".bt-glyph.is-none{--bt-glyph-bg:color-mix(in srgb,var(--wcm-text) 40%,var(--wcm-surface))}" +
        ".bt-glyph.is-needs{--bt-glyph-bg:var(--wcm-accent);color:var(--wcm-on-accent)}" +
        ".slot.empty{align-items:center;justify-content:center;gap:4px}" +
        ".slot.empty .bottle-ghost{width:auto}" +
        ".bottle-ghost path{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:3 3;vector-effect:non-scaling-stroke}" +
        ".slot-pos{font-size:.72rem;font-variant-numeric:tabular-nums}" +
        ".slot.empty.paste-ready{animation:wcm-breathe 1.8s ease-in-out infinite}" +
        "@keyframes wcm-breathe{50%{background:color-mix(in srgb,var(--wcm-accent) 14%,transparent)}}" +
        /* "Show in cellar": the bottle is brought into view and pulses; one the current filter dims is shown
           anyway for a moment. */
        ".slot.located{filter:none !important}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled.located{box-shadow:0 0 0 2px var(--wcm-accent),0 0 0 6px color-mix(in srgb,var(--wcm-accent) 26%,transparent),var(--depth-sh)}" +
        ".slot.pulse{animation:wcm-pulse 1.05s cubic-bezier(.2,.7,.3,1) 2}" +
        "@keyframes wcm-pulse{0%{box-shadow:0 0 0 2px var(--wcm-accent),0 0 0 0 color-mix(in srgb,var(--wcm-accent) 70%,transparent)}100%{box-shadow:0 0 0 2px var(--wcm-accent),0 0 0 20px color-mix(in srgb,var(--wcm-accent) 0%,transparent)}}" +
        ".compact .slot.pulse{animation-name:wcm-pulse-end}" +
        "@keyframes wcm-pulse-end{0%{box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent),0 0 0 4px color-mix(in srgb,var(--wcm-accent) 70%,transparent)}100%{box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent),0 0 0 20px color-mix(in srgb,var(--wcm-accent) 0%,transparent)}}" +
        /* Compact view: the cabinet seen from the front, one glass bottle end per slot on a wire rack, the
           back row smaller and darker behind. Status is a ring plus a glyph, never color alone. */
        ".compact .cellar{padding:12px}" +
        ".cellars-grid.compact .cabinet .shelf{--bs:.84;padding:6px 12px 0;background:radial-gradient(46% 1.5px at 50% 3px,var(--cab-led-line),rgba(0,0,0,0)),linear-gradient(180deg,rgba(0,0,0,.5) 0,rgba(0,0,0,0) 3px),radial-gradient(60% 34px at 50% 0,var(--cab-led),rgba(0,0,0,0)),linear-gradient(90deg,rgba(0,0,0,.4),rgba(0,0,0,0) 22px,rgba(0,0,0,0) calc(100% - 22px),rgba(0,0,0,.4)),linear-gradient(var(--cab-wall-top),var(--cab-wall-bottom))}" +
        ".cellars-grid.compact .cabinet .shelf-head{position:relative;z-index:1;padding:0 0 4px;font-size:.6875rem}" +
        ".cellars-grid.compact .cabinet .shelf-name{max-width:180px;color:var(--wcm-muted);letter-spacing:.02em}" +
        ".cellars-grid.compact .cabinet .lane{position:relative}" +
        ".cellars-grid.compact .cabinet .lane::before{content:'';position:absolute;left:-6px;right:-6px;top:62%;height:2px;border-radius:1px;pointer-events:none;background:linear-gradient(rgba(226,214,200,.42),rgba(110,96,86,.42));box-shadow:0 2px 2px rgba(0,0,0,.45)}" +
        ".cellars-grid.compact .cabinet .shelf.two-row .lane-front{margin-top:2px}" +
        ".cellars-grid.compact .cabinet .lane-back .slot{z-index:1;transform:scale(var(--bs));transform-origin:50% 100%}" +
        ".cellars-grid.compact .cabinet .lane-front .slot{z-index:2}" +
        ".cellars-grid.compact .cabinet .slot.empty{z-index:0}" +
        ".cellars-grid.compact .cabinet .slot{border-radius:50%;overflow:visible;transition:transform .2s ease-out,box-shadow .15s ease-out,opacity .2s ease-out,filter .2s ease-out}" +
        ".cellars-grid.compact .cabinet .slot.filled{padding:0;border:none;background:radial-gradient(circle at 33% 28%,rgba(255,255,255,.62),rgba(255,255,255,0) 24%),radial-gradient(circle,color-mix(in srgb,var(--type) 28%,#000) 0 25%,color-mix(in srgb,var(--type) 55%,#fff) 29% 32%,rgba(0,0,0,0) 36%),radial-gradient(circle,var(--type) 48%,color-mix(in srgb,var(--type) 58%,#000) 90%,color-mix(in srgb,var(--type) 40%,#000) 100%);--depth-sh:0 5px 6px -1px rgba(0,0,0,.6);box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--status),var(--depth-sh)}" +
        ".cellars-grid.compact .cabinet .lane-back .slot.filled{--depth-sh:0 3px 4px rgba(0,0,0,.55)}" +
        ".cellars-grid.compact .cabinet .lane-back .slot.filled::after{content:'';position:absolute;inset:0;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(0,0,0,.10),rgba(0,0,0,.34));transition:opacity .2s ease-out}" +
        ".cellars-grid.compact .cabinet .end-glyph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;color:#fff;z-index:1}" +
        ".cellars-grid.compact .cabinet .end-glyph svg{width:13px;height:13px;filter:drop-shadow(0 1px 1px rgba(0,0,0,.8))}" +
        ".cellars-grid.compact .cabinet .slot.filled:hover{box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent),var(--depth-sh)}" +
        ".cellars-grid.compact .cabinet .slot:focus-visible{outline:2px solid var(--wcm-text);outline-offset:5px;z-index:5}" +
        ".cellars-grid.compact .cabinet .lane-back .slot:hover,.cellars-grid.compact .cabinet .lane-back .slot:focus-visible,.cellars-grid.compact .cabinet .lane-back .slot.drag-over{z-index:4;transform:scale(1)}" +
        ".cellars-grid.compact .cabinet .lane-back .slot.filled:hover::after,.cellars-grid.compact .cabinet .lane-back .slot.filled:focus-visible::after,.cellars-grid.compact .cabinet .lane-back .slot.filled.match::after{opacity:0}" +
        /* A match keeps its status ring and gains a white ring and an accent glow; a handful of matches also
           pop forward (front hits stay in front of back hits). */
        ".cellars-grid.compact .cabinet .slot.filled.match{box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--status),0 0 0 5.5px #fff,0 0 16px 5px color-mix(in srgb,var(--wcm-accent) 65%,transparent)}" +
        ".cellars-grid.compact .cabinet .lane-front .slot.filled.match{z-index:3}" +
        ".cellars-grid.compact .cabinet .lane-back .slot.filled.match{transform:scale(.94)}" +
        ".cellars-grid.compact.few-matches .cabinet .lane-front .slot.filled.match{z-index:5;transform:scale(1.18)}" +
        ".cellars-grid.compact.few-matches .cabinet .lane-back .slot.filled.match{z-index:4;transform:scale(1.04)}" +
        ".cellars-grid.compact .cabinet .slot.filled.drag-over{box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent)}" +
        ".cellars-grid.compact .cabinet .slot.empty{gap:0;border:1.5px dashed rgba(255,236,214,.44);background:rgba(0,0,0,.22);color:rgba(255,236,214,.6)}" +
        ".cellars-grid.compact .cabinet .slot.empty::after{content:'';width:4px;height:4px;border-radius:50%;background:currentColor;opacity:.5}" +
        ".cellars-grid.compact .cabinet .slot.empty:hover,.cellars-grid.compact .cabinet .slot.empty.drag-over{border-color:var(--wcm-accent);border-style:solid;background:color-mix(in srgb,var(--wcm-accent) 25%,transparent)}" +
        ".cellars-grid.compact .cabinet.themed .slot.empty{border-color:color-mix(in srgb,var(--wcm-text) 34%,transparent);background:transparent;color:var(--wcm-muted)}" +
        /* A copied bottle is pasted by clicking an empty slot: every empty slot breathes. */
        ".cellars-grid:not(.compact) .cabinet .slot.empty.paste-ready,.cellars-grid.compact .cabinet .slot.empty.paste-ready{border-color:var(--wcm-accent);color:var(--wcm-accent)}" +
        ".cellars-grid.compact .cabinet .rail{position:relative;z-index:3;height:9px;margin:2px -12px 0;border-radius:2px;background:" + _WCM_WOOD_RAIL + ";box-shadow:0 1px 0 rgba(0,0,0,.55)}" +
        ".cellars-grid.compact .cabinet.lit .slot.filled.dimmed,.cellars-grid.compact .cabinet.lit .lane-back .slot.filled.dimmed{filter:grayscale(.8) brightness(.4)}" +
        /* Location map (bottle dialog): the cabinet from the front with the bottle's shelf lit, next to a top
           view of that shelf, and what stands in front of it. */
        ".cabinet.mini{--slot-w:16px;--slot-gap:7px;--tag-w:0px;display:inline-block;padding:7px;border-radius:12px;vertical-align:top}" +
        ".cabinet.mini::after{inset:7px;border-radius:6px}" +
        ".cabinet.mini .interior{border-radius:6px;overflow:visible}" +
        ".cabinet.mini .shelf{padding:7px 9px 0;background:radial-gradient(60% 18px at 50% 0,var(--cab-led),rgba(0,0,0,0)),linear-gradient(var(--cab-wall-top),var(--cab-wall-bottom))}" +
        ".cabinet.mini .shelf.current{background:linear-gradient(color-mix(in srgb,var(--wcm-accent) 24%,transparent),color-mix(in srgb,var(--wcm-accent) 12%,transparent)),linear-gradient(var(--cab-wall-top),var(--cab-wall-bottom));box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--wcm-accent) 85%,transparent)}" +
        ".cabinet.mini .shelf.two-row .lane-front{margin-top:-6px}" +
        ".mm-dot{position:relative;width:var(--slot-w);height:var(--slot-w);flex:0 0 var(--slot-w);border-radius:50%;border:1.5px dashed rgba(255,236,214,.36)}" +
        ".cabinet.mini .lane-back .mm-dot{transform:scale(.8);transform-origin:50% 100%}" +
        ".cabinet.mini .lane-front .mm-dot{z-index:1}" +
        ".mm-dot.filled{border:none;background:radial-gradient(circle at 34% 30%,rgba(255,255,255,.45),rgba(255,255,255,0) 38%),var(--type);box-shadow:inset 0 0 0 1px rgba(0,0,0,.4),0 2px 3px rgba(0,0,0,.5)}" +
        ".cabinet.mini .lane-back .mm-dot.filled{filter:brightness(.78)}" +
        ".cabinet.mini .mm-dot.target{z-index:3;filter:none;transform:scale(1.12) !important;box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent),0 0 12px 3px color-mix(in srgb,var(--wcm-accent) 55%,transparent)}" +
        "@media (prefers-reduced-motion:no-preference){.cabinet.mini .mm-dot.target{animation:wcm-ping 1.8s ease-out 3}}" +
        "@keyframes wcm-ping{0%{box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent),0 0 0 4px color-mix(in srgb,var(--wcm-accent) 60%,transparent)}100%{box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent),0 0 0 13px rgba(0,0,0,0)}}" +
        ".cabinet.mini .rail{position:relative;height:5px;margin:2px -9px 0;border-radius:1px;background:" + _WCM_WOOD_RAIL + ";box-shadow:0 1px 0 rgba(0,0,0,.5)}" +
        ".loc-wrap{display:grid;gap:12px;justify-items:center;width:100%;min-width:0}" +
        ".loc-pair{display:flex;align-items:flex-start;justify-content:center;gap:16px 20px;flex-wrap:wrap;width:100%}" +
        ".loc-front{flex:0 0 auto;display:grid;justify-items:center;gap:6px}" +
        ".shelf-plan{flex:1 1 150px;max-width:280px;min-width:0;display:grid;gap:6px;justify-items:center}" +
        ".shelf-plan-title{font-size:.75rem;font-weight:600;color:var(--wcm-text);text-align:center}" +
        ".shelf-plan-title span,.shelf-plan-title .sp-dot{color:var(--wcm-muted);font-weight:500;font-style:normal}" +
        ".shelf-plan-svg{display:block;width:100%;height:auto;overflow:visible}" +
        ".pl-wall{fill:#1a1310}" +
        ".pl-cap{font-size:.6875rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--wcm-muted);line-height:1.2;text-align:center}" +
        ".pl-dot{fill:rgba(10,7,5,.35);stroke:rgba(255,236,214,.55);stroke-width:1;stroke-dasharray:2 1.6}" +
        ".pl-dot.filled{stroke:rgba(0,0,0,.45);stroke-dasharray:none;fill:var(--type)}" +
        ".pl-num{font-size:8px;font-weight:700;text-anchor:middle;dominant-baseline:central;fill:rgba(255,236,214,.8);font-variant-numeric:tabular-nums}" +
        ".pl-ring{fill:none;stroke:var(--wcm-accent);stroke-width:2.5}" +
        ".pl-block{fill:none;stroke:var(--wcm-text);stroke-width:1.4;stroke-dasharray:3 2}" +
        ".plan-hint{display:flex;align-items:flex-start;gap:8px;max-width:420px;padding:8px 12px;border-radius:12px;background:var(--wcm-tonal);font-size:.8125rem;line-height:1.35;color:var(--wcm-text)}" +
        ".plan-hint svg{width:18px;height:18px;flex:0 0 auto;margin-top:1px;fill:var(--wcm-accent);color:var(--wcm-accent)}" +
        ".plan-hint em{font-style:normal;color:color-mix(in srgb,var(--wcm-text) 50%,var(--wcm-muted))}" +
        "@media (max-width:600px){.loc-pair{flex-wrap:nowrap;gap:12px;justify-content:space-between}.cabinet.mini{--slot-w:12px;--slot-gap:5px;padding:6px}.cabinet.mini .shelf{padding:6px 7px 0}.shelf-plan-title span{display:block}.shelf-plan-title .sp-dot{display:none}}" +
        "@media (prefers-reduced-motion:reduce){.cabinet .slot,.cabinet .slot::after,.cab-fade,.pull-btn,.pull-btn svg,.cellars-grid:not(.compact) .cabinet .shelf::before,.cellars-grid:not(.compact) .cabinet .lane,.cellars-grid:not(.compact) .cabinet .lane-tag{transition:none !important}.slot.empty.paste-ready,.slot.pulse{animation:none}}" +


        /* All Bottles: one panel, its title (how many bottles it shows) and, on narrow widths, a sort select;
           a table grouped by type or cellar, with sortable headers. At 700px of its own width or less the
           rows become cards. Rows that do not match the search are hidden in place. */
        ".bl,.st{--wcm-accent-ink:color-mix(in srgb,var(--wcm-accent) 62%,var(--wcm-text))}" +
        ".bl{container:bl / inline-size;background:var(--wcm-surface);border:1px solid var(--wcm-border);border-radius:var(--wcm-radius);box-shadow:var(--ha-card-box-shadow,none);overflow:clip}" +
        ".bl [hidden]{display:none !important}" +
        ".bl-bar{display:flex;align-items:center;gap:10px 14px;min-height:60px;padding:12px 16px 12px 20px;border-bottom:1px solid var(--wcm-divider)}" +
        ".bl-title:focus{outline:none}" +
        ".bl-title:focus-visible{outline:2px solid var(--wcm-accent-ink);outline-offset:4px;border-radius:4px}" +
        ".bl-title{flex:1 1 auto;min-width:0;margin:0;font-family:var(--wcm-font-display);font-size:1.1875rem;font-weight:600;line-height:1.25;color:var(--wcm-text);font-variant-numeric:lining-nums}" +
        ".bl-sortbox{display:none;flex:0 0 auto;align-items:center;gap:6px}" +
        ".bl-sortbox select{appearance:none;-webkit-appearance:none;height:36px;max-width:11rem;padding:0 30px 0 14px;border:1px solid var(--wcm-divider);border-radius:999px;background-color:var(--wcm-tonal);background-image:linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%);background-position:calc(100% - 17px) 50%,calc(100% - 12px) 50%;background-size:5px 5px;background-repeat:no-repeat;color:var(--wcm-text);font-size:var(--wcm-fs-md);text-overflow:ellipsis}" +
        ".bl-dir svg{width:20px;height:20px;transition:transform .18s ease-out}" +
        ".bl-dir[aria-pressed=\"true\"]{background:var(--wcm-tonal)}" +
        ".bl-dir[aria-pressed=\"true\"] svg{transform:scaleX(-1)}" +
        /* A table drawn as a grid: every row is a grid on the same column tracks (thumbnail, wine, location,
           vintage, region, rating, window, price). The fixed tracks are as wide as their header in this
           language (character counts set by _renderList: --n-* the label, --w-* its longest word, --n-cost
           the longest price); wine, location and region share the rest. Widths never come from the rows,
           so a row off screen skips its layout (content-visibility) and the columns never shift as rows
           come into view. Explicit table roles (_renderList) keep the table semantics. */
        ".bl-table{display:block;width:100%;font-size:var(--wcm-fs-md);--bw-thumb:56px;--bw-vin:max(64px,calc(var(--n-vin,7) * .6rem + 44px));--bw-rate:max(100px,calc(var(--n-rate,6) * .6rem + 44px));--bw-win:max(136px,calc(var(--n-win,15) * .6rem + 44px));--bw-price:max(calc(var(--n-cost,8) * .55rem + 34px),calc(var(--n-price,5) * .6rem + 44px));--bl-cols:var(--bw-thumb) minmax(0,40fr) minmax(0,36fr) var(--bw-vin) minmax(0,24fr) var(--bw-rate) var(--bw-win) var(--bw-price)}" +
        ".bl-table thead,.bl-table tbody,.bl-table .bl-ghead,.bl-table .bl-ghead th{display:block}" +
        ".bl-table thead tr,.bl-row{display:grid;grid-template-columns:var(--bl-cols);align-items:center}" +
        ".bl-table tr{border-bottom:1px solid var(--wcm-divider)}" +
        ".bl-table th,.bl-table td{display:block;min-width:0;padding:10px 12px;text-align:left}" +
        ".bl-row{content-visibility:auto;contain-intrinsic-size:auto 65px}" +
        ".bl-row>td{overflow-wrap:anywhere}" +
        ".bl-table thead{position:sticky;top:0;z-index:2;background:var(--wcm-surface)}" +
        ".bl-table thead th{padding:12px 6px;font-size:var(--wcm-fs-xs);font-weight:700;letter-spacing:.07em;line-height:1.3;text-transform:uppercase;color:var(--wcm-muted);white-space:nowrap}" +
        ".bl-sort{display:inline-flex;align-items:center;gap:4px;margin:-4px 0;text-align:left;padding:4px 6px;border:0;border-radius:6px;background:none;color:inherit;font:inherit;letter-spacing:inherit;text-transform:inherit;cursor:pointer}" +
        ".bl-sort:hover{color:var(--wcm-text);background:var(--wcm-tonal)}" +
        ".bl-sort svg{width:14px;height:14px;flex:0 0 auto;opacity:0;transition:opacity .15s}" +
        ".bl-sort:hover svg{opacity:.45}" +
        ".bl-sort.on{color:var(--wcm-text)}" +
        ".bl-sort.on svg{opacity:1}" +
        ".bl-sep{margin:0 8px;opacity:.5}" +
        ".bl-ghead th{padding:22px 20px 8px;font-family:var(--wcm-font-display);font-size:1.0625rem;font-weight:600;letter-spacing:0;text-transform:none;color:var(--wcm-text)}" +
        ".bl-glabel{display:inline-flex;align-items:center;gap:10px}" +
        ".bl-swatch{width:14px;height:14px;flex:0 0 auto;border-radius:4px;background:var(--type);box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}" +
        ".bl-gn{display:inline-block;min-width:22px;padding:2px 8px;border-radius:999px;background:var(--wcm-tonal);font-family:var(--ha-font-family-body,inherit);font-size:var(--wcm-fs-xs);font-weight:700;line-height:1.35;text-align:center;color:color-mix(in srgb,var(--wcm-text) 72%,var(--wcm-surface));font-variant-numeric:tabular-nums;vertical-align:.12em}" +
        ".bl-row{cursor:pointer;transition:background-color .15s}" +
        ".bl-row:hover{background:color-mix(in srgb,var(--wcm-text) 4%,transparent)}" +
        ".bl-row:has(.bl-name:focus-visible){background:color-mix(in srgb,var(--wcm-accent) 9%,transparent)}" +
        ".bl-table .c-thumb{padding-left:20px;padding-right:4px}" +
        ".wthumb{position:relative;display:grid;place-items:center;flex:0 0 auto;width:32px;height:44px;border-radius:7px;overflow:hidden;background:linear-gradient(160deg,color-mix(in srgb,var(--type) 30%,var(--wcm-surface)),color-mix(in srgb,var(--type) 12%,var(--wcm-surface)));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-text) 10%,transparent),0 1px 2px rgba(0,0,0,.12)}" +
        ".wthumb .bt-bottle{position:absolute;top:8%;left:50%;width:auto;height:84%;transform:translateX(-50%);filter:drop-shadow(0 1px 1px rgba(0,0,0,.25))}" +
        ".wthumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}" +
        ".bl-name{display:block;margin:0;padding:0;border:0;border-radius:4px;background:none;color:var(--wcm-text);font-family:var(--wcm-font-display);font-size:var(--wcm-fs-base);font-weight:600;line-height:1.25;text-align:left;cursor:pointer}" +
        ".bl-name:focus-visible,.bl-sort:focus-visible,.bl-locate:focus-visible,.bl-dir:focus-visible,.bl-sortbox select:focus-visible,.st button:focus-visible{outline:2px solid var(--wcm-accent-ink);outline-offset:2px}" +
        ".bl-sub{display:block;margin-top:2px;font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".bl-m{display:none}" +
        ".bl-loc{display:flex;align-items:center;gap:6px;min-width:0}" +
        ".bl-crumb{min-width:0;overflow:hidden;font-size:var(--wcm-fs-sm);color:var(--wcm-muted);white-space:nowrap;text-overflow:ellipsis}" +
        ".bl-table .bl-crumb{white-space:normal}" +
        ".bl-crumb b{font-weight:600;color:var(--wcm-text)}" +
        ".bl-crumb .cs-full{display:inline}" +
        ".bl-crumb .cs-short{display:none}" +
        ".bl-locate{position:relative;z-index:1;display:grid;place-items:center;flex:0 0 auto;width:32px;height:32px;margin:-6px -4px -6px 2px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--wcm-muted);cursor:pointer;transition:background-color .15s,color .15s}" +
        ".bl-locate:hover{background:var(--wcm-tonal-strong);color:var(--wcm-accent-ink)}" +
        ".bl-row .bl-locate{opacity:.55}" +
        ".bl-row:hover .bl-locate,.bl-row .bl-locate:focus-visible{opacity:1}" +
        ".bl-dash{color:var(--wcm-muted);opacity:.6}" +
        ".bl-table .c-vin,.bl-table .c-price{white-space:nowrap;font-variant-numeric:tabular-nums}" +
        ".bl-table .c-rv{color:var(--wcm-muted)}" +
        ".bl-table .c-price{padding-right:20px;text-align:right}" +
        ".bl-table thead .c-price{padding-right:14px;text-align:right}" +
        ".wstars{color:var(--wcm-star);letter-spacing:1.5px;white-space:nowrap}" +
        ".wstars .off{color:var(--wcm-text);opacity:.18}" +
        ".wpill{--status:var(--wcm-none);--ink:color-mix(in srgb,var(--status) 52%,var(--wcm-text));display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px 0 5px;border-radius:999px;background:color-mix(in srgb,var(--status) 13%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--status) 28%,transparent);color:var(--ink);font-size:var(--wcm-fs-sm);font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums lining-nums}" +
        ".wpill.is-young{--status:var(--wcm-young)}" +
        ".wpill.is-ready{--status:var(--wcm-ready)}" +
        ".wpill.is-peak{--status:var(--wcm-peak)}" +
        ".wpill.is-past{--status:var(--wcm-past)}" +
        ".wpill.is-none{background:transparent;box-shadow:inset 0 0 0 1px var(--wcm-divider);color:var(--wcm-muted);font-weight:500}" +
        ".wpill .bt-glyph{width:16px;height:16px}" +
        ".wpill .bt-glyph svg{width:10px;height:10px}" +
        ".wpill-l+.wpill-y::before{content:'·';margin:0 5px 0 0;opacity:.7}" +
        ".wpill-l+.wpill-y{font-weight:500}" +
        ".bl-empty{padding:36px 24px 44px}" +
        ".bl-empty .find-empty{flex-direction:column;justify-content:center;gap:12px;max-width:520px;margin:0 auto;text-align:center}" +
        ".bl-empty .find-empty-t{flex:0 0 auto;justify-items:center}" +
        ".bl-empty .find-empty-actions{justify-content:center}" +
        ".bl-start{display:grid;justify-items:center;gap:8px;max-width:460px;margin:0 auto;padding:44px 24px 48px;text-align:center}" +
        ".bl-start-art{display:grid;place-items:center;width:96px;height:96px;margin-bottom:6px;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--wcm-accent) 16%,transparent),color-mix(in srgb,var(--wcm-accent) 5%,transparent) 70%,transparent);color:var(--wcm-accent-ink)}" +
        ".bl-start-art svg{width:48px;height:48px;fill:currentColor}" +
        ".bl-start-sub{margin:0 0 10px;font-size:var(--wcm-fs-md);line-height:1.5;color:var(--wcm-muted)}" +
        "@container bl (max-width:1080px){.bl-table .c-rv{display:none}.bl-table{--bl-cols:var(--bw-thumb) minmax(0,52fr) minmax(0,48fr) var(--bw-vin) var(--bw-rate) var(--bw-win) var(--bw-price)}}" +
        "@container bl (max-width:440px){.bl-crumb .cs-full{display:none}.bl-crumb .cs-short{display:inline}}" +
        "@container bl (max-width:900px){.bl-table{--bw-rate:max(96px,calc(var(--w-rate,6) * .6rem + 36px));--bw-win:max(136px,calc(var(--w-win,8) * .6rem + 36px));--bw-price:max(calc(var(--n-cost,8) * .55rem + 22px),calc(var(--w-price,5) * .6rem + 36px));--bl-cols:var(--bw-thumb) minmax(0,44fr) minmax(0,56fr) var(--bw-rate) var(--bw-win) var(--bw-price)}.bl-table .c-vin{display:none}.bl-crumb .cs-full{display:none}.bl-crumb .cs-short{display:inline}.bl-table .bl-m{display:inline}.bl-table thead th{white-space:normal}.bl-row>td{padding-left:9px;padding-right:9px}.bl-table thead th{padding-left:3px;padding-right:3px}}" +
        "@container bl (max-width:700px){.bl-sortbox{display:inline-flex}.bl-bar{padding-left:16px}.bl-table thead{display:none}.bl-ghead th{padding:18px 16px 8px}.bl-row{display:grid;grid-template-columns:48px minmax(0,1fr) auto;grid-template-areas:'thumb wine price' 'thumb loc loc' 'thumb win rate';align-items:center;gap:4px 12px;padding:14px 16px;border-bottom:1px solid var(--wcm-divider);content-visibility:auto;contain-intrinsic-size:auto 118px}.bl-row>td{padding:0}.bl-table .c-thumb{grid-area:thumb;align-self:start;width:auto;padding:0}.bl-row .wthumb{width:48px;height:66px;border-radius:9px}.bl-table .c-wine{grid-area:wine}.bl-table .c-price{grid-area:price;align-self:start;padding:1px 0 0;font-weight:600}.bl-table .c-loc{grid-area:loc}.bl-table .c-win{grid-area:win;justify-self:start;margin-top:3px}.bl-table .c-rate{grid-area:rate;justify-self:end;margin-top:3px}.bl-table .c-vin,.bl-table .c-rv,.bl-dash{display:none}.bl-table .bl-m{display:inline}.bl-name{font-size:1.0625rem}.bl-row .bl-locate{opacity:1}.wstars{font-size:var(--wcm-fs-sm)}.bl-title{font-size:1.0625rem}.bl-bar{flex-wrap:wrap}.bl-sortbox{max-width:100%;margin-left:auto}.bl-sortbox select{min-width:0;max-width:calc(100% - 42px)}}" +
        "@media (max-width:780px),(max-height:500px){.bl-table thead{position:static}}" +
        "@media (max-width:780px){.bl-sortbox select{font-size:16px}}" +
        "@media (hover:none){.bl-row .bl-locate{opacity:1}}" +

        /* Stats: figures, the drinking window (vertical bars; one row per year where the chart is narrow), the
           bottles to drink now, the types donut and the countries. */
        ".st{container:st / inline-size;display:grid;gap:16px}" +
        ".st-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}" +
        ".st-kpis.is-three{grid-template-columns:repeat(3,minmax(0,1fr))}" +
        ".st-kpi,.st-panel{min-width:0;background:var(--wcm-surface);border:1px solid var(--wcm-border);border-radius:var(--wcm-radius);box-shadow:var(--ha-card-box-shadow,none)}" +
        /* A figure: its label beside the icon, then the value across the whole tile (never under the icon),
           sized to its length (--chars, set by _renderStats) so a long total fits a narrow tile. */
        ".st-kpi{position:relative;container-type:inline-size;display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto 1fr auto;gap:2px 10px;padding:18px 20px 16px;overflow:hidden;--kpi-max:1.875rem}" +
        ".st-kpi-ico{grid-column:2;grid-row:1;align-self:start;display:grid;place-items:center;width:36px;height:36px;border-radius:12px;background:color-mix(in srgb,var(--wcm-accent) 12%,transparent);color:var(--wcm-accent-ink)}" +
        ".st-kpi-ico svg{width:20px;height:20px}" +
        ".st-kpi-l{grid-column:1;grid-row:1;align-self:center;font-size:var(--wcm-fs-xs);font-weight:700;letter-spacing:.07em;line-height:1.15;text-transform:uppercase;color:var(--wcm-muted);overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}" +
        ".st-kpi-v{grid-column:1 / -1;grid-row:2;align-self:end;margin-top:6px;overflow:hidden;font-size:clamp(1rem,calc(100cqi / var(--chars,4) * 1.6),var(--kpi-max));font-weight:700;letter-spacing:-.01em;line-height:1.1;color:var(--wcm-text);white-space:nowrap;text-overflow:ellipsis;font-variant-numeric:tabular-nums lining-nums}" +
        ".st-kpi-v small{margin-left:5px;font-size:var(--wcm-fs-md);font-weight:500;letter-spacing:0;color:var(--wcm-muted)}" +
        ".st-kpi-na{color:var(--wcm-muted)}" +
        ".st-kpi-s{grid-column:1 / -1;grid-row:3;font-size:var(--wcm-fs-sm);line-height:1.3;color:var(--wcm-muted)}" +
        ".st-main{display:grid;grid-template-columns:minmax(0,1.9fr) minmax(300px,1fr);gap:16px;align-items:stretch}" +
        ".st-pair{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px}" +
        ".st-panel{display:flex;flex-direction:column;padding:20px 22px}" +
        ".st-head{margin-bottom:16px}" +
        ".st-title{display:flex;align-items:center;gap:10px;margin:0;font-family:var(--wcm-font-display);font-size:var(--wcm-fs-lg);font-weight:600;line-height:1.25;color:var(--wcm-text)}" +
        ".st-sub{margin:3px 0 0;font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".st-quiet{margin:auto 0;padding:24px 0;font-size:var(--wcm-fs-md);color:var(--wcm-muted);text-align:center}" +
        ".st-chart{display:flex;flex:1 1 auto;flex-direction:column;margin:0}" +
        ".st-plot{position:relative;flex:1 1 auto;min-height:250px;padding:22px 0 0 34px}" +
        ".st-grid{position:absolute;top:22px;right:0;bottom:30px;left:34px;pointer-events:none}" +
        ".st-grid span{position:absolute;right:0;bottom:calc(var(--at) * 100%);left:0;border-top:1px dashed color-mix(in srgb,var(--wcm-text) 14%,transparent)}" +
        ".st-grid span.is-base{border-top:1px solid color-mix(in srgb,var(--wcm-text) 30%,transparent)}" +
        ".st-grid em{position:absolute;top:-.62em;right:calc(100% + 8px);font-size:var(--wcm-fs-xs);font-style:normal;line-height:1.2;color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".st-bars{display:flex;gap:clamp(4px,.9cqi,14px);height:100%;margin:0;padding:0;list-style:none}" +
        ".st-col{position:relative;display:flex;flex:1 1 0;flex-direction:column;min-width:0}" +
        ".st-col.is-now::before{content:'';position:absolute;inset:-22px -3px 0;border-radius:10px;background:color-mix(in srgb,var(--wcm-accent) 9%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-accent) 22%,transparent)}" +
        ".st-track{position:relative;display:flex;flex:1 1 auto;justify-content:center}" +
        ".st-stack{position:absolute;bottom:0;display:flex;flex-direction:column-reverse;width:min(100%,46px);height:calc(var(--h) * 100%);overflow:hidden;border-radius:6px 6px 2px 2px}" +
        ".st-stack i{flex:0 0 calc(var(--v) * 100%);min-height:2px;background:var(--type)}" +
        ".st-stack i+i{box-shadow:inset 0 -1.5px 0 var(--wcm-surface)}" +
        ".st-total{position:absolute;right:0;bottom:calc(var(--h) * 100% + 4px);left:0;font-size:var(--wcm-fs-xs);font-weight:700;text-align:center;color:var(--wcm-text);font-variant-numeric:tabular-nums}" +
        ".st-yr{position:relative;display:flex;flex:0 0 30px;flex-direction:column;align-items:center;padding-top:7px;font-size:var(--wcm-fs-xs);font-weight:600;line-height:1.1;color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".st-yr em{font-size:.625rem;font-style:normal;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--wcm-accent-ink)}" +
        ".st-col.is-now .st-yr{font-weight:800;color:var(--wcm-text)}" +
        ".st-bars:hover .st-col:not(:hover) .st-stack{opacity:.55}" +
        ".st-stack{transition:opacity .15s}" +
        ".st-legend{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:14px;padding-top:14px;border-top:1px solid var(--wcm-divider);font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".st-legend span{display:inline-flex;align-items:center;gap:7px}" +
        ".st-legend i,.st-leg i{width:10px;height:10px;flex:0 0 auto;border-radius:3px;background:var(--type);box-shadow:inset 0 0 0 1px rgba(0,0,0,.18)}" +
        ".st-now-list{display:grid;gap:2px;margin:0 -10px;padding:0;list-style:none}" +
        ".st-now-item{position:relative;display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:12px;transition:background-color .15s}" +
        ".st-now-item:hover{background:var(--wcm-tonal)}" +
        ".st-now-item .wthumb{width:34px;height:47px}" +
        ".st-now-t{display:grid;flex:1 1 auto;grid-template-columns:minmax(0,1fr);gap:3px;min-width:0;justify-items:start}" +
        ".st-now-name{max-width:100%;overflow:hidden;margin:0;padding:0;border:0;border-radius:4px;background:none;color:var(--wcm-text);font-family:var(--wcm-font-display);font-size:var(--wcm-fs-base);font-weight:600;line-height:1.25;text-align:left;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}" +
        ".st-now-name::after{content:'';position:absolute;inset:0}" +
        ".st-now-vin{font-family:var(--ha-font-family-body,inherit);font-size:var(--wcm-fs-sm);font-weight:500;color:var(--wcm-muted)}" +
        ".st-now-loc{display:flex;align-items:center;gap:5px;max-width:100%;min-width:0}" +
        ".st-now-item .wpill{max-width:100%;height:22px;margin-top:2px;font-size:var(--wcm-fs-xs)}" +
        ".st-now-item .wpill-l{min-width:0;overflow:hidden;text-overflow:ellipsis}" +
        ".st-now-item .bl-locate{margin:0}" +
        ".st-hist-list{display:grid;gap:2px;margin:0 -10px;padding:0;list-style:none}" +
        ".st-hist-item{display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:12px}" +
        ".st-hist-item .wthumb{width:34px;height:47px}" +
        ".st-hist-name{max-width:100%;overflow:hidden;font-family:var(--wcm-font-display);font-size:var(--wcm-fs-base);font-weight:600;line-height:1.25;white-space:nowrap;text-overflow:ellipsis}" +
        ".st-hist-sub{display:flex;flex-wrap:wrap;align-items:center;gap:2px 10px;max-width:100%;min-width:0;font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".st-hist-sub .st-now-loc{flex:0 1 auto}" +
        ".st-putback{flex:0 0 auto}" +
        ".st-putback svg{width:17px;height:17px}" +
        ".st-hist-note{flex:0 1 auto;max-width:40%;font-size:var(--wcm-fs-sm);color:var(--wcm-muted);text-align:right}" +
        ".st-more{display:inline-flex;align-items:center;align-self:flex-start;gap:4px;margin:12px 0 0 -8px;padding:6px 8px;border:0;border-radius:8px;background:none;color:var(--wcm-accent-ink);font:inherit;font-size:var(--wcm-fs-md);font-weight:600;cursor:pointer}" +
        ".st-more:hover{background:var(--wcm-tonal)}" +
        ".st-more svg{width:16px;height:16px}" +
        ".st-types{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:24px}" +
        ".st-donut{position:relative;width:172px;height:172px}" +
        ".st-donut svg{display:block;width:100%;height:100%}" +
        ".st-donut-c{position:absolute;inset:0;display:grid;place-content:center;text-align:center;pointer-events:none}" +
        ".st-donut-c strong{font-size:1.875rem;font-weight:700;line-height:1;color:var(--wcm-text);font-variant-numeric:tabular-nums}" +
        ".st-donut-c span{margin-top:4px;font-size:var(--wcm-fs-xs);letter-spacing:.08em;text-transform:uppercase;color:var(--wcm-muted)}" +
        ".st-legs{display:grid;gap:2px}" +
        ".st-leg{display:grid;grid-template-columns:12px minmax(0,1fr) auto 3.2em;align-items:center;gap:10px;width:100%;min-height:36px;padding:4px 8px;border:0;border-radius:8px;background:transparent;color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-md);text-align:left;cursor:pointer}" +
        ".st-leg:hover,.st-country:hover{background:var(--wcm-tonal)}" +
        ".st-leg i{width:12px;height:12px;border-radius:4px}" +
        ".st-leg span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}" +
        ".st-leg b{font-weight:700;font-variant-numeric:tabular-nums}" +
        ".st-leg em{font-style:normal;text-align:right;color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".st-countries{display:grid;gap:4px;margin:0 -8px}" +
        ".st-country{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px 12px;width:100%;padding:8px;border:0;border-radius:10px;background:transparent;color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-md);text-align:left;cursor:pointer}" +
        ".st-country.is-none{cursor:default;color:var(--wcm-muted)}" +
        ".st-country.is-none:hover{background:transparent}" +
        ".st-country b{overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}" +
        ".st-country em{font-style:normal;font-weight:700;font-variant-numeric:tabular-nums}" +
        ".st-bar{grid-column:1 / -1;height:8px;overflow:hidden;border-radius:999px;background:var(--wcm-tonal-strong)}" +
        ".st-bar span{display:block;width:calc(var(--p) * 100%);height:100%;border-radius:inherit;background:linear-gradient(90deg,color-mix(in srgb,var(--wcm-accent) 65%,var(--wcm-surface)),var(--wcm-accent))}" +
        ".st-country.is-none .st-bar span{background:color-mix(in srgb,var(--wcm-text) 30%,transparent)}" +
        "@container st (max-width:1080px){.st-main{grid-template-columns:minmax(0,1fr)}.st-bars{gap:clamp(4px,1.3cqi,14px)}}" +
        /* Rows instead of columns where the chart is 520px wide or less: the report is one column there,
           so that is a report (container st) of 566px or less. One container, one layout pass. */
        "@container st (max-width:566px){.st-plot{flex:none;height:auto;min-height:0;padding:0 0 22px}.st-grid{top:0;right:40px;bottom:22px;left:62px}.st-grid span{top:0;right:auto;bottom:0;left:calc(var(--at) * 100%);border-top:0;border-left:1px dashed color-mix(in srgb,var(--wcm-text) 14%,transparent)}.st-grid span.is-base{border-top:0;border-left:1px solid color-mix(in srgb,var(--wcm-text) 30%,transparent)}.st-grid em{top:calc(100% + 5px);right:auto;left:0;transform:translateX(-50%)}.st-bars{flex-direction:column;gap:6px;height:auto}.st-col{flex-direction:row-reverse;align-items:center;min-height:26px}.st-col.is-now::before{inset:-3px -6px}.st-track{flex:1 1 auto;height:18px;margin-right:40px;justify-content:flex-start}.st-stack{position:relative;flex-direction:row;width:calc(var(--h) * 100%);height:100%;border-radius:2px 6px 6px 2px}.st-stack i{flex-basis:calc(var(--v) * 100%)}.st-stack i+i{box-shadow:inset 1.5px 0 0 var(--wcm-surface)}.st-total{top:50%;right:auto;bottom:auto;left:calc(var(--h) * 100% + 6px);transform:translateY(-50%);text-align:left}.st-yr{flex:0 0 62px;flex-direction:row;align-items:baseline;gap:5px;padding:0;font-size:var(--wcm-fs-sm)}.st-bars:hover .st-col:not(:hover) .st-stack{opacity:1}}" +
        "@container st (max-width:1000px){.st-kpis,.st-kpis.is-three{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}}" +
        "@container st (max-width:760px){.st-pair{grid-template-columns:minmax(0,1fr)}.st-kpi{--kpi-max:var(--wcm-fs-xl)}}" +
        /* Narrow: the crosshair goes up beside the name, so the status and window line has the item's width. */
        "@container st (max-width:520px){.st-now-item .bl-locate{position:absolute;top:6px;right:4px}.st-now-name{max-width:calc(100% - 34px)}.st-now-loc .cs-full{display:none}.st-now-loc .cs-short{display:inline}.st{gap:12px}.st-kpi{padding:14px 14px 12px;--kpi-max:var(--wcm-fs-lg)}.st-kpi-ico{width:30px;height:30px;border-radius:10px}.st-kpi-ico svg{width:17px;height:17px}.st-kpi-l{font-size:.6875rem}.st-panel{padding:16px}.st-types{grid-template-columns:minmax(0,1fr);justify-items:center;gap:12px}.st-legs{width:100%}.st-title{font-size:1.125rem}}" +
        "@media (prefers-reduced-motion:reduce){.bl-row,.bl-dir svg,.bl-locate,.st-stack,.st-now-item{transition:none}}" +

        /* Dialogs */
        ".modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:16px;z-index:999}" +
        ".modal{width:min(980px,100%);max-height:92vh;overflow:auto;background:var(--wcm-dialog);color:var(--wcm-text);border-radius:20px;padding:20px;box-shadow:0 24px 48px rgba(0,0,0,.35)}" +
        ".small-modal{width:min(760px,100%)}" +
        ".modal-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}" +
        ".modal-head h3{margin:0;font-size:1.25rem;font-weight:600}" +
        ".modal-actions{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;grid-column:1 / -1;margin-top:8px}" +
        ".form-error{margin-bottom:12px;padding:10px 12px;border-radius:12px;background:var(--wcm-danger);color:#fff;font-size:.92rem;line-height:1.35}" +
        ".action-message{margin-bottom:12px;padding:10px 12px;border-radius:12px;background:color-mix(in srgb,var(--wcm-accent) 14%,transparent);color:var(--wcm-text);font-size:.92rem;line-height:1.35}" +
        ".duplicate-empty{font-size:.92rem;color:var(--wcm-muted)}" +
        ".duplicate-item{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;padding:12px;border-radius:12px;background:var(--wcm-tonal);border:1px solid var(--wcm-divider)}" +
        ".variant{display:block;height:auto;white-space:normal;padding:8px 12px;border-radius:10px;text-align:left;border:2px solid transparent;opacity:.8}" +
        ".variant.selected{border-color:var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 12%,transparent);font-weight:700;opacity:1}" +
        ".variant-count{font-size:.75rem;font-weight:400;color:var(--wcm-muted);margin-top:2px}" +
        ".btn.square{width:42px;padding:0;border-radius:12px;font-size:1.2rem;font-weight:700}" +
        ".btn.ok{background:color-mix(in srgb,var(--wcm-ready) 20%,transparent);color:var(--wcm-ready)}" +
        ".section-label{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--wcm-muted)}" +
        ".cleanup-check{font-size:.8rem;line-height:1.35;color:var(--wcm-muted)}" +
        ".modal [tabindex='-1']:focus{outline:none}" +
        ".btn.solid-danger{background:var(--wcm-danger);color:#fff}" +
        ".btn.solid-danger:hover{filter:brightness(1.08)}" +
        /* In-dialog confirmation, used instead of window.confirm() */
        ".dialog-confirm{position:sticky;bottom:0;z-index:2;display:grid;gap:6px;margin-top:14px;padding:16px;border-radius:14px;background:var(--wcm-dialog);box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--wcm-danger) 55%,transparent),0 -10px 24px -14px rgba(0,0,0,.5)}" +
        ".dialog-confirm.tone-warning{box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--wcm-peak) 65%,transparent),0 -10px 24px -14px rgba(0,0,0,.5)}" +
        ".dialog-confirm-title{margin:0;font-size:1.02rem;font-weight:600;color:var(--wcm-text)}" +
        ".dialog-confirm-body{margin:0;font-size:.9rem;line-height:1.4;color:var(--wcm-muted)}" +
        ".dialog-confirm-error{margin:0;font-size:.88rem;font-weight:600;color:var(--wcm-danger)}" +
        ".dialog-confirm-body:empty,.dialog-confirm-error:empty{display:none}" +
        ".dialog-confirm-actions{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:6px}" +
        ".modal.is-confirming .modal-actions,.modal.is-confirming .view-actions{display:none}" +
        ".wine-view-modal>.dialog-confirm{position:relative;flex:0 0 auto;margin:0 20px 16px}" +

        /* Bottle details dialog: a header (type, producer, serif name, vintage and origin, status and stars),
           a lit hero with the bottle wearing its label next to the full label, the location high up, then the
           drinking window and details. On narrow screens the secondary actions fold into a "More" menu.
           Muted text takes a quarter of the text color: most of it sits on tonal panels. */
        ".wine-view-modal{width:min(1020px,100%);padding:0;display:flex;flex-direction:column;overflow:hidden;--bv-pad:24px;--wcm-muted:color-mix(in srgb,var(--wcm-text) 25%,var(--secondary-text-color,#727272))}" +
        ".bv-head{position:relative;flex:0 0 auto;padding:20px 64px 16px var(--bv-pad);background:var(--wcm-dialog);color:var(--wcm-text);border-bottom:1px solid var(--wcm-divider)}" +
        ".bv-head::before{content:'';position:absolute;left:0;top:0;right:0;height:4px;background:linear-gradient(90deg,var(--type),color-mix(in srgb,var(--type) 55%,transparent) 60%,transparent)}" +
        ".bv-close-x{position:absolute;top:14px;right:14px}" +
        ".bv-kicker{display:flex;align-items:center;flex-wrap:wrap;gap:6px 10px;font-size:.8125rem;color:var(--wcm-muted);min-width:0}" +
        ".bv-type{display:inline-flex;align-items:center;gap:6px;padding:2px 10px 2px 4px;border-radius:999px;background:var(--wcm-tonal);color:var(--wcm-text);font-size:.75rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}" +
        ".bv-type i{width:14px;height:14px;border-radius:50%;background:var(--type);box-shadow:inset 0 0 0 1px rgba(0,0,0,.25),inset 0 2px 2px rgba(255,255,255,.25)}" +
        ".bv-producer{font-weight:600;color:var(--wcm-text);letter-spacing:.02em}" +
        ".bv-title{margin:6px 0 0;font-family:var(--wcm-font-display);font-size:var(--wcm-fs-xl);font-weight:600;line-height:1.18;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow-wrap:break-word}" +
        ".bv-sub{margin-top:4px;font-size:.875rem;color:var(--wcm-muted);display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px}" +
        ".bv-sub b{color:var(--wcm-text);font-weight:700;font-variant-numeric:tabular-nums}" +
        ".bv-dot{color:var(--wcm-muted)}" +
        ".bv-statusline{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;margin-top:12px}" +
        ".bv-status{display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px 0 5px;border-radius:999px;background:color-mix(in srgb,var(--status,var(--wcm-none)) 14%,var(--wcm-dialog));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--status,var(--wcm-none)) 40%,transparent);font-size:.875rem;font-weight:600;color:var(--wcm-text);font-variant-numeric:tabular-nums}" +
        ".bv-status .bt-glyph{width:20px;height:20px}" +
        ".bv-status .bt-glyph svg{width:13px;height:13px}" +
        ".bv-years{font-weight:500;color:var(--wcm-muted)}" +
        ".bv-stars{font-size:1rem;letter-spacing:2px;color:color-mix(in srgb,#f5b400 60%,var(--wcm-text));line-height:1}" +
        ".bv-stars .off{color:color-mix(in srgb,var(--wcm-text) 20%,transparent)}" +
        ".bv-body{display:grid;grid-template-columns:minmax(300px,380px) minmax(0,1fr);gap:22px 26px;padding:20px var(--bv-pad) 24px;overflow:auto;min-height:0;align-items:start}" +
        ".bv-side,.bv-main{display:flex;flex-direction:column;gap:18px;min-width:0}" +
        /* Hero: a lit niche, the bottle wearing its label, the full label beside it. */
        ".bv-hero{--wcm-text:#f2ebe4;--wcm-muted:#b9aca2;--wcm-surface:#241c18;position:relative;height:320px;border-radius:18px;overflow:hidden;isolation:isolate;display:flex;align-items:flex-end;justify-content:center;gap:14px;padding:16px 18px 14px;color:#f2ebe4;background:radial-gradient(70% 52% at 30% -4%,rgba(255,214,170,.26),transparent 70%),radial-gradient(60% 30% at 30% 104%,color-mix(in srgb,var(--type) 45%,transparent),transparent 80%),linear-gradient(#1f1714,#0f0b09);box-shadow:inset 0 0 0 1px rgba(255,240,225,.08),inset 0 -40px 50px -30px rgba(0,0,0,.7),0 10px 24px -14px rgba(0,0,0,.6)}" +
        ".bv-hero::before{content:'';position:absolute;left:0;right:0;bottom:0;height:22%;z-index:-1;background:linear-gradient(rgba(107,74,49,0),rgba(107,74,49,.35));clip-path:polygon(6% 0,94% 0,100% 100%,0 100%)}" +
        ".bv-hero.bv-theme{--wcm-text:var(--primary-text-color,#212121);--wcm-muted:var(--secondary-text-color,#727272);--wcm-surface:var(--wcm-dialog);color:var(--wcm-text);background:radial-gradient(60% 30% at 30% 104%,color-mix(in srgb,var(--type) 30%,transparent),transparent 80%),var(--wcm-tonal);box-shadow:none}" +
        ".bv-hero .bt-bottle{flex:0 0 auto;height:100%;width:auto;filter:drop-shadow(0 8px 8px rgba(0,0,0,.55))}" +
        ".bv-hero .bt-bottle .bt-rim{stroke:rgba(255,240,225,.38)}" +
        ".bv-hero.bv-theme .bt-bottle .bt-rim{stroke:color-mix(in srgb,var(--wcm-text) 34%,transparent)}" +
        ".bv-plate{position:relative;flex:1 1 auto;max-width:440px;align-self:stretch;min-width:0;display:flex;align-items:center;justify-content:center}" +
        ".bv-plate a{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:10px;outline:none}" +
        ".bv-plate a:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        ".bv-plate img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:0 12px 24px -10px rgba(0,0,0,.8),0 0 0 1px rgba(255,255,255,.06);transition:transform .2s ease-out}" +
        ".bv-plate a:hover img{transform:translateY(-2px) scale(1.01)}" +
        ".bv-expand{position:absolute;right:4px;bottom:4px;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:rgba(15,11,9,.7);color:#fff;pointer-events:none}" +
        ".bv-expand svg{width:16px;height:16px;fill:currentColor}" +
        ".bv-addphoto,.bv-missing{flex:1 1 auto;max-width:440px;align-self:stretch;flex-direction:column;align-items:center;justify-content:center;gap:10px;margin:0;padding:12px;border-radius:14px;color:var(--wcm-text);text-align:center}" +
        ".bv-addphoto{display:flex;border:1.5px dashed color-mix(in srgb,var(--wcm-text) 36%,transparent);background:color-mix(in srgb,var(--wcm-text) 5%,transparent);font:inherit;font-size:.875rem;font-weight:600;cursor:pointer;transition:background-color .15s ease-out,border-color .15s ease-out}" +
        ".bv-addphoto svg,.bv-missing svg{width:30px;height:30px;opacity:.9}" +
        ".bv-addphoto:hover{background:color-mix(in srgb,var(--wcm-text) 10%,transparent);border-color:color-mix(in srgb,var(--wcm-text) 60%,transparent)}" +
        ".bv-addphoto:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        /* A saved label that cannot be loaded: the drawn bottle keeps its paper label and the plate says so,
           instead of offering to add a photo. */
        ".bv-missing{display:none;gap:8px;background:color-mix(in srgb,var(--wcm-text) 5%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-text) 16%,transparent)}" +
        ".bv-missing b{font-size:.875rem;font-weight:600}" +
        ".bv-missing small{font-size:.75rem;color:var(--wcm-muted);max-width:22ch;line-height:1.35}" +
        ".bv-missing .btn{height:34px;margin-top:4px;padding:0 14px;font-size:.8125rem}" +
        ".bv-hero.no-photo .bv-plate,.bv-hero:not(.no-photo) .bv-addphoto,.bv-hero.photo-missing .bv-plate{display:none}" +
        ".bv-hero.photo-missing .bv-missing{display:flex}" +
        ".bv-needs{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:start;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--wcm-accent) 10%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-accent) 35%,transparent)}" +
        ".bv-needs .bt-glyph{width:22px;height:22px;grid-row:span 2}" +
        ".bv-needs .bt-glyph svg{width:14px;height:14px}" +
        ".bv-needs strong{font-size:.875rem}" +
        ".bv-needs p{margin:0;font-size:.8125rem;color:var(--wcm-muted);line-height:1.4}" +
        ".bv-needs .btn{grid-column:2;justify-self:start;margin-top:6px}" +
        ".bv-location{display:grid;gap:12px;padding:16px;border-radius:16px;background:var(--wcm-tonal)}" +
        ".bv-where{display:flex;align-items:flex-start;gap:12px}" +
        ".bv-where > svg{flex:0 0 auto;width:22px;height:22px;margin-top:2px;color:var(--wcm-accent)}" +
        ".bv-where-main{font-size:1rem;font-weight:600;line-height:1.3}" +
        ".bv-sep{margin:0 6px;color:var(--wcm-muted);font-weight:400}" +
        ".bv-where-sub{margin-top:2px;font-size:.875rem;color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".bv-map{display:flex;justify-content:center;overflow-x:auto;padding:2px}" +
        ".bv-similar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:12px;border-top:1px solid var(--wcm-divider);font-size:.875rem;color:var(--wcm-muted)}" +
        ".bv-similar b{color:var(--wcm-text);font-variant-numeric:tabular-nums}" +
        ".bv-section{display:grid;gap:12px}" +
        ".detail-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px 18px}" +
        ".meta-item strong{display:block;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--wcm-muted);margin-bottom:3px}" +
        ".meta-item div{font-size:.95rem;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}" +
        ".window-block{display:grid;gap:10px}" +
        ".window-head{display:flex;align-items:center;flex-wrap:wrap;gap:8px 10px}" +
        ".window-years{font-size:1.05rem;font-weight:600;font-variant-numeric:tabular-nums}" +
        ".window-track{position:relative;height:10px;border-radius:5px;background:var(--wcm-tonal-strong)}" +
        ".window-span{position:absolute;top:0;bottom:0;border-radius:5px;background:var(--status)}" +
        ".window-now{position:absolute;top:-5px;bottom:-5px;width:3px;margin-left:-1.5px;border-radius:2px;background:var(--wcm-text);box-shadow:0 0 0 2px var(--wcm-dialog)}" +
        ".window-scale{position:relative;display:flex;justify-content:space-between;font-size:.72rem;color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".window-scale b{position:absolute;top:0;transform:translateX(-50%);color:var(--wcm-text);font-weight:600}" +
        ".notes-box{padding:14px;border-radius:14px;background:var(--wcm-tonal)}" +
        ".notes-text{white-space:pre-wrap;line-height:1.5;margin-top:6px}" +
        /* Footer: every action is rendered once; on narrow screens the secondary ones fold into "More". */
        ".bv-actions{position:relative;display:flex;align-items:center;gap:8px;padding:12px var(--bv-pad);border-top:1px solid var(--wcm-divider);background:var(--wcm-dialog)}" +
        ".bv-actions .btn svg{width:18px;height:18px}" +
        ".bv-menu{display:contents}" +
        ".bv-more-toggle{display:none !important}" +
        ".bv-spacer{flex:1 1 auto}" +
        ".bv-actions .btn.bv-danger{background:transparent;color:var(--wcm-danger)}" +
        ".bv-actions .btn.bv-danger:hover{background:color-mix(in srgb,var(--wcm-danger) 12%,transparent)}" +
        ".bv-actions .btn.bv-quiet{background:transparent;box-shadow:inset 0 0 0 1px var(--wcm-divider)}" +
        ".bv-actions .btn.bv-quiet:hover{background:var(--wcm-tonal)}" +
        "@media (max-width:820px){.wine-view-modal{--bv-pad:16px}.bv-body{grid-template-columns:minmax(0,1fr);gap:16px;padding-top:16px}.bv-side,.bv-main{display:contents}.bv-hero{order:1;height:220px;padding:12px 14px 10px}.bv-needs{order:2}.bv-location{order:3}.bv-window{order:4}.bv-details{order:5}.bv-extra{order:6}.bv-head{padding:16px 56px 14px var(--bv-pad)}.bv-close-x{top:10px;right:8px}.bv-title{font-size:var(--wcm-fs-lg)}.bv-statusline{margin-top:10px}}" +
        "@media (max-width:820px){.bv-more-toggle{display:inline-flex !important}.bv-menu{display:none;position:absolute;left:12px;bottom:calc(100% + 6px);z-index:5;min-width:220px;flex-direction:column;align-items:stretch;gap:2px;padding:6px;border-radius:14px;background:var(--wcm-dialog);box-shadow:0 0 0 1px var(--wcm-divider),0 16px 32px -8px rgba(0,0,0,.45)}.bv-menu.open{display:flex}.bv-actions .bv-menu .btn{justify-content:flex-start;width:100%;height:44px;border-radius:10px;background:transparent;box-shadow:none;padding:0 12px}.bv-actions .bv-menu .btn:hover,.bv-actions .bv-menu .btn:focus-visible{background:var(--wcm-tonal)}.bv-actions .bv-menu .btn.bv-danger{margin-top:3px;border-top:1px solid var(--wcm-divider);border-radius:0 0 10px 10px;color:var(--wcm-danger)}.bv-actions .bv-close-btn{display:none}.bv-actions .bv-primary{height:44px;padding:0 22px}.bv-actions .bv-more-toggle{order:-1;flex:0 0 44px;width:44px;height:44px;padding:0}}" +
        /* Wider screens fold the same way when the row does not fit (a long language, a narrow window): _fitBottleFooter sets .is-folded. */
        ".bv-actions.is-folded .bv-more-toggle{display:inline-flex !important;order:-1;flex:0 0 40px;width:40px;padding:0}" +
        ".bv-actions.is-folded .bv-menu{display:none;position:absolute;left:12px;bottom:calc(100% + 6px);z-index:5;min-width:220px;flex-direction:column;align-items:stretch;gap:2px;padding:6px;border-radius:14px;background:var(--wcm-dialog);box-shadow:0 0 0 1px var(--wcm-divider),0 16px 32px -8px rgba(0,0,0,.45)}" +
        ".bv-actions.is-folded .bv-menu.open{display:flex}" +
        ".bv-actions.is-folded .bv-menu .btn{justify-content:flex-start;width:100%;height:44px;border-radius:10px;background:transparent;box-shadow:none;padding:0 12px}" +
        ".bv-actions.is-folded .bv-menu .btn:hover,.bv-actions.is-folded .bv-menu .btn:focus-visible{background:var(--wcm-tonal)}" +
        ".bv-actions.is-folded .bv-menu .btn.bv-danger{margin-top:3px;border-top:1px solid var(--wcm-divider);border-radius:0 0 10px 10px;color:var(--wcm-danger)}" +
        "@media (max-width:600px){.bv-spacer{display:none}.bv-actions .bv-primary{flex:1 1 0}}" +
        "@media (max-width:420px){.bv-hero{height:184px;gap:10px}}" +
        "@media (prefers-reduced-motion:reduce){.bv-plate img,.bv-addphoto{transition:none}.bv-plate a:hover img{transform:none}}" +


        /* Add / edit sheet and cellar editor: a header, a scrolling body and a pinned footer. On phones the
           sheet rises from the bottom; the add sheet opens on a capture step of its own (stage-capture), then
           shows the whole form (stage-review). */
        ".sr-only{position:absolute !important;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}" +
        ".only-touch{display:none !important}" +
        "@media (max-width:600px),(pointer:coarse){.only-fine{display:none !important}span.only-touch{display:inline !important}.btn.only-touch{display:inline-flex !important}}" +
        ".modal-backdrop.sheet-backdrop{padding:24px;background:rgba(12,9,8,.56)}" +
        ".modal.sheet{--sheet-field:color-mix(in srgb,var(--wcm-text) 4.5%,transparent);--sheet-field-2:color-mix(in srgb,var(--wcm-text) 8%,transparent);--sheet-line:color-mix(in srgb,var(--wcm-text) 13%,transparent);--sheet-line-2:color-mix(in srgb,var(--wcm-text) 24%,transparent);--sheet-soft:color-mix(in srgb,var(--wcm-text) 2.5%,transparent);--sheet-link:color-mix(in srgb,var(--wcm-accent) 62%,var(--wcm-text));--sheet-err:color-mix(in srgb,var(--wcm-danger) 82%,var(--wcm-text));width:min(1080px,100%);max-height:min(94vh,1000px);padding:0;overflow:hidden;display:flex;flex-direction:column;border-radius:22px;box-shadow:0 30px 70px -20px rgba(0,0,0,.55),0 0 0 1px color-mix(in srgb,var(--wcm-text) 8%,transparent)}" +
        ".sheet svg{fill:currentColor}" +
        ".sheet-head{position:relative;flex:0 0 auto;display:flex;align-items:center;gap:14px;padding:20px 14px 16px 22px;border-bottom:1px solid var(--wcm-divider)}" +
        ".sheet-head::before{content:'';position:absolute;left:0;right:0;top:0;height:4px;background:var(--sheet-type,var(--wcm-accent))}" +
        ".builder .sheet-head::before{background:var(--mat,var(--wcm-accent))}" +
        ".sheet-hbottle{width:20px;height:50px;flex:0 0 auto;filter:drop-shadow(0 2px 3px rgba(0,0,0,.25))}" +
        ".sheet-hbottle .g{fill:var(--sheet-type);stroke:color-mix(in srgb,var(--wcm-text) 35%,transparent);stroke-width:1.2}" +
        ".sheet-hbottle .l{fill:rgba(255,255,255,.88)}" +
        ".sheet-hbottle .k{fill:rgba(0,0,0,.35)}" +
        ".sheet-htext{flex:1 1 auto;min-width:0}" +
        ".sheet-title{margin:0;font-family:var(--wcm-font-display);font-size:var(--wcm-fs-xl);font-weight:600;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".sheet-dest{display:flex;align-items:center;gap:6px;margin-top:5px;font-size:var(--wcm-fs-sm);color:var(--wcm-muted);min-width:0;font-variant-numeric:tabular-nums}" +
        ".sheet-dest[hidden]{display:none}" +
        ".sheet-dest span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".sheet-dest svg{width:15px;height:15px;flex:0 0 auto;color:var(--sheet-link)}" +
        ".sheet-form{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;margin:0}" +
        ".sheet-scroll{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain}" +
        ".sheet-grid{display:grid;grid-template-columns:348px minmax(0,1fr);grid-template-rows:auto 1fr;grid-template-areas:'photo main' 'place main';align-items:start;gap:26px 32px;padding:22px 24px 28px}" +
        ".sheet-photo{grid-area:photo;display:grid;gap:10px;min-width:0}" +
        ".sheet-main{grid-area:main;display:grid;gap:22px;min-width:0}" +
        ".sheet-place{grid-area:place;display:grid;gap:12px;min-width:0}" +
        ".sheet-sec{display:grid;gap:16px;min-width:0}" +
        ".sheet-main,.sheet-sec,.sheet-fld,.sheet-more-b,.sheet-photo,.sheet-place{grid-template-columns:minmax(0,1fr)}" +
        ".sheet-sec-t{display:flex;align-items:center;gap:8px;margin:0;font-size:var(--wcm-fs-xs);font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--wcm-muted)}" +
        ".sheet-sec-t svg{width:16px;height:16px;flex:0 0 auto;color:var(--sheet-link)}" +
        ".sheet-sec-t svg[viewBox=\"0 0 40 100\"]{width:10px}" +
        /* Fields. A field filled from the label or the cellar carries a mark and a tint until it is changed. */
        ".sheet-fld{display:grid;gap:6px;min-width:0;position:relative}" +
        ".sheet-lrow{display:flex;align-items:center;gap:8px;min-height:20px}" +
        ".sheet-lbl{font-size:var(--wcm-fs-sm);font-weight:500;color:var(--wcm-muted)}" +
        ".sheet-req{color:var(--sheet-err);margin-left:3px}" +
        ".sheet-mark{display:none;margin-left:auto;align-items:center;gap:4px;padding:1px 8px 1px 6px;border-radius:999px;background:color-mix(in srgb,var(--wcm-accent) 13%,transparent);color:var(--sheet-link);font-size:var(--wcm-fs-xs);font-weight:600;white-space:nowrap}" +
        ".sheet-mark svg{width:12px;height:12px}" +
        ".sheet-fld.is-filled>.sheet-lrow .sheet-mark{display:inline-flex}" +
        ".sheet-in{width:100%;height:44px;padding:0 14px;border-radius:12px;border:1px solid var(--sheet-line);background:var(--sheet-field);color:var(--wcm-text);font:inherit;font-size:.9375rem;outline:none;transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease;-moz-appearance:textfield}" +
        ".sheet-in::placeholder{color:var(--wcm-muted);opacity:.75}" +
        ".sheet-sel{position:relative;display:grid;width:min(100%,340px)}" +
        ".sheet-sel::after{content:'';position:absolute;right:17px;top:50%;width:7px;height:7px;margin-top:-6px;border-right:2px solid var(--wcm-muted);border-bottom:2px solid var(--wcm-muted);transform:rotate(45deg);pointer-events:none}" +
        "select.sheet-in{appearance:none;-webkit-appearance:none;padding-right:42px;cursor:pointer;text-overflow:ellipsis}" +
        ".sheet-in:hover{border-color:var(--sheet-line-2)}" +
        ".sheet-in:focus{border-color:var(--wcm-accent);background:var(--wcm-dialog);box-shadow:0 0 0 3px color-mix(in srgb,var(--wcm-accent) 20%,transparent)}" +
        ".sheet-in::-webkit-outer-spin-button,.sheet-in::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}" +
        "textarea.sheet-in{height:auto;min-height:88px;padding:10px 14px;line-height:1.45;resize:vertical}" +
        ".sheet-in-display{height:52px;font-family:var(--wcm-font-display);font-size:var(--wcm-fs-lg);font-weight:600}" +
        ".sheet-num{font-variant-numeric:tabular-nums}" +
        ".sheet-fld.is-filled .sheet-in{border-color:color-mix(in srgb,var(--wcm-accent) 42%,var(--sheet-line));background:color-mix(in srgb,var(--wcm-accent) 6%,var(--sheet-field))}" +
        ".sheet-fld.is-invalid .sheet-in,.sheet-fld.is-invalid .sheet-types{border-color:var(--wcm-danger);box-shadow:0 0 0 3px color-mix(in srgb,var(--wcm-danger) 15%,transparent)}" +
        ".sheet-err{display:flex;align-items:center;gap:6px;font-size:var(--wcm-fs-sm);font-weight:500;color:var(--sheet-err)}" +
        ".sheet-err[hidden]{display:none}" +
        ".sheet-err svg{width:15px;height:15px;flex:0 0 auto}" +
        ".sheet-affix{position:relative}" +
        ".sheet-affix .sheet-in{padding-right:54px}" +
        ".sheet-affix b{position:absolute;right:13px;top:50%;transform:translateY(-50%);font-size:var(--wcm-fs-sm);font-weight:600;color:var(--wcm-muted);pointer-events:none}" +
        ".sheet-2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px}" +
        ".sheet-2.sheet-vint{grid-template-columns:minmax(0,1fr) 124px}" +
        ".sheet-inline{display:flex;gap:8px}" +
        ".sheet-inline .btn{height:44px;flex:0 0 auto}" +
        ".sheet-fld.is-shimmer .sheet-in{color:transparent;background:linear-gradient(100deg,var(--sheet-field) 30%,color-mix(in srgb,var(--wcm-accent) 18%,var(--sheet-field)) 50%,var(--sheet-field) 70%) 0 0/300% 100%;animation:sheet-shimmer 1.3s linear infinite}" +
        ".sheet-fld.is-shimmer .sheet-in::placeholder{color:transparent}" +
        ".sheet-fld.is-shimmer .sheet-types{opacity:.55}" +
        "@keyframes sheet-shimmer{from{background-position:100% 0}to{background-position:0 0}}" +
        /* Suggestions: wines already in the cellar or drunk before. */
        ".sheet-combo{position:relative}" +
        ".sheet-list{position:absolute;z-index:30;left:0;right:0;top:calc(100% + 6px);max-height:300px;overflow-y:auto;padding:6px;border-radius:14px;background:var(--wcm-dialog);border:1px solid var(--sheet-line);box-shadow:0 18px 40px -12px rgba(0,0,0,.45)}" +
        ".sheet-list[hidden]{display:none}" +
        ".sheet-opt{display:flex;align-items:center;gap:12px;padding:8px 10px;border-radius:10px;cursor:pointer;min-height:44px}" +
        ".sheet-opt.is-active,.sheet-opt:hover{background:var(--sheet-field-2)}" +
        ".sheet-opt-thumb{position:relative;width:28px;height:38px;border-radius:6px;flex:0 0 auto;overflow:hidden;background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.45),rgba(255,255,255,0) 45%),var(--type);box-shadow:inset 0 0 0 1px rgba(0,0,0,.18)}" +
        ".sheet-opt-thumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}" +
        ".sheet-opt-main{flex:1 1 auto;min-width:0;display:grid;gap:1px}" +
        ".sheet-opt-t{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".sheet-opt-s{font-size:var(--wcm-fs-sm);color:var(--wcm-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".sheet-opt-b{flex:0 0 auto;font-size:var(--wcm-fs-xs);font-weight:600;padding:2px 8px;border-radius:999px;background:var(--sheet-field-2);color:var(--wcm-text);font-variant-numeric:tabular-nums;white-space:nowrap}" +
        ".sheet-opt-b.is-past{background:transparent;color:var(--wcm-muted);box-shadow:inset 0 0 0 1px var(--sheet-line)}" +
        ".sheet-opt mark{background:none;color:inherit;text-decoration:underline;text-decoration-color:color-mix(in srgb,var(--wcm-accent) 75%,transparent);text-decoration-thickness:2px;text-underline-offset:3px}" +
        ".sheet-dup{display:flex;align-items:center;gap:7px;font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".sheet-dup[hidden]{display:none}" +
        ".sheet-dup svg{width:15px;height:15px;flex:0 0 auto;color:var(--sheet-link)}" +
        /* Wine type: colour swatches. */
        ".sheet-types{display:flex;flex-wrap:wrap;gap:8px;border-radius:14px}" +
        ".sheet-type{position:relative;display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 13px 0 8px;border-radius:999px;border:1px solid var(--sheet-line);color:var(--wcm-text);font-size:var(--wcm-fs-md);font-weight:500;cursor:pointer;user-select:none;transition:border-color .15s ease,background-color .15s ease,box-shadow .15s ease}" +
        ".sheet-type:hover{border-color:var(--sheet-line-2)}" +
        ".sheet-type-dot{width:18px;height:18px;border-radius:50%;flex:0 0 auto;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.55),rgba(255,255,255,0) 45%),var(--sw);box-shadow:inset 0 0 0 1px rgba(0,0,0,.22)}" +
        ".sheet-type.on{border-color:var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 11%,transparent);box-shadow:inset 0 0 0 1px var(--wcm-accent);font-weight:600}" +
        ".sheet-type:has(input:focus-visible){outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        /* More details. */
        ".sheet-more{border:1px solid var(--sheet-line);border-radius:16px;background:var(--sheet-soft)}" +
        ".sheet-more>summary{list-style:none;display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;border-radius:16px;user-select:none}" +
        ".sheet-more>summary::-webkit-details-marker{display:none}" +
        ".sheet-more>summary:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        ".sheet-more-t{font-weight:600;font-size:.9375rem;white-space:nowrap}" +
        ".sheet-more-h{flex:1 1 auto;min-width:0;font-size:var(--wcm-fs-sm);color:var(--wcm-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".sheet-chev{display:inline-flex;color:var(--wcm-muted);transition:transform .2s ease-out}" +
        ".sheet-chev svg{width:18px;height:18px}" +
        ".sheet-more[open] .sheet-chev{transform:rotate(180deg)}" +
        ".sheet-more-b{display:grid;gap:18px;padding:2px 16px 18px}" +
        /* Rating stars. */
        ".sheet-stars{display:flex;align-items:center;gap:2px;flex-wrap:wrap}" +
        ".sheet-star{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;cursor:pointer;color:color-mix(in srgb,var(--wcm-text) 20%,transparent)}" +
        ".sheet-star svg{width:27px;height:27px;transition:transform .12s ease-out,color .12s ease-out}" +
        ".sheet-star.on{color:var(--wcm-star)}" +
        ".sheet-star.hov{color:color-mix(in srgb,var(--wcm-star) 70%,transparent)}" +
        ".sheet-star:hover svg{transform:scale(1.12)}" +
        ".sheet-star:has(input:focus-visible),.sheet-star-none:has(input:focus-visible){outline:2px solid var(--wcm-accent);outline-offset:1px}" +
        ".sheet-star-none{display:inline-flex;align-items:center;height:30px;padding:0 11px;margin-right:6px;border-radius:999px;border:1px solid var(--sheet-line);font-size:var(--wcm-fs-sm);color:var(--wcm-muted);cursor:pointer}" +
        ".sheet-star-none.on{border-color:var(--sheet-line-2);color:var(--wcm-text);background:var(--sheet-field)}" +
        /* Drinking window: the years and a live timeline with the status glyph. */
        ".sheet-win{display:grid;grid-template-columns:auto minmax(0,1fr);gap:18px;align-items:center}" +
        ".sheet-win-in{display:flex;align-items:center;gap:6px}" +
        ".sheet-year{width:82px;text-align:center;padding:0 8px}" +
        ".sheet-win-dash{color:var(--wcm-muted)}" +
        ".sheet-tl{display:grid;gap:6px;min-width:0}" +
        ".sheet-tl-track{position:relative;height:8px;border-radius:4px;background:var(--sheet-field-2)}" +
        ".sheet-tl-span{position:absolute;top:0;bottom:0;border-radius:4px;background:var(--status)}" +
        ".sheet-tl-now{position:absolute;top:-4px;bottom:-4px;width:2px;margin-left:-1px;border-radius:1px;background:var(--wcm-text);box-shadow:0 0 0 2px var(--wcm-dialog)}" +
        ".sheet-tl-scale{position:relative;display:flex;justify-content:space-between;height:16px;font-size:var(--wcm-fs-xs);color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".sheet-tl-scale b{position:absolute;top:0;transform:translateX(-50%);font-weight:600;color:var(--wcm-text)}" +
        ".sheet-tl-st{display:flex;align-items:center;gap:8px;font-size:var(--wcm-fs-sm);font-weight:600}" +
        ".sheet-tl.is-none .sheet-tl-st{color:var(--wcm-muted);font-weight:500}" +
        /* The label tile: a camera prompt, or the photo on a dark stage with its tools. */
        ".sheet-tile{position:relative;display:grid;gap:14px;justify-items:center;text-align:center;padding:18px;border-radius:18px;border:1.5px dashed var(--sheet-line-2);background:radial-gradient(120% 80% at 50% 0%,color-mix(in srgb,var(--wcm-accent) 8%,transparent),rgba(0,0,0,0) 65%),var(--sheet-soft);transition:border-color .15s ease,background-color .15s ease}" +
        ".sheet-tile.is-drag{border-color:var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 10%,transparent)}" +
        ".sheet-frame{position:relative;width:100%;height:200px;display:grid;place-items:center;border-radius:12px;overflow:hidden}" +
        ".sheet-illus{height:160px;width:auto;color:var(--wcm-muted)}" +
        ".sheet-illus .b{fill:color-mix(in srgb,var(--wcm-text) 4%,transparent);stroke:currentColor;stroke-width:1.5;stroke-linejoin:round}" +
        ".sheet-illus .k{fill:color-mix(in srgb,var(--wcm-text) 12%,transparent);stroke:currentColor;stroke-width:1.5}" +
        ".sheet-illus .l{fill:var(--wcm-dialog);stroke:currentColor;stroke-width:1.5}" +
        ".sheet-illus .t{fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;opacity:.55}" +
        ".sheet-illus .c{fill:none;stroke:var(--wcm-accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}" +
        ".sheet-tile.has-img{border-style:solid;border-color:var(--sheet-line);background:var(--sheet-soft);padding:10px 10px 12px}" +
        ".sheet-tile.has-img .sheet-frame{height:300px;background:radial-gradient(90% 70% at 50% 40%,#2a221e,#120e0c);box-shadow:inset 0 0 0 1px rgba(255,255,255,.05)}" +
        ".sheet-img{max-width:calc(100% - 24px);max-height:calc(100% - 24px);object-fit:contain;display:block;border-radius:4px;box-shadow:0 10px 24px -8px rgba(0,0,0,.7)}" +
        ".sheet-tile-body{display:grid;gap:12px;justify-items:center;width:100%;min-width:0}" +
        ".sheet-tile-t{font-size:var(--wcm-fs-base);font-weight:600}" +
        ".sheet-tile-s{font-size:var(--wcm-fs-sm);color:var(--wcm-muted);max-width:32ch;line-height:1.45}" +
        ".sheet-tile-a{display:grid;gap:8px;width:100%}" +
        ".sheet-tile-a .btn{width:100%;height:44px}" +
        ".sheet-tile-drop{font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".sheet-tools{display:flex;justify-content:center;gap:2px;flex-wrap:wrap}" +
        ".sheet-tool{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 11px;border-radius:999px;border:none;background:transparent;color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-sm);font-weight:500;cursor:pointer}" +
        ".sheet-tool:hover{background:var(--sheet-field-2)}" +
        ".sheet-tool svg{width:16px;height:16px;flex:0 0 auto}" +
        ".sheet-tool.is-accent{color:var(--sheet-link);font-weight:600}" +
        ".sheet-scan{position:absolute;inset:0;pointer-events:none;display:none}" +
        ".sheet-tile.is-busy .sheet-scan{display:block;background:linear-gradient(180deg,rgba(0,0,0,0) 0,color-mix(in srgb,var(--wcm-accent) 35%,transparent) 46%,rgba(255,255,255,.75) 50%,color-mix(in srgb,var(--wcm-accent) 35%,transparent) 54%,rgba(0,0,0,0) 100%) 0 0/100% 34% no-repeat;animation:sheet-scan 1.5s ease-in-out infinite alternate}" +
        "@keyframes sheet-scan{from{background-position:0 -30%}to{background-position:0 130%}}" +
        ".sheet-busy{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:inline-flex;align-items:center;gap:8px;padding:6px 13px 6px 10px;border-radius:999px;background:rgba(18,14,12,.84);color:#f5efe9;font-size:var(--wcm-fs-sm);font-weight:600;white-space:nowrap}" +
        ".sheet-spin{width:14px;height:14px;flex:0 0 auto;border-radius:50%;border:2px solid rgba(255,255,255,.28);border-top-color:#fff;animation:sheet-spin .8s linear infinite}" +
        "@keyframes sheet-spin{to{transform:rotate(360deg)}}" +
        ".sheet-photo-links{display:flex;justify-content:center;gap:2px;flex-wrap:wrap}" +
        ".sheet-tile.has-img~.sheet-photo-links [data-sheet-instead]{display:none}" +
        ".sheet-link{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 11px;border:none;border-radius:999px;background:none;color:var(--sheet-link);font:inherit;font-size:var(--wcm-fs-md);font-weight:600;cursor:pointer}" +
        ".sheet-link:hover{background:color-mix(in srgb,var(--wcm-accent) 10%,transparent)}" +
        ".sheet-link svg{width:16px;height:16px;flex:0 0 auto}" +
        ".sheet-link.is-muted{color:var(--wcm-muted);font-weight:500}" +
        ".sheet-link:focus-visible,.sheet-tool:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:1px}" +
        /* The note above the wine's fields (label being read, what was filled, with Undo). */
        ".sheet-note{display:flex;align-items:center;gap:10px;padding:9px 10px 9px 12px;border-radius:12px;background:color-mix(in srgb,var(--wcm-accent) 9%,transparent);border:1px solid color-mix(in srgb,var(--wcm-accent) 24%,transparent);font-size:var(--wcm-fs-sm);line-height:1.4}" +
        ".sheet-note[hidden]{display:none}" +
        ".sheet-note>svg{width:17px;height:17px;flex:0 0 auto;color:var(--sheet-link)}" +
        ".sheet-note .sheet-spin{border-color:color-mix(in srgb,var(--wcm-accent) 30%,transparent);border-top-color:var(--wcm-accent)}" +
        ".sheet-note-t{flex:1 1 auto;min-width:0}" +
        ".sheet-note .sheet-link{height:28px;margin:-4px 0;padding:0 10px}" +
        ".sheet-note.is-warn{background:color-mix(in srgb,var(--wcm-peak) 11%,transparent);border-color:color-mix(in srgb,var(--wcm-peak) 32%,transparent)}" +
        ".sheet-note.is-warn>svg{color:color-mix(in srgb,var(--wcm-peak) 70%,var(--wcm-text))}" +
        /* −/+ steppers (bottle quantity, shelf slots). */
        ".stepper{display:inline-flex;align-items:center;gap:2px;padding:3px;border-radius:999px;background:var(--sheet-field);border:1px solid var(--sheet-line)}" +
        ".stepper:focus-within{border-color:var(--wcm-accent)}" +
        ".stepper-b{display:grid;place-items:center;width:34px;height:34px;padding:0;border:none;border-radius:50%;background:transparent;color:var(--wcm-text);cursor:pointer}" +
        ".stepper-b svg{width:18px;height:18px}" +
        ".stepper-b:hover:not(:disabled){background:var(--sheet-field-2)}" +
        ".stepper-b:disabled{opacity:.3;cursor:default}" +
        ".stepper-b:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:1px}" +
        ".stepper-v{display:grid;place-items:center;width:40px;height:34px;padding:0;border:none;background:transparent;color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-base);font-weight:700;text-align:center;font-variant-numeric:tabular-nums;outline:none;-moz-appearance:textfield}" +
        ".stepper-v::-webkit-inner-spin-button,.stepper-v::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}" +
        ".stepper.small .stepper-b{width:30px;height:30px}" +
        ".stepper.small .stepper-v{width:34px;height:30px;font-size:.9375rem}" +
        /* A cellar finish drawn as its material (the frame of its cabinet). */
        ".mat-chip{display:inline-block;flex:0 0 auto;background:var(--mat,#555);box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 0 -1px 0 rgba(0,0,0,.25),0 0 0 1px rgba(0,0,0,.16)}" +
        /* Where it goes: cellar chips, then the cellar as a small cabinet whose free slots are buttons. */
        ".pk{display:grid;gap:12px;min-width:0}" +
        ".pk-tabs{display:flex;flex-wrap:wrap;gap:6px}" +
        ".pk-tab{flex:0 0 auto;display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px 0 9px;border-radius:999px;border:1px solid var(--sheet-line);background:transparent;color:var(--wcm-text);font:inherit;font-size:var(--wcm-fs-sm);font-weight:500;cursor:pointer;white-space:nowrap}" +
        ".pk-tab .mat-chip{width:12px;height:16px;border-radius:3px}" +
        ".pk-tab:hover:not(:disabled){border-color:var(--sheet-line-2)}" +
        ".pk-tab-n{color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".pk-tab.on{border-color:var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 11%,transparent);box-shadow:inset 0 0 0 1px var(--wcm-accent);font-weight:600}" +
        ".pk-tab:disabled{opacity:.5;cursor:default}" +
        ".pk-tab:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        /* The picker never grows past its column: its slots shrink with the room (--span is the widest row, in slots), down to a size that stays easy to hit, then its shelves scroll inside it. */
        ".pk-cab{display:grid;grid-template-columns:minmax(0,1fr);justify-items:center;min-width:0;container-type:inline-size}" +
        ".cabinet.picker{--slot-w:26px;--slot-gap:8px;--tag-w:38px;display:block;min-width:0;max-width:100%;padding:9px;border-radius:14px}" +
        "@supports (width:1cqw){.cabinet.picker{--fit:clamp(24px,calc((100cqw - 38px - 2 * var(--tag-w)) / var(--span,1)),34px);--slot-w:calc(var(--fit) * .765);--slot-gap:calc(var(--fit) * .235)}}" +
        "@media (pointer:fine){@supports (width:1cqw){.cabinet.picker{--fit:clamp(19px,calc((100cqw - 38px - 2 * var(--tag-w)) / var(--span,1)),34px)}}}" +
        ".cabinet.picker .interior.can-l{-webkit-mask-image:linear-gradient(90deg,transparent,#000 22px);mask-image:linear-gradient(90deg,transparent,#000 22px)}" +
        ".cabinet.picker .interior.can-r{-webkit-mask-image:linear-gradient(270deg,transparent,#000 22px);mask-image:linear-gradient(270deg,transparent,#000 22px)}" +
        ".cabinet.picker .interior.can-l.can-r{-webkit-mask-image:linear-gradient(90deg,transparent,#000 22px,#000 calc(100% - 22px),transparent);mask-image:linear-gradient(90deg,transparent,#000 22px,#000 calc(100% - 22px),transparent)}" +
        ".cabinet.picker::after{inset:9px;border-radius:8px}" +
        ".cabinet.picker .interior{overflow-x:auto;overflow-y:hidden;border-radius:8px}" +
        ".cabinet.picker .shelf{padding:8px 10px 0}" +
        ".cabinet.picker .shelf.two-row .lane-front{margin-top:2px}" +
        ".cabinet.picker .lane-tag{writing-mode:horizontal-tb;transform:none;justify-self:start;font-size:.6875rem;font-weight:500;letter-spacing:0;text-transform:none}" +
        ".cabinet.picker .lane-back .mm-dot{transform:scale(.86)}" +
        ".cabinet.picker .rail{margin:4px -10px 0;height:6px}" +
        ".mm-head{display:flex;align-items:baseline;gap:6px;padding:0 2px 4px;font-size:var(--wcm-fs-xs);color:var(--wcm-muted);font-variant-numeric:tabular-nums;white-space:nowrap}" +
        ".mm-head .mm-n{min-width:10px;opacity:.8}" +
        ".mm-head b{color:var(--wcm-text);font-weight:600;max-width:150px;overflow:hidden;text-overflow:ellipsis}" +
        ".mm-head .mm-free{margin-left:auto;padding-left:12px}" +
        "button.mm-dot{display:grid;place-items:center;margin:0;padding:0;background:rgba(255,240,225,.035);color:#fff;font:inherit;font-size:var(--wcm-fs-xs);font-weight:700;line-height:1;font-variant-numeric:tabular-nums;cursor:pointer;transition:transform .15s ease-out,box-shadow .15s ease-out,background-color .15s ease-out}" +
        "button.mm-dot svg{width:min(15px,62%);height:min(15px,62%)}" +
        ".mm-dot.free{border:1.5px solid rgba(242,235,228,.4)}" +
        ".cabinet.picker button.mm-dot.free:not(.sel):not(.queued):not(.own)::after{content:'';width:4px;height:4px;border-radius:50%;background:rgba(242,235,228,.5)}" +
        ".cabinet.picker.themed button.mm-dot.free:not(.sel):not(.queued):not(.own)::after{background:color-mix(in srgb,var(--wcm-text) 40%,transparent)}" +
        ".mm-dot.free:hover:not(.sel){border-color:var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 24%,transparent)}" +
        ".mm-dot.free:focus-visible{outline:2px solid #fff;outline-offset:2px}" +
        ".mm-dot.own{border:2px solid rgba(255,255,255,.55);background:radial-gradient(circle at 34% 30%,rgba(255,255,255,.45),rgba(255,255,255,0) 38%),var(--type)}" +
        ".mm-dot.queued{border:2px solid var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 38%,transparent)}" +
        ".mm-dot.sel{z-index:2;border:none;background:var(--wcm-accent);color:var(--wcm-on-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--wcm-accent) 35%,transparent),0 0 16px 3px color-mix(in srgb,var(--wcm-accent) 55%,transparent)}" +
        ".cabinet.picker .lane-front .mm-dot.sel{transform:scale(1.08)}" +
        ".cabinet.picker .lane-back .mm-dot.sel{transform:scale(.95)}" +
        "@media (prefers-reduced-motion:no-preference){.mm-dot.sel::before{content:'';position:absolute;inset:-3px;border-radius:50%;box-shadow:0 0 0 2px var(--wcm-accent);animation:sheet-ping 1.8s ease-out infinite}}" +
        "@keyframes sheet-ping{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(1.7)}}" +
        ".cabinet.picker .mm-dot.filled{cursor:help}" +
        /* Theme-coloured interiors (card option interior: theme): free slots drawn in the theme's text colour. */
        ".cabinet.themed .mm-dot:not(.filled){border-color:color-mix(in srgb,var(--wcm-text) 38%,transparent)}" +
        ".cabinet.themed .mm-dot.free:not(.sel):not(.queued):not(.own){background:color-mix(in srgb,var(--wcm-text) 5%,transparent)}" +
        ".cabinet.themed .mm-dot.free:focus-visible{outline-color:var(--wcm-text)}" +
        ".pk-foot{display:grid;gap:10px;min-width:0;padding:12px 14px;border-radius:14px;border:1px solid var(--sheet-line);background:var(--sheet-soft)}" +
        ".pk-read{min-width:0;display:flex;align-items:center;gap:8px;font-size:var(--wcm-fs-md);font-weight:600;line-height:1.35}" +
        ".pk-read svg{width:17px;height:17px;flex:0 0 auto;color:var(--sheet-link)}" +
        ".pk-read.is-peek{color:var(--wcm-muted);font-weight:500}" +
        ".pk-qty{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:10px;border-top:1px solid var(--sheet-line)}" +
        ".pk-qty-l{font-size:var(--wcm-fs-md);font-weight:500}" +
        ".pk-hint{font-size:var(--wcm-fs-sm);color:var(--wcm-muted);line-height:1.4}" +
        ".pk-empty{display:grid;gap:10px;padding:16px;border-radius:14px;background:color-mix(in srgb,var(--wcm-peak) 9%,transparent);border:1px solid color-mix(in srgb,var(--wcm-peak) 30%,transparent)}" +
        ".pk-empty>svg{width:20px;height:20px;color:color-mix(in srgb,var(--wcm-peak) 70%,var(--wcm-text))}" +
        ".pk-empty b{display:block;font-size:.9375rem}" +
        ".pk-empty div>span{font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".pk-empty-a{display:flex;gap:8px;flex-wrap:wrap}" +
        /* The pinned footer. */
        ".sheet-foot{flex:0 0 auto;display:grid;gap:10px;padding:14px 18px 16px 22px;border-top:1px solid var(--wcm-divider);background:var(--wcm-dialog);box-shadow:0 -12px 24px -20px rgba(0,0,0,.4)}" +
        ".sheet-foot .form-error{margin:0;padding:10px 12px;border-radius:12px;font-size:var(--wcm-fs-md)}" +
        ".sheet-foot-row{display:flex;align-items:center;gap:10px}" +
        ".sheet-foot-l{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:8px;font-size:var(--wcm-fs-sm);color:var(--wcm-muted)}" +
        ".sheet-foot-l svg{width:16px;height:16px;flex:0 0 auto}" +
        ".sheet-foot .btn{height:44px;padding:0 20px}" +
        ".sheet-foot .btn.primary{min-width:128px;font-weight:600}" +
        ".sheet-danger{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 12px;border:none;border-radius:999px;background:none;color:var(--sheet-err);font:inherit;font-size:var(--wcm-fs-md);font-weight:600;cursor:pointer}" +
        ".sheet-danger:hover{background:color-mix(in srgb,var(--wcm-danger) 10%,transparent)}" +
        ".sheet-danger svg{width:17px;height:17px;flex:0 0 auto}" +
        ".modal.sheet.is-confirming .sheet-foot{display:none}" +
        ".modal.sheet>.dialog-confirm{position:relative;flex:0 0 auto;margin:0 18px 16px}" +
        /* Cellar editor. */
        ".builder{width:min(1000px,100%)}" +
        ".cb-hglyph{width:34px;height:44px;border-radius:6px;padding:4px}" +
        ".cb-hglyph i{display:block;height:100%;border-radius:3px;background:repeating-linear-gradient(#1c1512 0 8px,#8a5f3c 8px 10px),#1c1512;box-shadow:inset 0 2px 4px rgba(0,0,0,.6)}" +
        ".cb-grid{display:grid;grid-template-columns:minmax(0,1fr) 296px;align-items:start;gap:26px 30px;padding:22px 24px 28px}" +
        ".cb-main{display:grid;gap:22px;min-width:0}" +
        ".cb-side{position:sticky;top:0;display:grid;gap:12px;justify-items:center;padding:16px 14px;border-radius:18px;background:var(--sheet-soft);border:1px solid var(--sheet-line)}" +
        ".cb-side .sheet-sec-t{justify-self:start}" +
        /* The preview and the row minis fit their box however long a row is: their slots shrink with the room (--span, the widest row). */
        ".cb-prev{justify-self:stretch;min-width:0;display:grid;grid-template-columns:minmax(0,1fr);justify-items:center;container-type:inline-size}" +
        ".cabinet.preview{--slot-w:15px;--slot-gap:6px;display:block;min-width:0;max-width:100%}" +
        "@supports (width:1cqw){.cabinet.preview{--fit:clamp(6px,calc((100cqw - 32px) / var(--span,1)),21px);--slot-w:calc(var(--fit) * .714);--slot-gap:calc(var(--fit) * .286)}}" +
        ".cabinet.preview .shelf{padding:7px 9px 0}" +
        ".cabinet.preview .shelf.two-row .lane-front{margin-top:-2px}" +
        ".cabinet.tiny{--slot-w:9px;--slot-gap:4px;padding:4px;border-radius:7px}" +
        ".cabinet.tiny::after{inset:4px;border-radius:4px}" +
        ".cabinet.tiny .shelf{padding:4px 6px 0}" +
        ".cabinet.tiny .shelf.two-row .lane-front{margin-top:-3px}" +
        ".cabinet.tiny .mm-dot{border-width:1px}" +
        ".cabinet.tiny .rail{height:3px;margin:1px -6px 0}" +
        ".cabinet.preview .interior,.cb-mini .cabinet.tiny .interior{overflow-x:auto;overflow-y:hidden}" +
        ".cb-mini .cabinet.tiny{min-width:0;max-width:100%}" +
        "@supports (width:1cqw){.cb-mini .cabinet.tiny{--fit:clamp(5px,calc((100cqw - 20px) / var(--span,1)),13px);--slot-w:calc(var(--fit) * .69);--slot-gap:calc(var(--fit) * .31)}}" +
        ".cb-legend{display:flex;gap:16px;font-size:var(--wcm-fs-xs);color:var(--wcm-muted)}" +
        ".cb-legend span{display:inline-flex;align-items:center;gap:6px}" +
        ".cb-legend i{width:10px;height:10px;border-radius:50%;border:1.5px dashed var(--sheet-line-2)}" +
        ".cb-legend i.is-stored{background:#7d1f3a;border:none}" +
        ".cb-sum{font-size:var(--wcm-fs-sm);color:var(--wcm-muted);font-variant-numeric:tabular-nums;text-align:center}" +
        ".cb-fins{display:flex;flex-wrap:wrap;gap:8px}" +
        ".cb-fin{display:inline-flex;align-items:center;gap:8px;height:38px;padding:0 13px 0 6px;border-radius:999px;border:1px solid var(--sheet-line);font-size:var(--wcm-fs-sm);font-weight:500;cursor:pointer;user-select:none}" +
        ".cb-fin .mat-chip{width:26px;height:26px;border-radius:50%}" +
        ".cb-fin:hover{border-color:var(--sheet-line-2)}" +
        ".cb-fin.on{border-color:var(--wcm-accent);box-shadow:inset 0 0 0 1px var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 10%,transparent);font-weight:600}" +
        ".cb-fin:has(input:focus-visible){outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        ".cb-quick{display:grid;gap:8px}" +
        ".cb-tpls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}" +
        ".cb-tpl{display:flex;align-items:center;gap:12px;text-align:left;padding:10px 12px;border-radius:14px;border:1px solid var(--sheet-line);background:transparent;color:var(--wcm-text);font:inherit;cursor:pointer;min-width:0}" +
        ".cb-tpl:hover{border-color:var(--sheet-line-2);background:var(--sheet-soft)}" +
        ".cb-tpl:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        ".cb-tpl-t{display:grid;gap:2px;min-width:0}" +
        ".cb-tpl b{font-size:var(--wcm-fs-md);font-weight:600}" +
        ".cb-tpl-t span{font-size:var(--wcm-fs-xs);color:var(--wcm-muted);font-variant-numeric:tabular-nums}" +
        ".cb-shelves{display:grid;gap:10px}" +
        ".cb-sh-hint{font-size:var(--wcm-fs-sm);color:var(--wcm-muted);margin-top:4px;line-height:1.4}" +
        ".cb-rows{list-style:none;margin:0;padding:0;display:grid;gap:8px}" +
        ".cb-row{display:grid;grid-template-columns:auto 28px minmax(0,1fr) auto;align-items:center;gap:10px 12px;padding:10px 10px 10px 6px;border-radius:14px;border:1px solid var(--sheet-line);background:var(--wcm-dialog);transition:border-color .15s ease,box-shadow .15s ease}" +
        ".cb-row:focus-within{border-color:color-mix(in srgb,var(--wcm-accent) 55%,var(--sheet-line));box-shadow:0 0 0 3px color-mix(in srgb,var(--wcm-accent) 12%,transparent)}" +
        ".cb-row.is-invalid{border-color:var(--wcm-danger);box-shadow:0 0 0 3px color-mix(in srgb,var(--wcm-danger) 14%,transparent)}" +
        ".cb-move{display:grid;gap:2px}" +
        ".cb-ic{display:grid;place-items:center;width:30px;height:26px;padding:0;border:none;border-radius:8px;background:transparent;color:var(--wcm-muted);cursor:pointer}" +
        ".cb-ic svg{width:18px;height:18px}" +
        ".cb-ic:hover:not(:disabled):not([aria-disabled=\"true\"]){background:var(--sheet-field-2);color:var(--wcm-text)}" +
        ".cb-ic:disabled{opacity:.28;cursor:default}" +
        ".cb-ic[aria-disabled=\"true\"]{opacity:.35;cursor:not-allowed}" +
        ".cb-ic:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:1px}" +
        ".cb-rm{width:38px;height:38px;border-radius:10px}" +
        ".cb-rm:hover:not([aria-disabled=\"true\"]){color:var(--sheet-err);background:color-mix(in srgb,var(--wcm-danger) 10%,transparent)}" +
        ".cb-idx{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--sheet-field-2);font-size:var(--wcm-fs-sm);font-weight:700;font-variant-numeric:tabular-nums}" +
        ".cb-fields{display:grid;gap:8px;min-width:0}" +
        ".cb-top{display:flex;align-items:center;gap:10px;min-width:0}" +
        ".cb-name{height:38px;font-weight:600;flex:1 1 auto;min-width:0}" +
        ".cb-stored{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;border-radius:999px;background:var(--sheet-field-2);font-size:var(--wcm-fs-xs);font-weight:600;color:var(--wcm-text);font-variant-numeric:tabular-nums;white-space:nowrap}" +
        ".cb-stored i{width:7px;height:7px;border-radius:50%;background:var(--wcm-ready)}" +
        ".cb-stored.is-empty{background:transparent;box-shadow:inset 0 0 0 1px var(--sheet-line);color:var(--wcm-muted);font-weight:500}" +
        ".cb-caps{display:flex;align-items:center;gap:8px 18px;flex-wrap:wrap}" +
        ".cb-cap{display:inline-flex;align-items:center;gap:8px;font-size:var(--wcm-fs-sm);font-weight:500;color:var(--wcm-muted)}" +
        ".cb-mini{display:none;margin-left:auto;min-width:0}" +
        ".cb-add{display:flex;align-items:center;justify-content:center;gap:8px;height:48px;border-radius:14px;border:1.5px dashed var(--sheet-line-2);background:transparent;color:var(--sheet-link);font:inherit;font-size:var(--wcm-fs-md);font-weight:600;cursor:pointer}" +
        ".cb-add svg{width:18px;height:18px}" +
        ".cb-add:hover{border-color:var(--wcm-accent);background:color-mix(in srgb,var(--wcm-accent) 7%,transparent)}" +
        ".cb-add:focus-visible{outline:2px solid var(--wcm-accent);outline-offset:2px}" +
        ".cb-row-err{grid-column:1 / -1}" +
        /* Toast and move banner, at the bottom of the screen above everything else. */
        ".wcm-toast,.move-bar{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:1002;display:flex;align-items:center;gap:12px;width:max-content;max-width:min(620px,calc(100vw - 32px));padding:9px 9px 9px 16px;border-radius:16px;background:#221c19;color:#f5efe9;box-shadow:0 18px 40px -12px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.07);font-size:var(--wcm-fs-md);line-height:1.35}" +
        ".wcm-toast>svg,.move-bar>svg{width:19px;height:19px;flex:0 0 auto;color:#7fd8a0}" +
        ".wcm-toast.is-warn>svg{color:#ffb454}" +
        ".toast-text{flex:1 1 auto;min-width:0}" +
        ".toast-kbd{flex:0 0 auto;padding:2px 6px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(245,239,233,.3);color:rgba(245,239,233,.75);font:600 .75rem/1.2 ui-monospace,SFMono-Regular,Menlo,monospace}" +
        ".toast-action{flex:0 0 auto;height:34px;padding:0 12px;border:none;border-radius:10px;background:transparent;color:color-mix(in srgb,var(--wcm-accent) 50%,#fff);font:inherit;font-weight:700;cursor:pointer}" +
        ".toast-action:hover{background:rgba(255,255,255,.09)}" +
        ".toast-action:focus-visible,.toast-close:focus-visible{outline:2px solid #fff;outline-offset:1px}" +
        ".toast-close{display:grid;place-items:center;flex:0 0 auto;width:32px;height:32px;padding:0;border:none;border-radius:50%;background:transparent;color:rgba(245,239,233,.7);cursor:pointer}" +
        ".toast-close svg{width:16px;height:16px}" +
        ".move-bar{border:1px solid color-mix(in srgb,var(--wcm-accent) 65%,transparent)}" +
        ".move-bar>svg{color:color-mix(in srgb,var(--wcm-accent) 55%,#fff)}" +
        ".move-bar-text{display:grid;gap:1px;min-width:0}" +
        ".move-bar-text b{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        ".move-bar-text>span{color:rgba(245,239,233,.74);font-size:var(--wcm-fs-sm)}" +
        "@media (prefers-reduced-motion:no-preference){.wcm-toast:not(.no-anim),.move-bar{animation:wcm-rise .22s ease-out}}" +
        "@keyframes wcm-rise{from{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%,0)}}" +
        /* Move mode: the lifted bottle, and every free slot a full-size target. */
        ".cellars-grid.placing .cabinet .slot.empty{border-color:var(--wcm-accent);border-style:solid;color:var(--wcm-text);background:color-mix(in srgb,var(--wcm-accent) 18%,rgba(8,5,3,.42));opacity:1}" +
        "@media (prefers-reduced-motion:no-preference){.cellars-grid.placing .cabinet .slot.empty{animation:wcm-target 1.8s ease-in-out infinite}}" +
        "@keyframes wcm-target{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--wcm-accent) 0%,transparent)}50%{box-shadow:0 0 0 4px color-mix(in srgb,var(--wcm-accent) 30%,transparent)}}" +
        /* A long press lifts a bottle on touch screens: no text selection or image callout meanwhile. */
        ".cellars-grid .slot.filled{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}" +
        ".cellars-grid.placing .cabinet .slot.filled:not(.lifted){cursor:alias}" +
        ".cellars-grid.placing .cabinet .slot.filled:not(.lifted):hover,.cellars-grid.placing .cabinet .slot.filled:not(.lifted):focus-visible{box-shadow:0 0 0 2px var(--wcm-accent),0 0 0 6px color-mix(in srgb,var(--wcm-accent) 22%,transparent)}" +
        ".cellars-grid:not(.compact) .cabinet .slot.filled.lifted,.cellars-grid:not(.compact) .cabinet .lane-back .slot.filled.lifted{z-index:6;filter:none;transform:translateY(-8px) scale(1.05);box-shadow:0 0 0 2px var(--wcm-accent),0 20px 30px -10px rgba(0,0,0,.7)}" +
        ".cellars-grid.compact .cabinet .slot.filled.lifted{z-index:6;filter:none;transform:scale(1.28);box-shadow:0 0 0 2px var(--cab-ring-gap),0 0 0 4px var(--wcm-accent)}" +
        /* Phones and small tablets: a bottom sheet. */
        "@media (max-width:780px){.modal-backdrop.sheet-backdrop{padding:0;align-items:flex-end}.modal.sheet{width:100%;height:94vh;height:94dvh;max-height:none;border-radius:20px 20px 0 0}.sheet-head{padding:16px 8px 12px 16px;gap:12px}.sheet-title{font-size:var(--wcm-fs-lg)}.sheet-in-display{font-size:1.125rem}.sheet-hbottle{height:42px;width:17px}.sheet-grid{grid-template-columns:minmax(0,1fr);grid-template-rows:none;grid-template-areas:'photo' 'main' 'place';gap:24px;padding:16px 16px 28px}.sheet-2{grid-template-columns:minmax(0,1fr)}.sheet-2.sheet-keep{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}.sheet-2.sheet-vint{grid-template-columns:minmax(0,1fr) 108px}.sheet-win{grid-template-columns:minmax(0,1fr);gap:12px}.sheet-foot{padding:10px 12px 12px}.sheet-foot-l{display:none}.sheet-foot .btn{flex:1 1 0;padding:0 12px;min-width:0}.sheet-foot .btn.primary{min-width:0}.sheet:not(.is-edit) .sheet-foot .sheet-cancel{display:none}.sheet-danger{position:relative;flex:0 0 44px;width:44px;height:44px;padding:0;justify-content:center}.sheet-danger svg{width:19px;height:19px}.sheet-danger-t{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.sheet.is-edit .sheet-foot-row{flex-wrap:wrap}.sheet.is-edit .sheet-foot .btn{flex:1 1 auto}.cb-grid{grid-template-columns:minmax(0,1fr);padding:16px 16px 28px}.cb-side{display:none}.cb-row{grid-template-columns:auto minmax(0,1fr) auto;padding:10px 6px 10px 4px;gap:8px}.cb-idx{display:none}.cb-mini{display:grid;justify-items:end;flex:1 1 96px;container-type:inline-size}.cb-caps{gap:8px 12px}.cb-tpls{grid-template-columns:minmax(0,1fr)}.wcm-toast{bottom:calc(16px + env(safe-area-inset-bottom,0px))}.move-bar{bottom:calc(16px + env(safe-area-inset-bottom,0px))}}" +
        "@media (max-width:780px){.sheet.stage-capture .sheet-main,.sheet.stage-capture .sheet-place,.sheet.stage-capture .sheet-foot,.sheet.stage-capture .sheet-photo>.sheet-sec-t{display:none}.sheet.stage-capture .sheet-tile{padding:22px 18px 20px}.sheet.stage-capture .sheet-grid{min-height:100%;align-content:center;padding-bottom:40px}.sheet.stage-capture .sheet-photo{width:100%;max-width:520px;justify-self:center}.sheet.stage-capture .sheet-frame{height:min(34vh,280px)}.sheet.stage-capture .sheet-illus{height:min(28vh,220px)}.sheet.stage-capture .sheet-photo-links{padding-top:4px}.sheet.stage-capture .sheet-photo-links [data-sheet-instead]{height:44px;font-size:.9375rem}}" +
        "@media (max-width:780px){.sheet.stage-review .sheet-tile{grid-template-columns:72px minmax(0,1fr);justify-items:stretch;align-items:center;text-align:left;gap:14px;padding:10px}.sheet.stage-review .sheet-frame{width:72px;height:96px;border-radius:10px}.sheet.stage-review .sheet-tile.is-empty .sheet-frame{background:var(--sheet-field)}.sheet.stage-review .sheet-illus{height:74px}.sheet.stage-review .sheet-img{max-width:100%;max-height:100%;border-radius:2px}.sheet.stage-review .sheet-tile-body{justify-items:start;gap:6px}.sheet.stage-review .sheet-tile-s,.sheet.stage-review .sheet-tile-drop,.sheet.stage-review .sheet-busy{display:none}.sheet.stage-review .sheet-tile-a{display:flex;flex-wrap:wrap;gap:6px}.sheet.stage-review .sheet-tile-a .btn{width:auto;height:36px;padding:0 12px;font-size:var(--wcm-fs-sm)}.sheet.stage-review .sheet-tools{justify-content:flex-start;margin-left:-8px}.sheet.stage-review .sheet-tool{padding:0 8px}.sheet.stage-review [data-sheet-instead]{display:none}.sheet.stage-review .sheet-photo-links{justify-content:flex-start}}" +
        /* Tablets: the capture step hugs its content instead of floating in a tall sheet. */
        "@media (min-width:601px) and (max-width:780px){.modal.sheet.stage-capture{height:auto;max-height:94vh;max-height:94dvh}.sheet.stage-capture .sheet-grid{min-height:0;padding-top:24px;padding-bottom:28px}}" +
        "@media (prefers-reduced-motion:reduce){.sheet-tile.is-busy .sheet-scan,.sheet-fld.is-shimmer .sheet-in,.sheet-spin{animation:none}.sheet-tile.is-busy .sheet-scan{background-position:0 50%}.sheet-chev,button.mm-dot,.cellars-grid .cabinet .slot.lifted{transition:none}}" +

        /* While a search or filter is on: each cellar's match badge (a cellar without a match fades) and, on
           each shelf, its number and its match count. */
        ".cellar>*{transition:opacity .2s ease-out}" +
        ".cellar-hits{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 11px;border-radius:999px;font-size:var(--wcm-fs-xs);font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums;background:color-mix(in srgb,var(--wcm-accent) 15%,transparent);color:var(--wcm-text);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--wcm-accent) 45%,transparent)}" +
        ".cellar-hits::before{content:\"\";width:7px;height:7px;border-radius:50%;background:var(--wcm-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--wcm-accent) 22%,transparent)}" +
        ".cellar-hits.none{background:var(--wcm-tonal);color:var(--wcm-muted);box-shadow:none}" +
        ".cellar-hits.none::before{display:none}" +
        ".cellar-hits[hidden]{display:none}" +
        /* The drawing fades, not the header that says why ("No match"), which stays readable. */
        ".cellars-grid.filtering .cellar.no-hits>:not(.cellar-head){opacity:.45}" +
        ".cellars-grid.filtering .cellar.no-hits:hover>*,.cellars-grid.filtering .cellar.no-hits:focus-within>*{opacity:.85}" +
        ".cellars-grid.filtering .cellar.no-hits .cellar-title h3{color:var(--wcm-muted)}" +
        ".shelf-no{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;min-width:18px;height:18px;margin-right:7px;padding:0 5px;border-radius:5px;font-size:.6875rem;font-weight:600;line-height:1;font-variant-numeric:tabular-nums;color:var(--wcm-muted);background:color-mix(in srgb,var(--wcm-text) 10%,transparent)}" +
        ".shelf-hits{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;min-width:20px;height:18px;margin-left:8px;padding:0 6px;border-radius:999px;background:color-mix(in srgb,var(--wcm-accent) 72%,#000);color:#fff;font-size:.6875rem;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}" +
        ".shelf-hits[hidden]{display:none}" +
        ".cellars-grid.filtering .shelf.no-hits .shelf-name{opacity:.55}" +
        "@media (prefers-reduced-motion:reduce){.cellar>*{transition:none}}" +

        /* Small screens */
        "@media (max-width:780px){.wrap{padding:10px;gap:10px}.cellars-grid{--slot-w:7rem;--slot-h:11.25rem;--slot-gap:8px;gap:14px}.cellars-grid.compact{--slot-w:26px;--slot-h:26px;--slot-gap:9px}.pull-btn{margin-left:10px;left:10px}.cellar{width:100%;padding:10px}.modal{padding:14px;max-height:94vh}.wine-view-modal{padding:0}.duplicate-item{grid-template-columns:1fr}.modal-actions{flex-direction:column;align-items:stretch}}" +
        /* The page scrolls, not the card, on small and on short screens (a phone held sideways), so the
           cellars get the whole screen once the toolbar has scrolled away. */
        "@media (max-width:780px),(max-height:500px){:host{position:static !important;height:auto !important}.wrap{height:auto !important;overflow:visible !important}.main-scroll-content{overflow-y:visible !important;height:auto !important}}" +
        /* iOS zooms the page into any field whose text is under 16px. */
        "@media (max-width:780px),(pointer:coarse){.sheet-in,.stepper-v,.tb-search input{font-size:16px}}";

// Inline icons, so the card does not depend on HA's icon set being loaded.
// One line-icon family (24px grid, 1.8 stroke, round joins); the fill="none"
// group keeps them outlined where a button sets fill:currentColor on its svg.
function _wcmLineIcon(body) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + body + "</g></svg>";
}
const _WCM_ICONS = {
  search: _wcmLineIcon('<circle cx="10.8" cy="10.8" r="6.3"/><path d="m20 20-4.6-4.6"/>'),
  pencil: _wcmLineIcon('<path d="M4.5 19.5h4l10.2-10.2a2 2 0 0 0-4-4L4.5 15.5z"/><path d="m13.5 6.5 4 4"/>'),
  plus: _wcmLineIcon('<path d="M12 5.5v13M5.5 12h13"/>'),
  sparkle: _wcmLineIcon('<path d="M11 3.5l1.8 4.9 4.9 1.8-4.9 1.8L11 16.9l-1.8-4.9-4.9-1.8 4.9-1.8z"/><path d="M18 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>'),
  close: _wcmLineIcon('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>'),
  pin: _wcmLineIcon('<path d="M12 20.8s-6.3-5.6-6.3-10.6a6.3 6.3 0 0 1 12.6 0c0 5-6.3 10.6-6.3 10.6z"/><circle cx="12" cy="10.2" r="2.2"/>'),
  copy: _wcmLineIcon('<rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5V6.2a1.7 1.7 0 0 0-1.7-1.7H6.2a1.7 1.7 0 0 0-1.7 1.7v7.6a1.7 1.7 0 0 0 1.7 1.7h2.3"/>'),
  trash: _wcmLineIcon('<path d="M4.5 7h15M9.5 7V4.8h5V7"/><path d="m6.5 7 .9 12a1.6 1.6 0 0 0 1.6 1.5h6a1.6 1.6 0 0 0 1.6-1.5l.9-12"/><path d="M10 11v5.5M14 11v5.5"/>'),
  glass: _wcmLineIcon('<path d="M7.4 3.5h9.2l-.3 5.3a4.3 4.3 0 0 1-8.6 0z"/><path d="M7.6 7.6h8.8"/><path d="M12 13.2v7.3M8.6 20.5h6.8"/>'),
  camera: _wcmLineIcon('<path d="M4 8.6A1.6 1.6 0 0 1 5.6 7h2.1l1.5-2.2h5.6L16.3 7h2.1A1.6 1.6 0 0 1 20 8.6v8.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 17.4z"/><circle cx="12" cy="12.8" r="3.4"/>'),
  noPhoto: _wcmLineIcon('<rect x="3.5" y="4.5" width="17" height="15" rx="2.2"/><circle cx="9" cy="9.8" r="1.6"/><path d="m20.5 15.5-4.3-4.3L6.4 19.5"/><path d="M3 3l18 18"/>'),
  image: _wcmLineIcon('<rect x="3.5" y="5" width="17" height="14" rx="2.2"/><circle cx="9" cy="10" r="1.6"/><path d="m20.5 16-4.8-4.8L6 19"/>'),
  keyboard: _wcmLineIcon('<rect x="2.8" y="6" width="18.4" height="12" rx="2"/><path d="M6.5 9.8h.01M10 9.8h.01M13.5 9.8h.01M17 9.8h.01M8 14.2h8"/>'),
  rotate: _wcmLineIcon('<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.8 4.2v4.3h-4.3"/>'),
  history: _wcmLineIcon('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4.5 9"/><path d="M4.5 4.5V9H9"/><path d="M12 8v4.2l2.8 1.8"/>'),
  move: _wcmLineIcon('<path d="M12 3.5v17M3.5 12h17"/><path d="m9.2 6.3 2.8-2.8 2.8 2.8M9.2 17.7l2.8 2.8 2.8-2.8M6.3 9.2 3.5 12l2.8 2.8M17.7 9.2l2.8 2.8-2.8 2.8"/>'),
  up: _wcmLineIcon('<path d="m6.5 14.5 5.5-5.5 5.5 5.5"/>'),
  down: _wcmLineIcon('<path d="m6.5 9.5 5.5 5.5 5.5-5.5"/>'),
  minus: _wcmLineIcon('<path d="M5.5 12h13"/>'),
  check: _wcmLineIcon('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  barcode: _wcmLineIcon('<path d="M4.5 6v12M8 6v12M11 6v12M13.5 6v12M17 6v12M19.5 6v12"/>'),
  info: _wcmLineIcon('<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 7.8h.01"/>'),
  alert: _wcmLineIcon('<path d="M12 4.2 21 19.5H3z"/><path d="M12 10v4M12 16.8h.01"/>'),
  tune: _wcmLineIcon('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>'),
  cabinetPlus: _wcmLineIcon('<rect x="3.5" y="3.5" width="12" height="17" rx="2"/><path d="M3.5 9.3h12M3.5 14.7h12M19.8 8.5v6M16.8 11.5h6"/>'),
  searchOff: _wcmLineIcon('<circle cx="10.8" cy="10.8" r="6.3"/><path d="m20 20-4.6-4.6M8.2 10.8h5.2"/>'),
  right: _wcmLineIcon('<path d="m9.5 6.5 5.5 5.5-5.5 5.5"/>'),
  // "Show in cellar": a crosshair on the bottle's spot.
  crosshair: _wcmLineIcon('<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="1.6"/><path d="M12 2.8v3.4M12 17.8v3.4M2.8 12h3.4M17.8 12h3.4"/>'),
  sortDir: _wcmLineIcon('<path d="M8 4.5v15M4.8 7.7 8 4.5l3.2 3.2"/><path d="M16 19.5v-15M12.8 16.3l3.2 3.2 3.2-3.2"/>'),
  // Stats figures: bottles, wines, age, value; and the report itself.
  wineBottle: _wcmLineIcon('<path d="M10 2.8h4v5.4c0 1.3 2.8 2.2 2.8 5.6v6.2a1.5 1.5 0 0 1-1.5 1.5H8.7a1.5 1.5 0 0 1-1.5-1.5v-6.2c0-3.4 2.8-4.3 2.8-5.6z"/><path d="M7.2 14.2h9.6"/>'),
  grapes: _wcmLineIcon('<circle cx="9.3" cy="10" r="2.2"/><circle cx="14.7" cy="10" r="2.2"/><circle cx="12" cy="14.3" r="2.2"/><circle cx="9.3" cy="18.4" r="1.9"/><circle cx="14.7" cy="18.4" r="1.9"/><path d="M12 7.8V3.5M12 5.3c1.4-1.6 3.4-1.8 5-1.2"/>'),
  clock: _wcmLineIcon('<circle cx="12" cy="12" r="8.3"/><path d="M12 7.3V12l3.2 2"/>'),
  coins: _wcmLineIcon('<ellipse cx="12" cy="6.5" rx="6.5" ry="2.7"/><path d="M5.5 6.5v5.5c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7V6.5M5.5 12v5.5c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7V12"/>'),
  chart: _wcmLineIcon('<path d="M4 20.5h16"/><rect x="5.5" y="11" width="3" height="7" rx=".8"/><rect x="10.5" y="6" width="3" height="12" rx=".8"/><rect x="15.5" y="13.5" width="3" height="4.5" rx=".8"/>'),
  // Filled glyph-like icons.
  // A rating star, and the bottle drawn in the add sheet's header.
  star: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.6l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z"/></svg>',
  bottle: '<svg viewBox="0 0 40 100" aria-hidden="true" focusable="false"><path d="M16 3h8v20c0 6 9 9 9 20v50a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V43c0-11 9-14 9-20z"/></svg>',
  more: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',
  expand: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h6v2H7.4l3.8 3.8-1.4 1.4L6 7.4V10H4zm16 0v6h-2V7.4l-3.8 3.8-1.4-1.4L16.6 6H14V4zM4 20v-6h2v2.6l3.8-3.8 1.4 1.4L7.4 18H10v2zm16 0h-6v-2h2.6l-3.8-3.8 1.4-1.4 3.8 3.8V14h2z"/></svg>',
  // Two bottles side by side: identical bottles (×N).
  twins: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3.6 1.5h1.8v3.2c0 .9 1.8 1.2 1.8 2.8v6.5c0 .5-.4 1-1 1H2.8c-.6 0-1-.5-1-1V7.5c0-1.6 1.8-1.9 1.8-2.8zM10.6 1.5h1.8v3.2c0 .9 1.8 1.2 1.8 2.8v6.5c0 .5-.4 1-1 1H9.8c-.6 0-1-.5-1-1V7.5c0-1.6 1.8-1.9 1.8-2.8z"/></svg>',
  // A drawer sliding toward you: pull a shelf out.
  pull: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16v2H4zM6.6 10.6 12 16l5.4-5.4 1.4 1.4-6.8 6.8-6.8-6.8z"/></svg>',
  reach: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3a1 1 0 0 1 1 1v11.6l4.3-4.3 1.4 1.4L12 19.4l-6.7-6.7 1.4-1.4 4.3 4.3V4a1 1 0 0 1 1-1z"/></svg>',
  behind: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h10v12H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 4h11v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-dasharray="3 2.2"/></svg>'
};

// Side view of a bottle (viewBox 0 0 40 100), outlined as the ghost in empty
// back-row slots.
const _WCM_BOTTLE_PATH = "M16 3h8v20c0 6 9 9 9 20v50a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V43c0-11 9-14 9-20z";
const _WCM_BOTTLE_GHOST =
  '<svg class="bottle-ghost" viewBox="0 0 40 100" aria-hidden="true"><path d="' + _WCM_BOTTLE_PATH + '"/></svg>';

// Status glyphs, the one vocabulary used wherever a status is shown: too
// young, ready, at peak, past peak, no drinking window, and needs details.
// Drawn white on the status color, so status never relies on color alone.
const _WCM_GLYPHS = {
  young: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="5.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 4.6V8h3.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ready: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3.4 8.4l3 3 6.2-6.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  peak: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 1.8l1.9 4 4.4.5-3.3 3 .9 4.4L8 11.5l-3.9 2.2.9-4.4-3.3-3 4.4-.5z" fill="currentColor"/></svg>',
  past: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 3v6.2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="8" cy="12.6" r="1.4" fill="currentColor"/></svg>',
  none: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4.5 8h7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  needs: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5.6 6a2.5 2.5 0 1 1 3.6 2.2c-.8.4-1.2.9-1.2 1.7v.4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="8" cy="13" r="1.2" fill="currentColor"/></svg>'
};

// Icons repeated on every row of All Bottles (where a bottle stands, "Show in
// cellar") are painted by CSS, as a mask of the line icon in the text color,
// instead of an inline SVG per row: hundreds fewer nodes to build and lay out.
function _wcmIconMask(svg) {
  return 'url("data:image/svg+xml,' + encodeURIComponent(svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ')) + '")';
}
const _WCM_ICON_STYLES =
  ".bl-loc::before,.st-now-loc::before,.bl-locate::before{content:'';flex:0 0 auto;background:currentColor;-webkit-mask:var(--wcm-icon) center/contain no-repeat;mask:var(--wcm-icon) center/contain no-repeat}" +
  ".bl-loc::before,.st-now-loc::before{--wcm-icon:" + _wcmIconMask(_WCM_ICONS.pin) + ";width:15px;height:15px;color:var(--wcm-muted)}" +
  ".bl-locate::before{--wcm-icon:" + _wcmIconMask(_WCM_ICONS.crosshair) + ";width:18px;height:18px}" +
  ".bt-glyph:empty::before{content:'';width:10px;height:10px;background:currentColor;-webkit-mask:var(--wcm-glyph) center/contain no-repeat;mask:var(--wcm-glyph) center/contain no-repeat}" +
  ["young", "ready", "peak", "past", "none", "needs"].map(function (status) {
    return ".bt-glyph.is-" + status + ":empty::before{--wcm-glyph:" + _wcmIconMask(_WCM_GLYPHS[status]) + "}";
  }).join("");

// The card's styles as one constructed sheet, parsed once and shared by every
// render and every card on the page (null until first used; false where the
// browser cannot adopt sheets, and each render then carries a <style>).
let _wcmSheet = null;
function _wcmStyleSheet() {
  if (_wcmSheet === null) {
    try {
      _wcmSheet = new CSSStyleSheet();
      _wcmSheet.replaceSync(_WCM_STYLES + _WCM_ICON_STYLES);
    } catch (err) {
      _wcmSheet = false;
    }
  }
  return _wcmSheet;
}

// Bottle silhouettes on one 48x128 viewBox. Every bottle ends at y=125, so a
// half bottle stands visibly shorter next to full ones. glass = outline,
// cap = capsule, foil or stopper, label = [x, y, width, height] of the paper.
const _WCM_BOTTLE_SHAPES = {
  bordeaux: {
    glass: "M19.5 6h9v32c0 5 10.5 6 10.5 14v69a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V52c0-8 10.5-9 10.5-14z",
    cap: "M19.1 5.5h9.8v24.5h-9.8zM18.6 5.2h10.8v3.2H18.6z",
    label: [11.5, 71, 25, 34]
  },
  burgundy: {
    glass: "M19.5 6h9v22c0 16 11.5 18 11.5 36v57a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V64c0-18 11.5-20 11.5-36z",
    cap: "M19.1 5.5h9.8v22H19.1zM18.6 5.2h10.8v3.2H18.6z",
    label: [10.5, 76, 27, 32]
  },
  sparkling: {
    glass: "M18.5 6h11v20c0 18 11.5 20 11.5 40v55a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V66c0-20 11.5-22 11.5-40z",
    cap: "M17.8 4.6h12.4v21.4c0 7 2 11.2 4.8 16.4H13C15.8 37.2 17.8 33 17.8 26z",
    label: [10, 80, 28, 28],
    foil: true
  },
  flute: {
    glass: "M20.25 6h7.5v26c0 20 8.25 26 8.25 44v45a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V76c0-18 8.25-24 8.25-44z",
    cap: "M19.9 5.5h8.2v21.5h-8.2zM19.4 5.2h9.2v3H19.4z",
    label: [13.5, 86, 21, 26]
  },
  half: {
    glass: "M20 34h8v20c0 4 8 5 8 11v56a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V65c0-6 8-7 8-11z",
    cap: "M19.6 33.5h8.8v15h-8.8zM19.1 33.2h9.8v3H19.1z",
    label: [14, 80, 20, 28]
  },
  port: {
    glass: "M19.5 14h9v10c2.2 1.6 2.2 8.4 0 10v6c0 4 10.5 5 10.5 14v67a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V54c0-9 10.5-10 10.5-14v-6c-2.2-1.6-2.2-8.4 0-10z",
    cap: "M16.5 6h15a1.6 1.6 0 0 1 1.6 1.6v3.3a1.6 1.6 0 0 1-1.6 1.6h-15a1.6 1.6 0 0 1-1.6-1.6V7.6A1.6 1.6 0 0 1 16.5 6zM19.3 12.5h9.4v11.5h-9.4z",
    label: [11.5, 72, 25, 32]
  }
};

// Capsule and foil color per wine type: a second type cue besides the glass.
const _WCM_CAPSULES = {
  red: "#4d0f22",
  white: "#b9b6a6",
  "rosé": "#c98a8f",
  sparkling: "#d4af37",
  orange: "#a8561f",
  sweet: "#7a4a12",
  other: "#56605a",
  unset: "#6d6964"
};

// Cabinet frame: the cellar color (bg_color) picks a material (the finishes
// the cellar editor offers, _WCM_FINISHES). Any other hex gets a generic
// finish built from it; no color gets graphite.
const _WCM_MATERIALS = {
  "#7b2130": "mat-bordeaux",
  "#8c6239": "mat-oak",
  "#556b2f": "mat-olive",
  "#1e3a8a": "mat-azure",
  "#374151": "mat-slate",
  "#fff": "mat-steel",
  "#ffffff": "mat-steel",
  "#ffffffff": "mat-steel",
  "#fbfbfb": "mat-steel",
  "#fbfbfbff": "mat-steel"
};

// Sequence for the ids of the clip paths of label photos on drawn bottles.
let _wcmSvgSeq = 0;

// The glass shading every drawn bottle shares (dark edges, a highlight a
// quarter of the way in): defined once per card, not once per bottle.
const _WCM_BOTTLE_SHADE =
  '<svg class="wcm-defs" width="0" height="0" aria-hidden="true" focusable="false"><defs>' +
  '<linearGradient id="wcm-bt-shade" x1="0" x2="1" y1="0" y2="0">' +
  '<stop offset="0" stop-color="#000" stop-opacity=".58"/>' +
  '<stop offset=".13" stop-color="#000" stop-opacity=".16"/>' +
  '<stop offset=".27" stop-color="#fff" stop-opacity=".34"/>' +
  '<stop offset=".36" stop-color="#fff" stop-opacity=".04"/>' +
  '<stop offset=".64" stop-color="#000" stop-opacity="0"/>' +
  '<stop offset=".86" stop-color="#000" stop-opacity=".24"/>' +
  '<stop offset="1" stop-color="#000" stop-opacity=".6"/>' +
  "</linearGradient></defs></svg>";

class WineCellarCard extends HTMLElement {
  constructor() {
    super();
    this._hass = null;
    this._data = null;
    this._search = "";
    // Filters besides the search words: each facet is a set of values (see
    // _filterModel); the Filters panel, open or not; and the match that
    // Enter-stepping and the result strip are at (-1: none yet).
    this._facets = { status: new Set(), type: new Set(), country: new Set(), cellar: new Set() };
    this._filterPanelOpen = false;
    this._matchCursor = -1;
    this._liveTimer = null;
    this._view = "cellars";
    this._modal = null;
    this._hasRendered = false;
    this._rendering = false;
    this._renderPending = false;
    this._renderPendingForce = false;
    this._lastSnapshot = "";
    this._formError = "";
    this._actionMessage = "";
    this._scanner = null;
    this._scannerActive = false;
    this._scannerTargetId = "wine-barcode-scanner";
    this._copiedBottleData = null;
    this._sortColumn = "wine_name";
    this._sortOrder = "asc";
    this._viewingDuplicateManager = false;
    this._foundSyntaxDuplicates = [];
    this._duplicateManagerSearching = false;
    this._duplicateManagerHasSearched = false; // Nouvelle variable pour savoir si l'analyse a été lancée
    // Live search: debounce timer and the match the view last scrolled to.
    this._searchTimer = null;
    this._lastLocatedId = null;
    // Horizontal scroll of each cabinet, keyed by "view:cellarId", so a
    // re-render (dialog open/close, save...) keeps the user's place.
    this._interiorScroll = {};
    this._onWindowKeydown = null;
    this._onWindowResize = null;
    this._onWindowScroll = null;
    // Short in-card notice shown in the toolbar (e.g. every slot is taken).
    this._toolbarNotice = "";
    // Dialogs: a counter that gives each opened dialog its own identity, the
    // dialog on screen, the control that opened it, its form as first painted
    // (to tell whether it has unsaved edits) and a pending in-dialog
    // confirmation (see _showDialogConfirm).
    this._modalSeq = 0;
    this._dialogKey = null;
    this._dialogOpener = null;
    this._dialogBaseline = null;
    this._dialogConfirm = null;
    this._lastActivator = null;
    this._dialogListenersBound = false;
    // The add sheet's open suggestion list, and whether the sheet is being
    // filled by code (a suggestion, the label reading) rather than typed in.
    this._combo = null;
    this._sheetFilling = false;
    // The in-card toast (see _showToast) and the bottles to bring into view
    // and pulse after the next paint (just added or moved).
    this._toast = null;
    this._toastSeq = 0;
    this._toastShown = 0;
    this._toastTimer = null;
    this._pendingPulse = null;
    // A Consume on its way to the server (a second press waits for it).
    this._consuming = false;
    // Tap-to-move: the lifted bottle, whether it takes focus on the next
    // paint, and the long press that lifts one on touch screens.
    this._moveSource = null;
    this._moveFocus = false;
    this._longPressTimer = null;
    this._longPressFired = false;
    // Clean-up pairs the user dismissed, so a rescan does not offer them again.
    this._rejectedCleanup = {};
    // Shelf depth: the shelf the user pulled out ("cellarId|shelfId"), the
    // shelves pushed back in while the current search result showed, the
    // last result set and which cabinets were already brought to it.
    this._openShelf = null;
    this._pushedBack = { sig: "", keys: {} };
    this._depthSig = "";
    this._revealed = null;
    this._cabinetResizeObserver = null;
    this._shelfObserver = null;
    // The height each Cellars-view shelf was last drawn at
    // ("cellarId|shelfId|c" at rest, "|o" pulled out), for its stand-in
    // size while it is out of view (see _rememberShelfHeights).
    this._shelfHeights = {};
    // Work waiting for the next paint: a bottle to show ("Show in cellar")
    // and the first search match to bring into view ("Find all").
    this._pendingGoto = null;
    this._pendingLocate = false;
    this._siblingListenersBound = false;
  }

  // Window listeners, bound while the card is on the page (from
  // connectedCallback and each paint) and removed in disconnectedCallback:
  // the keyboard shortcuts below ("/" jumps to the search box, like on most
  // sites, unless the user is already typing somewhere or a dialog is open),
  // and resize and scroll, which keep the pinned toolbar and the filters
  // sheet in step with the screen.
  _ensureWindowListeners() {
    if (this._onWindowKeydown) return;

    var self = this;
    this._onWindowKeydown = function (e) {
      var from = e.composedPath ? e.composedPath() : [];
      var outside = from.indexOf(self.shadowRoot) === -1;
      // Escape and Tab pressed while focus has slipped out of an open dialog
      // (after a click on its text, say) still reach the dialog.
      if ((e.key === "Escape" || e.key === "Tab") && !e.defaultPrevented && self.isConnected &&
          self.getClientRects().length && self._topDialog()) {
        if (outside) self._onDialogKeydown(e);
        return;
      }
      // Escape also puts a lifted bottle down when focus is elsewhere.
      if ((e.key === "Escape" || e.key === "Esc") && self._moveSource && outside && !e.defaultPrevented && self.isConnected) {
        e.preventDefault();
        self._cancelMove();
        return;
      }
      // Ctrl+Z (Cmd+Z) runs the Undo of the toast on screen, outside text
      // fields (there it stays the field's own undo).
      if ((e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && !e.defaultPrevented &&
          self._toast && self._toast.action && self._toast.action.undo && self.isConnected) {
        var field = e.composedPath ? e.composedPath()[0] : e.target;
        if (field && (field.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(field.tagName || ""))) return;
        e.preventDefault();
        self._runToastAction();
        return;
      }
      // The filters sheet of phones is modal: Escape closes it wherever
      // focus has gone, and "/" waits until it is closed.
      var sheetOpen = self._filterPanelOpen && self._isFilterSheet();
      if ((e.key === "Escape" || e.key === "Esc") && sheetOpen && outside && !e.defaultPrevented && self.isConnected) {
        e.preventDefault();
        self._setFilterPanel(false);
        return;
      }
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
      if (self._modal || self._viewingDuplicateManager || sheetOpen) return;
      if (!self.isConnected || !self.getClientRects().length) return;
      var target = e.composedPath ? e.composedPath()[0] : e.target;
      if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName || ""))) return;
      var input = self.shadowRoot && self.shadowRoot.querySelector("[data-search]");
      if (!input) return;
      e.preventDefault();
      input.focus();
      input.select();
    };
    this._onWindowResize = function () {
      clearTimeout(self._resizeTimer);
      self._resizeTimer = setTimeout(function () {
        self._resizeTimer = null;
        self._layoutToolbar();
        self._syncFilterSheet();
      }, 100);
    };
    // Scrolling anywhere (Home Assistant scrolls the page or its own view
    // container): clip the pinned toolbar, once per frame.
    this._onWindowScroll = function () {
      if (self._scrollFrame) return;
      self._scrollFrame = requestAnimationFrame(function () {
        self._scrollFrame = 0;
        self._clipToolbar();
      });
    };
    window.addEventListener("keydown", this._onWindowKeydown);
    window.addEventListener("resize", this._onWindowResize);
    window.addEventListener("scroll", this._onWindowScroll, { capture: true, passive: true });
  }

  connectedCallback() {
    if (this._hasRendered) {
      this._ensureWindowListeners();
      // The cabinet and toolbar observers were let go when the card left the
      // page.
      if (this.shadowRoot) {
        this._observeCabinets();
        this._observeToolbar();
      }
    }
  }

  // Release everything that outlives the element: the window listeners, the
  // pending timers (search debounce, match announcement, toast, long press),
  // and the barcode scanner.
  disconnectedCallback() {
    if (this._onWindowKeydown) {
      window.removeEventListener("keydown", this._onWindowKeydown);
      window.removeEventListener("resize", this._onWindowResize);
      window.removeEventListener("scroll", this._onWindowScroll, { capture: true, passive: true });
      this._onWindowKeydown = null;
      this._onWindowResize = null;
      this._onWindowScroll = null;
    }
    clearTimeout(this._resizeTimer);
    if (this._scrollFrame) cancelAnimationFrame(this._scrollFrame);
    if (this._refitFrame) cancelAnimationFrame(this._refitFrame);
    this._scrollFrame = 0;
    this._refitFrame = 0;

    if (this._searchTimer) {
      clearTimeout(this._searchTimer);
      this._searchTimer = null;
    }
    clearTimeout(this._liveTimer);
    clearTimeout(this._locateTimer);

    clearTimeout(this._toastTimer);
    this._toast = null;
    clearTimeout(this._longPressTimer);

    this._stopScanner();

    if (this._cabinetResizeObserver) this._cabinetResizeObserver.disconnect();
    if (this._pickerObserver) this._pickerObserver.disconnect();
    if (this._footerObserver) this._footerObserver.disconnect();
    if (this._shelfObserver) this._shelfObserver.disconnect();
    if (this._toolbarObserver) this._toolbarObserver.disconnect();

    this._renderPending = false;
    this._renderPendingForce = false;
  }

  _stopScanner() {
    if (this._scanner) {
      try {
        if (typeof this._scanner.stop === "function") this._scanner.stop();
        if (typeof this._scanner.clear === "function") this._scanner.clear();
      } catch (err) {
        console.debug("Wine Cellar: scanner stop failed", err);
      }
    }
    this._scanner = null;
    this._scannerActive = false;
  }

  _t(key, vars) {
    return _T(key, vars);
  }

  setConfig(config) {
    this.config = Object.assign({ title: "Wine Cellar" }, config || {});
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    this.render(true);
  }

  set hass(hass) {
    this._hass = hass;
    _wcmSetLang(hass && hass.language);
    if (!this.shadowRoot || !this._hasRendered) {
      this.render(true);
    }
  }

  getCardSize() {
    return 12;
  }

  getLayoutOptions() {
    return { grid_columns: 12, grid_rows: 10, grid_min_rows: 8 };
  }

  async _callWS(msg) {
    try {
      return await this._hass.connection.sendMessagePromise(msg);
    } catch (err) {
      console.error("Wine Cellar WS error", msg.type, err);
      const detail =
        (err && err.code ? err.code + ": " : "") +
        (err && err.message ? err.message : JSON.stringify(err));
      throw new Error(detail);
    }
  }

  async _loadData(force) {
    if (!this._hass) return { cellars: [], bottles: [], consumed_bottles: [] };
    if (!this._data || force) {
      var fresh = await this._callWS({ type: "wine_cellar_manager/data" });
      // A reload that brings the same data keeps the object already loaded,
      // so everything worked out from it (matches, search text, facet
      // values, Stats) stays valid; _dataVersion counts real changes.
      var json = JSON.stringify(fresh);
      if (!this._data || json !== this._dataJson) {
        this._data = fresh;
        this._dataJson = json;
        this._dataVersion = (this._dataVersion || 0) + 1;
      }
    }
    return this._data || { cellars: [], bottles: [], consumed_bottles: [] };
  }

  _escape(value) {
    return String(value == null ? "" : value).replace(/[&<>"'`]/g, function (s) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;",
        "`": "&#96;"
      }[s];
    });
  }

  // Only plain http(s) links may reach an href; anything else (javascript:,
  // data:, ...) is dropped. Values can originate from the AI label scan.
  _safeUrl(value) {
    var text = String(value == null ? "" : value).trim();
    if (!/^https?:\/\//i.test(text)) return "";
    return text;
  }

  _str(v) {
    return v == null ? "" : String(v);
  }

  _normalizeImagePath(path) {
    var value = this._str(path).trim();
    if (!value) return "";

    if (/^https?:\/\//i.test(value)) return value;
    if (value.startsWith("/local/")) return value;
    if (value.startsWith("local/")) return "/" + value;
    if (value.startsWith("/www/")) return value.replace(/^\/www\//, "/local/");
    if (value.startsWith("www/")) return "/" + value.replace(/^www\//, "local/");
    if (value.startsWith("/")) return value;

    return "/local/" + value.replace(/^\/+/, "");
  }

  _truncateMeta(text) {
    if (!text) return "";
    var str = String(text).trim();
    
    // Dictionnaire de traduction strict
    var replacements = {
      "Cabernet-Sauvignon": "Cab.-Sauv.",
      "Cabernet Franc": "Cab. Franc",
      "Sauvignon Blanc": "Sauv. Blanc",
      "Gewürztraminer": "Gewurtz.",
      "Chardonnay": "Chard.",
      "Pinot Noir": "P. Noir"
    };

    for (var key in replacements) {
      if (str.toLowerCase() === key.toLowerCase()) {
        return replacements[key];
      }
    }

    // Nettoyages administratifs génériques textuels
    str = str.replace(/Appellation d'Origine Contrôlée/gi, "AOC")
             .replace(/Appellation d'Origine Protégée/gi, "AOP")
             .replace(/Grand Cru Classé/gi, "GCC")
             .replace(/Grand Vin de Bordeaux/gi, "Bordeaux");

    return str;
  }


  _intOrNull(v) {
    if (v == null) return null;
    v = String(v).trim();
    if (v === "") return null;
    var n = Number(v);
    return Number.isFinite(n) ? Math.trunc(n) : null;
  }

  _floatOrNull(v) {
    if (v == null) return null;
    v = String(v).trim();
    if (v === "") return null;
    var n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  // Shows the form error of the open dialog, next to its Save button (in the
  // pinned footer of the add sheet and the cellar editor). It is scrolled
  // into view, and its role="alert" announces it.
  _setFormError(msg) {
    this._formError = msg || "";
    var root = this.shadowRoot;
    if (!root) return;
    var dialog = this._topDialog();
    var boxes = (dialog || root).querySelectorAll(".form-error");
    var target = boxes[0] || null;
    var self = this;
    boxes.forEach(function (box) {
      var show = !!self._formError && box === target;
      box.textContent = show ? self._formError : "";
      box.style.display = show ? "block" : "none";
    });
    if (target && this._formError && target.closest(".modal")) {
      // Bring the button row into view too (it sits right below the error),
      // so the message and the button are seen together.
      var next = target.nextElementSibling;
      var anchor = next && next.matches(".modal-actions, .sheet-foot-row") ? next : target;
      anchor.scrollIntoView({ block: "nearest", behavior: this._prefersReducedMotion() ? "auto" : "smooth" });
    }
    this._placeToast();
  }

  _setActionMessage(msg) {
    this._actionMessage = msg || "";
    var box = this.shadowRoot && this.shadowRoot.querySelector(".action-message");
    if (box) {
      if (this._actionMessage) {
        box.textContent = this._actionMessage;
        box.style.display = "block";
      } else {
        box.textContent = "";
        box.style.display = "none";
      }
    }
  }

  _clearFormError() {
    this._setFormError("");
  }

  _clearActionMessage() {
    this._setActionMessage("");
  }

  // Server errors reach the card as "code: English text" (see _callWS).
  // Known ones become a translated sentence; others lose the code prefix.
  _friendlyError(err) {
    var raw = err && err.message ? String(err.message) : String(err == null ? "" : err);
    var known = [
      [/shelf that still contains bottles/i, "err_shelf_has_bottles"],
      [/shrink front capacity/i, "err_shrink_front"],
      [/shrink back capacity/i, "err_shrink_back"],
      [/remove back lane/i, "err_remove_back_lane"],
      [/cellar name is required/i, "cellar_name_required"],
      [/already occupied|position_occupied/i, "err_slot_taken_server"],
      [/position is out of range/i, "err_position_out_of_range"],
      [/has no back lane/i, "err_no_back_lane"],
      [/^([a-z_]+:\s*)?shelf not found/i, "err_shelf_missing"],
      [/^([a-z_]+:\s*)?bottle not found/i, "err_bottle_missing"],
      [/^([a-z_]+:\s*)?consumed bottle not found/i, "err_consumed_missing"],
      [/^no_entry:/i, "err_no_entry"]
    ];
    for (var i = 0; i < known.length; i++) {
      if (known[i][0].test(raw)) return _T(known[i][1]);
    }
    return raw.replace(/^[a-z_]+:\s*/, "") || _T("unknown_error");
  }

  // One palette for both themes, told apart by lightness as well as hue:
  // red, straw white, pale gold sparkling, pink rosé, orange, deep amber
  // sweet, sage for other (never the blue of a link or a status).
  _wineSurfaceColor(type) {
    var colors = {
      red: "#7d1f3a",
      white: "#d9c46a",
      "rosé": "#e39aab",
      sparkling: "#efe3b0",
      orange: "#e0782c",
      sweet: "#8c5316",
      other: "#7a8f7e",
      unset: "#8d8a86"
    };
    return colors[type] || colors.unset;
  }

  // Ink for text drawn on a wine-type color: white or near-black, whichever
  // contrasts more.
  _wineTextColor(type) {
    function luminance(hex) {
      var h = String(hex).replace("#", "");
      return [0, 2, 4].reduce(function (sum, i, k) {
        var c = (parseInt(h.substr(i, 2), 16) || 0) / 255;
        c = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        return sum + c * [0.2126, 0.7152, 0.0722][k];
      }, 0);
    }
    var l = luminance(this._wineSurfaceColor(type));
    var onWhite = 1.05 / (l + 0.05);
    var onInk = (l + 0.05) / (luminance("#1f1f1f") + 0.05);
    return onWhite >= onInk ? "#ffffff" : "#1f1f1f";
  }

  _agingStatus(bottle) {
    var currentYear = new Date().getFullYear();
    var rawStart = bottle.aging_start_year;
    var rawStop = bottle.aging_end_year;

    if (rawStart === null || rawStart === undefined || rawStart === "") return "none";
    if (rawStop === null || rawStop === undefined || rawStop === "") return "none";

    var start = Number(rawStart);
    var stop = Number(rawStop);

    if (!Number.isFinite(start) || !Number.isFinite(stop)) return "none";

    if (currentYear < start) return "young";
    if (currentYear === stop) return "peak";
    if (currentYear > stop) return "past";
    if (currentYear >= start && currentYear < stop) return "ready";
    return "none";
  }

  _agingStatusLabel(status) {
    return status === "none" ? "" : _T("status_" + status);
  }

  // Compact "2025–27" form of the drinking window, or "" when it is not set.
  _formatWindowShort(bottle) {
    if (this._agingStatus(bottle) === "none") return "";
    var start = Number(bottle.aging_start_year);
    var stop = Number(bottle.aging_end_year);
    if (start === stop) return String(start);
    var stopText = Math.floor(start / 100) === Math.floor(stop / 100) ? String(stop).slice(-2) : String(stop);
    return start + "\u2013" + stopText;
  }

  // Cellar colors end up inside a style attribute, so only plain hex values
  // are accepted.
  _safeColor(value) {
    var text = String(value == null ? "" : value).trim();
    return /^#[0-9a-f]{3,8}$/i.test(text) ? text : "";
  }

  _hasActiveFilters() {
    return this._searchTerms().length > 0 || this._facetCount() > 0;
  }

  // A copied bottle is pasted by clicking an empty slot; it expires after
  // 10 minutes so a stale copy cannot be pasted by accident.
  _hasCopiedBottle() {
    if (this._copiedBottleData && this._copyTimestamp && (Date.now() - this._copyTimestamp > 600000)) {
      this._copiedBottleData = null;
      this._copyTimestamp = null;
    }
    return !!this._copiedBottleData;
  }

  _normalizeCompareValue(value) {
    return this._str(value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  _countSimilarBottles(targetBottle) {
    if (!targetBottle || !this._data || !Array.isArray(this._data.bottles)) return 0;

    var targetName = this._normalizeCompareValue(targetBottle.wine_name);
    var targetProducer = this._normalizeCompareValue(targetBottle.producer);

    if (!targetName) return 0;

    return this._data.bottles.filter((b) => {
      var name = this._normalizeCompareValue(b.wine_name);
      var producer = this._normalizeCompareValue(b.producer);

      if (!name || name !== targetName) return false;

      if (targetProducer && producer) {
        return producer === targetProducer;
      }
      return true;
    }).length;
  }

  _currency() {
    return (this._hass && this._hass.config && this._hass.config.currency) || "CAD";
  }

  // A price in the Home Assistant currency; "—" when there is none (a
  // missing price is not a price of 0).
  _formatPrice(value) {
    var num = value === null || value === undefined || value === "" ? NaN : Number(value);
    if (!Number.isFinite(num)) return "—";
    // One formatter per currency: building one costs more than formatting
    // (All Bottles and Stats format every price).
    var currency = this._currency();
    if (!this._priceFormat || this._priceFormat.currency !== currency) {
      this._priceFormat = {
        currency: currency,
        format: new Intl.NumberFormat(undefined, { style: "currency", currency: currency, maximumFractionDigits: 2 })
      };
    }
    return this._priceFormat.format.format(num);
  }

  /* Filters. A search is its words plus four facets (drinking status, wine
     type, country, cellar), each a set of values: a bottle passes a facet
     when the set is empty or holds the bottle's value (OR within a facet),
     and it has to pass every facet and contain every word (AND across).
     Changes are applied to the page on screen (_applyFiltersInPlace), never
     through a re-render. Elsewhere in the card (the Stats view, say), use
     _setFacet / _toggleFacet / _clearFilters. */

  // The value a bottle has for one facet. A type outside the known list
  // counts as "other" (no type at all as "unset"); countries compare folded,
  // so "France", "france " and "FRANCE" are one country.
  _facetValue(bottle, name) {
    if (name === "status") return this._agingStatus(bottle);
    if (name === "type") return this._typeKey(bottle.wine_type);
    if (name === "country") return this._countryKey(bottle.country);
    return String(bottle.cellar_id == null ? "" : bottle.cellar_id);
  }

  _typeKey(type) {
    if (!type) return "unset";
    return _WCM_SHEET_TYPES.indexOf(type) === -1 ? "other" : type;
  }

  _countryKey(country) {
    return this._foldSearchText(country);
  }

  _passesFacets(bottle) {
    var facets = this._facets;
    for (var i = 0; i < _WCM_FACETS.length; i++) {
      var set = facets[_WCM_FACETS[i]];
      if (set.size && !set.has(this._facetValue(bottle, _WCM_FACETS[i]))) return false;
    }
    return true;
  }

  // Every search word appears somewhere in the bottle's text, ignoring case
  // and accents ("chateau" finds "Château", "amarone 2020" finds the 2020
  // Amarone).
  _matchesTerms(bottle, terms) {
    if (!terms.length) return true;
    var text = this._bottleSearchText(bottle);
    for (var i = 0; i < terms.length; i++) {
      if (text.indexOf(terms[i]) === -1) return false;
    }
    return true;
  }

  _bottleMatchesFilters(bottle) {
    return !!bottle && this._passesFacets(bottle) && this._matchesTerms(bottle, this._searchTerms());
  }

  // How many facet values are selected, over every facet or the named ones.
  _facetCount(names) {
    var facets = this._facets;
    return (names || _WCM_FACETS).reduce(function (sum, name) { return sum + facets[name].size; }, 0);
  }

  _facetKey() {
    var facets = this._facets;
    return _WCM_FACETS.map(function (name) { return Array.from(facets[name]).sort().join(","); }).join("|");
  }

  // What the toolbar and the views show about the current filters, from one
  // pass over the bottles, kept until the data, the language, the search or
  // a facet changes: the matching bottles in the order they stand in the
  // cellars; for each facet value, how many bottles it would show under the
  // other filters (the counts on the chips) and how many exist at all; the
  // matches per cellar and per shelf; each country's most common spelling.
  _filterModel() {
    var self = this;
    var data = this._data || {};
    var bottles = data.bottles || [];
    var terms = this._searchTerms();
    var key = _wcmLang + "\u0001" + terms.join(" ") + "\u0001" + this._facetKey();
    var cache = this._filterCache;
    if (cache && cache.data === data && cache.bottles === bottles && cache.key === key) return cache.model;

    var facets = this._facets;
    var active = _WCM_FACETS.filter(function (name) { return facets[name].size > 0; });
    var model = {
      filtering: terms.length > 0 || active.length > 0,
      total: bottles.length,
      hits: [],
      ids: new Set(),
      counts: { status: {}, type: {}, country: {}, cellar: {} },
      present: { status: {}, type: {}, country: {} },
      countryLabel: {},
      perCellar: {},
      perShelf: {}
    };
    function bump(map, value) { map[value] = (map[value] || 0) + 1; }
    var spellings = {};
    // Each bottle's facet values, worked out once per data load.
    var known = this._facetValueCache;
    if (!known || known.bottles !== bottles) known = this._facetValueCache = { bottles: bottles, values: new Map() };
    bottles.forEach(function (b) {
      var values = known.values.get(b);
      if (!values) {
        values = {
          status: self._agingStatus(b),
          type: self._typeKey(b.wine_type),
          country: self._countryKey(b.country),
          cellar: String(b.cellar_id == null ? "" : b.cellar_id)
        };
        known.values.set(b, values);
      }
      bump(model.present.status, values.status);
      bump(model.present.type, values.type);
      if (values.country) {
        bump(model.present.country, values.country);
        bump(spellings[values.country] || (spellings[values.country] = {}), String(b.country).trim());
      }
      if (!self._matchesTerms(b, terms)) return;
      // A bottle failing a single facet still counts for that facet's values.
      var failed = null;
      for (var i = 0; i < active.length; i++) {
        if (facets[active[i]].has(values[active[i]])) continue;
        if (failed) return;
        failed = active[i];
      }
      if (failed) {
        bump(model.counts[failed], values[failed]);
        return;
      }
      _WCM_FACETS.forEach(function (name) { bump(model.counts[name], values[name]); });
      if (!model.filtering) return;
      model.hits.push(b);
      model.ids.add(String(b.id));
      bump(model.perCellar, values.cellar);
      bump(model.perShelf, values.cellar + "|" + String(b.shelf_id));
    });

    // Physical order: cellar, shelf from the top, back row before front row, position.
    if (model.hits.length > 1) {
      var cellarAt = {};
      var shelfAt = {};
      this._sortedCellars().forEach(function (c, ci) {
        cellarAt[c.id] = ci;
        self._getSortedShelves(c).forEach(function (s, si) { shelfAt[c.id + "|" + s.id] = si; });
      });
      var ranked = model.hits.map(function (b) {
        var c = cellarAt[b.cellar_id];
        var s = shelfAt[b.cellar_id + "|" + b.shelf_id];
        return {
          b: b,
          r: (c === undefined ? 999 : c) * 1e6 + (s === undefined ? 999 : s) * 1e3 + (b.lane === "back" ? 0 : 500) + (Number(b.position) || 0)
        };
      });
      ranked.sort(function (a, b) { return a.r - b.r; });
      model.hits = ranked.map(function (x) { return x.b; });
    }

    Object.keys(spellings).forEach(function (k) { model.countryLabel[k] = self._commonSpelling(spellings[k]); });

    this._filterCache = { data: data, bottles: bottles, key: key, model: model };
    return model;
  }

  // Folded words of the cellar's wine names, producers, grapes and regions
  // (three letters or more, no bare numbers), each with its most frequent
  // spelling; the vocabulary "Did you mean" draws from.
  _searchVocabulary() {
    var self = this;
    var bottles = (this._data && this._data.bottles) || [];
    if (this._vocabCache && this._vocabCache.bottles === bottles) return this._vocabCache.words;
    var words = new Map();
    bottles.forEach(function (b) {
      [b.wine_name, b.producer, b.varietal, b.region].forEach(function (field) {
        self._str(field).split(/[\s,;/()]+/).forEach(function (raw) {
          var word = raw.replace(/^[.\-'"’]+|[.\-'"’]+$/g, "");
          var key = self._foldSearchText(word);
          if (key.length < 3 || /^\d+$/.test(key)) return;
          var entry = words.get(key);
          if (!entry) words.set(key, entry = { spellings: {}, n: 0 });
          entry.n++;
          entry.spellings[word] = (entry.spellings[word] || 0) + 1;
        });
      });
    });
    words.forEach(function (entry) {
      var best = "";
      Object.keys(entry.spellings).forEach(function (s) {
        if (!best || entry.spellings[s] > entry.spellings[best]) best = s;
      });
      entry.text = best;
    });
    this._vocabCache = { bottles: bottles, words: words };
    return words;
  }

  // Up to three corrected searches that do find something: every word that
  // matches no bottle at all is swapped for one of the closest words of the
  // cellar (edit distance on folded text, a longer word's start counting
  // too), all such words at once, the other words kept as typed; the
  // closest combinations first.
  _suggestSearch() {
    var self = this;
    var bottles = (this._data && this._data.bottles) || [];
    var terms = this._searchTerms();
    if (!terms.length || !bottles.length) return [];
    var key = this._search + "\u0001" + this._facetKey();
    if (this._suggestCache && this._suggestCache.bottles === bottles && this._suggestCache.key === key) return this._suggestCache.list;
    var words = String(this._search || "").trim().split(/\s+/);
    if (words.length !== terms.length) words = terms.slice();
    var vocab = this._searchVocabulary();
    // Each word's choices: itself when it matches, else its closest words.
    var typos = 0;
    var choices = terms.map(function (term, i) {
      if (bottles.some(function (b) { return self._bottleSearchText(b).indexOf(term) !== -1; })) return [{ text: words[i], d: 0 }];
      typos++;
      var max = term.length <= 4 ? 1 : (term.length <= 7 ? 2 : 3);
      var near = [];
      vocab.forEach(function (entry, word) {
        var d = self._levenshteinDistance(term, word, max);
        if (word.length > term.length + 1) d = Math.min(d, self._levenshteinDistance(term, word.slice(0, term.length), max) + 0.5);
        if (d <= max) near.push({ text: entry.text, d: d, n: entry.n });
      });
      near.sort(function (a, b) { return (a.d - b.d) || (b.n - a.n); });
      return near.slice(0, typos > 1 ? 3 : 5);
    });
    var combos = [{ words: [], d: 0 }];
    choices.forEach(function (list) {
      var next = [];
      combos.forEach(function (combo) {
        list.forEach(function (choice) { next.push({ words: combo.words.concat(choice.text), d: combo.d + choice.d }); });
      });
      combos = next.slice(0, 60);
    });
    combos.sort(function (a, b) { return a.d - b.d; });
    var found = [];
    var seen = {};
    combos.forEach(function (combo) {
      if (!typos || found.length >= 3) return;
      var query = combo.words.join(" ");
      var folded = self._foldSearchText(query);
      if (seen[folded]) return;
      seen[folded] = true;
      var t = folded.split(" ").filter(Boolean);
      if (bottles.some(function (b) { return self._passesFacets(b) && self._matchesTerms(b, t); })) found.push(query);
    });
    this._suggestCache = { bottles: bottles, key: key, list: found };
    return found;
  }

  // The most common of a country's spellings ({spelling: count}) names it
  // ("France" over "france"); on a tie, a capitalized one.
  _commonSpelling(counts) {
    var best = "";
    var most = 0;
    Object.keys(counts || {}).forEach(function (s) {
      var n = counts[s];
      if (n > most || (n === most && /^\p{Lu}/u.test(s) && !/^\p{Lu}/u.test(best))) {
        most = n;
        best = s;
      }
    });
    return best;
  }

  // Lower-cases and strips accents so "Château" and "chateau" compare equal.
  _foldSearchText(value) {
    var text = this._str(value);
    // Plain ASCII (most names) has no ligature or accent to fold.
    if (!/[^\x00-\x7f]/.test(text)) return text.toLowerCase().replace(/\s+/g, " ").trim();
    // Curly and modifier apostrophes match a typed ' (d’Esclans, d'Esclans).
    return this._normalizeCompareValue(text.replace(/[œŒ]/g, "oe").replace(/[æÆ]/g, "ae").replace(/ß/g, "ss").replace(/[\u2018\u2019\u02bc\u00b4]/g, "'"));
  }

  // The folded words of the current query, cached until the query changes.
  _searchTerms() {
    var raw = this._search || "";
    if (this._searchTermsFor !== raw) {
      this._searchTermsFor = raw;
      this._searchTermsCache = this._foldSearchText(raw).split(" ").filter(Boolean);
    }
    return this._searchTermsCache;
  }

  _wineTypeLabel(type) {
    if (!type || type === "unset") return _T("not_specified");
    if (type === "rosé") return _T("rose");
    return _T(type);
  }

  // Everything a user may type to find a bottle: its wine fields, where it
  // is (cellar, shelf, translated row) and the labels shown on screen.
  // Folded once per bottle, and kept until the data or the language changes.
  _bottleSearchText(bottle) {
    var cache = this._searchTextCache;
    if (!cache || cache.data !== this._data || cache.lang !== _wcmLang) {
      cache = this._searchTextCache = { data: this._data, lang: _wcmLang, texts: new Map() };
    }
    var text = cache.texts.get(bottle);
    if (text !== undefined) return text;
    var cellars = (this._data && this._data.cellars) || [];
    var cellar = cellars.find(function (c) { return c.id === bottle.cellar_id; });
    text = this._foldSearchText([
      bottle.wine_name,
      bottle.producer,
      bottle.varietal,
      bottle.region,
      bottle.country,
      bottle.vintage,
      bottle.wine_type,
      this._wineTypeLabel(bottle.wine_type),
      cellar ? cellar.name : bottle.cellar_name,
      this._getShelfName(bottle.cellar_id, bottle.shelf_id),
      this._laneLabel(bottle.lane),
      bottle.notes,
      bottle.barcode
    ].map(this._str).join(" "));
    cache.texts.set(bottle, text);
    return text;
  }

  // Two-row edit distance with an early exit: once every cell in a row exceeds
  // maxDistance the true distance can only grow, so we stop and report a miss.
  // Allocates O(n) instead of the previous O(m*n) matrix.
  _levenshteinDistance(s1, s2, maxDistance) {
    var m = s1.length, n = s2.length;
    if (m === 0) return n;
    if (n === 0) return m;

    var limit = typeof maxDistance === "number" ? maxDistance : Infinity;
    if (Math.abs(m - n) > limit) return limit + 1;

    var prev = new Array(n + 1);
    var curr = new Array(n + 1);
    for (var j = 0; j <= n; j++) prev[j] = j;

    for (var i = 1; i <= m; i++) {
      curr[0] = i;
      var rowMin = curr[0];
      var c1 = s1.charCodeAt(i - 1);

      for (var k = 1; k <= n; k++) {
        var cost = c1 === s2.charCodeAt(k - 1) ? 0 : 1;
        var val = Math.min(prev[k - 1] + cost, prev[k] + 1, curr[k - 1] + 1);
        curr[k] = val;
        if (val < rowMin) rowMin = val;
      }

      if (rowMin > limit) return limit + 1;

      var swap = prev; prev = curr; curr = swap;
    }

    return prev[n];
  }

  _calculateSimilarity(str1, str2, minSimilarity) {
    var s1 = this._normalizeCompareValue(str1);
    var s2 = this._normalizeCompareValue(str2);
    if (!s1 || !s2) return 0;
    if (s1 === s2) return 100;
    var maxLen = Math.max(s1.length, s2.length);

    // Anything above this edit distance is below the caller's threshold, so
    // the distance computation may bail out early.
    var maxDistance = typeof minSimilarity === "number"
      ? Math.floor(maxLen * (1 - minSimilarity / 100))
      : undefined;

    var dist = this._levenshteinDistance(s1, s2, maxDistance);
    return ((maxLen - dist) / maxLen) * 100;
  }

  // Spelling variants worth merging, per field. Values that differ only by
  // case, accents, spaces or punctuation ("Chateau Ste. Michelle" / "Château
  // Ste Michelle") are sure to be the same name: those are the only pairs
  // Merge All touches. A close spelling of a free-text field (at most two
  // letters apart) is offered as well, marked for checking, to merge one by
  // one; never for countries, where near-identical names are different
  // places (Austria / Australia).
  _computeSyntaxDuplicates() {
    var self = this;
    var bottles = (this._data && this._data.bottles) || [];
    var fields = ["wine_name", "producer", "varietal", "region", "country"];
    var chosen = {};
    (this._foundSyntaxDuplicates || []).forEach(function (item) {
      chosen[self._cleanupPairKey(item)] = item.selectedValue;
    });

    function looseKey(value) {
      return self._foldSearchText(value).replace(/[^\p{L}\p{N}]+/gu, "");
    }
    // The spelling kept by default: the one with accents, then the one with
    // mixed case (typed with care), then the one more bottles use.
    function rank(value, count) {
      var accents = (String(value).normalize("NFD").match(/[̀-ͯ]/g) || []).length;
      var mixedCase = /\p{Lu}/u.test(value) && /\p{Ll}/u.test(value) ? 1 : 0;
      return [accents, mixedCase, count, value.length];
    }
    function prefer(a, b) {
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a[i] > b[i];
      }
      return false;
    }

    var found = [];
    fields.forEach(function (field) {
      var groups = new Map();
      bottles.forEach(function (b) {
        var val = String(b[field] || "").trim();
        if (!val) return;
        if (groups.has(val)) groups.get(val).push(b);
        else groups.set(val, [b]);
      });

      // Sure matches: one cluster per loose key, each other spelling paired
      // with the preferred one.
      var clusters = new Map();
      groups.forEach(function (list, val) {
        var key = looseKey(val);
        if (!key) return;
        if (!clusters.has(key)) clusters.set(key, []);
        clusters.get(key).push(val);
      });
      var heads = [];
      clusters.forEach(function (values, key) {
        var best = values[0];
        values.forEach(function (val) {
          if (prefer(rank(val, groups.get(val).length), rank(best, groups.get(best).length))) best = val;
        });
        heads.push({ key: key, value: best, count: groups.get(best).length });
        values.forEach(function (val) {
          if (val === best) return;
          found.push({ field: field, valueA: val, valueB: best, preferred: best, certain: true, bottlesA: groups.get(val), bottlesB: groups.get(best) });
        });
      });

      // Close spellings, to check one by one (not for countries).
      if (field === "country") return;
      heads.sort(function (a, b) { return a.key.length - b.key.length; });
      for (var i = 0; i < heads.length; i++) {
        if (heads[i].key.length < 6) continue;
        for (var j = i + 1; j < heads.length; j++) {
          var shorter = heads[i].key;
          var longer = heads[j].key;
          if (longer.length - shorter.length > 2) break;
          var distance = self._levenshteinDistance(shorter, longer, 2);
          if (distance > 2 || (longer.length - distance) / longer.length < 0.85) continue;
          var a = heads[i];
          var b = heads[j];
          var keep = a.count > b.count || (a.count === b.count && a.value.length >= b.value.length) ? a.value : b.value;
          found.push({ field: field, valueA: a.value, valueB: b.value, preferred: keep, certain: false, bottlesA: groups.get(a.value), bottlesB: groups.get(b.value) });
        }
      }
    });

    return found.filter(function (item) {
      return !self._rejectedCleanup[self._cleanupPairKey(item)];
    }).map(function (item, index) {
      var previous = chosen[self._cleanupPairKey(item)];
      item.id = item.field + "_" + index;
      item.selectedValue = previous === item.valueA || previous === item.valueB ? previous : item.preferred;
      return item;
    });
  }

  async _findSyntaxAnomalies() {
    try {
      await this._loadData(true);
      this._foundSyntaxDuplicates = this._computeSyntaxDuplicates();
    } catch (err) {
      console.error("Syntax anomaly scanner crashed:", err);
      this._setFormError(_T("scanner_error") + (err.message || err));
    } finally {
      this._duplicateManagerSearching = false;
      this._duplicateManagerHasSearched = true;
      this.render(false);
    }
  }

  // Shared payload builder for both merge paths: the server requires the full
  // bottle record on every save, so this mirrors the save_bottle schema.
  _buildBottleSavePayload(b, field, value) {
    var payload = {
      type: "wine_cellar_manager/save_bottle",
      bottle_id: String(b.id),
      cellar_id: String(b.cellar_id),
      shelf_id: String(b.shelf_id),
      lane: String(b.lane || "front"),
      position: b.position != null ? Math.trunc(Number(b.position)) : null,
      wine_name: String(b.wine_name || "").trim(),
      saq_url: b.saq_url ? String(b.saq_url).trim() : (b.url_saq ? String(b.url_saq).trim() : ""),
      producer: String(b.producer || "").trim(),
      region: String(b.region || "").trim(),
      country: String(b.country || "").trim(),
      varietal: String(b.varietal || "").trim(),
      vintage: b.vintage != null ? Math.trunc(Number(b.vintage)) : null,
      wine_type: String(b.wine_type || "other").trim(),
      price: b.price != null ? Number(b.price) : null,
      image_path: String(b.image_path || "").trim(),
      barcode: String(b.barcode || "").trim(),
      aging_start_year: b.aging_start_year != null ? Math.trunc(Number(b.aging_start_year)) : null,
      aging_end_year: b.aging_end_year != null ? Math.trunc(Number(b.aging_end_year)) : null,
      rating: b.rating != null ? Math.trunc(Number(b.rating)) : null,
      notes: String(b.notes || "").trim(),
      serving_temp: b.serving_temp != null ? Number(b.serving_temp) : null,
      alcohol_pct: b.alcohol_pct != null ? Number(b.alcohol_pct) : null
    };

    if (field) payload[field] = value;
    return payload;
  }

  // Run the saves a few at a time: fully serial is needlessly slow, while
  // firing hundreds at once would swamp the websocket connection.
  async _sendBottleUpdates(payloads, onProgress) {
    var CONCURRENCY = 4;
    var index = 0;
    var completed = 0;
    var self = this;

    async function worker() {
      while (index < payloads.length) {
        var current = payloads[index++];
        await self._callWS(current);
        completed++;
        if (onProgress) onProgress(completed, payloads.length);
      }
    }

    var workers = [];
    for (var w = 0; w < Math.min(CONCURRENCY, payloads.length); w++) {
      workers.push(worker());
    }
    await Promise.all(workers);
  }

  async _executeSyntaxMerge(item) {
    try {
      this._setActionMessage(_T("updating_field"));
      var bottlesToUpdate = item.selectedValue === item.valueA ? item.bottlesB : item.bottlesA;

      var self = this;
      var payloads = (bottlesToUpdate || []).map(function (b) {
        return self._buildBottleSavePayload(b, item.field, item.selectedValue);
      });

      await this._sendBottleUpdates(payloads);

      // Rescan the fresh data: other pairs may involve the same bottles.
      await this._loadData(true);
      this._foundSyntaxDuplicates = this._computeSyntaxDuplicates();
      this._clearActionMessage();
      this.render(false);
    } catch(err) {
      this._setFormError(_T("update_failed") + (err.message || err));
    }
  }

  // Merge All applies only the sure pairs (case, accents, spacing,
  // punctuation); pairs marked for checking are left to the user.
  async _executeMergeAllSyntax() {
    try {
      this._setActionMessage(_T("merging_all_selections"));

      var self = this;
      var items = (this._foundSyntaxDuplicates || []).filter(function (item) { return item.certain; });
      // One save per bottle carrying every field it is merged on: two
      // full-record saves of the same bottle would undo each other.
      var byBottle = new Map();
      items.forEach(function (item) {
        var bottlesToUpdate = item.selectedValue === item.valueA ? item.bottlesB : item.bottlesA;
        (bottlesToUpdate || []).forEach(function (b) {
          var payload = byBottle.get(b.id) || self._buildBottleSavePayload(b);
          payload[item.field] = item.selectedValue;
          byBottle.set(b.id, payload);
        });
      });
      var payloads = Array.from(byBottle.values());

      await this._sendBottleUpdates(payloads, function (done, total) {
        self._setActionMessage(_T("merging_all_selections") + " (" + done + "/" + total + ")");
      });

      await this._loadData(true);
      this._foundSyntaxDuplicates = this._computeSyntaxDuplicates();
      this._clearActionMessage();
      this.render(false);
    } catch(err) {
      this._setFormError(_T("global_error") + (err.message || err));
    }
  }

  _renderCleanUpModal() {
    if (!this._viewingDuplicateManager) return "";
    var self = this;

    var fieldLabels = {
      "wine_name": _T("wine_name"),
      "producer": self._t("producer"),
      "varietal": self._t("varietal"),
      "region": _T("region"),
      "country": self._t("country")
    };

    var content = "";
    if (this._duplicateManagerSearching) {
      content = '<div class="empty-state">' + self._t("cleanup_searching") + '</div>';
    } else if (!this._duplicateManagerHasSearched) {
      // Cas 1 : L'utilisateur vient d'ouvrir la fenêtre sans lancer l'analyse
      content = '<div class="empty-state" style="border: 1px dashed color-mix(in srgb,var(--primary-text-color) 12%, transparent); border-radius:12px; padding:30px">' + self._t("cleanup_welcome") + '</div>';
    } else if (!this._foundSyntaxDuplicates.length) {
      // Cas 2 : L'analyse s'est exécutée et la cave est parfaitement propre
      content = '<div class="empty-state" style="color:var(--wcm-ready); font-weight:600">' + self._t("cleanup_no_duplicates") + '</div>';
    } else {
      content = [
        '<div style="display:grid; gap:14px; max-height:50vh; overflow-y:auto; padding-right:4px">',
        this._foundSyntaxDuplicates.map(function(item) {
          var label = fieldLabels[item.field] || item.field;
          var selA = item.selectedValue === item.valueA ? " selected" : "";
          var selB = item.selectedValue === item.valueB ? " selected" : "";

          return [
            '<div class="duplicate-item" style="grid-template-columns:1fr auto auto; gap:14px; padding:14px; align-items:center">',
            '  <div style="display:grid; gap:6px">',
            '    <span class="section-label">' + self._escape(label) + '</span>',
            item.certain ? "" : '    <span class="cleanup-check">' + self._escape(_T("cleanup_check_pair")) + "</span>",
            '    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px">',
            '      <button class="btn variant' + selA + '" data-select-variant-a="' + self._escape(item.id) + '" type="button">',
            '        <div>' + self._escape(item.valueA) + '</div>',
            '        <div class="variant-count">' + item.bottlesA.length + ' ' + _T("bottle_s") + '</div>',
            '      </button>',
            '      <button class="btn variant' + selB + '" data-select-variant-b="' + self._escape(item.id) + '" type="button">',
            '        <div>' + self._escape(item.valueB) + '</div>',
            '        <div class="variant-count">' + item.bottlesB.length + ' ' + _T("bottle_s") + '</div>',
            '      </button>',
            '    </div>',
            '  </div>',
            '  <button class="btn square ok" data-accept-cleanup="' + self._escape(item.id) + '" type="button">✓</button>',
            '  <button class="btn square danger" data-reject-cleanup="' + self._escape(item.id) + '" type="button">✗</button>',
            '</div>'
          ].join("");
        }).join(""),
        '</div>'
      ].join("");
    }

    return [
      '<div class="modal-backdrop" data-close-cleanup-backdrop>',
      '  <div class="modal small-modal" role="dialog" aria-modal="true" aria-labelledby="wcm-cleanup-title" style="display:flex; flex-direction:column; gap:16px">',
      '    <div class="modal-head" style="margin:0">',
      '      <h3 id="wcm-cleanup-title" tabindex="-1" data-dialog-title>' + self._t("cleanup_title") + '</h3>',
      '      <button class="icon-btn" type="button" data-close-cleanup-btn aria-label="' + self._t("close") + '">' + _WCM_ICONS.close + '</button>',
      '    </div>',
      '    <div class="form-error"' + (this._formError ? '' : ' style="display:none"') + '>' + this._escape(this._formError || "") + '</div>',
      '    <div class="action-message"' + (this._actionMessage ? '' : ' style="display:none"') + '>' + this._escape(this._actionMessage || "") + '</div>',
      '    <button class="btn primary" data-trigger-cleanup-search-btn style="width:100%">' + self._t("cleanup_search_btn") + '</button>',
      content,
      '    <div class="modal-actions" style="margin-top:auto; padding-top:12px; border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%, transparent)">',
      '      <button class="btn primary" type="button" data-cleanup-merge-all-btn ' + (this._foundSyntaxDuplicates.some(function (item) { return item.certain; }) ? '' : 'disabled') + '>' + self._t("cleanup_merge_all") + '</button>',
      '      <button class="btn ghost" data-close-cleanup-bottom>' + self._t("close") + '</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");
  }


  // message: optional note for the top of the add sheet (e.g. after a
  // paste). Every opening starts clean: no stale error, and no bottle
  // lifted for a move.
  _openBottleModal(bottle, preset, message) {
    this._formError = "";
    this._actionMessage = "";
    this._releaseSheetPhoto();
    this._moveSource = null;
    this._modal = {
      type: "bottle",
      uid: ++this._modalSeq,
      bottle: bottle || null,
      preset: preset || {},
      mode: bottle && bottle.id ? "view" : "edit",
      ui: message ? { note: { kind: "cellar", text: message } } : {}
    };

    this.render(true);
  }

  _openCellarModal(cellar) {
    this._formError = "";
    this._actionMessage = "";
    this._releaseSheetPhoto();
    this._moveSource = null;
    this._modal = {
      type: "cellar",
      uid: ++this._modalSeq,
      cellar: cellar || null
    };
    this.render(true);
  }

  async _closeModal() {
    this._formError = "";
    this._actionMessage = "";
    this._dialogConfirm = null;
    this._combo = null;
    this._releaseSheetPhoto();
    this._modal = null;
    return this.render(true);
  }

  _setBottleModalMode(mode) {
    if (this._modal && this._modal.type === "bottle") {
      this._modal.mode = mode;
      // Switching between details and form starts from the stored bottle:
      // a cancelled edit does not come back, nor does its photo or notes.
      this._modal.draft = null;
      this._releaseSheetPhoto();
      this._modal.photo = null;
      this._modal.ui = {};
      this._dialogConfirm = null;
      this._clearFormError();
      this._clearActionMessage();
      this.render(true);
    }
  }

  // Identity of the open bottle or cellar dialog: which opening it belongs
  // to and, for a bottle, whether it shows the details or the form.
  _modalKey() {
    var m = this._modal;
    if (!m) return null;
    if (!m.uid) m.uid = ++this._modalSeq;
    if (m.type === "cellar") return m.uid + ":cellar";
    return m.uid + ":" + (m.bottle && m.bottle.id && m.mode === "view" ? "view" : "edit");
  }

  // Everything in an open bottle or cellar form, shelf rows included (in
  // their order on screen).
  _readModalForm(form) {
    var values = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.type === "file" || /\[\]$/.test(el.name)) return;
      if ((el.type === "radio" || el.type === "checkbox") && !el.checked) return;
      values[el.name] = el.value;
    });
    var shelves = Array.prototype.map.call(form.querySelectorAll("[data-shelf-row]"), function (row) {
      function field(name) {
        var el = row.querySelector('[name="' + name + '"]');
        return el ? el.value : "";
      }
      return {
        id: field("shelf_id[]"),
        name: field("shelf_name[]"),
        capacity_front: field("capacity_front[]"),
        capacity_back: field("capacity_back[]")
      };
    });
    return { values: values, shelves: shelves };
  }

  // Called by render() before it rebuilds the page. When the open form is on
  // screen, what is in it (with its scroll and focused field) is kept, and
  // the form is drawn back from that instead of the stored bottle or cellar,
  // so a re-render never loses what the user typed.
  _captureModalDraft() {
    var root = this.shadowRoot;
    var key = this._modalKey();
    var form = root && key ? root.querySelector("form[data-modal-key]") : null;
    if (!form || form.getAttribute("data-modal-key") !== key) return;
    var draft = this._readModalForm(form);
    draft.key = key;
    var scroller = form.querySelector("[data-dialog-scroll]") || form.closest(".modal");
    draft.scrollTop = scroller ? scroller.scrollTop : 0;
    draft.focus = null;
    var active = root.activeElement;
    if (active && active.name && form.contains(active)) {
      var named = form.querySelectorAll('[name="' + active.name + '"]');
      draft.focus = { name: active.name, index: Array.prototype.indexOf.call(named, active), start: null, end: null };
      try {
        draft.focus.start = active.selectionStart;
        draft.focus.end = active.selectionEnd;
      } catch (err) { /* this control has no text selection */ }
    }
    this._modal.draft = draft;
  }

  _modalDraft() {
    var m = this._modal;
    return m && m.draft && m.draft.key === this._modalKey() ? m.draft : null;
  }

  /* Dialogs. The markup gives each one role="dialog", aria-modal and
     aria-labelledby. Here: focus moves in when it opens, Tab stays inside,
     Escape or a backdrop tap closes it (asking first, inside the dialog,
     when its form has unsaved edits), and focus goes back to the control
     that opened it. */

  _topDialog() {
    var root = this.shadowRoot;
    var list = root ? root.querySelectorAll(".modal-backdrop > .modal") : [];
    return list.length ? list[list.length - 1] : null;
  }

  _dialogIdentity(dialog) {
    if (!dialog) return null;
    if (dialog.closest("[data-close-cleanup-backdrop]")) return "cleanup";
    return this._modalKey() || "dialog";
  }

  _focusablesIn(scope) {
    var list = scope.querySelectorAll('button:not([disabled]),[href],input:not([type="hidden"]):not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])');
    // Controls out of the Tab order (a roving group's other members) are
    // not stops either.
    return Array.prototype.filter.call(list, function (el) {
      return el.tabIndex >= 0 && el.getClientRects().length > 0 && getComputedStyle(el).visibility !== "hidden";
    });
  }

  // A dialog opens with focus on its title, or on its first field
  // ([data-autofocus]) where typing is the next step: with a mouse, or right
  // after "Save & add another". Not otherwise on touch screens, where it
  // would pop the keyboard up over the form.
  _focusDialogStart(dialog) {
    if (!dialog) return;
    var field = dialog.querySelector("[data-autofocus]");
    var fine = !window.matchMedia || !window.matchMedia("(pointer: coarse)").matches;
    var wanted = this._modal && this._modal.focusName;
    if (this._modal) this._modal.focusName = false;
    var start = (field && field.getClientRects().length && (fine || wanted) ? field : null) ||
      dialog.querySelector("[data-dialog-title]") || this._focusablesIn(dialog)[0];
    if (start) start.focus({ preventScroll: true });
  }

  // Remembers the control a click lands on in a way that survives a
  // re-render; the one that opened a dialog gets focus back when it closes.
  _rememberActivator(target) {
    var attrs = ["data-edit-bottle", "data-new-bottle", "data-edit-cellar", "data-add-bottle", "data-add-cellar", "data-open-cleanup-tool"];
    var el = target && target.closest ? target.closest("[" + attrs.join("],[") + "]") : null;
    if (!el || el.closest(".modal-backdrop")) return;
    for (var i = 0; i < attrs.length; i++) {
      if (!el.hasAttribute(attrs[i])) continue;
      var entry = { attr: attrs[i], value: el.getAttribute(attrs[i]), loc: null };
      try {
        // Where the slot is, to find it again once it turns from filled to
        // empty (Consume, Delete) or back (Save).
        var slot = el.getAttribute("data-drag-source") || el.getAttribute("data-new-bottle");
        if (slot) entry.loc = JSON.parse(slot);
      } catch (err) { /* not a slot */ }
      // A bottle of All Bottles or of Drink now: the ones listed after and
      // before it, and the list's own place for focus, in case it has gone
      // when the dialog closes (Consume, Delete).
      if (attrs[i] === "data-edit-bottle" && !el.classList.contains("slot") && el.closest(".main-scroll-content")) {
        var list = Array.prototype.filter.call(el.closest(".main-scroll-content").querySelectorAll("[data-edit-bottle]"), function (b) {
          return !b.closest("[hidden]");
        });
        var at = list.indexOf(el);
        entry.near = [list[at + 1], list[at - 1]].filter(Boolean).map(function (b) { return b.getAttribute("data-edit-bottle"); });
        entry.home = el.closest("[data-list]") ? "[data-list-title]" : '.toolbar [data-view="' + (this._view || "stats") + '"]';
      }
      this._lastActivator = entry;
      return;
    }
  }

  _findActivator(entry) {
    var root = this.shadowRoot;
    if (!root || !entry) return null;
    var found = null;
    root.querySelectorAll("[" + entry.attr + "]").forEach(function (el) {
      if (!found && el.getAttribute(entry.attr) === entry.value && !el.closest(".modal-backdrop")) found = el;
    });
    if (!found && entry.loc) {
      var loc = entry.loc;
      root.querySelectorAll(".main-scroll-content [data-drag-source], .main-scroll-content [data-new-bottle]").forEach(function (el) {
        if (found) return;
        try {
          var d = JSON.parse(el.getAttribute("data-drag-source") || el.getAttribute("data-new-bottle"));
          if (d.cellar_id === loc.cellar_id && d.shelf_id === loc.shelf_id && String(d.lane) === String(loc.lane) && Number(d.position) === Number(loc.position)) found = el;
        } catch (err) { /* not a slot */ }
      });
    }
    if (!found && entry.near) {
      entry.near.forEach(function (id) {
        if (!found) found = root.querySelector('.main-scroll-content [data-edit-bottle="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
      });
    }
    if (found && found.tabIndex >= 0) return found;
    // Its list's heading (focusable from script) or the view's tab.
    return entry.home ? root.querySelector(entry.home) : null;
  }

  // Runs after every paint. A dialog that just opened takes focus (on its
  // title); a repainted one gets back its scroll, focused field and pending
  // confirmation; when the last one closes, focus returns to the control
  // that opened it. The page behind an open dialog is inert.
  _syncDialog(root) {
    var dialog = this._topDialog();
    var key = this._dialogIdentity(dialog);
    var wasOpen = this._dialogKey !== null;

    root.querySelectorAll(".toolbar, .main-scroll-content").forEach(function (el) {
      if (dialog) el.setAttribute("inert", "");
      else el.removeAttribute("inert");
    });

    if (!dialog) {
      if (wasOpen) {
        var opener = this._findActivator(this._dialogOpener);
        this._dialogKey = null;
        this._dialogOpener = null;
        this._dialogBaseline = null;
        this._dialogConfirm = null;
        if (opener && !root.activeElement) opener.focus({ preventScroll: true });
      }
      return;
    }

    if (!wasOpen) this._dialogOpener = this._lastActivator;
    var form = dialog.querySelector("form[data-modal-key]");
    if (key !== this._dialogKey) {
      this._dialogKey = key;
      this._dialogConfirm = null;
      this._dialogBaseline = form ? JSON.stringify(this._readModalForm(form)) : null;
      this._focusDialogStart(dialog);
      return;
    }

    // The same dialog was repainted.
    var draft = this._modalDraft();
    if (draft && form) {
      (form.querySelector("[data-dialog-scroll]") || dialog).scrollTop = draft.scrollTop || 0;
      var spot = draft.focus;
      var field = spot ? form.querySelectorAll('[name="' + spot.name + '"]')[spot.index] : null;
      if (field) {
        field.focus({ preventScroll: true });
        try {
          if (spot.start !== null && spot.start !== undefined) field.setSelectionRange(spot.start, spot.end);
        } catch (err) { /* this control has no text selection */ }
      }
    }
    if (this._dialogConfirm) this._paintDialogConfirm(!dialog.contains(root.activeElement));
    else if (!dialog.contains(root.activeElement)) this._focusDialogStart(dialog);
  }

  // Escape closes the top dialog (an open suggestion list or confirmation
  // first) and Tab / Shift+Tab stay inside it. Bound on the shadow root in
  // the capture phase, ahead of the fields' own key handlers.
  _onDialogKeydown(e) {
    var dialog = this._topDialog();
    if (!dialog || e.isComposing) return;
    var root = this.shadowRoot;
    var active = root.activeElement;
    if (e.key === "Escape" || e.key === "Esc") {
      e.preventDefault();
      e.stopPropagation();
      var combo = dialog.querySelector('[data-combo][aria-expanded="true"]');
      if (combo) {
        this._closeCombo(combo.form);
        return;
      }
      if (dialog.querySelector(".bv-menu.open")) {
        this._setBottleMenu(false, true);
        return;
      }
      if (this._dialogConfirm) {
        this._cancelDialogConfirm();
        return;
      }
      this._requestCloseDialog();
      return;
    }
    if (e.key !== "Tab") return;
    var scope = (this._dialogConfirm && dialog.querySelector(".dialog-confirm")) || dialog;
    // A toast shown over the dialog (with View, say) is part of the cycle.
    var toast = this._dialogConfirm ? null : root.querySelector(".wrap > .wcm-toast");
    var items = this._focusablesIn(scope).concat(toast ? this._focusablesIn(toast) : []);
    if (!items.length) {
      e.preventDefault();
      return;
    }
    var first = items[0];
    var last = items[items.length - 1];
    if (!active || !(scope.contains(active) || (toast && toast.contains(active)))) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && (active === first || items.indexOf(active) === -1)) {
      e.preventDefault();
      last.focus();
    }
  }

  // Escape, a backdrop tap, X or Cancel. A form with unsaved edits asks
  // first, inside the dialog.
  _requestCloseDialog() {
    var self = this;
    var dialog = this._topDialog();
    if (!dialog) return;
    if (this._dialogIdentity(dialog) === "cleanup") {
      this._closeCleanupTool();
      return;
    }
    this._confirmDiscard(function () { return self._closeModal(); });
  }

  // Whether the open form differs from how it was first painted. A label
  // photo still being uploaded or read counts as unsaved work too.
  _isDialogDirty() {
    var dialog = this._topDialog();
    var form = dialog && dialog.querySelector("form[data-modal-key]");
    if (!form || this._dialogBaseline === null) return false;
    if (this._modal && this._modal.photo && this._modal.photo.busy) return true;
    return JSON.stringify(this._readModalForm(form)) !== this._dialogBaseline;
  }

  // A confirmation step inside the top dialog, used instead of
  // window.confirm() (which Home Assistant's app can block or hide): a
  // title, one line on the consequences, Cancel and the action. onConfirm
  // may be async; if it throws, the error shows in the strip.
  _showDialogConfirm(opts) {
    var root = this.shadowRoot;
    this._dialogConfirm = Object.assign({
      tone: "danger",
      body: "",
      cancelLabel: _T("cancel"),
      confirmClass: "solid-danger"
    }, opts, { returnFocus: root ? root.activeElement : null });
    this._paintDialogConfirm(true);
  }

  _cancelDialogConfirm() {
    var c = this._dialogConfirm;
    this._dialogConfirm = null;
    this._paintDialogConfirm(false);
    var back = c && c.returnFocus;
    // An action from the "More" menu of narrow screens: the menu closed when
    // the confirmation took focus, so its toggle takes focus back.
    if (back && back.isConnected && !back.getClientRects().length) {
      var dialog = this._topDialog();
      back = dialog && back.closest(".bv-menu") ? dialog.querySelector("[data-bv-more]") : null;
    }
    if (back && back.isConnected && back.getClientRects().length) {
      back.focus({ preventScroll: true });
      if (this.shadowRoot && this.shadowRoot.activeElement === back) return;
    }
    this._focusDialogStart(this._topDialog());
  }

  _paintDialogConfirm(takeFocus) {
    var self = this;
    var dialog = this._topDialog();
    var c = this._dialogConfirm;
    if (!dialog) return;
    var old = dialog.querySelector(".dialog-confirm");
    if (old) old.remove();
    dialog.classList.toggle("is-confirming", !!c);
    if (!c) return;

    var box = document.createElement("div");
    box.className = "dialog-confirm tone-" + (c.tone === "warning" ? "warning" : "danger");
    box.setAttribute("role", "alertdialog");
    box.setAttribute("aria-labelledby", "wcm-confirm-title");
    box.setAttribute("aria-describedby", "wcm-confirm-body");
    box.innerHTML =
      '<p class="dialog-confirm-title" id="wcm-confirm-title">' + this._escape(c.title) + "</p>" +
      '<p class="dialog-confirm-body" id="wcm-confirm-body">' + this._escape(c.body || "") + "</p>" +
      '<p class="dialog-confirm-error" role="alert"></p>' +
      '<div class="dialog-confirm-actions">' +
      '<button class="btn ghost" type="button" data-confirm-cancel>' + this._escape(c.cancelLabel) + "</button>" +
      '<button class="btn ' + this._escape(c.confirmClass) + '" type="button" data-confirm-ok>' + this._escape(c.confirmLabel) + "</button>" +
      "</div>";
    dialog.appendChild(box);

    var ok = box.querySelector("[data-confirm-ok]");
    var cancel = box.querySelector("[data-confirm-cancel]");
    box.addEventListener("click", function (e) { e.stopPropagation(); });
    cancel.addEventListener("click", function (e) {
      e.preventDefault();
      self._cancelDialogConfirm();
    });
    ok.addEventListener("click", async function (e) {
      e.preventDefault();
      if (ok.disabled) return;
      ok.disabled = true;
      cancel.disabled = true;
      try {
        await c.onConfirm();
        if (self._dialogConfirm === c) {
          self._dialogConfirm = null;
          self._paintDialogConfirm(false);
        }
      } catch (err) {
        console.error("Wine Cellar: confirmed action failed", err);
        ok.disabled = false;
        cancel.disabled = false;
        var live = self._topDialog();
        var line = live && live.querySelector(".dialog-confirm .dialog-confirm-error");
        if (line) line.textContent = _T("action_failed", { error: self._friendlyError(err) });
      }
    });

    if (takeFocus) {
      cancel.focus({ preventScroll: true });
      box.scrollIntoView({ block: "nearest" });
    }
  }

  _closeCleanupTool() {
    this._viewingDuplicateManager = false;
    this._foundSyntaxDuplicates = [];
    this._duplicateManagerHasSearched = false;
    this._rejectedCleanup = {};
    this._dialogConfirm = null;
    this._clearFormError();
    this._clearActionMessage();
    this.render(false);
  }

  _cleanupPairKey(item) {
    return item.field + "|" + [item.valueA, item.valueB].sort().join("|");
  }

  _bottleTitle(id) {
    var bottle = ((this._data && this._data.bottles) || []).find(function (b) { return b.id === id; });
    var name = (bottle && bottle.wine_name) || _T("unnamed_wine");
    return bottle && bottle.vintage ? name + " " + bottle.vintage : name;
  }

  _getSortedShelves(cellar) {
    var shelves = (cellar && cellar.shelves ? cellar.shelves : []).slice();
    shelves.sort(function (a, b) {
      var orderDiff = (a.display_order || 0) - (b.display_order || 0);
      if (orderDiff !== 0) return orderDiff;
      return String(a.name || "").localeCompare(String(b.name || ""));
    });
    return shelves;
  }

  _getShelfById(cellarId, shelfId) {
    var cellars = (this._data && this._data.cellars) ? this._data.cellars : [];
    for (var i = 0; i < cellars.length; i++) {
      if (cellars[i].id !== cellarId) continue;
      var shelves = cellars[i].shelves || [];
      for (var j = 0; j < shelves.length; j++) {
        if (shelves[j].id === shelfId) return shelves[j];
      }
    }
    return null;
  }

  _getShelfName(cellarId, shelfId) {
    var shelf = this._getShelfById(cellarId, shelfId);
    return shelf ? (shelf.name || shelf.id || "") : "";
  }

  _laneLabel(lane) {
    if (lane === "back") return _T("back");
    return _T("front");
  }

  // Delete asks inside the dialog first (it is permanent; window.confirm can
  // be blocked or hidden in the Home Assistant app), then closes the dialog
  // and says it is done. A failure closes the question and says why.
  async _deleteBottle(id) {
    var self = this;
    var name = this._bottleTitle(id);
    this._showDialogConfirm({
      title: _T("delete_bottle_title", { name: name }),
      body: _T("delete_bottle_body"),
      confirmLabel: _T("delete"),
      onConfirm: async function () {
        try {
          await self._callWS({ type: "wine_cellar_manager/delete_bottle", bottle_id: id });
        } catch (err) {
          self._cancelDialogConfirm();
          self._showToast(_T("delete_failed", { name: name, error: self._friendlyError(err) }), { kind: "warn" });
          return;
        }
        await self._closeModal();
        self._showToast(_T("delete_done", { name: name }), { icon: "trash" });
      }
    });
  }

  // Consume acts at once: the bottle goes to the history, the dialog closes
  // and a toast offers Undo (also Ctrl+Z), which puts the very same bottle
  // back in its slot (restore_consumed_bottle). Once the toast has gone,
  // Stats › Recently enjoyed still offers Put back.
  async _consumeBottle(id) {
    var self = this;
    if (this._consuming) return;
    var name = this._bottleTitle(id);
    var button = this.shadowRoot && this.shadowRoot.querySelector("[data-consume-bottle]");
    if (button) button.disabled = true;
    this._consuming = true;
    var result;
    try {
      result = await this._callWS({ type: "wine_cellar_manager/consume_bottle", bottle_id: id });
    } catch (err) {
      if (button && button.isConnected) button.disabled = false;
      this._showToast(_T("consume_failed", { name: name, error: this._friendlyError(err) }), { kind: "warn" });
      return;
    } finally {
      this._consuming = false;
    }
    // Only this bottle's dialog closes: one opened on another bottle while
    // the call ran (it can be slow) stays open, edits and all.
    var modal = this._modal;
    if (modal && modal.type === "bottle" && modal.bottle && String(modal.bottle.id) === String(id)) {
      await this._closeModal();
    } else {
      await this._loadData(true);
      await this.render(false);
    }
    var consumedId = result && result.consumed_id;
    this._showToast(_T("consume_done", { name: name }), consumedId ? {
      icon: "glass",
      action: {
        label: _T("undo"),
        undo: true,
        run: function () { return self._undoConsume(consumedId, name); }
      }
    } : { icon: "glass" });
  }

  // Undo of Consume, and Put back in Stats › Recently enjoyed. If the slot
  // was filled meanwhile (or its shelf is gone), the bottle stays in the
  // history and the toast says so. opts.near: history entries to give focus
  // to (Put back leaves the list).
  async _undoConsume(consumedId, name, opts) {
    opts = opts || {};
    var self = this;
    var root = this.shadowRoot;
    // Focus that was on the toast's button (now gone), on a slot or a bottle
    // of a list (redrawn below) goes to the bottle; focus in the search box
    // stays there.
    var active = root && root.activeElement;
    var focus = !active || active.classList.contains("slot") || !!(active.matches && active.matches(".main-scroll-content [data-edit-bottle], [data-restore-consumed]"));
    var result;
    try {
      result = await this._callWS({ type: "wine_cellar_manager/restore_consumed_bottle", consumed_id: String(consumedId) });
    } catch (err) {
      var raw = err && err.message ? err.message : "";
      var text = /already occupied|position_occupied|out of range|no back lane/i.test(raw) ? _T("consume_undo_taken", { name: name })
        : /shelf not found|cellar not found/i.test(raw) ? _T("consume_undo_noshelf", { name: name })
        : _T("consume_undo_failed", { name: name, error: this._friendlyError(err) });
      this._showToast(text, { kind: "warn" });
      return;
    }
    var id = result && result.bottle_id ? String(result.bottle_id) : "";
    var view = this._view || "cellars";
    if (id && (view === "cellars" || view === "compact")) this._pendingPulse = { ids: [id], focus: focus };
    await this.render(true);
    if (focus && view !== "cellars" && view !== "compact") {
      // All Bottles and Stats: the bottle's name where it is listed, else the
      // next Put back, else the list's title or the view's tab.
      var near = (opts.near || []).map(function (n) { return '[data-restore-consumed="' + self._cssEscape(n) + '"]'; });
      var candidates = (id ? ['.main-scroll-content [data-edit-bottle="' + this._cssEscape(id) + '"]'] : []).concat(near, ["[data-list-title]", '.toolbar [data-view="' + view + '"]']);
      for (var i = 0; i < candidates.length; i++) {
        var el = root.querySelector(candidates[i]);
        if (el && el.getClientRects().length) {
          el.focus({ preventScroll: i > 0 });
          break;
        }
      }
    }
    this._showToast(_T("consume_restored", { name: name }));
  }

  // Delete cellar asks inside the dialog first, then acts and closes the
  // dialog; a failure shows in the question.
  async _deleteCellar(id) {
    var self = this;
    var data = this._data || {};
    var cellar = (data.cellars || []).find(function (c) { return c.id === id; }) || {};
    var bottles = (data.bottles || []).filter(function (b) { return b.cellar_id === id; }).length;
    var history = (data.consumed_bottles || []).filter(function (b) { return b.cellar_id === id; }).length;
    this._showDialogConfirm({
      title: _T("delete_cellar_title", { name: cellar.name || _T("cellar") }),
      body: bottles || history ? _T("delete_cellar_body", { bottles: bottles, history: history }) : _T("delete_cellar_body_empty"),
      confirmLabel: _T("delete_cellar_confirm"),
      onConfirm: async function () {
        await self._callWS({ type: "wine_cellar_manager/delete_cellar", cellar_id: id });
        await self._loadData(true);
        await self._closeModal();
      }
    });
  }

  // Two calm rows: the views (arrow keys move between them), the inventory
  // and the actions; then the search, Filters and the status chips. Under
  // them the filters panel (a bottom sheet on phones) and the strip of
  // results, both filled in place as filters change.
  _renderToolbar() {
    var self = this;
    var data = this._data || { bottles: [], cellars: [] };
    var view = this._view || "cellars";
    var finding = view !== "stats";
    function esc(value) { return self._escape(value); }

    var tabs = [["cellars", _T("cellars")], ["compact", _T("compact")], ["list", _T("all_bottles")], ["stats", _T("stats")]].map(function (v) {
      var on = view === v[0];
      // "All Bottles" becomes "Bottles" where room is short.
      var label = v[0] === "list"
        ? '<span class="tab-long">' + esc(v[1]) + '</span><span class="tab-short">' + esc(_T("find_tab_bottles")) + "</span>"
        : esc(v[1]);
      return '<button class="seg-btn' + (on ? " active" : "") + '" type="button" role="tab" id="wcm-tab-' + v[0] + '" aria-selected="' + on + '"' +
        ' aria-controls="wcm-view" tabindex="' + (on ? "0" : "-1") + '" data-view="' + v[0] + '">' + label + "</button>";
    }).join("");

    var capacity = this._cellarCapacity();
    var total = (data.bottles || []).length;
    var cleanup = esc(_T("cleanup_btn"));
    var html = [
      '<div class="toolbar" data-toolbar>',
      '<div class="tb-row">',
      '<div class="seg" role="tablist" aria-label="' + esc(_T("find_views_label")) + '">' + tabs + "</div>",
      // Each part keeps its number and words together; a narrow row breaks
      // between the two parts only.
      '<span class="tb-inv"><span>' + _TN("list_title", total, { n: "<strong>" + total + "</strong>" }) + '</span><i aria-hidden="true"></i><span>' +
        _TN("stats_free", Math.max(0, capacity - total), { n: "<strong>" + Math.max(0, capacity - total) + "</strong>" }) + "</span></span>",
      '<div class="tb-actions">',
      '<button class="btn tb-quiet" type="button" data-open-cleanup-tool title="' + cleanup + '">' + _WCM_ICONS.sparkle + '<span class="tb-lbl">' + cleanup + "</span></button>",
      '<button class="btn tb-outline" type="button" data-add-cellar aria-label="' + esc(_T("builder_title_new")) + '" title="' + esc(_T("builder_title_new")) + '">' +
        _WCM_ICONS.cabinetPlus + '<span class="tb-lbl">' + esc(_T("add_cellar_short").replace(/^\+\s*/, "")) + "</span></button>",
      '<button class="btn primary" type="button" data-add-bottle title="' + esc(_T("sheet_add_title")) + '">' + _WCM_ICONS.plus +
        '<span class="tb-lbl">' + esc(_T("add_bottle_short").replace(/^\+\s*/, "")) + "</span></button>",
      "</div>",
      "</div>"
    ];
    if (this._toolbarNotice) {
      html.push('<div class="toolbar-notice" role="status"><span>' + esc(this._toolbarNotice) + '</span><button class="icon-btn" type="button" data-dismiss-notice title="' +
        esc(_T("close")) + '" aria-label="' + esc(_T("close")) + '">' + _WCM_ICONS.close + "</button></div>");
    }

    if (finding) {
      var model = this._filterModel();
      var q = this._search || "";
      var open = !!this._filterPanelOpen;
      var where = this._whereStripHtml(model);
      var phone = typeof window !== "undefined" && window.innerWidth <= 600;
      html.push(
        '<div class="tb-find-row">',
        '<div class="tb-find">',
        '<label class="tb-search' + (q ? " has-value" : "") + '">' + _WCM_ICONS.search +
          '<input type="search" data-search enterkeyhint="search" autocomplete="off" autocapitalize="off" spellcheck="false" aria-keyshortcuts="/"' +
          ' placeholder="' + esc(_T(phone ? "find_placeholder_short" : "find_placeholder")) + '" aria-label="' + esc(_T("find_search_label")) + '" value="' + esc(q) + '">' +
          '<kbd class="tb-kbd" aria-hidden="true">/</kbd>' +
          '<button class="tb-x" type="button" data-find-clear="search" tabindex="-1" aria-label="' + esc(_T("find_clear_search")) + '">' + _WCM_ICONS.close + "</button>" +
        "</label>",
        '<button class="tb-filter-btn" type="button" data-filter-toggle aria-controls="wcm-filters" aria-expanded="' + open + '" aria-label="' + esc(this._filtersButtonLabel()) + '">' +
          _WCM_ICONS.tune + '<span class="tb-lbl">' + esc(_T("find_filters")) + '</span><span class="tb-badge" data-filter-count aria-hidden="true">' +
          (this._facetCount(["type", "country", "cellar"]) || "") + "</span></button>",
        "</div>",
        '<div class="tb-facets" data-facets>' + this._renderSummary() + "</div>",
        "</div>",
        '<div class="fp-scrim" data-filter-scrim hidden></div>',
        '<div class="tb-panel" id="wcm-filters" data-filter-panel role="region" aria-label="' + esc(_T("find_filters")) + '"' + (open ? "" : " hidden") + ">" +
          (open ? this._renderFilterPanel() : "") + "</div>",
        '<div class="tb-where" data-where-strip role="region" aria-label="' + esc(_T("find_matches_label")) + '"' + (where ? "" : " hidden") + ">" + where + "</div>"
      );
    }

    if (this._hasCopiedBottle()) {
      var cancelLabel = esc(_T("cancel"));
      html.push('<div class="paste-row"><span class="paste-banner"><span>' + esc(_T("bottle_copied_to_memory")) + '</span><button class="icon-btn" type="button" data-cancel-paste title="' +
        cancelLabel + '" aria-label="' + cancelLabel + '">' + _WCM_ICONS.close + "</button></span></div>");
    }
    // The number of matches, read out once typing pauses (_announceMatches).
    html.push('<span class="sr-only" role="status" aria-live="polite" data-find-live></span>', "</div>");
    return html.join("");
  }

  _filtersButtonLabel() {
    var n = this._facetCount(["type", "country", "cellar"]);
    return n ? _TN("find_filters_n", n) : _T("find_filters");
  }

  // The status chips beside the search: the legend of the glyphs drawn on
  // the bottles, each with how many bottles it would show, and the fastest
  // filter (press one or several). Two presets come first: Drink now (At
  // peak and Past peak) and Ready to drink (Ready and At peak).
  // Then the type, country and cellar filters in use, as tokens that remove
  // themselves, and Clear all outside the scrolling row, always in reach.
  _renderSummary() {
    var self = this;
    var model = this._filterModel();
    var facets = this._facets;
    function esc(value) { return self._escape(value); }
    var html = [
      '<div class="tb-chips x-fade" data-chips>',
      '<div class="tb-group" role="group" aria-label="' + esc(_T("find_status_group")) + '">',
      this._statusChip("drink_now", model, ""),
      this._statusChip("ready_to_drink", model, ""),
      '<span class="tb-sep" aria-hidden="true"></span>'
    ];
    ["young", "ready", "peak", "past", "none"].forEach(function (status) {
      if (status === "none" && !model.present.status.none && !facets.status.has("none")) return;
      html.push(self._statusChip(status, model, ""));
    });
    html.push("</div>");

    // The panel shows these itself while it is open.
    var tokens = [];
    var token = function (name, value, label, lead) {
      tokens.push('<button type="button" class="fchip token" data-facet="' + name + '" data-value="' + esc(value) + '" data-key="tok:' + name + ":" + esc(value) + '"' +
          ' aria-label="' + esc(_T("find_remove", { x: label })) + '">' + lead + '<span class="fchip-l">' + esc(label) + '</span><span class="x" aria-hidden="true">' + _WCM_ICONS.close + "</span></button>");
    };
    if (!this._filterPanelOpen) {
      facets.type.forEach(function (type) {
        token("type", type, self._wineTypeLabel(type), '<span class="fp-swatch" style="--type:' + self._wineSurfaceColor(type) + '"></span>');
      });
      facets.country.forEach(function (key) {
        token("country", key, model.countryLabel[key] || key, "");
      });
      facets.cellar.forEach(function (id) {
        var cellar = self._cellarById(id);
        var color = cellar && self._safeColor(cellar.bg_color);
        token("cellar", id, cellar ? (cellar.name || _T("cellar")) : _T("unknown_cellar"), '<span class="fp-cdot"' + (color ? ' style="--cellar:' + color + '"' : "") + "></span>");
      });
      if (tokens.length) html.push('<span class="tb-sep" aria-hidden="true"></span>' + tokens.join(""));
    }
    html.push("</div>");
    html.push('<button type="button" class="tb-clear" data-find-clear="all" data-key="clear"' + (model.filtering ? "" : " hidden") + ">" + esc(_T("find_clear_all")) + "</button>");
    return html.join("");
  }

  // One status chip, or a preset of statuses ("drink_now", "ready_to_drink";
  // pressed when exactly its statuses are on). keyPrefix tells the panel's
  // chips from the toolbar's, to give focus back after a repaint.
  _statusChip(status, model, keyPrefix) {
    var facets = this._facets;
    var preset = _WCM_STATUS_PRESETS[status];
    var n;
    var pressed;
    var label;
    var glyph;
    var title = "";
    if (preset) {
      n = preset.reduce(function (sum, s) { return sum + (model.counts.status[s] || 0); }, 0);
      pressed = facets.status.size === preset.length && preset.every(function (s) { return facets.status.has(s); });
      label = _T(status);
      glyph = '<i class="bt-glyph ' + (status === "drink_now" ? "is-soon" : "is-drinkable") + '" aria-hidden="true">' + _WCM_ICONS.glass + "</i>";
      title = _T(status === "drink_now" ? "find_drink_now_hint" : "find_ready_to_drink_hint");
    } else {
      n = model.counts.status[status] || 0;
      pressed = facets.status.has(status);
      label = status === "none" ? _T("bt_no_window") : this._agingStatusLabel(status);
      glyph = this._bottleGlyph(status);
    }
    var zero = !n && !pressed;
    return '<button type="button" class="fchip' + (zero ? " is-zero" : "") + '" data-facet="status" data-value="' + status + '" data-key="' + keyPrefix + "status:" + status + '"' +
      ' aria-pressed="' + pressed + '"' + (zero ? ' aria-disabled="true"' : "") + (title ? ' title="' + this._escape(title) + '"' : "") + ">" +
      glyph + '<span class="fchip-l">' + this._escape(label) + '</span><span class="n">' + n + "</span></button>";
  }

  // The Filters panel: wine types with their colors, countries (most bottles
  // first), cellars; on phones also the status chips, with Clear all at the
  // top and "Show N bottles" at the bottom of the sheet.
  _renderFilterPanel() {
    var self = this;
    var model = this._filterModel();
    var facets = this._facets;
    function esc(value) { return self._escape(value); }
    function chip(name, value, label, n, lead) {
      var pressed = facets[name].has(value);
      var zero = !n && !pressed;
      return '<button type="button" class="fchip' + (lead ? "" : " plain") + (zero ? " is-zero" : "") + '" data-facet="' + name + '" data-value="' + esc(value) + '"' +
        ' data-key="p:' + name + ":" + esc(value) + '" aria-pressed="' + pressed + '"' + (zero ? ' aria-disabled="true"' : "") + ">" +
        (lead || "") + '<span class="fchip-l">' + esc(label) + '</span><span class="n">' + (n || 0) + "</span></button>";
    }
    function group(id, label, chips, extra) {
      if (!chips.length) return "";
      return '<div class="fp-group' + (extra || "") + '" role="group" aria-labelledby="wcm-fp-' + id + '"><div class="fp-label" id="wcm-fp-' + id + '">' + esc(label) + "</div>" +
        '<div class="fp-chips">' + chips.join("") + "</div></div>";
    }
    var status = ["drink_now", "ready_to_drink", "young", "ready", "peak", "past", "none"].filter(function (s) {
      return s !== "none" || model.present.status.none || facets.status.has("none");
    }).map(function (s) { return self._statusChip(s, model, "p:"); });
    var types = _WCM_SHEET_TYPES.filter(function (t) { return model.present.type[t] || facets.type.has(t); }).map(function (t) {
      return chip("type", t, self._wineTypeLabel(t), model.counts.type[t], '<span class="fp-swatch" style="--type:' + self._wineSurfaceColor(t) + '"></span>');
    });
    var countryKeys = Object.keys(model.present.country);
    facets.country.forEach(function (key) { if (countryKeys.indexOf(key) === -1) countryKeys.push(key); });
    var countries = countryKeys.sort(function (a, b) {
      return ((model.present.country[b] || 0) - (model.present.country[a] || 0)) || String(model.countryLabel[a] || a).localeCompare(String(model.countryLabel[b] || b));
    }).map(function (key) { return chip("country", key, model.countryLabel[key] || key, model.counts.country[key], ""); });
    var cellars = this._sortedCellars().map(function (c) {
      var color = self._safeColor(c.bg_color);
      return chip("cellar", String(c.id), c.name || _T("cellar"), model.counts.cellar[String(c.id)], '<span class="fp-cdot"' + (color ? ' style="--cellar:' + color + '"' : "") + "></span>");
    });
    var shown = model.filtering ? model.hits.length : model.total;
    return '<div class="fp-head"><span class="fp-grip" aria-hidden="true"></span><h2 class="fp-title" id="wcm-fp-title" tabindex="-1">' + esc(_T("find_filters")) + "</h2>" +
      (model.filtering ? '<button type="button" class="tb-clear" data-find-clear="all" data-key="p:clear">' + esc(_T("find_clear_all")) + "</button>" : "") + "</div>" +
      '<div class="fp-body">' +
      group("status", _T("find_status_group"), status, " fp-status") +
      group("type", _T("find_type_group"), types) +
      group("country", _T("find_country_group"), countries) +
      (cellars.length > 1 ? group("cellar", _T("find_cellar_group"), cellars) : "") +
      "</div>" +
      '<div class="fp-foot"><button type="button" class="btn primary" data-filter-close data-key="p:done">' + esc(_TN("find_show", shown)) + "</button></div>";
  }

  // Where a bottle stands, as a result chip names it: "Kitchen › Reds
  // (shelf 3) › Back #1", with "Shelf 3" in place of the shelf on phones;
  // text is the same place in words, for screen readers.
  _bottlePlace(bottle) {
    var self = this;
    var cellar = this._cellarById(bottle.cellar_id);
    var shelves = cellar ? this._getSortedShelves(cellar) : [];
    var n = 0;
    var shelf = null;
    for (var i = 0; i < shelves.length; i++) {
      if (String(shelves[i].id) === String(bottle.shelf_id)) {
        n = i + 1;
        shelf = shelves[i];
        break;
      }
    }
    var numbered = n ? _T("shelf_n", { n: n }) : (shelf && shelf.name) || _T("shelf");
    var full = numbered;
    if (shelf && shelf.name) {
      full = n && this._foldSearchText(shelf.name) !== this._foldSearchText(numbered) ? _T("find_crumb_shelf", { name: shelf.name, n: n }) : shelf.name;
    }
    var pos = bottle.position || "—";
    var twoRows = !!shelf && Number(shelf.capacity_front || 0) > 0 && Number(shelf.capacity_back || 0) > 0;
    var slot = twoRows ? _T(bottle.lane === "back" ? "find_crumb_back" : "find_crumb_front", { pos: pos }) : _T("find_crumb_pos", { pos: pos });
    // The "›" between the parts is drawn by CSS (.cs-part::before), with a
    // break opportunity after it where the text may wrap (a narrow table);
    // result chips keep the place on one line.
    function esc(value) { return self._escape(value); }
    // Short parts ("Shelf 4", "Back #1") never break inside.
    function keep(text) { return String(text).replace(/ /g, "\u00a0"); }
    return {
      html: "<b>" + esc(cellar ? (cellar.name || _T("cellar")) : _T("unknown_cellar")) + "</b>" +
        '<span class="cs-part cs-full">' + esc(full) + '</span><span class="cs-part cs-short">' + esc(keep(numbered)) + '</span><span class="cs-part">' + esc(keep(slot)) + "</span>",
      text: this._slotLocationText(cellar, shelf ? this._shelfRef(shelf, n) : _T("shelf"), bottle.lane, pos)
    };
  }

  // One result chip: the bottle drawn in its type color, its name and
  // vintage, where it stands and its status glyph.
  _whereChip(bottle, current, tabbable) {
    var status = this._agingStatus(bottle);
    var name = bottle.wine_name || _T("unnamed_wine");
    var place = this._bottlePlace(bottle);
    var label = [name + (bottle.vintage ? " " + bottle.vintage : ""), place.text, status !== "none" ? this._agingStatusLabel(status) : ""].filter(Boolean).join(", ");
    return '<button type="button" class="wchip' + (current ? " is-current" : "") + '" data-goto="' + this._escape(bottle.id) + '" data-key="goto:' + this._escape(bottle.id) + '"' +
      ' tabindex="' + (tabbable ? "0" : "-1") + '"' + (current ? ' aria-current="true"' : "") +
      ' aria-label="' + this._escape(label) + '" title="' + this._escape(label) + '" style="--type:' + this._wineSurfaceColor(bottle.wine_type || "unset") + '">' +
      this._bottleArtSvg(bottle, { variant: "tag" }) +
      '<span class="wchip-t"><span class="wchip-name">' + this._escape(name) + (bottle.vintage ? ' <span class="wchip-vin">' + this._escape(bottle.vintage) + "</span>" : "") + "</span>" +
      '<span class="wchip-crumb">' + place.html + "</span></span>" +
      (status !== "none" ? this._bottleGlyph(status) : "") +
      "</button>";
  }

  // "7 matches", the number set apart.
  _matchCountHtml(n) {
    return this._escape(_TN("find_matches", n, { n: "\u0001" })).replace("\u0001", '<span class="wh-n">' + n + "</span>");
  }

  // The strip under the toolbar while a search or filter is on: how many
  // bottles match and in which cellars, then the first of them as chips
  // (click or Enter: go to the bottle; arrow keys move along); with no
  // match, the empty state. Not in All Bottles, which is the result itself.
  // "" hides the strip.
  _whereStripHtml(model) {
    var self = this;
    var view = this._view || "cellars";
    if (!model.filtering || view === "stats") return "";
    // All Bottles is the result itself: its title says how many.
    if (view === "list") return "";
    var hits = model.hits;
    var count = this._matchCountHtml(hits.length);
    if (!hits.length) return this._renderNoResults();
    var cellarIds = [];
    hits.forEach(function (b) { if (cellarIds.indexOf(b.cellar_id) === -1) cellarIds.push(b.cellar_id); });
    var where = cellarIds.length === 1
      ? _T("find_in_cellar", { name: (this._cellarById(cellarIds[0]) || {}).name || _T("cellar") })
      : _TN("find_in_cellars", cellarIds.length);
    var cursor = this._matchCursor;
    var shown = hits.slice(0, _WCM_WHERE_CHIPS);
    var tabbable = cursor >= 0 && cursor < shown.length ? cursor : 0;
    var chips = shown.map(function (b, i) { return self._whereChip(b, i === cursor, i === tabbable); }).join("");
    if (hits.length > shown.length) {
      chips += '<button type="button" class="wmore" data-find-more data-key="more" tabindex="-1" title="' + this._escape(_T("find_more_label", { n: hits.length })) + '"' +
        ' aria-label="' + this._escape(_T("find_more_label", { n: hits.length })) + '">' + this._escape(_T("find_more_n", { n: hits.length - shown.length })) + "</button>";
    }
    return '<div class="wh-head"><span class="wh-count">' + count + '</span><span class="wh-sub">' + this._escape(where) + "</span></div>" +
      '<div class="wh-scroll x-fade" data-where-chips>' + chips + "</div>" +
      (hits.length > 1 ? '<span class="wh-hint" aria-hidden="true"><kbd>↵</kbd>' + this._escape(_T("find_step_hint")) + "</span>" : "");
  }

  // Nothing passes the filters: says what was looked for, offers the
  // closest spellings found in the cellar ("Did you mean Barolo?") and a
  // way back (Clear search, Clear filters).
  _renderNoResults() {
    var self = this;
    function esc(value) { return self._escape(value); }
    var q = String(this._search || "").trim();
    var title = q ? _T("find_no_results_q", { q: q.length > 40 ? q.slice(0, 40) + "…" : q }) : _T("find_no_results_f");
    var sub = "";
    // The words find bottles, only not with the filters on: say so, rather
    // than suggest a spelling.
    var terms = q && this._facetCount() ? this._searchTerms() : [];
    var words = terms.length ? ((this._data && this._data.bottles) || []).filter(function (b) { return self._matchesTerms(b, terms); }).length : 0;
    if (words) {
      sub = esc(_TN("find_words_unfiltered", words, { q: q.length > 40 ? q.slice(0, 40) + "…" : q }));
    } else if (q) {
      var suggestions = this._suggestSearch();
      sub = suggestions.length
        ? esc(_T("find_did_you_mean", { x: "\u0001" })).replace("\u0001", this._orList(suggestions.map(function (s) {
            return '<button type="button" class="find-suggest" data-find-suggest="' + esc(s) + '">' + esc(s) + "</button>";
          })))
        : esc(_T("find_try_other"));
    }
    var actions = (q ? '<button type="button" class="btn small-btn" data-find-clear="search" data-key="empty:search">' + _WCM_ICONS.close + "<span>" + esc(_T("find_clear_search")) + "</span></button>" : "") +
      (this._facetCount() ? '<button type="button" class="btn small-btn" data-find-clear="filters" data-key="empty:filters">' + _WCM_ICONS.close + "<span>" + esc(_T("clear_filters")) + "</span></button>" : "");
    return '<div class="find-empty"><span class="find-empty-ico" aria-hidden="true">' + _WCM_ICONS.searchOff + "</span>" +
      '<div class="find-empty-t"><div class="find-empty-title">' + esc(title) + "</div>" + (sub ? '<div class="find-empty-sub">' + sub + "</div>" : "") + "</div>" +
      '<div class="find-empty-actions">' + actions + "</div></div>";
  }

  // Pieces of markup as "A, B or C" in the card's language.
  _orList(parts) {
    if (parts.length < 2) return parts.join("");
    try {
      var text = new Intl.ListFormat(_wcmLang, { type: "disjunction" }).format(parts.map(function (p, i) { return "\u0002" + i + "\u0003"; }));
      return this._escape(text).replace(/\u0002(\d+)\u0003/g, function (m, i) { return parts[Number(i)]; });
    } catch (err) {
      return parts.join(", ");
    }
  }

  // Applies the current search and filters to the page already on screen
  // instead of rebuilding it: the search box keeps its focus, caret and (on
  // phones) keyboard, a click that lands mid-update still reaches its target,
  // and no data is reloaded. opts.locate brings the first match into view
  // when no match is visible; opts.forceLocate does so even if it is the
  // same match as last time.
  _applyFiltersInPlace(opts) {
    opts = opts || {};
    var root = this.shadowRoot;
    if (!root || !this._data) return;
    var model = this._filterModel();
    var filtering = model.filtering;

    // A new result set starts Enter-stepping from its first match.
    var signature = (filtering ? "f:" : "") + model.hits.map(function (b) { return b.id; }).join(",");
    if (signature !== this._matchSignature) {
      this._matchSignature = signature;
      this._matchCursor = -1;
    }

    // Toolbar: chips, the Filters count and panel, the result strip; never
    // the search box itself.
    this._paintFindBar(model);

    // Cellars and Compact: the same classes and labels a full render sets.
    var grid = root.querySelector(".main-scroll-content .cellars-grid");
    if (grid) {
      grid.classList.toggle("filtering", filtering);
      var yes = " · " + _T("find_state_match");
      var no = " · " + _T("find_state_other");
      grid.querySelectorAll(".slot.filled[data-edit-bottle]").forEach(function (el) {
        var ok = !filtering || model.ids.has(el.getAttribute("data-edit-bottle"));
        var state = filtering ? (ok ? 1 : 2) : 0;
        if (el._findState === state) return;
        el._findState = state;
        el.classList.toggle("dimmed", !ok);
        el.classList.toggle("match", filtering && ok);
        var label = el.getAttribute("aria-label") || "";
        var base = label.endsWith(yes) ? label.slice(0, -yes.length) : (label.endsWith(no) ? label.slice(0, -no.length) : label);
        var next = filtering ? base + (ok ? yes : no) : base;
        if (next !== label) {
          el.setAttribute("aria-label", next);
          if (el.hasAttribute("title")) el.setAttribute("title", next);
        }
      });
      this._paintMatchCounts(grid, model);
      // Shelves with a back-row match pull out, and wide cabinets slide to
      // their first match, before the first match is brought into view.
      this._syncDepth();
      if (opts.locate) this._scrollToFirstMatch(!!opts.forceLocate);
    }

    // All Bottles: rows that do not match hide, counts follow.
    if (this._view === "list") this._paintList(model);
    this._announceMatches(model);
  }

  // The toolbar's live parts: status chips and tokens, the Filters count,
  // the open panel and the result strip. Every read (focus, scroll) comes
  // before the first write, so a keystroke costs no extra layout.
  _paintFindBar(model) {
    var root = this.shadowRoot;
    var bar = root && root.querySelector(".toolbar");
    if (!bar) return;
    var swaps = [];
    function swap(el, html, scrollSel) {
      if (el && el._html !== html) swaps.push({ el: el, html: html, scrollSel: scrollSel });
    }
    swap(bar.querySelector("[data-facets]"), this._renderSummary(), "[data-chips]");
    if (this._filterPanelOpen) swap(bar.querySelector("[data-filter-panel]"), this._renderFilterPanel(), ".fp-body");
    var where = bar.querySelector("[data-where-strip]");
    var whereHtml = where ? this._whereStripHtml(model) : "";
    swap(where, whereHtml, "[data-where-chips]");

    var active = root.activeElement;
    swaps.forEach(function (job) {
      var scroller = job.el.querySelector(job.scrollSel);
      job.left = scroller ? scroller.scrollLeft : 0;
      job.top = scroller ? scroller.scrollTop : 0;
      job.key = active && job.el.contains(active) ? (active.getAttribute("data-key") || "") : null;
    });

    if (where) where.hidden = !whereHtml;
    var badge = bar.querySelector("[data-filter-count]");
    var count = String(this._facetCount(["type", "country", "cellar"]) || "");
    if (badge && badge.textContent !== count) badge.textContent = count;
    var toggle = bar.querySelector("[data-filter-toggle]");
    if (toggle) {
      toggle.setAttribute("aria-label", this._filtersButtonLabel());
      toggle.setAttribute("aria-expanded", this._filterPanelOpen ? "true" : "false");
    }
    var self = this;
    swaps.forEach(function (job) { self._swapHtml(job); });
    this._refitToolbarSoon();
  }

  // Replaces an element's markup (job from _paintFindBar), puts back the
  // scroll of its scroller and gives focus back to the control that had it
  // (same data-key).
  _swapHtml(job) {
    var el = job.el;
    el.innerHTML = job.html;
    el._html = job.html;
    if (job.left || job.top) {
      var scroller = el.querySelector(job.scrollSel);
      if (scroller) {
        scroller.scrollLeft = job.left;
        scroller.scrollTop = job.top;
      }
    }
    if (job.key === null) return;
    var again = null;
    if (job.key) {
      el.querySelectorAll("[data-key]").forEach(function (candidate) {
        if (!again && candidate.getAttribute("data-key") === job.key && !candidate.hidden) again = candidate;
      });
    }
    // In the sheet, focus has to stay inside it.
    if (!again && el.closest("[data-filter-panel]")) again = el.closest("[data-filter-panel]").querySelector(".fp-title");
    if (again) again.focus({ preventScroll: true });
  }

  // The chips' edge fades and the search placeholder depend on the new
  // layout: measured in the next frame, which lays the page out anyway.
  _refitToolbarSoon() {
    var self = this;
    if (this._refitFrame) return;
    this._refitFrame = requestAnimationFrame(function () {
      self._refitFrame = 0;
      self._layoutToolbar();
    });
  }

  // Edge fades on a row that scrolls sideways, on the sides with more.
  _updateFades(el) {
    this._paintFades(el, el.scrollWidth - el.clientWidth, el.scrollLeft);
  }

  _paintFades(el, max, left) {
    el.classList.toggle("more-l", max > 1 && left > 1);
    el.classList.toggle("more-r", max > 1 && left < max - 1);
  }

  _hitsText(n) {
    return n ? _TN("find_matches", n) : _T("find_no_match");
  }

  // Each cellar's match badge ("5 matches", "No match": that cellar fades)
  // and each shelf's match count, on the page on screen.
  _paintMatchCounts(grid, model) {
    var self = this;
    var filtering = model.filtering;
    grid.querySelectorAll(".cellar[data-cellar-id]").forEach(function (section) {
      var n = model.perCellar[section.getAttribute("data-cellar-id")] || 0;
      section.classList.toggle("no-hits", filtering && !n);
      var badge = section.querySelector(".cellar-hits");
      if (!badge) return;
      var text = self._hitsText(n);
      if (badge.textContent !== text) badge.textContent = text;
      badge.hidden = !filtering;
      badge.classList.toggle("none", !n);
    });
    grid.querySelectorAll(".shelf[data-shelf-key]").forEach(function (shelf) {
      var n = model.perShelf[shelf.getAttribute("data-shelf-key")] || 0;
      shelf.classList.toggle("no-hits", filtering && !n);
      var badge = shelf.querySelector(".shelf-hits");
      if (!badge) return;
      badge.hidden = !(filtering && n);
      var text = String(n);
      if (badge.firstChild && badge.firstChild.textContent !== text) {
        badge.firstChild.textContent = text;
        badge.lastChild.textContent = self._hitsText(n);
      }
    });
  }

  // The number of matches for screen readers, once typing pauses.
  _announceMatches(model) {
    var self = this;
    var text = model.filtering ? (model.hits.length ? _TN("find_found", model.hits.length) : _T("find_found_none")) : "";
    clearTimeout(this._liveTimer);
    this._liveTimer = setTimeout(function () {
      self._liveTimer = null;
      var live = self.shadowRoot && self.shadowRoot.querySelector("[data-find-live]");
      if (live && live.textContent !== text) live.textContent = text;
    }, 700);
  }

  // A slot counts as on screen when it is entirely inside both its
  // cabinet's visible width and the part of the screen the cellars show in.
  _isSlotOnScreen(el) {
    var box = el.getBoundingClientRect();
    var interior = el.closest(".interior");
    if (interior) {
      var ib = interior.getBoundingClientRect();
      if (box.left < ib.left - 1 || box.right > ib.right + 1) return false;
    }
    var band = this._visibleBand();
    return box.top >= band.top - 1 && box.bottom <= band.bottom + 1;
  }

  // The part of the screen the cellars show in, top and bottom: the card's
  // own scroll area; or, where the page scrolls, the window under Home
  // Assistant's header and under the toolbar while it is pinned there.
  _visibleBand() {
    var root = this.shadowRoot;
    var main = root && root.querySelector(".main-scroll-content");
    var mainScrolls = !!main && main.scrollHeight > main.clientHeight + 1 && getComputedStyle(main).overflowY !== "visible";
    if (mainScrolls) {
      var mb = main.getBoundingClientRect();
      return { top: Math.max(0, mb.top), bottom: Math.min(window.innerHeight, mb.bottom), page: false };
    }
    var top = parseFloat(getComputedStyle(this).getPropertyValue("--header-height")) || 56;
    var bar = root && root.querySelector(".toolbar");
    if (bar && getComputedStyle(bar).position === "sticky") top = Math.max(top, bar.getBoundingClientRect().bottom);
    return { top: top, bottom: window.innerHeight, page: true };
  }

  // Brings the first match into view when none is visible: vertically in the
  // card's scroll area and sideways inside its cabinet. Focus is left where
  // it is (usually the search box).
  _scrollToFirstMatch(force) {
    var root = this.shadowRoot;
    // Never move the page behind an open dialog.
    if (this._modal || this._viewingDuplicateManager) return;
    var found = root && this._hasActiveFilters() ? root.querySelectorAll(".main-scroll-content .slot.filled.match") : [];
    if (!found.length) {
      this._lastLocatedId = null;
      return;
    }
    var first = found[0];
    var id = first.getAttribute("data-edit-bottle");
    var main = root.querySelector(".main-scroll-content");
    var mainScrolls = !!main && main.scrollHeight > main.clientHeight + 1 && getComputedStyle(main).overflowY !== "visible";
    // Narrow layout (the page scrolls, not the card): scrolling while the
    // user types fights the browser keeping the caret in view and hides the
    // search box behind the keyboard, so wait for a pause in typing instead.
    if (this._locateTimer) {
      clearTimeout(this._locateTimer);
      this._locateTimer = null;
    }
    if (!force && !mainScrolls) {
      var self = this;
      this._locateTimer = setTimeout(function () {
        self._locateTimer = null;
        self._scrollToFirstMatch(true);
      }, 900);
      return;
    }
    // While typing, only move when the first match changes, so the view
    // does not jump back to it on every keystroke.
    if (!force && id === this._lastLocatedId) return;
    this._lastLocatedId = id;
    for (var i = 0; i < found.length; i++) {
      if (this._isSlotOnScreen(found[i])) return;
    }

    var behavior = "smooth";
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) behavior = "auto";
    } catch (err) { /* older browsers */ }

    var box = first.getBoundingClientRect();
    if (!mainScrolls) {
      // Narrow layout: the page scrolls rather than the card; the match goes
      // to the middle of what the header and pinned toolbar leave free.
      var band = this._visibleBand();
      if (box.top < band.top || box.bottom > band.bottom) {
        this._scrollIntoBand(first, band, "center", behavior);
        this._settleScrollOn(first);
        return;
      }
    }
    var interior = first.closest(".interior");
    if (interior && interior.scrollWidth > interior.clientWidth) {
      var ib = interior.getBoundingClientRect();
      if (box.left < ib.left || box.right > ib.right) {
        interior.scrollTo({ left: interior.scrollLeft + (box.left - ib.left) - (ib.width - box.width) / 2, behavior: behavior });
      }
    }
    if (mainScrolls) {
      var mb = main.getBoundingClientRect();
      if (box.top < mb.top || box.bottom > mb.bottom) {
        main.scrollTo({ top: main.scrollTop + (box.top - mb.top) - (mb.height - box.height) / 2, behavior: behavior });
        this._settleScrollOn(first);
      }
    }
  }

  // A smooth scroll aims where its target was when it started. Shelves drawn
  // for the first time on the way can turn out shorter or taller than their
  // stand-in (an empty front row, a long shelf name), which moves the target.
  // Once the scroll comes to rest, a target left off screen or at an edge is
  // brought back to the middle, once; any scrolling by the user cancels this.
  _settleScrollOn(el) {
    var self = this;
    if (this._settleCancel) this._settleCancel();
    var done = false;
    var inputs = ["wheel", "touchstart", "pointerdown", "keydown"];
    function stop() {
      done = true;
      inputs.forEach(function (type) { window.removeEventListener(type, stop, true); });
      if (self._settleCancel === stop) self._settleCancel = null;
    }
    inputs.forEach(function (type) { window.addEventListener(type, stop, true); });
    this._settleCancel = stop;
    var last = null;
    var still = 0;
    var moved = false;
    var frames = 0;
    function tick() {
      if (done) return;
      if (!el.isConnected) { stop(); return; }
      var top = el.getBoundingClientRect().top;
      if (last !== null && Math.abs(top - last) >= 1) moved = true;
      still = last !== null && Math.abs(top - last) < 1 ? still + 1 : 0;
      last = top;
      frames++;
      if ((still < 6 || (!moved && frames < 24)) && frames < 180) {
        requestAnimationFrame(tick);
        return;
      }
      stop();
      self._centerSlot(el);
    }
    requestAnimationFrame(tick);
  }

  // Scrolls a slot to the middle of the visible scroll area (the card's own
  // scroller when it has one, else the page) unless it already sits in the
  // middle half of the room around it.
  _centerSlot(el) {
    var root = this.shadowRoot;
    var main = root && root.querySelector(".main-scroll-content");
    var box = el.getBoundingClientRect();
    var band = this._visibleBand();
    var top = band.top;
    var bottom = band.bottom;
    var margin = Math.max(16, (bottom - top - box.height) / 4);
    if (box.top >= top + margin && box.bottom <= bottom - margin) return;
    var behavior = this._prefersReducedMotion() ? "auto" : "smooth";
    if (!band.page) main.scrollTo({ top: main.scrollTop + (box.top - top) - (bottom - top - box.height) / 2, behavior: behavior });
    else this._scrollIntoBand(el, band, "nearest", behavior);
  }

  // scrollIntoView aimed at the free band (_visibleBand): where the page
  // scrolls (whichever element scrolls it), a scroll margin as tall as what
  // covers the top (header, pinned toolbar) centers the element in what is
  // left.
  _scrollIntoBand(el, band, inline, behavior) {
    if (band.page) el.style.scrollMarginTop = Math.max(0, Math.round(band.top)) + "px";
    el.scrollIntoView({ block: "center", inline: inline, behavior: behavior });
    if (band.page) el.style.scrollMarginTop = "";
  }

  // Re-renders, then puts keyboard focus back on a toolbar control, since a
  // render rebuilds the toolbar and would otherwise drop focus to the page.
  _renderKeepingFocus(selector) {
    var self = this;
    return Promise.resolve(this.render(false)).then(function () {
      var el = self.shadowRoot && self.shadowRoot.querySelector(selector);
      if (el) el.focus();
    });
  }

  // Clears the search words ("search"), the facets ("filters") or both
  // (the default), on the page already on screen.
  _clearFilters(what) {
    what = what || "all";
    var root = this.shadowRoot;
    if (this._searchTimer) {
      clearTimeout(this._searchTimer);
      this._searchTimer = null;
    }
    if (what !== "filters") this._search = "";
    if (what !== "search") {
      var facets = this._facets;
      _WCM_FACETS.forEach(function (name) { facets[name].clear(); });
    }
    this._lastLocatedId = null;
    if (this._locateTimer) {
      clearTimeout(this._locateTimer);
      this._locateTimer = null;
    }
    var input = root && root.querySelector("[data-search]");
    if (input && what !== "filters") {
      input.value = "";
      input.parentNode.classList.remove("has-value");
    }
    this._applyFiltersInPlace();
  }

  // Searches for a suggested spelling ("Did you mean …").
  _setSearch(value) {
    var input = this.shadowRoot && this.shadowRoot.querySelector("[data-search]");
    this._search = String(value || "");
    if (input) {
      input.value = this._search;
      input.parentNode.classList.toggle("has-value", !!this._search);
    }
    this._applyFiltersInPlace({ locate: true });
    if (input) input.focus({ preventScroll: true });
  }

  // Sets one facet's values ([] or "" clears it) and applies the result. The
  // status facet also takes "drink_now" (At peak + Past peak) and
  // "ready_to_drink" (Ready + At peak); countries may be spelled any way.
  _setFacet(name, values) {
    var self = this;
    var set = this._facets[name];
    if (!set) return;
    set.clear();
    [].concat(values == null ? [] : values).forEach(function (value) {
      if (value === "" || value == null) return;
      if (name === "status" && _WCM_STATUS_PRESETS[value]) {
        _WCM_STATUS_PRESETS[value].forEach(function (s) { set.add(s); });
      } else {
        set.add(self._facetInput(name, value));
      }
    });
    this._applyFiltersInPlace({ locate: true });
  }

  _toggleFacet(name, value) {
    var set = this._facets[name];
    if (!set) return;
    if (name === "status" && _WCM_STATUS_PRESETS[value]) {
      // A preset replaces the statuses, or clears them when it is on.
      var preset = _WCM_STATUS_PRESETS[value];
      var on = set.size === preset.length && preset.every(function (s) { return set.has(s); });
      set.clear();
      if (!on) preset.forEach(function (s) { set.add(s); });
    } else {
      value = this._facetInput(name, value);
      if (set.has(value)) set.delete(value);
      else set.add(value);
    }
    this._applyFiltersInPlace({ locate: true });
  }

  _facetInput(name, value) {
    if (name === "type") return this._typeKey(value);
    if (name === "country") return this._countryKey(value);
    return String(value);
  }

  // Enter / Shift+Enter in the search: the next or previous match, in the
  // order the bottles stand in the cellars.
  _stepMatch(dir) {
    var view = this._view || "cellars";
    if (view !== "cellars" && view !== "compact") return;
    var hits = this._filterModel().hits;
    if (!hits.length) return;
    var n = hits.length;
    var at = this._matchCursor < 0 ? (dir > 0 ? 0 : n - 1) : (this._matchCursor + dir + n) % n;
    this._matchCursor = at;
    this._gotoBottle(hits[at].id, {});
  }

  // After a bottle is brought into view: its result chip is the current one
  // (and the one Tab reaches), scrolled into the strip's view.
  _markWhereChip(id) {
    var root = this.shadowRoot;
    var hits = this._filterModel().hits;
    for (var i = 0; i < hits.length; i++) {
      if (String(hits[i].id) === String(id)) {
        this._matchCursor = i;
        break;
      }
    }
    var strip = root && root.querySelector("[data-where-chips]");
    if (!strip) return;
    var current = null;
    // A match past the chips shown makes "+N more" the current one.
    var more = strip.querySelector("[data-find-more]");
    var beyond = !!more && this._matchCursor >= _WCM_WHERE_CHIPS && String((hits[this._matchCursor] || {}).id) === String(id);
    strip.querySelectorAll(".wchip,[data-find-more]").forEach(function (chip) {
      var on = chip === more ? beyond : chip.getAttribute("data-goto") === String(id);
      chip.classList.toggle("is-current", on);
      if (on) chip.setAttribute("aria-current", "true");
      else chip.removeAttribute("aria-current");
      if (on) current = chip;
    });
    if (!current) return;
    strip.querySelectorAll("[data-goto],[data-find-more]").forEach(function (el) { el.tabIndex = el === current ? 0 : -1; });
    var left = current.offsetLeft;
    var right = left + current.offsetWidth;
    if (left < strip.scrollLeft || right > strip.scrollLeft + strip.clientWidth - 28) {
      strip.scrollTo({ left: Math.max(0, left - 40), behavior: this._prefersReducedMotion() ? "auto" : "smooth" });
    }
  }

  // Phones get the filters as a bottom sheet (see the small-screen styles).
  _isFilterSheet() {
    try {
      return window.matchMedia("(max-width: 600px)").matches;
    } catch (err) {
      return false;
    }
  }

  // Opens or closes the Filters panel: under the toolbar on wider screens, a
  // modal bottom sheet on phones.
  _setFilterPanel(open) {
    var root = this.shadowRoot;
    var bar = root && root.querySelector(".toolbar");
    var panel = bar && bar.querySelector("[data-filter-panel]");
    this._filterPanelOpen = !!open && !!panel;
    if (!panel) return;
    if (this._filterPanelOpen) {
      var html = this._renderFilterPanel();
      panel.innerHTML = html;
      panel._html = html;
    }
    panel.hidden = !this._filterPanelOpen;
    // The tokens under the search give way to the panel's own chips.
    this._paintFindBar(this._filterModel());
    this._syncFilterSheet(open ? "open" : "close");
  }

  // Keeps the panel's role in step with the screen: on phones it is a modal
  // dialog (focus starts inside, Tab stays in it, the page behind is inert,
  // Escape or a tap outside closes it and focus returns to Filters).
  _syncFilterSheet(reason) {
    var root = this.shadowRoot;
    var bar = root && root.querySelector(".toolbar");
    var panel = bar && bar.querySelector("[data-filter-panel]");
    if (!panel) return;
    var sheet = !!this._filterPanelOpen && this._isFilterSheet();
    if (sheet) {
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "true");
      panel.setAttribute("aria-labelledby", "wcm-fp-title");
      panel.removeAttribute("aria-label");
    } else {
      panel.setAttribute("role", "region");
      panel.removeAttribute("aria-modal");
      panel.removeAttribute("aria-labelledby");
      panel.setAttribute("aria-label", _T("find_filters"));
    }
    var scrim = bar.querySelector("[data-filter-scrim]");
    if (scrim) scrim.hidden = !sheet;
    bar.classList.toggle("sheet-open", sheet);
    var dialogOpen = !!this._topDialog();
    Array.prototype.forEach.call(bar.children, function (el) {
      if (el === panel || el === scrim || el.hasAttribute("data-find-live")) return;
      if (sheet) el.setAttribute("inert", "");
      else el.removeAttribute("inert");
    });
    var main = root.querySelector(".main-scroll-content");
    if (main && !dialogOpen) {
      if (sheet) main.setAttribute("inert", "");
      else main.removeAttribute("inert");
    }
    var toggle = bar.querySelector("[data-filter-toggle]");
    if (reason === "open" && sheet) {
      var start = panel.querySelector(".fp-title");
      if (start) start.focus({ preventScroll: true });
    } else if (reason === "close" && toggle) {
      var active = root.activeElement;
      if (!active || !active.isConnected || panel.contains(active) || active === toggle) toggle.focus({ preventScroll: true });
    }
  }

  // Clicks on the finding controls, wherever they are drawn (toolbar, result
  // strip, empty states). Bound once on the shadow root.
  _onFindClick(e) {
    var target = e.target && e.target.closest
      ? e.target.closest("[data-facet],[data-find-clear],[data-find-suggest],[data-goto],[data-find-more],[data-filter-toggle],[data-filter-close],[data-filter-scrim]")
      : null;
    if (!target || target.closest(".modal-backdrop")) return;
    e.preventDefault();
    e.stopPropagation();
    var root = this.shadowRoot;
    if (target.hasAttribute("data-facet")) {
      if (target.getAttribute("aria-disabled") === "true") return;
      // A token removes itself: focus goes on to the token that takes its
      // place (or the one before), else to Filters, never to the page.
      var tokens = target.classList.contains("token") ? Array.prototype.slice.call(root.querySelectorAll("[data-facets] .token")) : null;
      var at = tokens ? tokens.indexOf(target) : -1;
      this._toggleFacet(target.getAttribute("data-facet"), target.getAttribute("data-value"));
      if (tokens && (!root.activeElement || !root.activeElement.isConnected)) {
        var left = root.querySelectorAll("[data-facets] .token");
        var next = left[Math.min(at, left.length - 1)] || root.querySelector(".toolbar [data-filter-toggle]");
        if (next) next.focus({ preventScroll: true });
      }
    } else if (target.hasAttribute("data-find-clear")) {
      var inPanel = !!target.closest("[data-filter-panel]");
      this._clearFilters(target.getAttribute("data-find-clear"));
      // From the keyboard, carry on in the search box (in the sheet, on its
      // title) rather than losing focus with a button that went away.
      if (e.detail === 0 || (inPanel && !target.isConnected)) {
        var next = inPanel ? root.querySelector("[data-filter-panel] .fp-title") : root.querySelector("[data-search]");
        if (next && (!target.isConnected || !target.getClientRects().length || !inPanel)) next.focus({ preventScroll: true });
      }
    } else if (target.hasAttribute("data-find-suggest")) {
      this._setSearch(target.getAttribute("data-find-suggest"));
    } else if (target.hasAttribute("data-goto")) {
      this._gotoBottle(target.getAttribute("data-goto"), { focus: e.detail === 0 });
    } else if (target.hasAttribute("data-find-more")) {
      this._openList();
    } else if (target.hasAttribute("data-filter-toggle")) {
      this._setFilterPanel(!this._filterPanelOpen);
    } else {
      this._setFilterPanel(false);
    }
  }

  // Keys of the finding controls: arrows between the view tabs and along the
  // result chips, Escape out of the Filters panel, Tab kept inside the sheet.
  _onFindKeydown(e) {
    var target = e.target;
    if (!target || !target.closest || e.defaultPrevented) return;
    var root = this.shadowRoot;
    var key = e.key;
    var list = null;
    if (target.matches('.toolbar [role="tab"]')) {
      list = Array.prototype.slice.call(target.parentNode.querySelectorAll('[role="tab"]'));
    } else if (target.closest("[data-where-chips]")) {
      list = Array.prototype.slice.call(target.closest("[data-where-chips]").querySelectorAll("[data-goto],[data-find-more]"));
      if (key === "ArrowUp") {
        var input = root.querySelector("[data-search]");
        if (input) {
          e.preventDefault();
          input.focus();
        }
        return;
      }
    }
    if (list && (key === "ArrowRight" || key === "ArrowLeft" || key === "Home" || key === "End")) {
      var at = list.indexOf(target);
      var next = key === "Home" ? list[0] : key === "End" ? list[list.length - 1] : list[(at + (key === "ArrowRight" ? 1 : -1) + list.length) % list.length];
      if (next) {
        e.preventDefault();
        list.forEach(function (el) { el.tabIndex = el === next ? 0 : -1; });
        next.focus();
      }
      return;
    }
    if (!this._filterPanelOpen) return;
    var panel = root.querySelector("[data-filter-panel]");
    if (!panel) return;
    var sheet = panel.getAttribute("aria-modal") === "true";
    if ((key === "Escape" || key === "Esc") && (sheet || panel.contains(target) || target.hasAttribute("data-filter-toggle"))) {
      e.preventDefault();
      e.stopPropagation();
      this._setFilterPanel(false);
      return;
    }
    if (key === "Tab" && sheet) {
      var items = this._focusablesIn(panel);
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      var active = root.activeElement;
      if (!panel.contains(active) || (e.shiftKey && active === first) || (e.shiftKey && active === panel.querySelector(".fp-title"))) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  // The long search placeholder where it fits, else the short one, so no
  // language ever shows it cut off.
  _fitSearchPlaceholder(input) {
    var text = this._searchPlaceholderFor(input);
    if (text && input.placeholder !== text) input.placeholder = text;
  }

  // Which placeholder fits the box as it is now laid out ("" when unknown).
  // Only reads (measured on a canvas), so callers can batch their writes.
  _searchPlaceholderFor(input) {
    var width = input ? input.clientWidth : 0;
    if (!width) return "";
    if (input._fitWidth === width && input._fitLang === _wcmLang) return input._fitText;
    var long = _T("find_placeholder");
    var style = getComputedStyle(input);
    var room = width - (parseFloat(style.paddingLeft) || 0) - (parseFloat(style.paddingRight) || 0) - 4;
    var ctx = this._measureCtx || (this._measureCtx = document.createElement("canvas").getContext("2d"));
    var fits = true;
    if (ctx) {
      ctx.font = style.fontStyle + " " + style.fontWeight + " " + style.fontSize + " " + style.fontFamily;
      fits = ctx.measureText(long).width <= room;
    }
    input._fitWidth = width;
    input._fitLang = _wcmLang;
    input._fitText = fits ? long : _T("find_placeholder_short");
    return input._fitText;
  }

  // The toolbar's measures (the placeholder that fits, the chips' edge
  // fades, how far the pinned toolbar slides up) are taken by a
  // ResizeObserver, which reports once the page is laid out and whenever the
  // toolbar, the search box or a chip row changes size: a render never forces
  // a layout of the whole page just for them.
  _observeToolbar() {
    var self = this;
    var bar = this.shadowRoot && this.shadowRoot.querySelector(".toolbar");
    if (!bar) return;
    if (!window.ResizeObserver) {
      this._layoutToolbar();
      return;
    }
    if (!this._toolbarObserver) {
      this._toolbarObserver = new ResizeObserver(function () {
        if (self.isConnected) self._layoutToolbar();
      });
    }
    this._toolbarObserver.disconnect();
    this._toolbarObserver.observe(bar);
    bar.querySelectorAll("[data-search], .x-fade").forEach(function (el) { self._toolbarObserver.observe(el); });
  }

  // Where the page scrolls (phones, tablets) the toolbar sticks under the
  // dashboard header with only its search row showing: --tb-stick is how far
  // it slides up under the header. Also refits the placeholder and the
  // chips' edge fades.
  _layoutToolbar() {
    var self = this;
    var root = this.shadowRoot;
    var bar = root && root.querySelector(".toolbar");
    if (!bar) return;
    // Every measure first, then the changes, so this adds no layout pass.
    var input = bar.querySelector("[data-search]");
    var placeholder = this._searchPlaceholderFor(input);
    var fades = Array.prototype.map.call(bar.querySelectorAll(".x-fade"), function (el) {
      return { el: el, max: el.scrollWidth - el.clientWidth, left: el.scrollLeft };
    });
    var find = bar.querySelector(".tb-find");
    var facets = bar.querySelector("[data-facets]");
    // Chips that went to a line of their own leave the search the whole row.
    var below = !!find && !!facets && facets.offsetTop >= find.offsetTop + find.offsetHeight - 2;
    var pinned = !!find && getComputedStyle(bar).position === "sticky";
    var stick = pinned ? Math.max(0, find.offsetTop - 8) + "px" : "";
    if (placeholder && input.placeholder !== placeholder) input.placeholder = placeholder;
    if (find && find.parentNode.classList.contains("chips-below") !== below) find.parentNode.classList.toggle("chips-below", below);
    fades.forEach(function (f) { self._paintFades(f.el, f.max, f.left); });
    if (!pinned) {
      bar.style.removeProperty("--tb-stick");
      bar.style.removeProperty("--tb-clip");
      bar.classList.remove("is-stuck");
      return;
    }
    if (bar.style.getPropertyValue("--tb-stick") !== stick) bar.style.setProperty("--tb-stick", stick);
    this._clipToolbar();
  }

  // While the toolbar is stuck, the rows that slid under the header are
  // clipped away, so a translucent (or missing) header never shows them and
  // they take no taps.
  _clipToolbar() {
    var root = this.shadowRoot;
    var bar = root && root.querySelector(".toolbar");
    if (!bar) return;
    var stick = parseFloat(bar.style.getPropertyValue("--tb-stick")) || 0;
    if (!stick) return;
    var header = parseFloat(getComputedStyle(this).getPropertyValue("--header-height")) || 56;
    var clip = Math.max(0, Math.min(stick, header - bar.getBoundingClientRect().top));
    var value = Math.round(clip) + "px";
    if (bar.style.getPropertyValue("--tb-clip") !== value) bar.style.setProperty("--tb-clip", value);
    bar.classList.toggle("is-stuck", clip > 0);
  }

  _sortedCellars() {
    return ((this._data && this._data.cellars) || []).slice().sort(function (a, b) {
      return (a.display_order || 0) - (b.display_order || 0);
    });
  }

  _cellarById(id) {
    return ((this._data && this._data.cellars) || []).find(function (c) { return c.id === id; }) || null;
  }

  // Every slot of a cellar in fill order: shelves top to bottom, the front
  // row before the back row, lowest position first. A slot is free when it
  // is empty or holds ownId (the bottle being edited).
  _slotOrder(cellarId, ownId) {
    var cellar = this._cellarById(cellarId);
    if (!cellar) return [];
    var index = this._buildSlotIndex(((this._data && this._data.bottles) || []).filter(function (b) {
      return b.cellar_id === cellar.id;
    }));
    var out = [];
    this._getSortedShelves(cellar).forEach(function (shelf) {
      [["front", Number(shelf.capacity_front || 0)], ["back", Number(shelf.capacity_back || 0)]].forEach(function (lane) {
        for (var pos = 1; pos <= lane[1]; pos++) {
          var occupant = index.get(String(shelf.id) + "|" + lane[0] + "|" + pos) || null;
          out.push({
            cellar_id: cellar.id,
            shelf_id: shelf.id,
            lane: lane[0],
            position: pos,
            occupant: occupant,
            free: !occupant || (!!ownId && occupant.id === ownId)
          });
        }
      });
    });
    return out;
  }

  _slotKey(slot) {
    return String(slot.shelf_id) + "|" + slot.lane + "|" + Number(slot.position);
  }

  _sameSlot(a, b) {
    return !!a && !!b && a.cellar_id === b.cellar_id && String(a.shelf_id) === String(b.shelf_id) &&
      String(a.lane) === String(b.lane) && Number(a.position) === Number(b.position);
  }

  // The first empty slot in display order (cellars, then shelves top to
  // bottom, the front row before the back row), in one cellar when cellarId
  // is given.
  _findFreeSlot(cellarId) {
    var cellars = this._sortedCellars();
    for (var i = 0; i < cellars.length; i++) {
      if (cellarId && cellars[i].id !== cellarId) continue;
      var slot = this._slotOrder(cellars[i].id).find(function (s) { return s.free; });
      if (slot) return slot;
    }
    return null;
  }

  // qty free slots of a cellar in fill order, starting at start (included)
  // and wrapping round to the top of the cellar.
  _planSlots(cellarId, start, qty) {
    var order = this._slotOrder(cellarId);
    var n = order.length;
    var from = 0;
    var self = this;
    if (start) {
      var at = order.findIndex(function (s) { return self._sameSlot(s, Object.assign({ cellar_id: cellarId }, start)); });
      if (at >= 0) from = at;
    }
    var out = [];
    for (var k = 0; k < n && out.length < qty; k++) {
      var slot = order[(from + k) % n];
      if (slot.free) out.push(slot);
    }
    return out;
  }

  // The first free slot after `after` in its cellar, else anywhere.
  _nextFreeSlot(cellarId, after) {
    var self = this;
    var order = this._slotOrder(cellarId);
    var n = order.length;
    var at = after ? order.findIndex(function (s) { return self._sameSlot(s, after); }) : -1;
    for (var k = 1; k <= n; k++) {
      var slot = order[(at + k + n) % n];
      if (slot && slot.free) return slot;
    }
    return this._findFreeSlot();
  }

  // A shelf's name, with its number when another shelf of the cellar has
  // the same name: "Whites (2)".
  _shelfLabel(cellar, shelfId) {
    var shelves = this._getSortedShelves(cellar);
    var at = shelves.findIndex(function (s) { return String(s.id) === String(shelfId); });
    if (at < 0) return "";
    var name = shelves[at].name || _T("shelf_n", { n: at + 1 });
    var same = shelves.filter(function (s) { return (s.name || "") === (shelves[at].name || ""); }).length;
    return same > 1 ? name + " (" + (at + 1) + ")" : name;
  }

  // "Kitchen › Whites (2) › Front · 3" (short: without the row and position).
  _slotWhere(slot, short) {
    var cellar = slot && this._cellarById(slot.cellar_id);
    if (!cellar) return "";
    var parts = [cellar.name || _T("cellar"), this._shelfLabel(cellar, slot.shelf_id)];
    if (!short) parts.push(this._laneLabel(slot.lane) + " · " + slot.position);
    return parts.filter(Boolean).join(" › ");
  }

  // Where several planned bottles go: "Garage › Top", or "Garage › Top,
  // Floor" when they spread over more than one shelf.
  _plannedWhere(slots) {
    var first = slots && slots[0];
    var cellar = first && this._cellarById(first.cellar_id);
    if (!cellar) return "";
    var self = this;
    var shelves = [];
    slots.forEach(function (slot) {
      var label = self._shelfLabel(cellar, slot.shelf_id);
      if (label && shelves.indexOf(label) < 0) shelves.push(label);
    });
    return [cellar.name || _T("cellar"), shelves.join(", ")].filter(Boolean).join(" › ");
  }

  // The widest row of a small cabinet, in slots: a staggered shelf is half a
  // slot wider.
  _miniSpan(shelves) {
    var self = this;
    return (shelves || []).reduce(function (widest, shelf) {
      var front = Number(shelf.capacity_front || 0);
      var back = Number(shelf.capacity_back || 0);
      var extra = !self._isInlineShelf(shelf) && self._isStaggered(shelf) ? 0.5 : 0;
      return Math.max(widest, Math.max(front, back, 1) + extra);
    }, 1);
  }

  // The shelves of a small cabinet (bottle dialog map, slot picker, cellar
  // editor preview): per shelf an optional head, the back row, the front row
  // and the rail. opts.dot(shelf, lane, pos, occupant, index) draws a slot,
  // opts.head(shelf, index) the head and opts.shelfClass(shelf, index) adds
  // classes.
  _renderMiniShelves(shelves, slotIndex, opts) {
    var self = this;
    return shelves.map(function (shelf, i) {
      var back = Number(shelf.capacity_back || 0);
      var front = Number(shelf.capacity_front || 0);
      var lanes = [["back", back], ["front", front]].map(function (lane) {
        if (lane[1] <= 0) return "";
        var dots = [];
        for (var pos = 1; pos <= lane[1]; pos++) {
          dots.push(opts.dot(shelf, lane[0], pos, slotIndex.get(String(shelf.id) + "|" + lane[0] + "|" + pos) || null, i));
        }
        return '<div class="lane lane-' + lane[0] + '">' +
          (opts.tags ? '<span class="lane-tag" aria-hidden="true">' + self._escape(self._laneLabel(lane[0])) + "</span>" : "") +
          '<div class="lane-row">' + dots.join("") + "</div></div>";
      }).join("");
      var inline = self._isInlineShelf(shelf);
      return (
        '<div class="shelf' + (!inline && self._isStaggered(shelf) ? " staggered" : "") + (inline ? " inline" : "") +
        (back > 0 && front > 0 ? " two-row" : "") + (opts.shelfClass ? opts.shelfClass(shelf, i) : "") +
        '" style="--nmax:' + Math.max(front, back, 1) + '">' +
        (opts.head ? opts.head(shelf, i) : "") + lanes + '<div class="rail"></div></div>'
      );
    }).join("");
  }

  /* Toast: one short in-card message at a time, at the bottom of the screen
     (above the footer of an open dialog), optionally with one action such as
     Undo. It survives re-renders and goes away by itself. opts: kind ("ok"
     or "warn"), icon (a _WCM_ICONS name instead of the check mark) and
     action ({ label, run, undo: Ctrl+Z runs it too }). */

  _showToast(text, opts) {
    opts = opts || {};
    var self = this;
    clearTimeout(this._toastTimer);
    this._toast = { id: ++this._toastSeq, text: text, kind: opts.kind || "ok", icon: opts.icon || "", action: opts.action || null };
    this._toastHold = {};
    this._toastTimer = setTimeout(function () { self._dismissToast(); }, opts.action ? 8000 : 4500);
    this._paintToast();
  }

  _dismissToast() {
    clearTimeout(this._toastTimer);
    this._toast = null;
    this._paintToast();
  }

  // The toast stays while the pointer is over it or focus is in it, and
  // goes a few seconds after both have left.
  _holdToast(why, on) {
    var self = this;
    if (!this._toast) return;
    this._toastHold = this._toastHold || {};
    this._toastHold[why] = on;
    clearTimeout(this._toastTimer);
    if (this._toastHold.pointer || this._toastHold.focus) return;
    this._toastTimer = setTimeout(function () { self._dismissToast(); }, 4000);
  }

  _runToastAction() {
    var toast = this._toast;
    if (!toast || !toast.action) return;
    this._dismissToast();
    toast.action.run();
  }

  _paintToast() {
    var self = this;
    var wrap = this.shadowRoot && this.shadowRoot.querySelector(".wrap");
    if (!wrap) return;
    var el = wrap.querySelector(":scope > .wcm-toast");
    var toast = this._toast;
    if (!toast) {
      if (el) el.remove();
      return;
    }
    if (!el || el.getAttribute("data-toast") !== String(toast.id)) {
      if (el) el.remove();
      el = document.createElement("div");
      // Drawn again after a re-render: no second entrance.
      el.className = "wcm-toast is-" + toast.kind + (this._toastShown === toast.id ? " no-anim" : "");
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      el.setAttribute("data-toast", String(toast.id));
      // An Undo says its shortcut: read out with the message, and shown
      // beside the button where there is a keyboard.
      var undo = toast.action && toast.action.undo;
      var keys = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || "") ? "⌘Z" : "Ctrl+Z";
      el.innerHTML = (toast.kind === "warn" ? _WCM_ICONS.alert : _WCM_ICONS[toast.icon] || _WCM_ICONS.check) +
        '<span class="toast-text">' + this._escape(toast.text) + (undo ? '<span class="sr-only"> ' + this._escape(_T("toast_undo_keys", { keys: keys })) + "</span>" : "") + "</span>" +
        (undo ? '<kbd class="toast-kbd only-fine" aria-hidden="true">' + this._escape(keys) + "</kbd>" : "") +
        (toast.action ? '<button type="button" class="toast-action"' + (undo ? ' aria-keyshortcuts="Control+Z Meta+Z"' : "") + ">" + this._escape(toast.action.label) + "</button>" : "") +
        '<button type="button" class="toast-close" aria-label="' + this._escape(_T("close")) + '">' + _WCM_ICONS.close + "</button>";
      wrap.appendChild(el);
      this._toastShown = toast.id;
      var action = el.querySelector(".toast-action");
      if (action) {
        action.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._runToastAction();
        });
      }
      el.addEventListener("pointerenter", function () { self._holdToast("pointer", true); });
      el.addEventListener("pointerleave", function () { self._holdToast("pointer", false); });
      el.addEventListener("focusin", function () { self._holdToast("focus", true); });
      el.addEventListener("focusout", function (e) {
        if (!el.contains(e.relatedTarget)) self._holdToast("focus", false);
      });
      el.querySelector(".toast-close").addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        self._dismissToast();
      });
    }
    this._placeToast();
  }

  // With a dialog open the toast sits just above its footer (or under its
  // header while the footer is hidden), never over Save or Cancel; in move
  // mode, above the move banner.
  _placeToast() {
    var root = this.shadowRoot;
    var el = root && root.querySelector(".wrap > .wcm-toast");
    if (!el) return;
    el.style.top = "";
    el.style.bottom = "";
    var dialog = this._topDialog();
    if (dialog) {
      var foot = dialog.querySelector(".sheet-foot, .bv-actions, .modal-actions");
      var rect = foot && foot.offsetHeight ? foot.getBoundingClientRect() : null;
      if (rect && rect.top < window.innerHeight) {
        el.style.bottom = Math.max(12, Math.round(window.innerHeight - rect.top + 10)) + "px";
      } else {
        var head = dialog.querySelector(".sheet-head, .bv-head, .modal-head");
        el.style.top = Math.max(12, Math.round((head || dialog).getBoundingClientRect().bottom + 10)) + "px";
      }
      return;
    }
    var bar = root.querySelector(".wrap > .move-bar");
    if (bar) el.style.bottom = Math.round(window.innerHeight - bar.getBoundingClientRect().top + 10) + "px";
  }

  /* Tap-to-move. "Move" in the bottle dialog, a long press on a bottle
     (touch) or M on a focused bottle lifts it; every free slot becomes a
     target, a banner says what to do, and the next tap on an empty slot
     moves it there (on a bottle: swaps them). Arrow keys go from slot to
     slot, Enter drops, Escape or Cancel puts it down. An Undo follows. */

  _startMove(id) {
    var bottle = ((this._data && this._data.bottles) || []).find(function (b) { return b.id === id; });
    if (!bottle) return;
    this._moveSource = {
      bottle_id: bottle.id,
      cellar_id: bottle.cellar_id,
      shelf_id: bottle.shelf_id,
      lane: bottle.lane,
      position: Number(bottle.position),
      name: bottle.wine_name || _T("unnamed_wine")
    };
    this._moveFocus = true;
    var switchView = this._view !== "cellars" && this._view !== "compact";
    if (switchView) this._view = "cellars";
    if (this._modal) this._closeModal();
    else if (switchView) this.render(false);
    else this._syncMoveMode();
  }

  _cancelMove() {
    var source = this._moveSource;
    this._moveSource = null;
    this._syncMoveMode();
    var slot = source && this._slotOfBottle(source.bottle_id);
    if (slot) slot.focus({ preventScroll: true });
  }

  _slotOfBottle(id) {
    var found = null;
    var root = this.shadowRoot;
    if (!root) return null;
    root.querySelectorAll(".main-scroll-content .slot[data-edit-bottle]").forEach(function (el) {
      if (!found && el.getAttribute("data-edit-bottle") === String(id)) found = el;
    });
    return found;
  }

  // Paints move mode on the page on screen: the lifted bottle, the grids'
  // "placing" state (free slots become full-size targets) and the banner.
  _syncMoveMode() {
    var self = this;
    var root = this.shadowRoot;
    var wrap = root && root.querySelector(".wrap");
    if (!wrap) return;
    var source = this._moveSource;
    // Leaving the cellars, or the bottle going away meanwhile, puts it down.
    var here = this._view === "cellars" || this._view === "compact";
    var bottles = (this._data && this._data.bottles) || [];
    if (source && (!here || !bottles.some(function (b) { return b.id === source.bottle_id; }))) {
      this._moveSource = null;
      source = null;
    }
    var on = !!source && !this._topDialog();
    root.querySelectorAll(".main-scroll-content .cellars-grid").forEach(function (grid) {
      grid.classList.toggle("placing", on);
    });
    root.querySelectorAll(".slot.lifted").forEach(function (el) { el.classList.remove("lifted"); });
    var bar = wrap.querySelector(":scope > .move-bar");
    if (!on) {
      if (bar) bar.remove();
      this._placeToast();
      return;
    }
    var lifted = this._slotOfBottle(source.bottle_id);
    if (lifted) lifted.classList.add("lifted");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "move-bar";
      bar.setAttribute("role", "status");
      bar.setAttribute("aria-live", "polite");
      wrap.appendChild(bar);
      bar.innerHTML = _WCM_ICONS.move +
        '<div class="move-bar-text"><b></b><span>' + this._escape(_T("move_hint")) +
        '<span class="only-fine"> ' + this._escape(_T("move_hint_kb")) + "</span></span></div>" +
        '<button type="button" class="toast-action" data-move-cancel>' + this._escape(_T("cancel")) + "</button>";
      bar.querySelector("[data-move-cancel]").addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        self._cancelMove();
      });
    }
    bar.querySelector("b").textContent = _T("move_moving", { name: source.name });
    this._placeToast();
    if (this._moveFocus && lifted) {
      this._moveFocus = false;
      lifted.focus({ preventScroll: true });
      this._scrollIntoBand(lifted, this._visibleBand(), "center", this._prefersReducedMotion() ? "auto" : "smooth");
    }
  }

  // A tap (or Enter) on a slot while a bottle is lifted.
  _dropMove(el) {
    var source = this._moveSource;
    if (!source) return;
    var target = el.getAttribute("data-new-bottle");
    var other = el.getAttribute("data-edit-bottle");
    if (other === source.bottle_id) {
      this._cancelMove();
      return;
    }
    this._moveSource = null;
    this._syncMoveMode();
    if (target) this._relocateBottle(source, JSON.parse(target), null, true);
    else if (other) this._relocateBottle(source, null, other, true);
  }

  // Arrow keys in move mode go to the nearest slot in that direction.
  _moveFocusBy(from, key) {
    var slots = Array.prototype.filter.call(
      this.shadowRoot.querySelectorAll(".main-scroll-content .cellars-grid .slot"),
      function (el) { return el.getClientRects().length > 0; }
    );
    var r = from.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    var cy = r.top + r.height / 2;
    var best = null;
    var bestScore = Infinity;
    slots.forEach(function (el) {
      if (el === from) return;
      var q = el.getBoundingClientRect();
      var dx = q.left + q.width / 2 - cx;
      var dy = q.top + q.height / 2 - cy;
      var along = key === "ArrowRight" ? dx : key === "ArrowLeft" ? -dx : key === "ArrowDown" ? dy : -dy;
      var across = key === "ArrowRight" || key === "ArrowLeft" ? Math.abs(dy) : Math.abs(dx);
      if (along < 4) return;
      var score = along + across * 3;
      if (score < bestScore) {
        bestScore = score;
        best = el;
      }
    });
    if (best) {
      best.focus({ preventScroll: true });
      best.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }

  // Moves a bottle to an empty slot (dest) or swaps it with another bottle
  // (swapWith), then offers Undo. Used by tap-to-move and drag and drop.
  async _relocateBottle(source, dest, swapWith, focus) {
    var self = this;
    var bottles = (this._data && this._data.bottles) || [];
    var moving = bottles.find(function (b) { return b.id === source.bottle_id; }) || source;
    var name = moving.wine_name || source.name || _T("unnamed_wine");
    var from = { cellar_id: moving.cellar_id, shelf_id: moving.shelf_id, lane: moving.lane || "front", position: Number(moving.position) };
    var text;
    var undo;
    try {
      if (swapWith) {
        var other = bottles.find(function (b) { return b.id === swapWith; }) || {};
        await this._callWS({ type: "wine_cellar_manager/swap_bottles", source_id: String(source.bottle_id), dest_id: String(swapWith) });
        text = _T("move_swapped", { a: name, b: other.wine_name || _T("unnamed_wine") });
        undo = function () {
          return self._callWS({ type: "wine_cellar_manager/swap_bottles", source_id: String(source.bottle_id), dest_id: String(swapWith) });
        };
      } else {
        await this._callWS({
          type: "wine_cellar_manager/move_bottle",
          bottle_id: String(source.bottle_id),
          cellar_id: String(dest.cellar_id),
          shelf_id: String(dest.shelf_id),
          lane: String(dest.lane || "front"),
          position: Math.trunc(Number(dest.position))
        });
        text = _T("move_done", { name: name, where: this._slotWhere(dest) });
        undo = function () {
          return self._callWS({
            type: "wine_cellar_manager/move_bottle",
            bottle_id: String(source.bottle_id),
            cellar_id: String(from.cellar_id),
            shelf_id: String(from.shelf_id),
            lane: String(from.lane),
            position: from.position
          });
        };
      }
    } catch (err) {
      console.error("Wine Cellar: move failed", err);
      await this._loadData(true);
      await this.render(true);
      this._showToast(_T("move_failed", { error: this._friendlyError(err) }), { kind: "warn" });
      return;
    }
    await this._loadData(true);
    this._pendingPulse = { ids: [source.bottle_id], focus: !!focus };
    await this.render(true);
    this._showToast(text, {
      action: {
        label: _T("undo"),
        undo: true,
        run: async function () {
          try {
            await undo();
          } catch (err) {
            self._showToast(_T("move_failed", { error: self._friendlyError(err) }), { kind: "warn" });
            return;
          }
          await self._loadData(true);
          self._pendingPulse = { ids: [source.bottle_id], focus: !!focus };
          await self.render(true);
          self._showToast(_T("undone"));
        }
      }
    });
  }

  // Brings the first of these bottles into view and makes them all pulse.
  _pulseBottles(ids, focus) {
    var self = this;
    ids.forEach(function (id, i) {
      if (i === 0) {
        self._gotoBottle(id, { focus: focus });
        return;
      }
      var el = self._slotOfBottle(id);
      if (!el) return;
      el.classList.add("located", "pulse");
      setTimeout(function () { el.classList.remove("pulse"); }, 2300);
      setTimeout(function () { el.classList.remove("located"); }, 4500);
    });
  }

  // Root listeners of move mode, bound once (the shadow root outlives
  // renders). Capture phase: move mode wins over a slot's own click (open
  // the bottle, add a bottle here).
  _bindMoveMode(root) {
    var self = this;
    root.addEventListener("click", function (e) {
      var target = e.target && e.target.closest ? e.target : null;
      if (!target) return;
      if (self._longPressFired) {
        self._longPressFired = false;
        if (target.closest(".slot")) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }
      if (!self._moveSource || self._modal) return;
      var slot = target.closest(".main-scroll-content .slot[data-new-bottle], .main-scroll-content .slot[data-edit-bottle]");
      if (!slot) return;
      e.preventDefault();
      e.stopPropagation();
      self._dropMove(slot);
    }, true);
    root.addEventListener("keydown", function (e) {
      if (self._modal || e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
      var slot = e.target && e.target.closest ? e.target.closest(".main-scroll-content .slot") : null;
      if (!self._moveSource) {
        if ((e.key === "m" || e.key === "M") && slot && slot.hasAttribute("data-edit-bottle")) {
          e.preventDefault();
          self._startMove(slot.getAttribute("data-edit-bottle"));
        }
        return;
      }
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        e.stopPropagation();
        self._cancelMove();
      } else if (slot && /^Arrow(Left|Right|Up|Down)$/.test(e.key)) {
        e.preventDefault();
        self._moveFocusBy(slot, e.key);
      }
    }, true);
    // Touch: a long press on a bottle lifts it. A finger that moves (a
    // scroll) cancels it; the click that follows the press is swallowed.
    root.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" || self._moveSource || self._modal) return;
      var slot = e.target && e.target.closest ? e.target.closest(".cellars-grid:not(.compact) .slot[data-edit-bottle]") : null;
      if (!slot) return;
      var x0 = e.clientX;
      var y0 = e.clientY;
      function stop() {
        clearTimeout(self._longPressTimer);
        root.removeEventListener("pointermove", onMove, true);
        root.removeEventListener("pointerup", stop, true);
        root.removeEventListener("pointercancel", stop, true);
      }
      function onMove(ev) {
        if (Math.abs(ev.clientX - x0) > 8 || Math.abs(ev.clientY - y0) > 8) stop();
      }
      stop();
      root.addEventListener("pointermove", onMove, true);
      root.addEventListener("pointerup", stop, true);
      root.addEventListener("pointercancel", stop, true);
      self._longPressTimer = setTimeout(function () {
        stop();
        self._longPressFired = true;
        setTimeout(function () { self._longPressFired = false; }, 900);
        if (navigator.vibrate) navigator.vibrate(12);
        self._startMove(slot.getAttribute("data-edit-bottle"));
      }, 480);
    }, true);
    root.addEventListener("contextmenu", function (e) {
      if (self._longPressFired && e.target.closest && e.target.closest(".slot")) e.preventDefault();
    }, true);
  }

  _prefersReducedMotion() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (err) {
      return false;
    }
  }

  /* Bottle art. Every bottle is drawn in the shape of its style, the glass in
     the wine-type color and the capsule in its own, so a card reads without
     a photo; a label photo is shown whole beside a small drawn bottle. */

  // Which silhouette a bottle is drawn with. An explicit bottle_style, or a
  // format of 500 ml or less, wins; otherwise the style is read from the type
  // and from keywords in the varietal, region, name and producer.
  _bottleShape(bottle) {
    bottle = bottle || {};
    var explicit = String(bottle.bottle_style || "").toLowerCase();
    if (_WCM_BOTTLE_SHAPES[explicit]) return explicit;
    var ml = Number(bottle.format || bottle.volume_ml || 0);
    if (ml && ml <= 500) return "half";
    var type = bottle.wine_type || "unset";
    var text = this._normalizeCompareValue([bottle.varietal, bottle.region, bottle.wine_name, bottle.producer].join(" "));
    if (type === "sparkling" || /champagne|cremant|\bcava\b|prosecco|franciacorta|\bsekt\b|spumante|petillant|\bbrut\b/.test(text)) return "sparkling";
    if (/\bport\b|\bporto\b|tawny|madeira|sherry|jerez|marsala|banyuls|fortified/.test(text)) return "port";
    if (type === "sweet" || /tokaji|sauternes|barsac|ice ?wine|eiswein|ice cider|cidre de glace|botrytis|vin santo|late harvest|vendanges tardives|trockenbeeren/.test(text)) return "half";
    if (/riesling|gewurz|alsace|mosel|pfalz|rheingau|sylvaner|silvaner|gruner|muller/.test(text)) return "flute";
    if (/pinot|chardonnay|bourgogne|burgundy|chablis|beaujolais|gamay|rhone|syrah|shiraz|nebbiolo|barolo|barbaresco|viognier|sancerre|pouilly|chateauneuf|grenache/.test(text)) return "burgundy";
    return "bordeaux";
  }

  // A bottle without a type, or with nothing known but its name, asks to be
  // completed.
  _bottleNeedsDetails(bottle) {
    if (!bottle) return false;
    if ((bottle.wine_type || "unset") === "unset") return true;
    return !bottle.producer && !bottle.vintage && !bottle.varietal && !bottle.region && !bottle.country;
  }

  // The bottle as inline SVG. opts.variant is "card", "mini" (the corner of a
  // card showing a label photo), "hero" (the bottle dialog), "tag" (a search
  // result chip: the silhouette only) or "thumb" (a list thumbnail: the
  // silhouette and a plain label, the fewest shapes, as it is drawn once per
  // row); with opts.labelImage the photo is printed on the bottle's paper
  // label.
  _bottleArtSvg(bottle, opts) {
    opts = opts || {};
    bottle = bottle || {};
    var shapeName = this._bottleShape(bottle);
    var shape = _WCM_BOTTLE_SHAPES[shapeName];
    var type = bottle.wine_type || "unset";
    var unknown = type === "unset";
    var uid = "wcm-bt" + (++_wcmSvgSeq);
    var lab = shape.label;
    var labelBox = 'x="' + lab[0] + '" y="' + lab[1] + '" width="' + lab[2] + '" height="' + lab[3] + '"';
    var body;

    if (unknown) {
      // Nothing known yet: a dashed outline with a question mark.
      body =
        '<path class="bt-glass" d="' + shape.glass + '"/>' +
        '<path class="bt-rim" d="' + shape.glass + '"/>' +
        '<text class="bt-q" x="24" y="' + (lab[1] + lab[3] / 2 + 7) + '" text-anchor="middle">?</text>';
    } else if (opts.variant === "tag") {
      // A result chip shows only the silhouette: glass, capsule, shading.
      body =
        '<path class="bt-glass" d="' + shape.glass + '"/>' +
        '<path class="bt-cap" d="' + shape.cap + '"/>' +
        '<path d="' + shape.glass + '" fill="url(#wcm-bt-shade)"/>' +
        '<path class="bt-rim" d="' + shape.glass + '"/>';
    } else if (opts.variant === "thumb") {
      body =
        '<path class="bt-glass" d="' + shape.glass + '"/>' +
        '<rect class="bt-paper" ' + labelBox + ' rx="1.2"/>' +
        '<path class="bt-cap" d="' + shape.cap + '"/>' +
        '<path d="' + shape.glass + '" fill="url(#wcm-bt-shade)"/>' +
        '<path class="bt-rim" d="' + shape.glass + '"/>';
    } else {
      var ink;
      if (opts.labelImage) {
        // A photo that fails to load leaves the plain paper label.
        ink =
          '<clipPath id="' + uid + 'c"><rect ' + labelBox + ' rx="1.2"/></clipPath>' +
          '<image href="' + this._escape(opts.labelImage) + '" ' + labelBox + ' preserveAspectRatio="xMidYMid slice" clip-path="url(#' + uid + 'c)" onerror="this.remove()"/>';
      } else {
        var cx = lab[0] + lab[2] / 2;
        var y = lab[1];
        var w1 = lab[2] * 0.62;
        var w2 = lab[2] * 0.44;
        var w3 = lab[2] * 0.3;
        var hero = opts.variant === "hero";
        ink =
          '<path class="bt-ink" stroke-width="' + (hero ? 1.1 : 1.6) + '" d="M' + (cx - w1 / 2) + " " + (y + lab[3] * 0.34) + "h" + w1 + '"/>' +
          '<path class="bt-ink" stroke-width="' + (hero ? 0.5 : 0.8) + '" opacity=".7" d="M' + (cx - w2 / 2) + " " + (y + lab[3] * 0.5) + "h" + w2 + "M" + (cx - w3 / 2) + " " + (y + lab[3] * 0.62) + "h" + w3 + '"/>' +
          '<path class="bt-ink" stroke-width=".5" opacity=".55" d="M' + (lab[0] + 2) + " " + (y + 2) + "h" + (lab[2] - 4) + "M" + (lab[0] + 2) + " " + (y + lab[3] - 2) + "h" + (lab[2] - 4) + '"/>';
      }
      body =
        '<path class="bt-glass" d="' + shape.glass + '"/>' +
        (type === "sparkling"
          ? '<g class="bt-bubble"><circle cx="16" cy="56" r="1.1"/><circle cx="19.5" cy="50" r=".8"/><circle cx="31" cy="60" r="1"/><circle cx="28" cy="53" r=".7"/><circle cx="23" cy="62" r=".6"/></g>'
          : "") +
        '<rect class="bt-paper" ' + labelBox + ' rx="1.2"/>' + ink +
        '<path class="bt-cap" d="' + shape.cap + '"/>' +
        (shape.foil ? '<path class="bt-foil-line" d="M18 12h12M18 15h12M18 18h12M18 21h12"/>' : "") +
        // Glass shading (_WCM_BOTTLE_SHADE, drawn once per card).
        '<path d="' + shape.glass + '" fill="url(#wcm-bt-shade)"/>' +
        '<path d="' + shape.cap + '" fill="url(#wcm-bt-shade)" opacity=".8"/>' +
        '<path class="bt-rim" d="' + shape.glass + '"/>';
    }

    return (
      '<svg class="bt-bottle bt-' + shapeName + (unknown ? " bt-unknown" : "") + (opts.variant ? " bt-" + opts.variant : "") +
      '" viewBox="0 0 48 128" aria-hidden="true" focusable="false" style="--cap:' + (_WCM_CAPSULES[type] || _WCM_CAPSULES.unset) + '">' +
      body + "</svg>"
    );
  }

  // The status glyph on its status color (see _WCM_GLYPHS). painted: the
  // glyph is drawn by CSS instead of an inline SVG (for lists that repeat it
  // on every row; see _WCM_ICON_STYLES).
  _bottleGlyph(status, painted) {
    if (!_WCM_GLYPHS[status]) status = "none";
    return '<i class="bt-glyph is-' + status + '" aria-hidden="true">' + (painted ? "" : _WCM_GLYPHS[status]) + "</i>";
  }

  // France shows the region, everything else the grape, each falling back to
  // whatever is known so the line is never empty.
  _bottleOrigin(bottle) {
    var france = String(bottle.country || "").trim().toLowerCase() === "france";
    var value = france
      ? (bottle.region || bottle.varietal || "")
      : (bottle.varietal || bottle.region || bottle.country || "");
    return value ? this._truncateMeta(value) : "";
  }

  // Bottles of the same wine share a name and producer (any vintage); twins
  // also share the vintage. Counted once per data load.
  _bottleSiblingKey(bottle) {
    return this._normalizeCompareValue(bottle.wine_name) + "|" + this._normalizeCompareValue(bottle.producer);
  }

  _bottleIndex() {
    var bottles = (this._data && this._data.bottles) || [];
    var cache = this._bottleIndexCache;
    if (cache && cache.source === bottles && cache.size === bottles.length) return cache;
    var self = this;
    var twins = new Map();
    var siblings = new Map();
    bottles.forEach(function (b) {
      if (!b.wine_name) return;
      var key = self._bottleSiblingKey(b);
      siblings.set(key, (siblings.get(key) || 0) + 1);
      key += "|" + (b.vintage || "");
      twins.set(key, (twins.get(key) || 0) + 1);
    });
    this._bottleIndexCache = { source: bottles, size: bottles.length, twins: twins, siblings: siblings };
    return this._bottleIndexCache;
  }

  // A filled slot: in the Cellars view a small portrait of the bottle, in
  // Compact the end of a bottle with its status ring and glyph. Its label
  // says what the bottle is and, from opts.location and opts.behind, where it
  // is and what stands in front of it.
  _renderBottleSlot(bottle, isDimmed, opts) {
    opts = opts || {};
    var self = this;
    var status = this._agingStatus(bottle);
    var type = bottle.wine_type || "unset";
    var name = bottle.wine_name || _T("unnamed_wine");
    var windowText = this._formatWindowShort(bottle);
    var rating = Math.max(0, Math.min(5, Math.trunc(Number(bottle.rating) || 0)));
    var needs = this._bottleNeedsDetails(bottle);
    var index = this._bottleIndex();
    var siblingKey = bottle.wine_name ? this._bottleSiblingKey(bottle) : "";
    var siblings = siblingKey ? (index.siblings.get(siblingKey) || 1) : 1;
    var twins = siblingKey ? (index.twins.get(siblingKey + "|" + (bottle.vintage || "")) || 1) : 1;
    function esc(value) { return self._escape(value); }

    var label = [
      name,
      bottle.producer,
      bottle.vintage,
      this._wineTypeLabel(type),
      status !== "none" ? this._agingStatusLabel(status) + (windowText ? " " + windowText : "") : _T("bt_no_window_long"),
      rating ? _T("bt_stars", { n: rating }) : "",
      needs ? _T("bt_needs_details") : "",
      twins > 1 ? _T("bt_identical", { n: twins }) : "",
      opts.location,
      opts.behind,
      // Kept last: the live filter swaps it in place (_applyFiltersInPlace).
      opts.matchNote
    ].filter(Boolean).join(" · ");

    var classes = "slot filled" + (opts.compact ? "" : " bt" + (needs ? " bt-needs" : "")) +
      (isDimmed ? " dimmed" : (opts.highlight ? " match" : ""));

    var dragMeta = JSON.stringify({
      bottle_id: bottle.id,
      cellar_id: bottle.cellar_id,
      shelf_id: bottle.shelf_id,
      lane: bottle.lane,
      position: Number(bottle.position)
    });

    var content;
    if (opts.compact) {
      content = '<span class="end-glyph" aria-hidden="true">' + (_WCM_GLYPHS[status] || _WCM_GLYPHS.none) + "</span>";
    } else {
      var imagePath = this._normalizeImagePath(bottle.image_path);
      var twinsHtml = twins > 1
        ? '<span class="bt-twins" title="' + esc(_T("bt_identical", { n: twins })) + '">' + _WCM_ICONS.twins + "×" + twins + "</span>"
        : "";
      var stage;
      if (imagePath) {
        // The whole label, never cropped (a very wide one leaves room for the
        // small bottle). If it cannot load, the small bottle takes the stage.
        var onLoad = "if(this.naturalWidth>this.naturalHeight*1.45)this.classList.add('is-wide')";
        var onError = "var s=this.closest('.bt-stage');s.classList.remove('has-photo');this.parentNode.remove();var m=s.querySelector('.bt-mini');if(m)m.classList.remove('bt-mini')";
        stage =
          '<div class="bt-stage has-photo' + (twins > 1 ? " has-twins" : "") + '">' +
          '<div class="bt-photo"><img class="bt-photo-fg" src="' + esc(imagePath) + '" alt="" loading="lazy" decoding="async" onload="' + onLoad + '" onerror="' + onError + '"></div>' +
          this._bottleArtSvg(bottle, { variant: "mini" }) + twinsHtml +
          "</div>";
      } else {
        stage = '<div class="bt-stage">' + this._bottleArtSvg(bottle, { variant: "card" }) + twinsHtml + "</div>";
      }

      // The drinking window pairs a glyph with the years, below the label.
      var chip;
      if (status !== "none") {
        chip = '<span class="bt-chip" title="' + esc(this._agingStatusLabel(status)) + '">' + this._bottleGlyph(status) + "<span>" + esc(windowText) + "</span></span>";
      } else if (needs) {
        chip = '<span class="bt-chip is-needs">' + this._bottleGlyph("needs") + "<span>" + esc(_T("bt_needs_details")) + "</span></span>";
      } else {
        chip = '<span class="bt-chip is-none">' + this._bottleGlyph("none") + "<span>" + esc(_T("bt_no_window")) + "</span></span>";
      }

      var origin = this._bottleOrigin(bottle);
      var showProducer = bottle.producer && this._normalizeCompareValue(bottle.producer) !== this._normalizeCompareValue(name);
      content =
        stage + chip +
        '<span class="bt-name" title="' + esc(name) + '">' + esc(name) + "</span>" +
        (showProducer ? '<span class="bt-producer">' + esc(bottle.producer) + "</span>" : "") +
        '<span class="bt-meta">' +
        (bottle.vintage ? '<span class="bt-vintage">' + esc(bottle.vintage) + "</span>" : "") +
        (origin ? '<span class="bt-origin">' + esc(origin) + "</span>" : "") +
        "</span>" +
        '<span class="bt-stars">' + (rating ? "★".repeat(rating) + '<span class="off">' + "★".repeat(5 - rating) + "</span>" : "") + "</span>";
    }

    return (
      '<div class="' + classes + '" role="button" tabindex="0" aria-label="' + esc(label) + '"' +
      (opts.compact ? ' title="' + esc(label) + '"' : "") +
      ' data-edit-bottle="' + esc(bottle.id) + '"' +
      (siblings > 1 && !opts.compact ? ' data-sib="' + esc(siblingKey) + '"' : "") +
      ' draggable="true" data-drag-source="' + esc(dragMeta) + '"' +
      ' style="--type:' + this._wineSurfaceColor(type) + ";--status:var(--wcm-" + status + ')">' +
      content +
      "</div>"
    );
  }

  // "Kitchen, Shelf 2 · Whites, back row, position 3".
  _slotLocationText(cellar, shelfRef, lane, pos) {
    return _T(lane === "back" ? "loc_back_pos" : "loc_front_pos", {
      cellar: (cellar && cellar.name) || _T("cellar"),
      shelf: shelfRef,
      pos: pos
    });
  }

  // An empty position. In the Cellars view a front one is a low footprint on
  // the shelf floor and a back one a faint ghost against the back wall; both
  // sit under every bottle, so they never take a bottle's click.
  _renderEmptySlot(cellar, shelf, lane, pos, opts) {
    opts = opts || {};
    var back = lane === "back";
    var label = this._escape(_T("slot_empty_label", { loc: this._slotLocationText(cellar, opts.shelfRef || shelf.name || "", lane, pos) }));
    var inner = "";
    if (!opts.compact) {
      inner = back
        ? _WCM_BOTTLE_GHOST + '<span class="slot-pos">' + pos + "</span>"
        : '<span class="fp-plus" aria-hidden="true">' + _WCM_ICONS.plus + '</span><span class="slot-pos">' + pos + "</span>";
    }
    return (
      '<div class="slot empty ' + (back ? "ghost" : "footprint") + (opts.pasteReady ? " paste-ready" : "") + '" role="button" tabindex="0" aria-label="' + label + '"' +
      (opts.compact ? ' title="' + label + '"' : "") +
      ' data-new-bottle="' + this._escape(JSON.stringify({
        cellar_id: cellar.id,
        shelf_id: shelf.id,
        lane: lane,
        position: pos,
        wine_type: "unset",
        rating: 0
      })) + '">' +
      inner +
      "</div>"
    );
  }

  // Index bottles by their physical slot so rendering a shelf is O(capacity)
  // instead of re-scanning every bottle in the cellar for each slot.
  _buildSlotIndex(bottles) {
    var index = new Map();
    (bottles || []).forEach(function (b) {
      index.set(
        String(b.shelf_id) + "|" + String(b.lane) + "|" + Number(b.position),
        b
      );
    });
    return index;
  }

  _countShelfBottles(shelf, slotIndex) {
    var count = 0;
    [["front", Number(shelf.capacity_front || 0)], ["back", Number(shelf.capacity_back || 0)]].forEach(function (lane) {
      for (var pos = 1; pos <= lane[1]; pos++) {
        if (slotIndex.has(String(shelf.id) + "|" + lane[0] + "|" + pos)) count++;
      }
    });
    return count;
  }

  // With the same parity, centered front and back rows would put every back
  // bottle directly behind a front one; those shelves get the quarter-pitch
  // stagger from the stylesheet. Odd differences already interleave.
  _isStaggered(shelf) {
    var front = Number(shelf.capacity_front || 0);
    var back = Number(shelf.capacity_back || 0);
    return front > 0 && back > 0 && (front - back) % 2 === 0;
  }

  // A shelf whose layout_mode is "inline" keeps each back bottle straight
  // behind the front one with the same position.
  _isInlineShelf(shelf) {
    return String(shelf.layout_mode || "") === "inline" && Number(shelf.capacity_back || 0) > 0;
  }

  _shelfKey(cellar, shelf) {
    return String(cellar.id) + "|" + String(shelf.id);
  }

  // "Shelf 2 · Whites": two shelves may share a name, so labels carry the
  // shelf's number too.
  _shelfRef(shelf, n) {
    return shelf && shelf.name ? _T("depth_shelf_named", { n: n, name: shelf.name }) : _T("shelf_n", { n: n });
  }

  // Horizontal center of a slot, in pitches from the shelf's center: the
  // same geometry the stylesheet draws (rows centered; same-parity rows a
  // quarter pitch apart; "inline" shelves aligned), so "behind" names exactly
  // the bottles the user sees in front.
  _slotX(shelf, lane, pos) {
    var front = Number(shelf.capacity_front || 0);
    var back = Number(shelf.capacity_back || 0);
    if (this._isInlineShelf(shelf)) return pos - (Math.max(front, back) + 1) / 2;
    var x = pos - ((lane === "back" ? back : front) + 1) / 2;
    if (this._isStaggered(shelf)) x += lane === "back" ? 0.25 : -0.25;
    return x;
  }

  // The front-row bottles standing in front of a back-row position.
  _frontBlockers(shelf, pos, slotIndex) {
    var x = this._slotX(shelf, "back", pos);
    var found = [];
    for (var p = 1; p <= Number(shelf.capacity_front || 0); p++) {
      if (Math.abs(this._slotX(shelf, "front", p) - x) >= 0.75) continue;
      var bottle = slotIndex.get(String(shelf.id) + "|front|" + p);
      if (bottle) found.push({ pos: p, bottle: bottle });
    }
    return found;
  }

  _renderLaneSlots(cellar, shelf, lane, capacity, slotIndex, opts) {
    var slotsHtml = [];

    for (var pos = 1; pos <= capacity; pos++) {
      var bottle = slotIndex.get(String(shelf.id) + "|" + lane + "|" + pos) || null;

      if (!bottle) {
        slotsHtml.push(this._renderEmptySlot(cellar, shelf, lane, pos, opts));
        continue;
      }
      var matches = !opts.filtering || opts.model.ids.has(String(bottle.id));
      var blockers = lane === "back" ? this._frontBlockers(shelf, pos, slotIndex) : [];
      slotsHtml.push(this._renderBottleSlot(bottle, !matches, {
        compact: opts.compact,
        highlight: opts.filtering && matches,
        location: this._slotLocationText(cellar, opts.shelfRef, lane, pos),
        behind: blockers.length
          ? _T("depth_behind_aria", { names: blockers.map(function (b) { return b.bottle.wine_name || _T("unnamed_wine"); }).join(" & ") })
          : "",
        matchNote: opts.filtering ? _T(matches ? "find_state_match" : "find_state_other") : ""
      }));
    }

    return (
      '<div class="lane lane-' + lane + '">' +
      (opts.showTags && !opts.compact ? '<span class="lane-tag" aria-hidden="true">' + this._escape(this._laneLabel(lane)) + "</span>" : "") +
      '<div class="lane-row">' + slotsHtml.join("") + "</div>" +
      "</div>"
    );
  }

  _pullLabel(shelfRef, count, expanded) {
    return _T(expanded ? "depth_push" : "depth_pull", { shelf: shelfRef, count: count });
  }

  // A shelf: its name and fill, the back row then the front row, and the lip
  // with the number of each front position. In the Cellars view a two-row
  // shelf pulls out (tap its lip, or the "Back row" plate in it) to bring the
  // back row forward; opts.autoOpen lists the shelves a search pulls out.
  _renderShelf(cellar, shelf, index, slotIndex, opts) {
    opts = opts || {};
    var self = this;
    var front = Number(shelf.capacity_front || 0);
    var back = Number(shelf.capacity_back || 0);
    var twoRow = front > 0 && back > 0;
    var inline = this._isInlineShelf(shelf);
    var key = this._shelfKey(cellar, shelf);
    var shelfRef = this._shelfRef(shelf, index + 1);
    var laneOpts = Object.assign({}, opts, { showTags: back > 0, shelfRef: shelfRef });
    var lanes = "";
    function esc(value) { return self._escape(value); }

    // The back row is drawn first (above, "behind") and the front row last,
    // standing on the lip.
    if (back > 0) lanes += this._renderLaneSlots(cellar, shelf, "back", back, slotIndex, laneOpts);
    if (front > 0) lanes += this._renderLaneSlots(cellar, shelf, "front", front, slotIndex, laneOpts);

    var canPull = twoRow && !opts.compact;
    var open = canPull && this._openShelf === key;
    var auto = canPull && !open && !!(opts.autoOpen && opts.autoOpen.has(key));
    var stored = this._countShelfBottles(shelf, slotIndex);
    var frontFilled = 0;
    for (var f = 1; f <= front; f++) {
      if (slotIndex.has(String(shelf.id) + "|front|" + f)) frontFilled++;
    }
    // While a search or filter is on, how many of its bottles match.
    var hits = opts.filtering ? (opts.model.perShelf[key] || 0) : 0;
    var classes = "shelf" +
      (!inline && this._isStaggered(shelf) ? " staggered" : "") +
      (inline ? " inline" : "") +
      (twoRow ? " two-row" : " one-row") +
      (front > 0 && !frontFilled ? " front-empty" : "") +
      (open ? " open" : "") +
      (auto ? " auto-open" : "") +
      (opts.filtering && !hits ? " no-hits" : "");

    var pull = "";
    if (canPull) {
      var backFilled = 0;
      for (var p = 1; p <= back; p++) {
        if (slotIndex.has(String(shelf.id) + "|back|" + p)) backFilled++;
      }
      var pullLabel = esc(this._pullLabel(shelfRef, backFilled, open || auto));
      pull =
        '<button type="button" class="pull-btn" data-pull-shelf="' + esc(key) + '" data-shelf-label="' + esc(shelfRef) + '" data-back-n="' + backFilled + '"' +
        ' aria-expanded="' + (open || auto) + '" aria-label="' + pullLabel + '" title="' + pullLabel + '">' +
        _WCM_ICONS.pull + '<span class="pull-txt">' + esc(_T("depth_back_row")) + '</span><span class="peek-n">' + backFilled + "</span></button>";
    }

    // Out of view, the shelf keeps the height it was last drawn at.
    var sizes = "";
    if (!opts.compact && this._shelfHeights) {
      if (this._shelfHeights[key + "|c"]) sizes += ";--ish-c:" + this._shelfHeights[key + "|c"] + "px";
      if (this._shelfHeights[key + "|o"]) sizes += ";--ish-o:" + this._shelfHeights[key + "|o"] + "px";
    }

    var numbers = "";
    if (!opts.compact && front > 0) {
      var marks = [];
      for (var q = 1; q <= front; q++) marks.push("<i><b>" + q + "</b></i>");
      numbers = '<div class="lip-row" aria-hidden="true">' + marks.join("") + "</div>";
    }
    // Filled in by _updateShelfChips when the cabinet scrolls sideways.
    function scrollChip(dir) {
      return opts.compact ? "" : '<button type="button" class="hs-chip" data-hs="' + dir + '" hidden></button>';
    }

    // The shelf's number (the result strip says "Reds (shelf 3)") and its
    // match count, which the live filter keeps current. A shelf named after
    // its number ("Shelf 3") does not show the number twice.
    var shelfName = shelf.name || (_T("shelf") + " " + (index + 1));
    var numbered = this._foldSearchText(shelfName) === this._foldSearchText(_T("shelf_n", { n: index + 1 })) ||
      this._foldSearchText(shelfName) === this._foldSearchText(_T("shelf") + " " + (index + 1));
    return (
      '<div class="' + classes + '" role="group" aria-label="' + esc(shelfRef) + '" data-shelf-key="' + esc(key) + '" style="--nmax:' + Math.max(front, back, 1) + sizes + '">' +
      '<div class="shelf-head">' +
      '<span class="sh-l">' + scrollChip(-1) + (numbered ? "" : '<span class="shelf-no" aria-hidden="true">' + (index + 1) + "</span>") +
      '<span class="shelf-name">' + esc(shelfName) + "</span>" +
      '<span class="shelf-hits"' + (hits ? "" : " hidden") + '><b aria-hidden="true">' + hits + '</b><span class="sr-only">' + esc(this._hitsText(hits)) + "</span></span></span>" +
      '<span class="sh-r"><span class="shelf-count' + (front + back > 0 && stored >= front + back ? " is-full" : "") + '"><b>' + stored + "</b> / " + (front + back) + "</span>" + scrollChip(1) + "</span>" +
      "</div>" +
      (front + back === 0 && !opts.compact ? '<div class="shelf-noslots">' + esc(_T("depth_no_slots")) + "</div>" : "") +
      lanes +
      '<div class="rail">' + numbers + "</div>" +
      pull +
      "</div>"
    );
  }

  // Before the cabinets are rebuilt: the height every Cellars-view shelf is
  // drawn at right now (its real height on or near the screen, else its
  // stand-in). The rebuilt shelves out of view take exactly that room, so a
  // dialog opening or closing, a save or a move never shifts what is on
  // screen; a shelf seen for the first time uses the stylesheet's estimate.
  _rememberShelfHeights() {
    var root = this.shadowRoot;
    var shelves = root ? root.querySelectorAll(".main-scroll-content .cellars-grid:not(.compact) .shelf[data-shelf-key]") : [];
    if (!shelves.length) return;
    var memo = this._shelfHeights || (this._shelfHeights = {});
    var cs = getComputedStyle(shelves[0]);
    var edges = ["paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"].reduce(function (sum, prop) {
      return sum + (parseFloat(cs[prop]) || 0);
    }, 0);
    function sliding(shelf) {
      return !!shelf.getAnimations && shelf.getAnimations({ subtree: true }).some(function (anim) {
        return anim.transitionProperty === "margin-top" && anim.playState === "running";
      });
    }
    shelves.forEach(function (shelf) {
      // A shelf still sliding out or back in has no settled height yet.
      if (sliding(shelf)) return;
      var height = shelf.getBoundingClientRect().height - edges;
      if (!(height > 0)) return;
      var pulled = shelf.classList.contains("open") || shelf.classList.contains("auto-open");
      memo[shelf.getAttribute("data-shelf-key") + (pulled ? "|o" : "|c")] = Math.round(height * 100) / 100;
    });
  }

  // The lit interior is the default; the card option interior: theme keeps
  // the Home Assistant theme's colors inside the cabinets.
  _isLitInterior() {
    return !(this.config && String(this.config.interior || "").toLowerCase() === "theme");
  }

  _cabinetMaterial(color) {
    return _WCM_MATERIALS[String(color || "").toLowerCase()] || (color ? "mat-custom" : "mat-graphite");
  }

  // extraClass "mini …" draws a small cabinet (bottle dialog map, slot
  // picker, cellar editor preview): no scroll fades, not a Cellars-view one.
  // span (see _miniSpan) lets the slot picker and the editor's previews
  // size their slots to the room they have.
  _renderCabinet(cellar, shelvesHtml, extraClass, span) {
    var color = this._safeColor(cellar && cellar.bg_color);
    var mini = /(^| )mini( |$)/.test(extraClass || "");
    var style = (color ? "--cellar:" + color + ";" : "") + (span ? "--span:" + span + ";" : "");
    return (
      '<div class="cabinet ' + this._cabinetMaterial(color) + (this._isLitInterior() ? " lit" : " themed") + (extraClass ? " " + extraClass : "") + '"' +
      (style ? ' style="' + style + '"' : "") +
      (!mini && cellar ? ' data-cellar-id="' + this._escape(cellar.id) + '"' : "") + ">" +
      '<div class="interior"><div class="shelves">' + shelvesHtml + "</div></div>" +
      (mini ? "" : '<span class="cab-fade cab-fade-l" aria-hidden="true"></span><span class="cab-fade cab-fade-r" aria-hidden="true"></span>') +
      "</div>"
    );
  }

  _renderCellars(data, mode) {
    var self = this;
    var compact = mode === "compact";
    var cellars = (data.cellars || []).slice().sort(function (a, b) {
      return (a.display_order || 0) - (b.display_order || 0);
    });

    if (!cellars.length) {
      return '<div class="empty-state">' + this._escape(_T("add_first_cellar")) + "</div>";
    }

    var search = this._searchDepth();
    var model = this._filterModel();
    var opts = {
      compact: compact,
      filtering: model.filtering,
      model: model,
      pasteReady: this._hasCopiedBottle(),
      autoOpen: search.autoOpen
    };
    var gridClasses = "cellars-grid" + (compact ? " compact" : "") + (opts.filtering ? " filtering" : "") +
      (search.count > 0 && search.count <= 6 ? " few-matches" : "");

    return '<div class="' + gridClasses + '">' + cellars.map(function (cellar) {
      var cellarBottles = (data.bottles || []).filter(function (b) {
        return b.cellar_id === cellar.id;
      });
      // Built once per cellar and reused by every shelf/lane below.
      var slotIndex = self._buildSlotIndex(cellarBottles);
      var shelves = self._getSortedShelves(cellar);

      var capacity = 0;
      var stored = 0;
      shelves.forEach(function (shelf) {
        capacity += Number(shelf.capacity_front || 0) + Number(shelf.capacity_back || 0);
        stored += self._countShelfBottles(shelf, slotIndex);
      });
      var fill = capacity ? Math.round((stored / capacity) * 100) : 0;

      var shelfHtml = shelves.map(function (shelf, index) {
        return self._renderShelf(cellar, shelf, index, slotIndex, opts);
      }).join("");

      // While filtering: the cellar's match badge; a cellar without one fades.
      var hits = opts.filtering ? (model.perCellar[String(cellar.id)] || 0) : 0;
      var editLabel = self._escape(_T("edit_cellar"));
      return (
        '<section class="cellar' + (opts.filtering && !hits ? " no-hits" : "") + '" data-cellar-id="' + self._escape(cellar.id) + '">' +
        '<header class="cellar-head">' +
        '<div class="cellar-title">' +
        "<h3>" + self._escape(cellar.name) + "</h3>" +
        '<div class="cellar-sub"><span class="meter"><span style="width:' + fill + '%"></span></span><span>' + stored + " / " + capacity + "</span></div>" +
        "</div>" +
        '<span class="cellar-hits' + (hits ? "" : " none") + '"' + (opts.filtering ? "" : " hidden") + ">" + self._escape(self._hitsText(hits)) + "</span>" +
        '<button class="icon-btn" type="button" data-edit-cellar="' + self._escape(cellar.id) + '" title="' + editLabel + '" aria-label="' + editLabel + '">' + _WCM_ICONS.pencil + "</button>" +
        "</header>" +
        (shelfHtml ? self._renderCabinet(cellar, shelfHtml) : '<div class="empty-state">' + self._escape(_T("no_shelves")) + "</div>") +
        "</section>"
      );
    }).join("") + "</div>";
  }

  /* Shelf depth: pulling a shelf out, and what the search does to it. */

  // The current search result and the shelves it pulls out on its own: when
  // the search is focused (1 to 8 matches), every two-row shelf with a match
  // in its back row, except the shelf the user opened and those the user
  // pushed back in while this same result set was showing.
  _searchDepth() {
    var self = this;
    var ids = [];
    var backHits = [];
    this._filterModel().hits.forEach(function (b) {
      ids.push(b.id);
      if (b.lane === "back") backHits.push(b);
    });
    var sig = ids.join(",");
    if (!this._pushedBack || this._pushedBack.sig !== sig) this._pushedBack = { sig: sig, keys: {} };
    var autoOpen = new Set();
    if (ids.length && ids.length <= 8) {
      backHits.forEach(function (b) {
        var shelf = self._getShelfById(b.cellar_id, b.shelf_id);
        if (!shelf || !(Number(shelf.capacity_front || 0) > 0 && Number(shelf.capacity_back || 0) > 0)) return;
        var key = String(b.cellar_id) + "|" + String(b.shelf_id);
        if (key !== self._openShelf && !self._pushedBack.keys[key]) autoOpen.add(key);
      });
    }
    return { sig: sig, count: ids.length, autoOpen: autoOpen };
  }

  // Applies the search's depth state to the page on screen, after a paint and
  // while the live search filters in place: the few-matches pop in Compact,
  // the shelves pulled out for a back-row match, and each wide cabinet
  // brought sideways to its first match.
  _syncDepth(opts) {
    opts = opts || {};
    var self = this;
    var root = this.shadowRoot;
    var grid = root && root.querySelector(".main-scroll-content .cellars-grid");
    if (!grid) return;
    var state = this._searchDepth();
    grid.classList.toggle("few-matches", state.count > 0 && state.count <= 6);
    if (!grid.classList.contains("compact")) {
      grid.querySelectorAll(".shelf.two-row").forEach(function (shelf) {
        var on = state.autoOpen.has(shelf.getAttribute("data-shelf-key"));
        if (shelf.classList.contains("auto-open") !== on) shelf.classList.toggle("auto-open", on);
        self._paintPullPlate(shelf);
      });
    }
    this._depthSig = state.sig;
    if (state.count) this._revealMatchesSideways(opts.instant);
  }

  _paintPullPlate(shelf) {
    var btn = shelf && shelf.querySelector(":scope > .pull-btn");
    if (!btn) return;
    var expanded = shelf.classList.contains("open") || shelf.classList.contains("auto-open");
    var label = this._pullLabel(btn.getAttribute("data-shelf-label") || "", Number(btn.getAttribute("data-back-n") || 0), expanded);
    if (btn.getAttribute("aria-expanded") !== String(expanded)) btn.setAttribute("aria-expanded", String(expanded));
    if (btn.getAttribute("aria-label") !== label) {
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    }
  }

  // Pulls one shelf out (key) or pushes it back in (null). One shelf is out
  // at a time: opening one also pushes back those the search pulled out.
  // opts.instant skips the slide (used before scrolling to a bottle).
  _setShelfOpen(key, opts) {
    opts = opts || {};
    var self = this;
    var root = this.shadowRoot;
    this._openShelf = key || null;
    if (!root) return;
    root.querySelectorAll(".main-scroll-content .cellars-grid:not(.compact) .shelf.two-row").forEach(function (shelf) {
      var k = shelf.getAttribute("data-shelf-key");
      if (opts.instant) shelf.classList.add("no-anim");
      shelf.classList.toggle("open", k === self._openShelf);
      if (key && k !== key && shelf.classList.contains("auto-open")) {
        self._pushedBack.keys[k] = true;
        shelf.classList.remove("auto-open");
      }
      self._paintPullPlate(shelf);
    });
    if (opts.instant) {
      void root.host.offsetWidth;
      requestAnimationFrame(function () {
        root.querySelectorAll(".shelf.no-anim").forEach(function (shelf) { shelf.classList.remove("no-anim"); });
      });
    }
  }

  _toggleShelf(shelf) {
    if (!shelf) return;
    var key = shelf.getAttribute("data-shelf-key");
    if (!shelf.classList.contains("open") && !shelf.classList.contains("auto-open")) {
      this._setShelfOpen(key);
      return;
    }
    if (shelf.classList.contains("auto-open")) {
      this._pushedBack.keys[key] = true;
      shelf.classList.remove("auto-open");
    }
    if (this._openShelf === key) this._setShelfOpen(null);
    else this._paintPullPlate(shelf);
  }

  // Once per cabinet per result set, a cabinet wider than the screen scrolls
  // sideways to its first match when no match is in view; a user who then
  // scrolls away keeps their place.
  _revealMatchesSideways(instant) {
    var self = this;
    var root = this.shadowRoot;
    var sig = this._depthSig || "";
    if (!this._revealed || this._revealed.sig !== sig) this._revealed = { sig: sig, widths: {} };
    if (!root || !sig) return;
    var smooth = !instant && !this._prefersReducedMotion();
    root.querySelectorAll(".main-scroll-content .cabinet.overflows[data-cellar-id] > .interior").forEach(function (interior) {
      var id = interior.parentNode.getAttribute("data-cellar-id");
      if (self._revealed.widths[id] === interior.clientWidth) return;
      self._revealed.widths[id] = interior.clientWidth;
      var hits = interior.querySelectorAll(".slot.filled.match");
      if (!hits.length) return;
      var ib = interior.getBoundingClientRect();
      var inView = Array.prototype.some.call(hits, function (el) {
        var r = el.getBoundingClientRect();
        return r.left >= ib.left + 12 && r.right <= ib.right - 12;
      });
      if (inView) return;
      var first = hits[0].getBoundingClientRect();
      var left = Math.max(0, Math.min(interior.scrollWidth - interior.clientWidth, interior.scrollLeft + (first.left - ib.left) - 40));
      if (smooth) interior.scrollTo({ left: left, behavior: "smooth" });
      else interior.scrollLeft = left;
    });
  }

  /* Cabinets wider than the screen scroll sideways: they start at position 1,
     keep each cabinet's place across re-renders ("view:cellarId" in
     _interiorScroll), and show edge fades and per-shelf chips counting the
     bottles out of view. */

  _cabinetScrollKey(interior) {
    var grid = interior.closest(".cellars-grid");
    return (grid && grid.classList.contains("compact") ? "compact:" : "cellars:") + interior.parentNode.getAttribute("data-cellar-id");
  }

  // Applies the overflow policy to one cabinet: .overflows (its rows then
  // start at the left edge) and --iw, the interior width narrower shelves
  // stay centered in. After a paint (restore) the remembered scroll is put
  // back; a cabinet seen for the first time starts at position 1.
  _fitCabinet(interior, restore) {
    var cabinet = interior.parentNode;
    // Measured on .shelves, which ignores the rows' quarter-pitch nudges, so
    // toggling .overflows cannot flip the answer.
    var shelves = interior.querySelector(":scope > .shelves");
    var overflows = (shelves ? shelves.offsetWidth : interior.scrollWidth) > interior.clientWidth + 2;
    var width = interior.clientWidth + "px";
    if (interior.style.getPropertyValue("--iw") !== width) interior.style.setProperty("--iw", width);
    if (cabinet.classList.contains("overflows") !== overflows) cabinet.classList.toggle("overflows", overflows);
    var key = this._cabinetScrollKey(interior);
    var known = Object.prototype.hasOwnProperty.call(this._interiorScroll, key);
    if (!overflows) {
      if (interior.scrollLeft) interior.scrollLeft = 0;
    } else if (restore || !known) {
      var left = known ? this._interiorScroll[key] : 0;
      if (Math.abs(interior.scrollLeft - left) > 1) interior.scrollLeft = left;
      this._interiorScroll[key] = left;
    }
    this._updateScrollCues(interior);
  }

  _updateScrollCues(interior) {
    var self = this;
    var cabinet = interior.parentNode;
    var max = cabinet.classList.contains("overflows") ? interior.scrollWidth - interior.clientWidth : 0;
    var left = interior.scrollLeft;
    cabinet.classList.toggle("can-l", max > 2 && left > 2);
    cabinet.classList.toggle("can-r", max > 2 && left < max - 2);
    if (max <= 2) {
      interior.querySelectorAll(".hs-chip").forEach(function (chip) { if (!chip.hidden) chip.hidden = true; });
      return;
    }
    // Only shelves on (or near) screen are measured; the others get their
    // chips when they scroll into view (see _observeCabinets).
    var box = interior.getBoundingClientRect();
    interior.querySelectorAll(".shelf").forEach(function (shelf) {
      if (shelf._onScreen === false || (shelf._onScreen === undefined && window.IntersectionObserver)) return;
      self._updateShelfChips(shelf, box);
    });
  }

  _updateShelfChips(shelf, box) {
    if (!box) {
      var interior = shelf.closest(".interior");
      if (!interior) return;
      box = interior.getBoundingClientRect();
    }
    var edge = 30;
    var filledLeft = 0;
    var filledRight = 0;
    var slotsLeft = 0;
    var slotsRight = 0;
    shelf.querySelectorAll(".slot").forEach(function (slot) {
      var r = slot.getBoundingClientRect();
      var center = (r.left + r.right) / 2;
      if (center < box.left + edge) {
        slotsLeft++;
        if (slot.classList.contains("filled")) filledLeft++;
      } else if (center > box.right - edge) {
        slotsRight++;
        if (slot.classList.contains("filled")) filledRight++;
      }
    });
    function paint(chip, slots, filled, moreKey, slotsKey) {
      if (!chip) return;
      chip.hidden = !slots;
      chip.textContent = filled ? String(filled) : "";
      chip.setAttribute("aria-label", filled ? _T(moreKey, { count: filled }) : _T(slotsKey));
    }
    paint(shelf.querySelector('.hs-chip[data-hs="-1"]'), slotsLeft, filledLeft, "depth_more_left", "depth_more_slots_left");
    paint(shelf.querySelector('.hs-chip[data-hs="1"]'), slotsRight, filledRight, "depth_more_right", "depth_more_slots_right");
  }

  // After a paint: the overflow policy and remembered scroll of every
  // cabinet, and a listener that keeps both the memory and the cues current.
  _layoutCabinets() {
    var self = this;
    var root = this.shadowRoot;
    root.querySelectorAll(".main-scroll-content .cabinet[data-cellar-id] > .interior").forEach(function (interior) {
      self._fitCabinet(interior, true);
      var frame = 0;
      interior.addEventListener("scroll", function () {
        self._interiorScroll[self._cabinetScrollKey(interior)] = interior.scrollLeft;
        if (frame) return;
        frame = requestAnimationFrame(function () {
          frame = 0;
          self._updateScrollCues(interior);
        });
      }, { passive: true });
    });
  }

  // One ResizeObserver per card re-applies the overflow policy when a
  // cabinet changes width (window, sidebar, panel); one IntersectionObserver
  // fills in the scroll chips of shelves as they come into view. Both are
  // pointed at the fresh cabinets after every paint.
  _observeCabinets() {
    var self = this;
    var root = this.shadowRoot;
    if (window.ResizeObserver) {
      if (!this._cabinetResizeObserver) {
        this._cabinetResizeObserver = new ResizeObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.target.isConnected) return;
            self._fitCabinet(entry.target, false);
          });
          if (self._depthSig) self._revealMatchesSideways(true);
        });
      }
      this._cabinetResizeObserver.disconnect();
      root.querySelectorAll(".main-scroll-content .cabinet[data-cellar-id] > .interior").forEach(function (interior) {
        self._cabinetResizeObserver.observe(interior);
      });
    }
    if (window.IntersectionObserver) {
      if (!this._shelfObserver) {
        this._shelfObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            var shelf = entry.target;
            shelf._onScreen = entry.isIntersecting;
            if (!entry.isIntersecting || !shelf.isConnected) return;
            var cabinet = shelf.closest(".cabinet");
            if (cabinet && cabinet.classList.contains("overflows")) self._updateShelfChips(shelf);
            else shelf.querySelectorAll(".hs-chip").forEach(function (chip) { if (!chip.hidden) chip.hidden = true; });
          });
        }, { rootMargin: "240px 0px" });
      }
      this._shelfObserver.disconnect();
      root.querySelectorAll(".main-scroll-content .cellars-grid:not(.compact) .cabinet[data-cellar-id] .shelf").forEach(function (shelf) {
        self._shelfObserver.observe(shelf);
      });
    }
  }

  // "Show in cellar" from the bottle dialog: closes it, switches to the
  // Cellars view when needed, and locates the bottle once it is painted.
  _showInCellar(id) {
    var switchView = this._view !== "cellars" && this._view !== "compact";
    if (!this._modal && !switchView) {
      this._gotoBottle(id, { focus: true });
      return;
    }
    this._pendingGoto = String(id);
    if (switchView) this._view = "cellars";
    if (this._modal) this._closeModal();
    else this.render(false);
  }

  // Brings a bottle's slot into view, vertically and inside its cabinet; a
  // back-row bottle has its shelf pulled out first. The slot pulses, is shown
  // even if the current filter dims it, and takes focus (opts.focus); its
  // result chip, if it has one, becomes the current one.
  _gotoBottle(id, opts) {
    opts = opts || {};
    var root = this.shadowRoot;
    var el = null;
    if (root) {
      root.querySelectorAll(".main-scroll-content .cellars-grid .slot[data-edit-bottle]").forEach(function (slot) {
        if (!el && slot.getAttribute("data-edit-bottle") === String(id)) el = slot;
      });
    }
    if (!el) return false;
    var shelf = el.closest(".lane-back") ? el.closest(".cellars-grid:not(.compact) .shelf.two-row") : null;
    if (shelf && !shelf.classList.contains("open") && !shelf.classList.contains("auto-open")) {
      this._setShelfOpen(shelf.getAttribute("data-shelf-key"), { instant: true });
    }
    this._scrollIntoBand(el, this._visibleBand(), "center", this._prefersReducedMotion() ? "auto" : "smooth");
    this._settleScrollOn(el);
    el.classList.remove("pulse");
    void el.offsetWidth;
    el.classList.add("located", "pulse");
    setTimeout(function () { el.classList.remove("pulse"); }, 2300);
    setTimeout(function () { el.classList.remove("located"); }, 4500);
    if (opts.focus) el.focus({ preventScroll: true });
    this._markWhereChip(id);
    return true;
  }

  // Hovering or focusing a bottle rings every other bottle of the same wine
  // (any vintage), so "where are the others?" answers itself. Bound once on
  // the shadow root, which outlives renders.
  _bindSiblingRings(root) {
    if (this._siblingListenersBound) return;
    this._siblingListenersBound = true;
    var current = null;
    function clear() {
      if (!current) return;
      root.querySelectorAll(".bt-sibling, .bt-sibling-src").forEach(function (el) {
        el.classList.remove("bt-sibling", "bt-sibling-src");
      });
      current = null;
    }
    function show(slot) {
      if (slot === current) return;
      clear();
      if (!slot || !slot.isConnected) return;
      var key = slot.getAttribute("data-sib");
      current = slot;
      slot.classList.add("bt-sibling-src");
      root.querySelectorAll(".slot.bt[data-sib]").forEach(function (el) {
        if (el !== slot && el.getAttribute("data-sib") === key) el.classList.add("bt-sibling");
      });
    }
    function slotOf(e) {
      var slot = e.target && e.target.closest ? e.target.closest(".slot.bt[data-sib]") : null;
      return slot && !slot.closest(".modal-backdrop") ? slot : null;
    }
    root.addEventListener("pointerover", function (e) { show(slotOf(e)); });
    root.addEventListener("pointerout", function (e) {
      if (current && (!e.relatedTarget || !current.contains(e.relatedTarget))) clear();
    });
    root.addEventListener("focusin", function (e) { show(slotOf(e)); });
    root.addEventListener("focusout", clear);
    root.addEventListener("dragstart", clear, true);
  }

  // Schematic of where the bottle is, for the bottle dialog: the cabinet from
  // the front with the bottle's shelf lit, a top view of that shelf, and a
  // line on what stands in front of it.
  _renderLocationMap(bottle) {
    var self = this;
    var cellars = (this._data && this._data.cellars) || [];
    var cellar = cellars.find(function (c) { return c.id === bottle.cellar_id; });
    if (!cellar) return "";

    var slotIndex = this._buildSlotIndex(((this._data && this._data.bottles) || []).filter(function (b) {
      return b.cellar_id === cellar.id;
    }));
    var shelves = this._getSortedShelves(cellar);

    var shelvesHtml = this._renderMiniShelves(shelves, slotIndex, {
      shelfClass: function (shelf) { return shelf.id === bottle.shelf_id ? " current" : ""; },
      dot: function (shelf, lane, pos, occupant) {
        return occupant
          ? '<span class="mm-dot filled' + (occupant.id === bottle.id ? " target" : "") + '" style="--type:' + self._wineSurfaceColor(occupant.wine_type) + '"></span>'
          : '<span class="mm-dot"></span>';
      }
    });

    var map = '<div class="loc-front">' + this._renderCabinet(cellar, shelvesHtml, "mini") + "</div>";
    var at = shelves.findIndex(function (s) { return s.id === bottle.shelf_id; });
    if (at < 0) return '<div class="loc-wrap"><div class="loc-pair">' + map + "</div></div>";
    return (
      '<div class="loc-wrap"><div class="loc-pair">' + map + this._renderShelfPlan(shelves[at], bottle, slotIndex, at, shelves.length) + "</div>" +
      this._renderPlanHint(shelves[at], bottle, slotIndex) + "</div>"
    );
  }

  // Top view of the bottle's shelf: back wall at the top, door at the
  // bottom, numbered positions, a dashed ring on the bottles standing in
  // front of it and an accent ring on the bottle itself.
  _renderShelfPlan(shelf, bottle, slotIndex, at, total) {
    var self = this;
    var front = Number(shelf.capacity_front || 0);
    var back = Number(shelf.capacity_back || 0);
    var pitch = 27;
    var radius = 9.5;
    var width = Math.round((Math.max(front, back, 1) + 1.3) * pitch);
    var cx = width / 2;
    var top = 6;
    var lipY = top + (front > 0 && back > 0 ? 86 : 52);
    var target = { lane: bottle.lane === "back" ? "back" : "front", pos: Number(bottle.position) };
    var blockers = target.lane === "back" ? this._frontBlockers(shelf, target.pos, slotIndex).map(function (b) { return b.pos; }) : [];
    var inset = width * 0.07;

    var svg =
      '<svg class="shelf-plan-svg" viewBox="0 0 ' + width + " " + (lipY + 8) + '" role="img" aria-label="' + this._escape(_T("depth_top_view")) + '">' +
      '<defs><linearGradient id="wcm-plan-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a281b"/><stop offset="1" stop-color="#6b4a31"/></linearGradient>' +
      '<linearGradient id="wcm-plan-lip" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c79a6c"/><stop offset="1" stop-color="#6b4629"/></linearGradient></defs>' +
      '<rect class="pl-wall" x="' + (inset - 2).toFixed(1) + '" y="' + (top - 4) + '" width="' + (width - 2 * inset + 4).toFixed(1) + '" height="4" rx="1"/>' +
      '<polygon points="' + inset.toFixed(1) + "," + top + " " + (width - inset).toFixed(1) + "," + top + " " + width + "," + lipY + " 0," + lipY + '" fill="url(#wcm-plan-wood)"/>';
    for (var s = 1; s < 12; s++) {
      var xBottom = (width * s) / 12;
      var xTop = inset + ((width - 2 * inset) * s) / 12;
      svg += '<line x1="' + xBottom.toFixed(1) + '" y1="' + lipY + '" x2="' + xTop.toFixed(1) + '" y2="' + top + '" stroke="rgba(0,0,0,.28)" stroke-width="1"/>';
    }
    svg += '<rect x="0" y="' + lipY + '" width="' + width + '" height="6" rx="1.5" fill="url(#wcm-plan-lip)"/>';

    function dot(lane, pos, y, scale) {
      var occupant = slotIndex.get(String(shelf.id) + "|" + lane + "|" + pos);
      // The back row sits on the narrower far edge of the floor.
      var x = (cx + self._slotX(shelf, lane, pos) * pitch * (lane === "back" ? 0.88 : 1)).toFixed(1);
      var r = radius * scale;
      var out = '<circle cx="' + x + '" cy="' + y + '" r="' + r.toFixed(1) + '" class="pl-dot' + (occupant ? " filled" : "") + '"' +
        (occupant ? ' style="--type:' + self._wineSurfaceColor(occupant.wine_type) + '"' : "") + "/>";
      if (lane === "front" && blockers.indexOf(pos) >= 0) out += '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 3.2).toFixed(1) + '" class="pl-block"/>';
      if (lane === target.lane && pos === target.pos) out += '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 3.6).toFixed(1) + '" class="pl-ring"/>';
      out += '<text x="' + x + '" y="' + (y + 0.5) + '" class="pl-num"' + (occupant ? ' style="fill:' + self._wineTextColor(occupant.wine_type) + '"' : "") + ">" + pos + "</text>";
      return out;
    }
    for (var i = 1; i <= back; i++) svg += dot("back", i, top + 22, 0.86);
    for (var j = 1; j <= front; j++) svg += dot("front", j, lipY - 23, 1);
    svg += "</svg>";

    return (
      '<div class="shelf-plan">' +
      '<div class="shelf-plan-title">' + this._escape(shelf.name || (_T("shelf") + " " + (at + 1))) + ' <i class="sp-dot" aria-hidden="true">·</i> <span>' +
      this._escape(_T("depth_shelf_of", { n: at + 1, total: total })) + " · " + this._escape(_T("depth_top_view")) + "</span></div>" +
      (back > 0 ? '<div class="pl-cap">' + this._escape(_T("depth_plan_back")) + "</div>" : "") +
      svg +
      '<div class="pl-cap">' + this._escape(_T("depth_plan_front")) + "</div>" +
      "</div>"
    );
  }

  // "Behind Barolo (front, position 1) — move it first", or how to reach it.
  _renderPlanHint(shelf, bottle, slotIndex) {
    var self = this;
    var back = bottle.lane === "back";
    var blockers = back ? this._frontBlockers(shelf, Number(bottle.position), slotIndex) : [];
    var icon = _WCM_ICONS.reach;
    var hint;
    if (blockers.length) {
      icon = _WCM_ICONS.behind;
      var names = blockers.map(function (b) {
        return self._escape(_T("depth_blocker", { name: "\u0000", pos: b.pos }))
          .replace("\u0000", "<strong>" + self._escape(b.bottle.wine_name || _T("unnamed_wine")) + "</strong>");
      }).join(" &amp; ");
      hint = this._escape(_T("depth_behind", { names: "\u0001" })).replace("\u0001", names) +
        " <em>— " + this._escape(_T(blockers.length > 1 ? "depth_move_first_n" : "depth_move_first")) + "</em>";
    } else {
      hint = this._escape(_T(back ? "depth_back_clear" : "depth_front_reach"));
    }
    return '<div class="plan-hint">' + icon + "<span>" + hint + "</span></div>";
  }

  /* All Bottles. Every bottle is drawn once, grouped by wine type (sorted by
     location: by cellar, in the order the bottles stand), and the search and
     filters hide rows in place (_paintList), so typing never rebuilds the
     table. A row has one tab stop, its name, which opens the bottle; the whole
     row is its click target, and the crosshair beside the location (for the
     mouse and screen readers; from the keyboard, the bottle dialog has the
     same button) shows the bottle in its cellar. Below 700 px of width the
     rows become cards, sorted with a select and a direction toggle. */
  _renderList(data) {
    var self = this;
    var bottles = (data && data.bottles) || [];
    function esc(value) { return self._escape(value); }

    // Nothing yet: a way to start (the first bottle, or first a cellar).
    if (!bottles.length) {
      var hasCellars = !!(data && data.cellars && data.cellars.length);
      return '<section class="bl bl-none" aria-labelledby="bl-title">' +
        '<div class="bl-start"><span class="bl-start-art" aria-hidden="true">' + _WCM_ICONS.bottle + "</span>" +
        '<h2 class="bl-title" id="bl-title">' + esc(_T("no_bottles_yet")) + "</h2>" +
        '<p class="bl-start-sub">' + esc(_T(hasCellars ? "list_empty_body" : "add_first_cellar")) + "</p>" +
        '<button type="button" class="btn primary" data-list-add>' + _WCM_ICONS.plus + "<span>" +
        esc(_T(hasCellars ? "sheet_add_title" : "builder_title_new")) + "</span></button></div></section>";
    }

    var col = _WCM_LIST_SORTS.indexOf(this._sortColumn) === -1 ? "wine_name" : this._sortColumn;
    var desc = this._sortOrder === "desc";
    var model = this._filterModel();
    var drawn = this._drawnBottleIds();
    var groups = this._listGroups(bottles, col, desc);
    var visible = model.filtering ? model.hits.length : bottles.length;

    function sortButton(key) {
      var on = col === key;
      // The button sorted by says so itself: Wine and Producer share a header.
      return '<button type="button" class="bl-sort' + (on ? " on" : "") + '" data-list-sort-col="' + key + '">' +
        esc(_T(_WCM_LIST_SORT_LABELS[key])) + (on ? '<span class="sr-only">, ' + esc(_T(desc ? "list_sorted_desc" : "list_sorted_asc")) + "</span>" : "") +
        (on && desc ? _WCM_ICONS.down : _WCM_ICONS.up) + "</button>";
    }
    function th(cls, keys, inner) {
      var sorted = keys.indexOf(col) !== -1;
      return '<th scope="col" role="columnheader" class="' + cls + '"' + (sorted ? ' aria-sort="' + (desc ? "descending" : "ascending") + '"' : "") + ">" + inner + "</th>";
    }
    // The fixed columns are as wide as their header in this language (in
    // characters: the whole label, and its longest word where headers wrap)
    // and as the longest price; the table's CSS turns these into widths.
    function chars(key, word) {
      var text = String(_T(_WCM_LIST_SORT_LABELS[key]));
      return word ? Math.max.apply(null, text.split(/[\s/]+/).map(function (w) { return w.length; })) : text.length;
    }
    var cost = 1;
    bottles.forEach(function (b) {
      if (self._hasPrice(b)) cost = Math.max(cost, self._formatPrice(b.price).length);
    });
    var widths = "--n-vin:" + chars("vintage") + ";--n-rate:" + chars("rating") + ";--n-win:" + chars("aging") + ";--n-price:" + chars("price") +
      ";--w-rate:" + chars("rating", true) + ";--w-win:" + chars("aging", true) + ";--w-price:" + chars("price", true) + ";--n-cost:" + cost;

    var html = [
      '<section class="bl" data-list aria-labelledby="bl-title">',
      '<div class="bl-bar">',
      '<h2 class="bl-title" id="bl-title" data-list-title tabindex="-1">' + esc(this._listTitle(visible, bottles.length, model.filtering)) + "</h2>",
      '<div class="bl-sortbox" data-list-sortbox' + (visible ? "" : " hidden") + ">",
      '<select data-list-sort aria-label="' + esc(_T("list_sort_by")) + '">' + _WCM_LIST_SORTS.map(function (key) {
        return '<option value="' + key + '"' + (key === col ? " selected" : "") + ">" + esc(_T(_WCM_LIST_SORT_LABELS[key])) + "</option>";
      }).join("") + "</select>",
      '<button type="button" class="icon-btn bl-dir" data-list-dir aria-pressed="' + desc + '" aria-label="' + esc(_T("list_reverse")) + '" title="' +
        esc(_T("list_reverse")) + '">' + _WCM_ICONS.sortDir + "</button>",
      "</div></div>",
      '<div class="bl-empty" data-list-empty' + (visible ? " hidden>" : ">" + this._renderNoResults()) + "</div>",
      // Roles spelled out: the rows are drawn as grids (see the CSS).
      '<table class="bl-table" role="table" aria-labelledby="bl-title" data-list-table style="' + widths + '"' + (visible ? "" : " hidden") + ">",
      '<thead role="rowgroup"><tr role="row">',
      '<th scope="col" role="columnheader" class="c-thumb"><span class="sr-only">' + esc(_T("sheet_sec_label")) + "</span></th>",
      th("c-wine", ["wine_name", "producer"], sortButton("wine_name") + '<span class="bl-sep" aria-hidden="true">/</span><wbr>' + sortButton("producer")),
      th("c-loc", ["location"], sortButton("location")),
      th("c-vin", ["vintage"], sortButton("vintage")),
      th("c-rv", ["region_varietal"], sortButton("region_varietal")),
      th("c-rate", ["rating"], sortButton("rating")),
      th("c-win", ["aging"], sortButton("aging")),
      th("c-price", ["price"], sortButton("price")),
      "</tr></thead>"
    ];

    groups.forEach(function (group) {
      var shown = 0;
      var rows = group.rows.map(function (b) {
        var on = !model.filtering || model.ids.has(String(b.id));
        if (on) shown++;
        return self._listRow(b, on, drawn.has(String(b.id)));
      });
      html.push(
        '<tbody role="rowgroup" data-group="' + esc(group.key) + '"' + (shown ? "" : " hidden") + ">",
        '<tr class="bl-ghead" role="row"><th colspan="8" scope="rowgroup" role="rowheader"><span class="bl-glabel"><span class="bl-swatch" style="--type:' + group.color + '"></span>' +
          esc(group.label) + ' <span class="bl-gn" data-group-n>' + shown + "</span></span></th></tr>",
        rows.join(""),
        "</tbody>"
      );
    });
    html.push("</table></section>");
    return html.join("");
  }

  // "43 bottles", or "7 of 43 bottles" while a search or filter is on: the
  // list's title is the one place that says how many bottles it shows.
  _listTitle(visible, total, filtering) {
    return filtering ? _TN("list_title_of", total, { shown: visible }) : _TN("list_title", total);
  }

  // One bottle of All Bottles: its label (or its silhouette), the name that
  // opens it, the producer, where it stands, the vintage, region or grape,
  // stars, the drinking window with its status and the price. Cells with
  // nothing to show hold a dash in the table and nothing in the cards.
  _listRow(bottle, visible, drawn) {
    var self = this;
    function esc(value) { return self._escape(value); }
    var dash = '<span class="bl-dash" aria-hidden="true">—</span>';
    var id = esc(bottle.id);
    var name = bottle.wine_name || _T("unnamed_wine");
    var producer = this._str(bottle.producer).trim();
    var vintage = this._listKey(bottle, "vintage");
    var origin = this._listKey(bottle, "region_varietal");
    var stars = this._starsHtml(bottle.rating);
    var price = this._hasPrice(bottle) ? this._formatPrice(bottle.price) : "";
    var sub = producer ? esc(producer) + (vintage ? '<span class="bl-m"> · ' + vintage + "</span>" : "") : (vintage ? '<span class="bl-m">' + vintage + "</span>" : "");
    var locate = drawn
      ? '<button type="button" class="bl-locate" data-list-locate="' + id + '" tabindex="-1" aria-label="' + esc(_T("bt_show_in_cellar") + ": " + this._bottleTitle(bottle.id)) +
        '" title="' + esc(_T("bt_show_in_cellar")) + '"></button>'
      : "";
    return '<tr class="bl-row" role="row" data-bottle-row="' + id + '"' + (visible ? "" : " hidden") + ">" +
      '<td role="cell" class="c-thumb">' + this._bottleThumb(bottle) + "</td>" +
      '<td role="cell" class="c-wine"><button type="button" class="bl-name" data-edit-bottle="' + id + '">' + esc(name) + "</button>" +
        (sub ? '<span class="bl-sub">' + sub + "</span>" : "") + "</td>" +
      '<td role="cell" class="c-loc"><span class="bl-loc"><span class="bl-crumb">' + this._bottlePlace(bottle).html + "</span>" + locate + "</span></td>" +
      '<td role="cell" class="c-vin">' + (vintage ? esc(vintage) : dash) + "</td>" +
      '<td role="cell" class="c-rv">' + (origin ? esc(origin) : dash) + "</td>" +
      '<td role="cell" class="c-rate">' + (stars || dash) + "</td>" +
      '<td role="cell" class="c-win">' + this._statusPill(bottle, false) + "</td>" +
      '<td role="cell" class="c-price">' + (price ? esc(price) : dash) + "</td>" +
      "</tr>";
  }

  // The rows of All Bottles in groups, each sorted. By type (red first, no
  // type last), or, sorted by location, by cellar in the order the cellars
  // stand (reversed along with the rows when descending).
  _listGroups(bottles, col, desc) {
    var self = this;
    var compare = this._listCompare(col, desc);
    var groups = [];
    var byKey = {};
    function group(key, label, color) {
      if (!byKey[key]) {
        byKey[key] = { key: key, label: label, color: color, rows: [] };
        groups.push(byKey[key]);
      }
      return byKey[key];
    }
    if (col === "location") {
      this._sortedCellars().forEach(function (c) {
        group("c:" + c.id, c.name || _T("cellar"), self._safeColor(c.bg_color) || "var(--wcm-muted)");
      });
      bottles.forEach(function (b) {
        (byKey["c:" + b.cellar_id] || group("c:?", _T("unknown_cellar"), "var(--wcm-muted)")).rows.push(b);
      });
      if (desc) groups.reverse();
    } else {
      _WCM_SHEET_TYPES.forEach(function (t) { group(t, self._wineTypeLabel(t), self._wineSurfaceColor(t)); });
      bottles.forEach(function (b) { byKey[self._typeKey(b.wine_type)].rows.push(b); });
    }
    groups.forEach(function (g) { g.rows.sort(compare); });
    return groups.filter(function (g) { return g.rows.length; });
  }

  // The value a bottle is sorted by in one column, or null when it has none
  // (those rows go last, whichever the direction). Location is the order the
  // bottles stand in: cellar, shelf from the top, back row before the front
  // row, position. The drinking window sorts by urgency: past peak, at peak,
  // ready, too young, each by the year the window ends.
  _listKey(bottle, col) {
    var text;
    if (col === "wine_name" || col === "producer") {
      text = this._str(bottle[col]).trim();
      return text || null;
    }
    if (col === "region_varietal") {
      text = this._str(String(bottle.country || "").trim().toLowerCase() === "france" ? bottle.region : bottle.varietal).trim();
      return text || null;
    }
    if (col === "vintage" || col === "rating") {
      var n = Number(bottle[col]);
      return bottle[col] !== null && bottle[col] !== "" && Number.isFinite(n) && n > 0 ? n : null;
    }
    if (col === "price") return this._hasPrice(bottle) ? Number(bottle.price) : null;
    if (col === "aging") {
      var status = this._agingStatus(bottle);
      if (status === "none") return null;
      return { past: 0, peak: 1, ready: 2, young: 3 }[status] * 1e8 + Number(bottle.aging_end_year) * 1e4 + Number(bottle.aging_start_year);
    }
    // location
    var at = this._listPlaces();
    var c = at.cellar[bottle.cellar_id];
    var s = at.shelf[bottle.cellar_id + "|" + bottle.shelf_id];
    return (c === undefined ? 999 : c) * 1e7 + (s === undefined ? 999 : s) * 1e4 + (bottle.lane === "back" ? 0 : 5000) + (Number(bottle.position) || 0);
  }

  // Each cellar's and shelf's place in the order they are drawn, per data.
  _listPlaces() {
    var self = this;
    var cellars = (this._data && this._data.cellars) || [];
    if (this._placeCache && this._placeCache.cellars === cellars) return this._placeCache;
    var at = { cellars: cellars, cellar: {}, shelf: {} };
    this._sortedCellars().forEach(function (c, ci) {
      at.cellar[c.id] = ci;
      self._getSortedShelves(c).forEach(function (s, si) { at.shelf[c.id + "|" + s.id] = si; });
    });
    this._placeCache = at;
    return at;
  }

  // Sort order of one column. Ties go by name, then by location.
  _listCompare(col, desc) {
    var self = this;
    var collator = this._collator();
    var keys = new Map();
    function key(b, c) {
      var cached = keys.get(b);
      if (!cached) keys.set(b, cached = {});
      if (!(c in cached)) cached[c] = self._listKey(b, c);
      return cached[c];
    }
    function cmp(a, b, c, reverse) {
      var x = key(a, c);
      var y = key(b, c);
      if (x === null || y === null) return x === y ? 0 : (x === null ? 1 : -1);
      var d = typeof x === "number" ? x - y : collator.compare(x, y);
      return reverse ? -d : d;
    }
    return function (a, b) {
      return cmp(a, b, col, desc) || (col !== "wine_name" ? cmp(a, b, "wine_name", false) : 0) || (col !== "location" ? cmp(a, b, "location", false) : 0);
    };
  }

  _collator() {
    if (!this._collatorCache || this._collatorCache.lang !== _wcmLang) {
      var collator;
      try {
        collator = new Intl.Collator(_wcmLang, { numeric: true, sensitivity: "base" });
      } catch (err) {
        collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
      }
      this._collatorCache = { lang: _wcmLang, collator: collator };
    }
    return this._collatorCache.collator;
  }

  // Applies the search and filters to All Bottles on screen: rows that do
  // not match hide, each group's count and the title follow, and with no
  // match the empty state (did you mean, clear) takes the table's place.
  _paintList(model) {
    var root = this.shadowRoot;
    var list = root && root.querySelector(".main-scroll-content [data-list]");
    if (!list) return;
    var filtering = model.filtering;
    var ids = model.ids;
    var visible = 0;
    list.querySelectorAll("tbody[data-group]").forEach(function (group) {
      var shown = 0;
      var rows = group.rows;
      for (var i = 1; i < rows.length; i++) {
        var on = !filtering || ids.has(rows[i].getAttribute("data-bottle-row"));
        if (rows[i].hidden === on) rows[i].hidden = !on;
        if (on) shown++;
      }
      visible += shown;
      if (group.hidden === !!shown) group.hidden = !shown;
      var count = group.querySelector("[data-group-n]");
      if (count && count.textContent !== String(shown)) count.textContent = String(shown);
    });
    var title = list.querySelector("[data-list-title]");
    var text = this._listTitle(visible, model.total, filtering);
    if (title && title.textContent !== text) title.textContent = text;
    var none = visible === 0;
    ["[data-list-table]", "[data-list-sortbox]"].forEach(function (sel) {
      var el = list.querySelector(sel);
      if (el && el.hidden !== none) el.hidden = none;
    });
    var empty = list.querySelector("[data-list-empty]");
    if (!empty) return;
    if (empty.hidden === none) empty.hidden = !none;
    if (!none) return;
    var html = this._renderNoResults();
    if (empty._html !== html) {
      empty.innerHTML = html;
      empty._html = html;
    }
  }

  // All Bottles' own controls: the column headers and, on narrow screens,
  // the sort select and direction; the crosshair of a row; the empty state's
  // button. (The names open their bottle through [data-edit-bottle].)
  _bindListView(root) {
    var self = this;
    var list = root.querySelector(".main-scroll-content [data-list]") || root.querySelector(".main-scroll-content .bl-none");
    if (!list) return;
    list.addEventListener("click", function (e) {
      var target = e.target && e.target.closest ? e.target.closest("[data-list-sort-col],[data-list-dir],[data-list-locate],[data-list-add]") : null;
      if (!target) {
        // A click anywhere else on a row opens its bottle, through the name
        // (the row's one tab stop, which focus returns to).
        var row = e.target && e.target.closest ? e.target.closest("tr[data-bottle-row]") : null;
        var name = row && !e.target.closest("button,a,input,select") ? row.querySelector("[data-edit-bottle]") : null;
        if (name) name.click();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (target.hasAttribute("data-list-sort-col")) {
        var col = target.getAttribute("data-list-sort-col");
        self._sortOrder = self._sortColumn === col && self._sortOrder !== "desc" ? "desc" : "asc";
        self._sortColumn = col;
        self._renderKeepingFocus('[data-list-sort-col="' + col + '"]');
      } else if (target.hasAttribute("data-list-dir")) {
        self._sortOrder = self._sortOrder === "desc" ? "asc" : "desc";
        self._renderKeepingFocus("[data-list-dir]");
      } else if (target.hasAttribute("data-list-locate")) {
        self._showInCellar(target.getAttribute("data-list-locate"));
      } else {
        var add = root.querySelector(self._data && self._data.cellars && self._data.cellars.length ? ".toolbar [data-add-bottle]" : ".toolbar [data-add-cellar]");
        if (add) add.click();
      }
    });
    var select = list.querySelector("[data-list-sort]");
    if (select) {
      select.addEventListener("change", function (e) {
        e.stopPropagation();
        self._sortColumn = select.value;
        self._sortOrder = "asc";
        self._renderKeepingFocus("[data-list-sort]");
      });
    }
  }

  // The bottles the Cellars view draws: in a slot inside its shelf's
  // capacity, and the one drawn there. Kept per data load; only these can be
  // shown in their cellar.
  _drawnBottleIds() {
    var data = this._data || {};
    var bottles = data.bottles || [];
    if (this._drawnCache && this._drawnCache.bottles === bottles && this._drawnCache.cellars === data.cellars) return this._drawnCache.ids;
    var self = this;
    var ids = new Set();
    (data.cellars || []).forEach(function (cellar) {
      var index = self._buildSlotIndex(bottles.filter(function (b) { return b.cellar_id === cellar.id; }));
      (cellar.shelves || []).forEach(function (shelf) {
        ["front", "back"].forEach(function (lane) {
          for (var pos = 1; pos <= Number(shelf["capacity_" + lane] || 0); pos++) {
            var drawn = index.get(String(shelf.id) + "|" + lane + "|" + pos);
            if (drawn) ids.add(String(drawn.id));
          }
        });
      });
    });
    this._drawnCache = { bottles: bottles, cellars: data.cellars, ids: ids };
    return ids;
  }

  // Whether the Cellars view draws this bottle, so "Show in cellar" has
  // somewhere to go.
  _isBottleDrawn(bottle) {
    return !!bottle && this._drawnBottleIds().has(String(bottle.id));
  }

  // A small label thumbnail: the photo when there is one, else the bottle
  // drawn in its type's colors. A photo that fails to load leaves the tile in
  // the type's color.
  _bottleThumb(bottle) {
    var image = bottle.image_path ? this._normalizeImagePath(bottle.image_path) : "";
    return '<span class="wthumb" style="--type:' + this._wineSurfaceColor(bottle.wine_type || "unset") + '">' +
      (image ? '<img src="' + this._escape(image) + '" alt="" loading="lazy" decoding="async" onerror="this.remove()">' : this._bottleArtSvg(bottle, { variant: "thumb" })) +
      "</span>";
  }

  // The drinking window as a pill: the status glyph and color, the years,
  // and the status in words (shown with withLabel, else for screen readers
  // and as the tooltip).
  _statusPill(bottle, withLabel) {
    var status = this._agingStatus(bottle);
    if (status === "none") {
      return '<span class="wpill is-none">' + this._bottleGlyph("none", true) + "<span>" + this._escape(_T("bt_no_window")) + "</span></span>";
    }
    var label = this._agingStatusLabel(status);
    var start = Number(bottle.aging_start_year);
    var stop = Number(bottle.aging_end_year);
    var years = start === stop ? String(start) : start + "–" + stop;
    return '<span class="wpill is-' + status + '" title="' + this._escape(label + " · " + years) + '">' + this._bottleGlyph(status, true) +
      (withLabel ? '<span class="wpill-l">' + this._escape(label) + "</span>" : '<span class="sr-only">' + this._escape(label) + ", </span>") +
      '<span class="wpill-y">' + years + "</span></span>";
  }

  _starsHtml(rating) {
    var n = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
    if (!n) return "";
    return '<span class="wstars" role="img" aria-label="' + this._escape(_T("bt_stars", { n: n })) + '">' + "★".repeat(n) +
      '<span class="off">' + "★".repeat(5 - n) + "</span></span>";
  }

  _hasPrice(bottle) {
    var value = bottle && bottle.price;
    return value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
  }

  /* Stats, as a "what to drink" report, worked out from the bottles on hand
     (so it always agrees with the other views): four figures with context,
     the drinking window year by year, the bottles to open now and where they
     are, then the types and the countries, whose items open All Bottles
     filtered to them. */
  _statsModel(data) {
    var self = this;
    var bottles = (data && data.bottles) || [];
    var now = new Date().getFullYear();
    // Worked out once per data load (and language, and year).
    var cache = this._statsCache;
    if (cache && cache.bottles === bottles && cache.cellars === (data && data.cellars) && cache.lang === _wcmLang && cache.now === now) return cache.model;
    var wines = new Set();
    var producers = new Set();
    var ageSum = 0;
    var aged = 0;
    var oldest = null;
    var value = 0;
    var priced = 0;
    var years = [];
    for (var y = now; y <= now + _WCM_STATS_YEARS; y++) years.push({ year: y, total: 0, types: {} });
    var types = {};
    var countries = {};
    var drinkNow = [];
    var spellings = {};
    bottles.forEach(function (b) {
      // Spelling and accents do not make another wine or producer.
      var producer = self._foldSearchText(b.producer);
      wines.add(self._foldSearchText(b.wine_name) + "|" + producer);
      if (producer) producers.add(producer);
      // A vintage after this year (a typo, an en-primeur) has no age yet.
      var vintage = self._listKey(b, "vintage");
      if (vintage && vintage <= now) {
        ageSum += now - vintage;
        aged++;
        if (oldest === null || vintage < oldest) oldest = vintage;
      }
      if (self._hasPrice(b)) {
        value += Number(b.price);
        priced++;
      }
      var type = self._typeKey(b.wine_type);
      types[type] = (types[type] || 0) + 1;
      var country = self._countryKey(b.country);
      countries[country] = (countries[country] || 0) + 1;
      if (country) {
        var spelled = spellings[country] || (spellings[country] = {});
        var label = String(b.country).trim();
        spelled[label] = (spelled[label] || 0) + 1;
      }
      var status = self._agingStatus(b);
      if (status === "none") return;
      if (status === "peak" || status === "past") drinkNow.push(b);
      var from = Math.max(Number(b.aging_start_year), now);
      var to = Math.min(Number(b.aging_end_year), now + _WCM_STATS_YEARS);
      for (var year = from; year <= to; year++) {
        var row = years[year - now];
        row.total++;
        row.types[type] = (row.types[type] || 0) + 1;
      }
    });
    // Most urgent first: past peak (the longest past first), then at peak.
    drinkNow.sort(function (a, b) {
      var pa = self._agingStatus(a) === "past" ? 0 : 1;
      var pb = self._agingStatus(b) === "past" ? 0 : 1;
      return (pa - pb) || (Number(a.aging_end_year) - Number(b.aging_end_year)) || (Number(a.aging_start_year) - Number(b.aging_start_year)) ||
        self._collator().compare(self._str(a.wine_name), self._str(b.wine_name));
    });
    var countryList = Object.keys(countries).map(function (key) {
      return { key: key, label: key ? self._commonSpelling(spellings[key]) || key : "", count: countries[key] };
    }).sort(function (a, b) {
      return (b.count - a.count) || ((a.key ? 0 : 1) - (b.key ? 0 : 1)) || self._collator().compare(a.label, b.label);
    });
    var capacity = this._cellarCapacity();
    var model = {
      now: now,
      total: bottles.length,
      free: Math.max(0, capacity - bottles.length),
      capacity: capacity,
      wines: wines.size,
      producers: producers.size,
      averageAge: aged ? Math.round(ageSum / aged * 10) / 10 : null,
      oldest: oldest,
      value: value,
      priced: priced,
      years: years,
      types: _WCM_SHEET_TYPES.filter(function (t) { return types[t]; }).map(function (t) { return { type: t, count: types[t] }; }),
      countries: countryList.slice(0, _WCM_STATS_COUNTRIES),
      drinkNow: drinkNow
    };
    this._statsCache = { bottles: bottles, cellars: data && data.cellars, lang: _wcmLang, now: now, model: model };
    return model;
  }

  _renderStats(data) {
    var self = this;
    function esc(value) { return self._escape(value); }
    var m = this._statsModel(data);
    if (!m.total) {
      // No bottle left: what was drunk last can still be put back.
      return '<div class="st" data-stats><section class="st-none" aria-labelledby="st-none-t"><div class="bl-start"><span class="bl-start-art" aria-hidden="true">' + _WCM_ICONS.chart + "</span>" +
        '<h2 class="bl-title" id="st-none-t">' + esc(_T("stats_empty_title")) + '</h2><p class="bl-start-sub">' + esc(_T("stats_empty_body")) + "</p></div></section>" +
        this._renderRecentlyEnjoyed(data) + "</div>";
    }
    if (!this._statsNumber || this._statsNumber.lang !== _wcmLang) {
      this._statsNumber = { lang: _wcmLang, format: new Intl.NumberFormat(_wcmLang, { maximumFractionDigits: 1 }) };
    }
    var number = this._statsNumber.format;
    // chars: how long the value reads, in digits, for its size (see the CSS).
    function kpi(icon, label, valueHtml, sub, chars) {
      return '<div class="st-kpi" style="--chars:' + Math.max(4, chars) + '"><span class="st-kpi-ico" aria-hidden="true">' + _WCM_ICONS[icon] + '</span><span class="st-kpi-l">' + esc(label) + "</span>" +
        '<span class="st-kpi-v">' + valueHtml + '</span><span class="st-kpi-s">' + (sub ? esc(sub) : "&nbsp;") + "</span></div>";
    }
    var total = number.format(m.total);
    var wines = number.format(m.wines);
    var age = m.averageAge === null ? "" : number.format(m.averageAge);
    var value = m.priced ? this._formatPrice(m.value) : "";
    var kpis = [
      kpi("wineBottle", _T("total_bottles"), esc(total), m.capacity ? _TN("stats_free", m.free) : "", total.length),
      kpi("grapes", _T("different_wines"), esc(wines), _TN("stats_producers", m.producers), wines.length),
      // The unit is set smaller: it counts for about half its letters.
      kpi("clock", _T("average_age"), age ? esc(age) + "<small>" + esc(_T("years")) + "</small>" : '<span class="st-kpi-na">—</span>',
        m.oldest ? _T("stats_oldest", { y: m.oldest }) : "", age.length + _T("years").length / 2),
      m.priced ? kpi("coins", _T("total_value"), esc(value), _T("stats_per_bottle", { v: this._formatPrice(m.value / m.priced) }), value.length) : ""
    ].join("");

    // The report says its language, so its figures' labels hyphenate by its
    // rules (see .st-kpi-l).
    return '<div class="st" data-stats lang="' + esc(_wcmLang) + '">' +
      '<div class="st-kpis' + (m.priced ? "" : " is-three") + '">' + kpis + "</div>" +
      '<div class="st-main">' + this._renderDrinkChart(m) + this._renderDrinkNow(m) + "</div>" +
      '<div class="st-pair">' + this._renderTypeDonut(m) + this._renderCountryBars(m) + "</div>" +
      this._renderRecentlyEnjoyed(data) +
      '<p class="sr-only" id="st-open-hint">' + esc(_T("stats_open_hint")) + "</p>" +
      "</div>";
  }

  // The bottles marked as enjoyed last, the latest first, each with Put
  // back (to the slot it left, while that slot is free): the way back from a
  // Consume made by mistake once its toast has gone.
  _renderRecentlyEnjoyed(data) {
    var self = this;
    function esc(value) { return self._escape(value); }
    var history = ((data && data.consumed_bottles) || []).slice().sort(function (a, b) {
      return String(b.consumed_at || "").localeCompare(String(a.consumed_at || ""));
    }).slice(0, _WCM_STATS_RECENT);
    if (!history.length) return "";
    var taken = {};
    ((data && data.bottles) || []).forEach(function (b) {
      taken[b.cellar_id + "|" + b.shelf_id + "|" + (b.lane === "back" ? "back" : "front") + "|" + Number(b.position)] = true;
    });
    var now = new Date();
    var items = history.map(function (b) {
      var name = b.wine_name || _T("unnamed_wine");
      var title = b.vintage ? name + " " + b.vintage : name;
      var lane = b.lane === "back" ? "back" : "front";
      var shelf = self._getShelfById(b.cellar_id, b.shelf_id);
      var pos = Number(b.position) || 0;
      var fits = !!shelf && pos >= 1 && pos <= Number(shelf["capacity_" + lane] || 0);
      var free = fits && !taken[b.cellar_id + "|" + b.shelf_id + "|" + lane + "|" + pos];
      var when = "";
      var at = b.consumed_at ? new Date(b.consumed_at) : null;
      if (at && !isNaN(at.getTime())) {
        try {
          when = at.toLocaleDateString(_wcmLang, at.getFullYear() === now.getFullYear() ? { day: "numeric", month: "short" } : { day: "numeric", month: "short", year: "numeric" });
        } catch (err) {
          when = at.toISOString().slice(0, 10);
        }
      }
      var action = free
        ? '<button type="button" class="btn small-btn st-putback" data-restore-consumed="' + esc(b.id) + '" data-name="' + esc(title) + '" aria-label="' + esc(_T("stats_put_back_label", { name: title })) + '">' +
          _WCM_ICONS.history + "<span>" + esc(_T("stats_put_back")) + "</span></button>"
        : '<span class="st-hist-note">' + esc(_T(fits ? "stats_recent_taken" : "stats_recent_gone")) + "</span>";
      return '<li class="st-hist-item">' + self._bottleThumb(b) +
        '<span class="st-now-t"><span class="st-hist-name">' + esc(name) + (b.vintage ? ' <span class="st-now-vin">' + esc(b.vintage) + "</span>" : "") + "</span>" +
        '<span class="st-hist-sub">' + esc(when ? _T("stats_recent_on", { date: when }) : _T("stats_recent_title")) +
        (fits ? ' <span class="st-now-loc"><span class="bl-crumb">' + self._bottlePlace(b).html + "</span></span>" : "") + "</span></span>" +
        action + "</li>";
    }).join("");
    return '<section class="st-panel st-hist" aria-labelledby="st-hist-t"><div class="st-head"><h3 class="st-title" id="st-hist-t">' + esc(_T("stats_recent_title")) + "</h3>" +
      '<p class="st-sub">' + esc(_T("stats_recent_sub")) + '</p></div><ul class="st-hist-list">' + items + "</ul></section>";
  }

  // Bottles inside their drinking window, year by year from this year, each
  // year's bar stacked by type. Ticks are round numbers, drawn to scale.
  // Wide: vertical bars; narrow: one row per year (container query). A table
  // gives screen readers the same numbers.
  _renderDrinkChart(m) {
    var self = this;
    function esc(value) { return self._escape(value); }
    var head = '<div class="st-head"><h3 class="st-title" id="st-dw-t">' + esc(_T("stats_window_title")) + '</h3><p class="st-sub">' + esc(_T("stats_window_sub")) + "</p></div>";
    var max = 0;
    var present = {};
    m.years.forEach(function (row) {
      if (row.total > max) max = row.total;
      Object.keys(row.types).forEach(function (t) { present[t] = true; });
    });
    if (!max) {
      return '<section class="st-panel st-dw" aria-labelledby="st-dw-t">' + head + '<p class="st-quiet">' + esc(_T("stats_window_none")) + "</p></section>";
    }
    var step = _wcmNiceStep(max, 4);
    var top = Math.max(step, Math.ceil(max / step) * step);
    var order = _WCM_SHEET_TYPES.filter(function (t) { return present[t]; });
    var grid = "";
    for (var tick = 0; tick <= top; tick += step) {
      grid += '<span class="' + (tick ? "" : "is-base") + '" data-tick="' + tick + '" style="--at:' + (tick / top).toFixed(4) + '"><em>' + tick + "</em></span>";
    }
    // Screen readers get the same numbers as one sentence per year.
    var said = [];
    var bars = m.years.map(function (row) {
      var isNow = row.year === m.now;
      var parts = [];
      var segs = order.map(function (t) {
        var n = row.types[t] || 0;
        if (!n) return "";
        parts.push(self._wineTypeLabel(t) + " " + n);
        return '<i style="--type:' + self._wineSurfaceColor(t) + ";--v:" + (n / row.total).toFixed(4) + '"></i>';
      }).join("");
      var tip = _TN("stats_year_bottles", row.total, { year: row.year }) + (parts.length ? " · " + parts.join(" · ") : "");
      said.push(_TN("stats_year_bottles", row.total, { year: row.year + (isNow ? " (" + _T("stats_now") + ")" : "") }) + (parts.length ? " — " + parts.join(", ") : ""));
      return '<li class="st-col' + (isNow ? " is-now" : "") + '" data-year="' + row.year + '" data-total="' + row.total + '" style="--h:' + (row.total / top).toFixed(4) + '" title="' + esc(tip) + '">' +
        '<span class="st-track">' + (row.total ? '<span class="st-stack">' + segs + "</span>" : "") + '<b class="st-total">' + row.total + "</b></span>" +
        '<span class="st-yr"><span>' + row.year + "</span>" + (isNow ? "<em>" + esc(_T("stats_now")) + "</em>" : "") + "</span></li>";
    }).join("");
    var legend = order.map(function (t) {
      return '<span><i style="--type:' + self._wineSurfaceColor(t) + '"></i>' + esc(self._wineTypeLabel(t)) + "</span>";
    }).join("");
    var table = '<ol class="sr-only st-said" aria-label="' + esc(_T("stats_window_caption")) + '">' +
      said.map(function (text) { return "<li>" + esc(text) + "</li>"; }).join("") + "</ol>";
    return '<section class="st-panel st-dw" aria-labelledby="st-dw-t">' + head +
      '<figure class="st-chart" data-chart data-top="' + top + '" data-step="' + step + '">' +
      '<div class="st-plot" aria-hidden="true"><div class="st-grid">' + grid + '</div><ol class="st-bars">' + bars + "</ol></div>" +
      '<figcaption class="st-legend" aria-hidden="true">' + legend + "</figcaption>" + table + "</figure></section>";
  }

  // At peak and past peak, the most urgent first, each with where it stands:
  // a click opens the bottle, the crosshair shows it in its cellar, and the
  // footer opens them all in All Bottles.
  _renderDrinkNow(m) {
    var self = this;
    function esc(value) { return self._escape(value); }
    var drawn = this._drawnBottleIds();
    var list = m.drinkNow.slice(0, _WCM_STATS_DRINK_NOW);
    var body;
    if (!list.length) {
      body = '<p class="st-quiet">' + esc(_T("stats_now_empty")) + "</p>";
    } else {
      body = '<ul class="st-now-list">' + list.map(function (b) {
        var id = esc(b.id);
        return '<li class="st-now-item">' + self._bottleThumb(b) +
          '<span class="st-now-t"><button type="button" class="st-now-name" data-edit-bottle="' + id + '">' + esc(b.wine_name || _T("unnamed_wine")) +
          (b.vintage ? ' <span class="st-now-vin">' + esc(b.vintage) + "</span>" : "") + "</button>" +
          '<span class="st-now-loc"><span class="bl-crumb">' + self._bottlePlace(b).html + "</span></span>" +
          self._statusPill(b, true) + "</span>" +
          (drawn.has(String(b.id))
            ? '<button type="button" class="bl-locate" data-stats-locate="' + id + '" aria-label="' + esc(_T("bt_show_in_cellar") + ": " + self._bottleTitle(b.id)) +
              '" title="' + esc(_T("bt_show_in_cellar")) + '"></button>'
            : "") +
          "</li>";
      }).join("") + "</ul>" +
      '<button type="button" class="st-more" data-stats-facet="status" data-value="drink_now" aria-describedby="st-open-hint">' +
        esc(_TN("stats_now_all", m.drinkNow.length)) + _WCM_ICONS.right + "</button>";
    }
    return '<section class="st-panel st-now" aria-labelledby="st-now-t"><div class="st-head"><h3 class="st-title" id="st-now-t">' + esc(_T("drink_now")) +
      (m.drinkNow.length ? ' <span class="bl-gn">' + m.drinkNow.length + "</span>" : "") + '</h3><p class="st-sub">' + esc(_T("find_drink_now_hint")) + "</p></div>" + body + "</section>";
  }

  // Wine types: a donut with the total in its middle, and a legend whose
  // rows open All Bottles on that type.
  _renderTypeDonut(m) {
    var self = this;
    function esc(value) { return self._escape(value); }
    var r = 64;
    var c = 2 * Math.PI * r;
    var gap = m.types.length > 1 ? 2.2 : 0;
    var at = 0;
    var arcs = m.types.map(function (item) {
      var len = item.count / m.total * c;
      var dash = Math.max(0.5, len - gap);
      var arc = '<circle cx="86" cy="86" r="' + r + '" fill="none" stroke="' + self._wineSurfaceColor(item.type) + '" stroke-width="22" stroke-dasharray="' +
        dash.toFixed(2) + " " + (c - dash).toFixed(2) + '" stroke-dashoffset="' + (-at).toFixed(2) + '" transform="rotate(-90 86 86)"/>';
      at += len;
      return arc;
    }).join("");
    var summary = m.types.map(function (item) { return self._wineTypeLabel(item.type) + " " + item.count; }).join(", ");
    // Whole percentages that add up to 100 (largest remainders get the rest).
    var pct = m.types.map(function (item) { return item.count / m.total * 100; });
    var whole = pct.map(Math.floor);
    var rest = 100 - whole.reduce(function (a, b) { return a + b; }, 0);
    pct.map(function (p, i) { return i; }).sort(function (a, b) { return (pct[b] - whole[b]) - (pct[a] - whole[a]); }).slice(0, rest).forEach(function (i) { whole[i]++; });
    var rows = m.types.map(function (item, i) {
      return '<button type="button" class="st-leg" data-stats-facet="type" data-value="' + esc(item.type) + '" aria-describedby="st-open-hint">' +
        '<i style="--type:' + self._wineSurfaceColor(item.type) + '"></i><span>' + esc(self._wineTypeLabel(item.type)) + "</span><b>" + item.count +
        "</b><em>" + whole[i] + "%</em></button>";
    }).join("");
    return '<section class="st-panel" aria-labelledby="st-type-t"><div class="st-head"><h3 class="st-title" id="st-type-t">' + esc(_T("distribution_by_type")) + "</h3></div>" +
      '<div class="st-types"><div class="st-donut"><svg viewBox="0 0 172 172" role="img" aria-label="' + esc(_T("distribution_by_type") + ": " + summary) + '">' +
      '<circle cx="86" cy="86" r="' + r + '" fill="none" stroke="var(--wcm-tonal)" stroke-width="22"/>' + arcs + "</svg>" +
      '<span class="st-donut-c" aria-hidden="true"><strong>' + m.total + "</strong><span>" + esc(_TN("stats_bottle_word", m.total)) + "</span></span></div>" +
      '<div class="st-legs">' + rows + "</div></div></section>";
  }

  // The countries with the most bottles, as bars that open All Bottles on
  // that country. Bottles with no country count as "Not specified".
  _renderCountryBars(m) {
    var self = this;
    function esc(value) { return self._escape(value); }
    var max = m.countries.reduce(function (most, item) { return Math.max(most, item.count); }, 1);
    var rows = m.countries.map(function (item) {
      var inner = "<b>" + esc(item.key ? item.label : _T("not_specified")) + '</b><em>' + item.count + '</em><span class="st-bar"><span style="--p:' + (item.count / max).toFixed(4) + '"></span></span>';
      return item.key
        ? '<button type="button" class="st-country" data-stats-facet="country" data-value="' + esc(item.key) + '" aria-describedby="st-open-hint">' + inner + "</button>"
        : '<div class="st-country is-none">' + inner + "</div>";
    }).join("");
    return '<section class="st-panel" aria-labelledby="st-country-t"><div class="st-head"><h3 class="st-title" id="st-country-t">' + esc(_T("top_countries_of_origin")) + "</h3></div>" +
      '<div class="st-countries">' + rows + "</div></section>";
  }

  // Stats' controls: a type, a country or "all to drink now" opens All
  // Bottles filtered to it (search and other filters cleared first); the
  // crosshair of a bottle to drink shows it in its cellar.
  _bindStatsView(root) {
    var self = this;
    var stats = root.querySelector(".main-scroll-content [data-stats]");
    if (!stats) return;
    stats.addEventListener("click", function (e) {
      var target = e.target && e.target.closest ? e.target.closest("[data-stats-facet],[data-stats-locate],[data-restore-consumed]") : null;
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      if (target.hasAttribute("data-restore-consumed")) {
        // Focus goes on to the entry after it (or before) once it has left.
        var buttons = Array.prototype.slice.call(stats.querySelectorAll("[data-restore-consumed]"));
        var at = buttons.indexOf(target);
        var near = [buttons[at + 1], buttons[at - 1]].filter(Boolean).map(function (b) { return b.getAttribute("data-restore-consumed"); });
        if (target.disabled) return;
        target.disabled = true;
        self._undoConsume(target.getAttribute("data-restore-consumed"), target.getAttribute("data-name"), { near: near }).then(function () {
          if (target.isConnected) target.disabled = false;
        });
        return;
      }
      if (target.hasAttribute("data-stats-locate")) {
        self._showInCellar(target.getAttribute("data-stats-locate"));
        return;
      }
      self._showFacetInList(target.getAttribute("data-stats-facet"), target.getAttribute("data-value"));
    });
  }

  // All Bottles with only this facet value on (a type, a country, a status
  // preset).
  _showFacetInList(name, value) {
    this._clearFilters("all");
    this._setFacet(name, value);
    return this._openList();
  }

  // All Bottles from a link elsewhere in the card (a Stats figure, "+N
  // more"): it opens at its top, whichever scrolls (the card, or the page
  // under Home Assistant's header), with focus on its title, which says how
  // many bottles it shows.
  _openList() {
    var self = this;
    var root = this.shadowRoot;
    var main = root && root.querySelector(".main-scroll-content");
    if (main) main.scrollTop = 0;
    this._view = "list";
    return Promise.resolve(this.render(false)).then(function () {
      if (self._visibleBand().page) {
        var header = parseFloat(getComputedStyle(self).getPropertyValue("--header-height")) || 56;
        self.style.scrollMarginTop = header + "px";
        self.scrollIntoView({ block: "start", behavior: "auto" });
        self.style.scrollMarginTop = "";
      }
      var title = root.querySelector("[data-list-title]");
      if (title) title.focus({ preventScroll: true });
    });
  }

  // Every slot of every cellar, front and back.
  _cellarCapacity() {
    var capacity = 0;
    ((this._data && this._data.cellars) || []).forEach(function (c) {
      (c.shelves || []).forEach(function (s) {
        capacity += Number(s.capacity_front || 0) + Number(s.capacity_back || 0);
      });
    });
    return capacity;
  }

  // Drinking window as a small timeline: the window in its aging color, and a
  // marker for the current year.
  _renderDrinkingWindow(bottle) {
    var status = this._agingStatus(bottle);
    var label = '<div class="section-label">' + _T("drinking_window") + "</div>";

    if (status === "none") {
      return '<div class="window-block">' + label + '<div class="duplicate-empty">' + _T("no_data") + "</div></div>";
    }

    var start = Number(bottle.aging_start_year);
    var stop = Number(bottle.aging_end_year);
    var now = new Date().getFullYear();
    var lo = Math.min(start, now) - 1;
    var hi = Math.max(stop, now) + 1;
    var years = hi - lo + 1;
    function pct(offset) { return ((offset / years) * 100).toFixed(2) + "%"; }

    return [
      '<div class="window-block" style="--status:var(--wcm-' + status + ')">',
      label,
      '  <div class="window-head"><span class="window-years">' + start + " → " + stop + "</span></div>",
      '  <div class="window-track">',
      '    <span class="window-span" style="left:' + pct(start - lo) + ";width:" + pct(stop - start + 1) + '"></span>',
      '    <span class="window-now" style="left:' + pct(now - lo + 0.5) + '"></span>',
      "  </div>",
      '  <div class="window-scale"><span>' + lo + "</span><span>" + hi + '</span><b style="left:' + pct(now - lo + 0.5) + '">' + now + "</b></div>",
      "</div>"
    ].join("");
  }

  // The bottle dialog. Header: type, producer, the name, vintage and origin,
  // then the status (glyph, words and years) and stars. Body: the bottle
  // wearing its label next to the full label (or a way to add one), a
  // callout when details are missing, where it is (with the location map),
  // the drinking window and the details. Footer: Consume and Edit lead; on
  // narrow screens Show in cellar, Move, Copy and Delete fold into "More".
  _renderBottleViewModal(data) {
    var self = this;
    var bottle = (this._modal && this._modal.bottle) || {};
    var id = this._escape(bottle.id);
    var type = bottle.wine_type || "unset";
    var status = this._agingStatus(bottle);
    var needs = this._bottleNeedsDetails(bottle);
    var imagePath = bottle.image_path ? this._normalizeImagePath(bottle.image_path) : "";
    var name = bottle.wine_name || _T("unnamed_wine");
    var rating = Math.max(0, Math.min(5, Math.trunc(Number(bottle.rating) || 0)));
    var similar = this._countSimilarBottles(bottle);
    function esc(value) { return self._escape(value); }

    var sub = [];
    if (bottle.vintage) sub.push("<b>" + esc(bottle.vintage) + "</b>");
    [bottle.varietal, bottle.region, bottle.country].filter(Boolean).forEach(function (value) {
      sub.push("<span>" + esc(value) + "</span>");
    });

    var statusHtml = status !== "none"
      ? '<span class="bv-status" style="--status:var(--wcm-' + status + ')">' + this._bottleGlyph(status) +
        "<span>" + esc(this._agingStatusLabel(status)) + '</span><span class="bv-years">' + esc(bottle.aging_start_year) + "–" + esc(bottle.aging_end_year) + "</span></span>"
      : '<span class="bv-status">' + this._bottleGlyph("none") + "<span>" + esc(_T("bt_no_window_long")) + "</span></span>";
    var starsHtml = rating
      ? '<span class="bv-stars" role="img" aria-label="' + esc(_T("bt_stars", { n: rating })) + '">' + "★".repeat(rating) + '<span class="off">' + "★".repeat(5 - rating) + "</span></span>"
      : "";

    // Hero. A saved photo that cannot be loaded shows as unavailable (with a
    // way to replace it), not as a missing one; the drawn bottle keeps its
    // paper label.
    var onPhotoError = "var h=this.closest('.bv-hero');if(h){h.classList.add('photo-missing');h.querySelectorAll('svg image').forEach(function(i){i.remove()})}";
    var hero =
      '<div class="bv-hero' + (imagePath ? "" : " no-photo") + (this._isLitInterior() ? "" : " bv-theme") + '">' +
      this._bottleArtSvg(bottle, { variant: "hero", labelImage: imagePath }) +
      (imagePath
        ? '<div class="bv-plate"><a href="' + esc(imagePath) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(_T("bt_open_photo")) + '">' +
          '<img src="' + esc(imagePath) + '" alt="' + esc(name) + '" onerror="' + onPhotoError + '">' +
          '<span class="bv-expand" aria-hidden="true">' + _WCM_ICONS.expand + "</span></a></div>" +
          '<div class="bv-missing">' + _WCM_ICONS.noPhoto + "<b>" + esc(_T("bt_photo_missing")) + "</b><small>" + esc(_T("bt_photo_missing_sub")) + "</small>" +
          '<button type="button" class="btn ghost" data-bv-add-photo>' + esc(_T("bt_replace_photo")) + "</button></div>"
        : '<button type="button" class="bv-addphoto" data-bv-add-photo>' + _WCM_ICONS.camera + "<span>" + esc(_T("bt_add_label_photo")) + "</span></button>") +
      "</div>";

    var needsHtml = needs
      ? '<div class="bv-needs">' + this._bottleGlyph("needs") + "<strong>" + esc(_T("bt_needs_details")) + "</strong><p>" + esc(_T("bt_needs_details_hint")) + "</p>" +
        '<button type="button" class="btn primary small-btn" data-bv-complete>' + _WCM_ICONS.pencil + "<span>" + esc(_T("bt_add_details")) + "</span></button></div>"
      : "";

    var cellar = ((data && data.cellars) || []).find(function (c) { return c.id === bottle.cellar_id; });
    var location =
      '<section class="bv-location" aria-label="' + esc(_T("physical_location")) + '">' +
      '<div class="bv-where">' + _WCM_ICONS.pin + "<div>" +
      '<div class="bv-where-main">' + esc(cellar ? (cellar.name || _T("cellar")) : _T("unknown_cellar")) +
      '<span class="bv-sep" aria-hidden="true">›</span>' + esc(this._getShelfName(bottle.cellar_id, bottle.shelf_id) || _T("shelf")) + "</div>" +
      '<div class="bv-where-sub">' + esc(_T(bottle.lane === "back" ? "bt_back_row_pos" : "bt_front_row_pos", { pos: bottle.position || "—" })) + "</div>" +
      "</div></div>" +
      '<div class="bv-map">' + this._renderLocationMap(bottle) + "</div>" +
      '<div class="bv-similar"><span>' +
      (similar > 1 ? esc(_T("bt_in_cellars", { n: "\u0000" })).replace("\u0000", "<b>" + similar + "</b>") : esc(_T("bt_only_one"))) + "</span>" +
      (similar > 1 ? '<button type="button" class="btn small-btn ghost" data-bv-find-similar>' + _WCM_ICONS.search + "<span>" + esc(_T("bt_find_all")) + "</span></button>" : "") +
      "</div></section>";

    // Producer, vintage and origin already lead the header.
    function meta(label, value) {
      return '<div class="meta-item"><strong>' + esc(label) + "</strong><div>" + esc(value) + "</div></div>";
    }
    var hasPrice = bottle.price !== null && bottle.price !== undefined && bottle.price !== "";
    var metas = [
      hasPrice ? meta(_T("price"), this._formatPrice(bottle.price)) : "",
      bottle.serving_temp != null ? meta(this._t("serving_temp"), bottle.serving_temp + " °C") : "",
      bottle.alcohol_pct != null ? meta(this._t("alcohol_pct"), bottle.alcohol_pct + " %") : ""
    ].join("");
    var details = metas
      ? '<section class="bv-section bv-details"><div class="section-label">' + esc(_T("bt_details")) + '</div><div class="detail-grid">' + metas + "</div></section>"
      : "";
    var saqUrl = this._safeUrl(bottle.saq_url);
    var extra =
      (bottle.notes ? '<div class="notes-box"><div class="section-label">' + this._t("notes") + '</div><div class="notes-text">' + esc(bottle.notes) + "</div></div>" : "") +
      (saqUrl ? '<div><a href="' + esc(saqUrl) + '" target="_blank" rel="noopener noreferrer" class="btn ghost small-btn"><span>SAQ</span><span aria-hidden="true">↗</span></a></div>' : "");

    return [
      '<div class="modal-backdrop" data-dialog-backdrop>',
      '  <div class="modal wine-view-modal" role="dialog" aria-modal="true" aria-labelledby="wcm-dialog-title" style="--type:' + this._wineSurfaceColor(type) + '">',
      '    <header class="bv-head">',
      '      <div class="bv-kicker"><span class="bv-type"><i aria-hidden="true"></i>' + esc(this._wineTypeLabel(type)) + "</span>" +
             (bottle.producer ? '<span class="bv-producer">' + esc(bottle.producer) + "</span>" : "") + "</div>",
      '      <h2 class="bv-title" id="wcm-dialog-title" tabindex="-1" data-dialog-title>' + esc(name) + "</h2>",
      sub.length ? '      <div class="bv-sub">' + sub.join('<span class="bv-dot" aria-hidden="true">·</span>') + "</div>" : "",
      '      <div class="bv-statusline">' + statusHtml + starsHtml + "</div>",
      '      <button class="icon-btn bv-close-x" type="button" data-close-modal aria-label="' + esc(_T("close")) + '">' + _WCM_ICONS.close + "</button>",
      "    </header>",
      '    <div class="bv-body">',
      '      <div class="bv-side">' + hero + needsHtml + (status !== "none" ? '<div class="bv-window">' + this._renderDrinkingWindow(bottle) + "</div>" : "") + "</div>",
      '      <div class="bv-main">' + location + details + (extra ? '<div class="bv-extra bv-section">' + extra + "</div>" : "") + "</div>",
      "    </div>",
      '    <div class="view-actions bv-actions">',
      '      <div class="bv-menu" id="wcm-bv-menu">',
      this._isBottleDrawn(bottle)
        ? '        <button class="btn bv-quiet" type="button" data-locate-bottle="' + id + '">' + _WCM_ICONS.pin + "<span>" + esc(_T("bt_show_in_cellar")) + "</span></button>" +
          '        <button class="btn bv-quiet" type="button" data-move-bottle="' + id + '">' + _WCM_ICONS.move + "<span>" + esc(_T("move_action")) + "</span></button>"
        : "",
      '        <button class="btn bv-quiet" type="button" data-copy-memory-btn>' + _WCM_ICONS.copy + "<span>" + esc(_T("copy")) + "</span></button>",
      '        <button class="btn bv-danger" type="button" data-delete-bottle="' + id + '">' + _WCM_ICONS.trash + "<span>" + esc(_T("delete")) + "</span></button>",
      "      </div>",
      '      <span class="bv-spacer"></span>',
      '      <button class="btn bv-more-toggle" type="button" aria-expanded="false" aria-controls="wcm-bv-menu" aria-label="' + esc(_T("bt_more_actions")) + '" data-bv-more>' + _WCM_ICONS.more + "</button>",
      '      <button class="btn ghost bv-close-btn" type="button" data-close-modal>' + esc(_T("close")) + "</button>",
      '      <button class="btn warning bv-primary" type="button" data-consume-bottle="' + id + '">' + _WCM_ICONS.glass + "<span>" + esc(_T("consume")) + "</span></button>",
      '      <button class="btn primary bv-primary" type="button" data-enter-edit>' + _WCM_ICONS.pencil + "<span>" + esc(_T("edit")) + "</span></button>",
      "    </div>",
      "  </div>",
      "</div>"
    ].join("");
  }

  // The "More" menu of the bottle dialog's footer (narrow screens).
  _setBottleMenu(open, focusToggle) {
    var root = this.shadowRoot;
    var toggle = root && root.querySelector("[data-bv-more]");
    var menu = root && root.querySelector(".bv-menu");
    if (!toggle || !menu) return;
    menu.classList.toggle("open", !!open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      var first = menu.querySelector("button");
      if (first) first.focus();
    } else if (focusToggle) {
      toggle.focus();
    }
  }

  // Above 820 px the footer shows every action on one row. When they do not
  // fit (a long language, a narrow window) the secondary ones fold into
  // "More", as on phones. Checked again whenever the footer changes width.
  _fitBottleFooter(bar) {
    var self = this;
    if (this._footerObserver) this._footerObserver.disconnect();
    if (!bar) return;
    if (window.ResizeObserver) {
      if (!this._footerObserver) {
        this._footerObserver = new ResizeObserver(function (entries) {
          entries.forEach(function (entry) { self._foldBottleFooter(entry.target); });
        });
      }
      this._footerObserver.observe(bar);
    }
    this._foldBottleFooter(bar);
    // The display font can arrive after the first check.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { self._foldBottleFooter(bar); });
  }

  _foldBottleFooter(bar) {
    if (!bar.isConnected) return;
    var wasFolded = bar.classList.contains("is-folded");
    bar.classList.remove("is-folded");
    // The last action must end inside the footer's padding.
    var limit = bar.getBoundingClientRect().right - (parseFloat(getComputedStyle(bar).paddingRight) || 0);
    var end = 0;
    Array.prototype.forEach.call(bar.querySelectorAll(".btn"), function (btn) {
      var r = btn.getBoundingClientRect();
      if (r.width) end = Math.max(end, r.right);
    });
    var fold = end > limit + 0.5;
    bar.classList.toggle("is-folded", fold);
    var menu = bar.querySelector(".bv-menu");
    // Unfolded on a wide screen: an open "More" has nothing left to show.
    if (wasFolded && !fold && menu && menu.classList.contains("open") && getComputedStyle(menu).position !== "absolute") {
      var hadFocus = menu.contains(this.shadowRoot.activeElement);
      this._setBottleMenu(false);
      if (hadFocus) bar.querySelector("[data-enter-edit]").focus();
    }
  }

  _renderBottleModal(data) {
    var bottle = (this._modal && this._modal.bottle) || null;
    var mode = (this._modal && this._modal.mode) || "edit";

    if (bottle && bottle.id && mode === "view") {
      return this._renderBottleViewModal(data);
    }
    return this._renderBottleEditModal(data);
  }

  /* The add / edit sheet. Photo first (on phones a capture step of its own),
     then what identifies the wine (name, producer, vintage, type), the rest
     under "More details", and "Where it goes": a small cabinet to pick the
     slot, and how many bottles. Save stays pinned at the bottom. Besides the
     typed values (the dialog draft), the sheet keeps its own state across
     re-renders in this._modal: ui (phone stage, "More details" open, fields
     filled from the label or a known wine, the note and its Undo) and photo
     (the picture being uploaded or read). */

  _renderBottleEditModal(data) {
    var self = this;
    var m = this._modal;
    var bottle = m.bottle || {};
    var preset = m.preset || {};
    var ui = m.ui || (m.ui = {});
    var draft = this._modalDraft();
    var typed = draft ? draft.values : null;
    var isEdit = !!bottle.id;
    function v(key, fallback) {
      if (typed && typed[key] !== undefined) return typed[key];
      if (bottle[key] !== undefined && bottle[key] !== null) return bottle[key];
      if (preset[key] !== undefined && preset[key] !== null) return preset[key];
      return fallback;
    }
    function esc(value) { return self._escape(value == null ? "" : value); }

    // Where it goes: the requested slot when it is free, else the next free
    // one (a bottle being edited keeps its own slot).
    var ownId = isEdit ? bottle.id : null;
    var loc = {
      cellar_id: String(v("cellar_id", "") || ""),
      shelf_id: String(v("shelf_id", "") || ""),
      lane: v("lane", "front") === "back" ? "back" : "front",
      position: Number(v("position", 0)) || 0
    };
    if (!this._cellarById(loc.cellar_id)) loc.cellar_id = "";
    var slotOk = !!loc.cellar_id && this._slotOrder(loc.cellar_id, ownId).some(function (s) { return s.free && self._sameSlot(s, loc); });
    if (!slotOk && !isEdit) {
      var next = (loc.cellar_id && this._planSlots(loc.cellar_id, loc, 1)[0]) || this._findFreeSlot();
      loc = next
        ? { cellar_id: next.cellar_id, shelf_id: next.shelf_id, lane: next.lane, position: next.position }
        : { cellar_id: loc.cellar_id || ((this._sortedCellars()[0] || {}).id || ""), shelf_id: "", lane: "front", position: 0 };
    }
    var qty = isEdit ? 1 : Math.max(1, parseInt(v("qty", 1), 10) || 1);

    var imagePath = String(v("image_path", "") || "");
    var photo = m.photo || {};
    var imgSrc = photo.preview || this._normalizeImagePath(imagePath);
    if (!ui.stage) ui.stage = isEdit || String(v("wine_name", "") || "").trim() || imgSrc ? "review" : "capture";
    var type = _WCM_SHEET_TYPES.indexOf(v("wine_type", "unset")) >= 0 ? v("wine_type", "unset") : "other";
    var wide = !window.matchMedia || window.matchMedia("(min-width: 900px)").matches;
    var moreOpen = ui.moreOpen !== undefined ? ui.moreOpen : wide;

    function label(name, text, required) {
      return '<div class="sheet-lrow"><label class="sheet-lbl" for="wcm-f-' + name + '">' + esc(text) +
        (required ? '<span class="sheet-req" aria-hidden="true">*</span>' : "") + '</label><span class="sheet-mark"></span></div>';
    }
    function errorBox(name) {
      return '<div class="sheet-err" id="wcm-err-' + name + '" data-err-for="' + name + '" hidden></div>';
    }
    function combo(name, extraClass, placeholder, required) {
      return '<div class="sheet-combo"><input id="wcm-f-' + name + '" class="sheet-in' + (extraClass || "") + '" name="' + name + '" value="' + esc(v(name, "")) + '"' +
        ' autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="wcm-list-' + name + '" data-combo="' + name + '"' +
        (placeholder ? ' placeholder="' + esc(placeholder) + '"' : "") + (required ? ' required aria-required="true"' : "") +
        (required && !isEdit ? " data-autofocus" : "") + ">" +
        '<div class="sheet-list" id="wcm-list-' + name + '" role="listbox" hidden></div></div>';
    }
    function field(name, text, inner, extraClass) {
      return '<div class="sheet-fld' + (extraClass ? " " + extraClass : "") + '" data-f="' + name + '">' + label(name, text) + inner + errorBox(name) + "</div>";
    }
    function year(name, placeholder, extraClass) {
      return '<input id="wcm-f-' + name + '" class="sheet-in sheet-num' + (extraClass ? " " + extraClass : "") + '" name="' + name + '" value="' + esc(v(name, "")) + '"' +
        ' inputmode="numeric" maxlength="4" autocomplete="off" placeholder="' + esc(placeholder) + '">';
    }
    function decimal(name, suffix, step) {
      return '<div class="sheet-affix"><input id="wcm-f-' + name + '" class="sheet-in sheet-num" type="number" step="' + step + '" min="0" name="' + name + '"' +
        ' value="' + esc(v(name, "")) + '" inputmode="decimal"><b>' + esc(suffix) + "</b></div>";
    }

    var title = isEdit ? (bottle.wine_name || _T("unnamed_wine")) : _T("sheet_add_title");
    var head =
      '<header class="sheet-head">' +
      '<svg class="sheet-hbottle" viewBox="0 0 40 100" aria-hidden="true"><path class="g" d="' + _WCM_BOTTLE_PATH + '"/>' +
      '<rect class="k" x="16" y="3" width="8" height="12" rx="1.5"/><rect class="l" x="10.5" y="56" width="19" height="24" rx="2"/></svg>' +
      '<div class="sheet-htext"><h2 class="sheet-title" id="wcm-dialog-title" tabindex="-1" data-dialog-title>' + esc(title) + "</h2>" +
      '<div class="sheet-dest"' + (this._sheetDestText(loc, qty, isEdit) ? "" : " hidden") + ">" + _WCM_ICONS.pin + "<span data-sheet-dest>" + esc(this._sheetDestText(loc, qty, isEdit)) + "</span></div></div>" +
      '<button class="icon-btn" type="button" data-close-modal aria-label="' + esc(_T("close")) + '">' + _WCM_ICONS.close + "</button>" +
      "</header>";

    // 1. The label photo.
    var photoSec =
      '<section class="sheet-photo" aria-labelledby="wcm-sheet-photo">' +
      '<h3 class="sheet-sec-t" id="wcm-sheet-photo">' + _WCM_ICONS.camera + esc(_T("sheet_sec_label")) + "</h3>" +
      '<div class="' + this._sheetTileClass(imgSrc, photo) + '" data-sheet-tile>' + this._renderSheetTile(imgSrc, photo) + "</div>" +
      '<input type="file" accept="image/*" capture="environment" data-sheet-file="camera" hidden>' +
      '<input type="file" accept="image/*" data-sheet-file="library" hidden>' +
      '<input type="file" accept="image/*" data-sheet-file="barcode" hidden>' +
      '<div class="sheet-photo-links">' +
      (isEdit ? "" : '<button type="button" class="sheet-link" data-sheet-instead>' + _WCM_ICONS.keyboard + esc(_T("sheet_type_instead")) + "</button>") +
      '<button type="button" class="sheet-link is-muted" data-sheet-pick="barcode">' + _WCM_ICONS.barcode + esc(_T("sheet_scan_barcode")) + "</button>" +
      "</div></section>";

    // 2. The wine: identity first, the rest folded under "More details".
    var types = '<div class="sheet-types" role="radiogroup" aria-labelledby="wcm-l-type">' + _WCM_SHEET_TYPES.map(function (t) {
      return '<label class="sheet-type' + (t === type ? " on" : "") + '"><input class="sr-only" type="radio" name="wine_type" value="' + esc(t) + '"' + (t === type ? " checked" : "") + ">" +
        '<span class="sheet-type-dot" style="--sw:' + self._wineSurfaceColor(t) + '"></span>' + esc(t === "unset" ? _T("sheet_type_unset") : self._wineTypeLabel(t)) + "</label>";
    }).join("") + "</div>";
    var rating = Math.max(0, Math.min(5, parseInt(v("rating", 0), 10) || 0));
    var stars = '<div class="sheet-stars" role="radiogroup" aria-labelledby="wcm-l-rating">' +
      '<label class="sheet-star-none' + (rating ? "" : " on") + '"><input class="sr-only" type="radio" name="rating" value="0"' + (rating ? "" : " checked") + ">" + esc(_T("sheet_rating_none")) + "</label>" +
      [1, 2, 3, 4, 5].map(function (n) {
        return '<label class="sheet-star' + (n <= rating ? " on" : "") + '" title="' + esc(_T("bt_stars", { n: n })) + '"><input class="sr-only" type="radio" name="rating" value="' + n + '"' +
          (n === rating ? " checked" : "") + ' aria-label="' + esc(_T("bt_stars", { n: n })) + '">' + _WCM_ICONS.star + "</label>";
      }).join("") + "</div>";

    var mainSec =
      '<div class="sheet-main">' +
      '<section class="sheet-sec" aria-labelledby="wcm-sheet-wine">' +
      '<h3 class="sheet-sec-t" id="wcm-sheet-wine">' + _WCM_ICONS.bottle + esc(_T("sheet_sec_wine")) + "</h3>" +
      '<div class="sheet-note" data-sheet-note hidden></div>' +
      '<div class="sheet-fld" data-f="wine_name">' + label("wine_name", _T("wine_name"), true) + combo("wine_name", " sheet-in-display", _T("sheet_name_ph"), true) +
      errorBox("wine_name") + '<div class="sheet-dup" data-sheet-dup hidden></div></div>' +
      '<div class="sheet-2 sheet-vint">' +
      field("producer", _T("producer"), combo("producer")) +
      field("vintage", _T("vintage"), year("vintage", "2019")) +
      "</div>" +
      '<div class="sheet-fld" data-f="wine_type"><div class="sheet-lrow"><span class="sheet-lbl" id="wcm-l-type">' + esc(_T("type")) + '</span><span class="sheet-mark"></span></div>' + types + "</div>" +
      "</section>" +
      '<details class="sheet-more" data-sheet-more' + (moreOpen ? " open" : "") + ">" +
      '<summary><span class="sheet-more-t">' + esc(_T("sheet_more")) + '</span><span class="sheet-more-h" data-sheet-more-h>' + esc(_T("sheet_more_hint")) + "</span>" +
      '<span class="sheet-chev" aria-hidden="true">' + _WCM_ICONS.down + "</span></summary>" +
      '<div class="sheet-more-b">' +
      '<div class="sheet-2">' + field("region", _T("region"), combo("region")) + field("country", _T("country"), combo("country")) + "</div>" +
      '<div class="sheet-2">' + field("varietal", _T("varietal"), combo("varietal")) + field("price", _T("price"), decimal("price", this._currency(), "0.01")) + "</div>" +
      '<div class="sheet-fld" data-f="window"><div class="sheet-lrow"><span class="sheet-lbl" id="wcm-l-win">' + esc(_T("sheet_window")) + '</span><span class="sheet-mark"></span></div>' +
      '<div class="sheet-win" role="group" aria-labelledby="wcm-l-win"><div class="sheet-win-in">' +
      '<label class="sr-only" for="wcm-f-aging_start_year">' + esc(_T("sheet_from")) + "</label>" + year("aging_start_year", _T("sheet_from"), "sheet-year") +
      '<span class="sheet-win-dash" aria-hidden="true">–</span>' +
      '<label class="sr-only" for="wcm-f-aging_end_year">' + esc(_T("sheet_to")) + "</label>" + year("aging_end_year", _T("sheet_to"), "sheet-year") +
      '</div><div data-sheet-win>' + this._renderWindowTimeline(v("aging_start_year", ""), v("aging_end_year", "")) + "</div></div>" + errorBox("window") + "</div>" +
      '<div class="sheet-fld" data-f="rating"><div class="sheet-lrow"><span class="sheet-lbl" id="wcm-l-rating">' + esc(_T("rating")) + '</span><span class="sheet-mark"></span></div>' + stars + "</div>" +
      field("notes", _T("notes"), '<textarea id="wcm-f-notes" class="sheet-in" name="notes" rows="3" maxlength="500">' + esc(v("notes", "")) + "</textarea>") +
      '<div class="sheet-2 sheet-keep">' + field("serving_temp", _T("serving_temp"), decimal("serving_temp", "°C", "0.5")) + field("alcohol_pct", _T("alcohol_pct"), decimal("alcohol_pct", "%", "0.1")) + "</div>" +
      '<div class="sheet-2">' +
      field("barcode", _T("sheet_barcode"), '<div class="sheet-inline"><input id="wcm-f-barcode" class="sheet-in sheet-num" name="barcode" value="' + esc(v("barcode", "")) + '" inputmode="numeric" autocomplete="off">' +
        '<button type="button" class="btn" data-sheet-lookup>' + esc(_T("sheet_lookup")) + "</button></div>") +
      field("saq_url", _T("sheet_link"), '<input id="wcm-f-saq_url" class="sheet-in" name="saq_url" type="url" inputmode="url" placeholder="https://" value="' + esc(v("saq_url", bottle.url_saq || "")) + '">') +
      "</div>" +
      "</div></details>" +
      "</div>";

    // 3. Where it goes.
    var placeSec =
      '<section class="sheet-place" aria-labelledby="wcm-sheet-place">' +
      '<h3 class="sheet-sec-t" id="wcm-sheet-place">' + _WCM_ICONS.pin + esc(_T("sheet_sec_place")) + "</h3>" +
      '<div data-sheet-picker>' + this._renderSlotPicker({ cellarId: loc.cellar_id, sel: loc, qty: qty, ownId: ownId, from: isEdit ? bottle : null }) + "</div>" +
      '<input type="hidden" name="cellar_id" value="' + esc(loc.cellar_id) + '"><input type="hidden" name="shelf_id" value="' + esc(loc.shelf_id) + '">' +
      '<input type="hidden" name="lane" value="' + esc(loc.lane) + '"><input type="hidden" name="position" value="' + esc(loc.position || "") + '">' +
      '<input type="hidden" name="qty" value="' + qty + '">' +
      errorBox("place") +
      "</section>";

    var foot =
      '<footer class="sheet-foot">' +
      '<div class="form-error" role="alert"' + (this._formError ? "" : ' style="display:none"') + ">" + esc(this._formError) + "</div>" +
      '<div class="sheet-foot-row">' +
      (isEdit ? '<button type="button" class="sheet-danger" data-delete-bottle="' + esc(bottle.id) + '">' + _WCM_ICONS.trash + '<span class="sheet-danger-t">' + esc(_T("delete")) + "</span></button>" : "") +
      '<div class="sheet-foot-l">' + (isEdit ? "" : _WCM_ICONS.info + "<span>" + esc(_T("sheet_only_name")) + "</span>") + "</div>" +
      (isEdit
        ? '<button type="button" class="btn ghost sheet-cancel" data-cancel-edit>' + esc(_T("cancel")) + "</button>"
        : '<button type="button" class="btn ghost sheet-cancel" data-close-modal>' + esc(_T("cancel")) + "</button>" +
          '<button type="button" class="btn" data-sheet-save="next">' + esc(_T("sheet_save_next")) + "</button>") +
      '<button type="button" class="btn primary" data-sheet-save="done">' + _WCM_ICONS.check + "<span data-sheet-save-label>" +
      esc(this._sheetSaveLabel(isEdit, qty)) + "</span></button>" +
      "</div></footer>";

    return (
      '<div class="modal-backdrop sheet-backdrop" data-dialog-backdrop>' +
      '<div class="modal sheet' + (isEdit ? " is-edit" : "") + " stage-" + ui.stage + '" role="dialog" aria-modal="true" aria-labelledby="wcm-dialog-title" style="--sheet-type:' + this._wineSurfaceColor(type) + '">' +
      head +
      '<form class="sheet-form" data-save-bottle data-modal-key="' + esc(this._modalKey()) + '" novalidate autocomplete="off">' +
      '<input type="hidden" name="bottle_id" value="' + esc(bottle.id || "") + '">' +
      '<input type="hidden" name="analyzed_flag" value="' + esc(v("analyzed_flag", bottle.analyzed ? "true" : "false")) + '">' +
      '<input type="hidden" name="image_path" value="' + esc(imagePath) + '">' +
      '<div class="sheet-scroll" data-dialog-scroll><div class="sheet-grid">' + photoSec + mainSec + placeSec + "</div></div>" +
      foot +
      "</form></div></div>"
    );
  }

  _sheetSaveLabel(isEdit, qty) {
    if (isEdit) return _T("sheet_save_changes");
    return qty > 1 ? _T("sheet_save_n", { n: qty }) : _T("save");
  }

  // "Kitchen › Whites (2) › Front · 3", "3 bottles · Kitchen › Whites (2)",
  // or "Editing · …".
  _sheetDestText(loc, qty, isEdit) {
    var dest = "";
    if (loc && loc.shelf_id) {
      var planned = qty > 1 && !isEdit ? this._planSlots(loc.cellar_id, loc, qty) : [];
      dest = qty > 1 ? _T("sheet_plan_n", { n: qty, where: planned.length ? this._plannedWhere(planned) : this._slotWhere(loc, true) }) : this._slotWhere(loc);
    }
    return isEdit ? _T("sheet_editing") + (dest ? " · " + dest : "") : dest;
  }

  // Whether label reading is set up. Assumed until the backend says it is
  // not (gemini_configured: false); a failed reading only shows a note.
  _analysisAvailable() {
    return !(this._data && this._data.gemini_configured === false);
  }

  _sheetTileClass(src, photo) {
    return "sheet-tile" + (src ? " has-img" : " is-empty") + (photo && photo.busy ? " is-busy" : "");
  }

  // The label tile: a camera prompt, or the photo with its tools. Both the
  // touch (Take photo + Choose from library) and the desktop (Upload + drop)
  // versions are drawn; the stylesheet shows the right one.
  _renderSheetTile(src, photo) {
    var esc = this._escape.bind(this);
    var ai = this._analysisAvailable();
    photo = photo || {};
    var frame = '<div class="sheet-frame">' +
      (src
        ? '<img class="sheet-img" src="' + esc(src) + '" alt="' + esc(_T("sheet_photo_ready")) + '" onerror="this.style.visibility=\'hidden\'">'
        : '<svg class="sheet-illus" viewBox="0 0 120 150" aria-hidden="true">' +
          '<path class="b" d="M52 6h16v30c0 9 15 13 15 30v72a6 6 0 0 1-6 6H43a6 6 0 0 1-6-6V66c0-17 15-21 15-30z"/>' +
          '<rect class="k" x="52" y="6" width="16" height="16" rx="2"/><rect class="l" x="44" y="80" width="32" height="38" rx="3"/>' +
          '<path class="t" d="M50 92h20M53 99h14M55 108h10"/>' +
          '<path class="c" d="M34 82v-6a4 4 0 0 1 4-4h6M76 72h6a4 4 0 0 1 4 4v6M86 116v6a4 4 0 0 1-4 4h-6M44 126h-6a4 4 0 0 1-4-4v-6"/></svg>') +
      '<div class="sheet-scan" aria-hidden="true"></div>' +
      (photo.busy ? '<div class="sheet-busy"><span class="sheet-spin" aria-hidden="true"></span>' + esc(photo.status || "") + "</div>" : "") +
      "</div>";
    if (!src) {
      return frame + '<div class="sheet-tile-body">' +
        '<div class="sheet-tile-t">' + esc(_T(ai ? "sheet_photo_title" : "sheet_photo_title_plain")) + "</div>" +
        '<div class="sheet-tile-s">' + esc(_T(ai ? "sheet_photo_sub_ai" : "sheet_photo_sub")) + "</div>" +
        '<div class="sheet-tile-a">' +
        '<button type="button" class="btn primary" data-sheet-pick="camera">' + _WCM_ICONS.camera +
        '<span class="only-touch">' + esc(_T("sheet_take_photo")) + '</span><span class="only-fine">' + esc(_T("sheet_upload_photo")) + "</span></button>" +
        '<button type="button" class="btn only-touch" data-sheet-pick="library">' + _WCM_ICONS.image + "<span>" + esc(_T("sheet_choose_library")) + "</span></button>" +
        '<div class="sheet-tile-drop only-fine">' + esc(_T("sheet_photo_drop")) + "</div>" +
        "</div></div>";
    }
    var tools = photo.busy ? "" :
      '<button type="button" class="sheet-tool" data-sheet-pick="library">' + _WCM_ICONS.image + esc(_T("sheet_photo_replace")) + "</button>" +
      '<button type="button" class="sheet-tool" data-sheet-rotate>' + _WCM_ICONS.rotate + esc(_T("sheet_photo_rotate")) + "</button>" +
      '<button type="button" class="sheet-tool" data-sheet-remove>' + _WCM_ICONS.trash + esc(_T("sheet_photo_remove")) + "</button>" +
      (ai && !photo.read ? '<button type="button" class="sheet-tool is-accent" data-sheet-read>' + _WCM_ICONS.sparkle + esc(_T("sheet_photo_read")) + "</button>" : "");
    return frame + '<div class="sheet-tile-body"><div class="sheet-tile-t" aria-live="polite">' + esc(photo.busy ? (photo.status || "") : _T("sheet_photo_ready")) + "</div>" +
      '<div class="sheet-tools">' + tools + "</div></div>";
  }

  // The slot picker: one chip per cellar with its free slots, and the
  // cellar as a small cabinet in its own finish where free slots are
  // buttons and taken ones show their wine. The planned slots are numbered
  // (1, 2, 3 for three bottles); below, where that is and how many bottles.
  // o: cellarId, sel (the chosen slot), qty, ownId and from (edit mode).
  _renderSlotPicker(o) {
    var self = this;
    var esc = this._escape.bind(this);
    var cellars = this._sortedCellars();
    if (!cellars.length) {
      return '<div class="pk-empty">' + _WCM_ICONS.alert + "<div><b>" + esc(_T("add_first_cellar")) + "</b></div>" +
        '<div class="pk-empty-a"><button type="button" class="btn primary" data-sheet-new-cellar>' + _WCM_ICONS.plus + "<span>" + esc(_T("pick_new_cellar")) + "</span></button></div></div>";
    }
    var cellar = this._cellarById(o.cellarId) || cellars[0];
    if (!o.ownId && !this._findFreeSlot()) {
      return '<div class="pk-empty"><div><b>' + esc(_T("pick_no_free")) + "</b><span>" + esc(_T("pick_no_free_sub")) + '</span></div><div class="pk-empty-a">' +
        '<button type="button" class="btn" data-sheet-edit-cellar="' + esc(cellar.id) + '">' + _WCM_ICONS.plus + "<span>" + esc(_T("pick_add_shelves_to", { name: cellar.name || _T("cellar") })) + "</span></button>" +
        '<button type="button" class="btn" data-sheet-new-cellar>' + _WCM_ICONS.plus + "<span>" + esc(_T("pick_new_cellar")) + "</span></button></div></div>";
    }
    var order = this._slotOrder(cellar.id, o.ownId);
    var freeCount = order.filter(function (s) { return s.free; }).length;
    var qty = o.ownId ? 1 : Math.max(1, Math.min(o.qty || 1, freeCount || 1));
    var plan = o.ownId ? (o.sel && o.sel.shelf_id ? [o.sel] : []) : this._planSlots(cellar.id, o.sel, qty);
    var planAt = {};
    plan.forEach(function (s, i) { planAt[self._slotKey(s)] = i + 1; });
    // The one slot in the Tab order (arrow keys reach the others).
    var firstFree = order.find(function (s) { return s.free; });
    var focusKey = plan.length ? this._slotKey(plan[0]) : firstFree ? this._slotKey(firstFree) : "";

    var tabs = '<div class="pk-tabs" role="group" aria-label="' + esc(_T("cellar")) + '">' + cellars.map(function (c) {
      var free = self._slotOrder(c.id, o.ownId).filter(function (s) { return s.free; }).length;
      var on = c.id === cellar.id;
      var color = self._safeColor(c.bg_color);
      return '<button type="button" aria-pressed="' + on + '" class="pk-tab' + (on ? " on" : "") + '" data-pick-cellar="' + esc(c.id) + '"' + (free || on ? "" : " disabled") + ">" +
        '<span class="mat-chip ' + self._cabinetMaterial(color) + '"' + (color ? ' style="--cellar:' + color + '"' : "") + "></span>" + esc(c.name || _T("cellar")) +
        '<span class="pk-tab-n">' + esc(free ? _TN("pick_free", free) : _T("pick_full")) + "</span></button>";
    }).join("") + "</div>";

    var slotIndex = new Map();
    order.forEach(function (s) { if (s.occupant) slotIndex.set(self._slotKey(s), s.occupant); });
    var shelves = this._getSortedShelves(cellar);
    var shelvesHtml = this._renderMiniShelves(shelves, slotIndex, {
      tags: true,
      head: function (shelf, i) {
        var free = order.filter(function (s) { return s.free && String(s.shelf_id) === String(shelf.id); }).length;
        return '<div class="mm-head"><span class="mm-n">' + (i + 1) + '</span><b>' + esc(shelf.name || _T("shelf_n", { n: i + 1 })) + '</b><span class="mm-free">' +
          esc(_TN("pick_free", free)) + "</span></div>";
      },
      dot: function (shelf, lane, pos, occupant, i) {
        var key = String(shelf.id) + "|" + lane + "|" + pos;
        var own = !!occupant && !!o.ownId && occupant.id === o.ownId;
        if (occupant && !own) {
          var wine = [occupant.wine_name || _T("unnamed_wine"), occupant.vintage].filter(Boolean).join(" ");
          return '<span class="mm-dot filled" style="--type:' + self._wineSurfaceColor(occupant.wine_type) + '" title="' + esc(wine) + '" data-occupant="' + esc(wine) + '"></span>';
        }
        var n = planAt[key] || 0;
        var shelfRef = self._shelfRef(shelf, i + 1);
        var aria = _T(own ? "pick_slot_current" : "pick_slot_free", { shelf: shelfRef, lane: self._laneLabel(lane), pos: pos });
        return '<button type="button" class="mm-dot free' + (own ? " own" : "") + (n === 1 ? " sel" : n ? " queued" : "") + '" data-pick-slot="' + esc(key) + '"' +
          ' aria-label="' + esc(aria) + '" aria-pressed="' + (n ? "true" : "false") + '" tabindex="' + (key === focusKey ? "0" : "-1") + '"' +
          (own ? ' style="--type:' + self._wineSurfaceColor(occupant.wine_type) + '"' : "") + ">" +
          (n ? (qty > 1 ? '<span class="mm-num">' + n + "</span>" : _WCM_ICONS.check) : "") + "</button>";
      }
    });

    var foot = '<div class="pk-foot"><div class="pk-read" data-pick-read aria-live="polite">' + _WCM_ICONS.pin + "<span data-pick-read-t>" + esc(this._planText(plan, o)) + "</span></div>" +
      (o.ownId ? "" :
        '<div class="pk-qty"><span class="pk-qty-l" id="wcm-l-qty">' + esc(_T("pick_bottles")) + '</span><div class="stepper" role="group" aria-labelledby="wcm-l-qty">' +
        '<button type="button" class="stepper-b" data-pick-qty="-1" aria-label="' + esc(_T("pick_qty_less")) + '"' + (qty <= 1 ? " disabled" : "") + ">" + _WCM_ICONS.minus + "</button>" +
        '<output class="stepper-v" data-pick-qty-v aria-live="polite">' + qty + "</output>" +
        '<button type="button" class="stepper-b" data-pick-qty="1" aria-label="' + esc(_T("pick_qty_more")) + '"' + (qty >= freeCount ? " disabled" : "") + ">" + _WCM_ICONS.plus + "</button>" +
        "</div></div>") +
      "</div>";
    var hint = '<div class="pk-hint">' + esc(o.ownId ? _T("pick_hint_edit") : qty > 1 ? _T("pick_hint_n", { n: qty }) : _T("pick_hint")) + "</div>";
    return '<div class="pk" data-pick-cellar-id="' + esc(cellar.id) + '">' + tabs +
      '<div class="pk-cab">' + this._renderCabinet(cellar, shelvesHtml, "mini picker", this._miniSpan(shelves)) + "</div>" + foot + hint + "</div>";
  }

  // "Kitchen › Whites (2) › Front · 3", or for several bottles
  // "Kitchen › Whites (2) · Front 3, 4 · Back 1".
  _planText(plan, o) {
    var self = this;
    if (!plan || !plan.length || !plan[0].shelf_id) return _T("sheet_err_no_slot");
    var first = Object.assign({ cellar_id: o && o.cellarId }, plan[0]);
    if (plan.length === 1) {
      var text = this._slotWhere(first);
      var from = o && o.from;
      if (from && !this._sameSlot(Object.assign({ cellar_id: from.cellar_id }, from), first)) {
        text += " · " + _T("pick_move_from", { from: this._slotWhere(from) });
      }
      return text;
    }
    var cellar = this._cellarById(first.cellar_id);
    var groups = [];
    var byShelf = {};
    plan.forEach(function (s) {
      var name = self._shelfLabel(cellar, s.shelf_id);
      if (!byShelf[name]) {
        byShelf[name] = { lanes: {}, order: [] };
        groups.push(name);
      }
      var g = byShelf[name];
      if (!g.lanes[s.lane]) {
        g.lanes[s.lane] = [];
        g.order.push(s.lane);
      }
      g.lanes[s.lane].push(s.position);
    });
    return (cellar ? (cellar.name || _T("cellar")) + " › " : "") + groups.map(function (name) {
      var g = byShelf[name];
      return name + " · " + g.order.map(function (lane) { return self._laneLabel(lane) + " " + g.lanes[lane].join(", "); }).join(" · ");
    }).join(" — ");
  }

  // The drinking window as a small timeline, with the status glyph and a
  // plain sentence.
  _renderWindowTimeline(from, to) {
    var esc = this._escape.bind(this);
    var now = new Date().getFullYear();
    var start = /^\d{4}$/.test(String(from).trim()) ? Number(from) : null;
    var stop = /^\d{4}$/.test(String(to).trim()) ? Number(to) : null;
    if (start === null || stop === null || start > stop) {
      return '<div class="sheet-tl is-none" style="--status:var(--wcm-none)"><div class="sheet-tl-track"></div>' +
        '<div class="sheet-tl-st">' + this._bottleGlyph("none") + "<span>" + esc(_T("sheet_win_none")) + "</span></div></div>";
    }
    var status = this._agingStatus({ aging_start_year: start, aging_end_year: stop });
    var lo = Math.min(start, now) - 1;
    var hi = Math.max(stop, now) + 1;
    var span = hi - lo + 1;
    function pct(x) { return ((x / span) * 100).toFixed(2) + "%"; }
    var nowAt = ((now - lo + 0.5) / span) * 100;
    var text = status === "young" ? _T("sheet_win_young", { y: start })
      : status === "ready" ? _T("sheet_win_ready", { y: stop })
      : status === "peak" ? _T("sheet_win_peak")
      : _T("sheet_win_past", { y: stop });
    return '<div class="sheet-tl" style="--status:var(--wcm-' + status + ')">' +
      '<div class="sheet-tl-track"><span class="sheet-tl-span" style="left:' + pct(start - lo) + ";width:" + pct(stop - start + 1) + '"></span>' +
      '<span class="sheet-tl-now" style="left:' + nowAt.toFixed(2) + '%"></span></div>' +
      '<div class="sheet-tl-scale"><span>' + (nowAt < 16 ? "" : lo) + '</span><b style="left:' + nowAt.toFixed(2) + '%">' + now + "</b><span>" + (nowAt > 84 ? "" : hi) + "</span></div>" +
      '<div class="sheet-tl-st">' + this._bottleGlyph(status) + "<span>" + esc(text) + "</span></div></div>";
  }

  /* The sheet on screen. These update it in place (no re-render), so what
     is typed, the focus and the scroll never move. */

  // The sheet's form, if the dialog of modal m is still the one on screen
  // (an upload or a reading can finish after it was closed or reopened).
  _liveSheetForm(m) {
    var root = this.shadowRoot;
    if (!root || !m || this._modal !== m) return null;
    var form = root.querySelector("form[data-save-bottle]");
    return form && form.getAttribute("data-modal-key") === this._modalKey() ? form : null;
  }

  _sheetField(form, name) {
    return form.elements.namedItem(name);
  }

  _sheetFieldBox(form, name) {
    var key = name === "aging_start_year" || name === "aging_end_year" ? "window" : name;
    return form.querySelector('.sheet-fld[data-f="' + key + '"]');
  }

  _sheetLocation(form) {
    return {
      cellar_id: this._sheetField(form, "cellar_id").value,
      shelf_id: this._sheetField(form, "shelf_id").value,
      lane: this._sheetField(form, "lane").value || "front",
      position: Number(this._sheetField(form, "position").value) || 0
    };
  }

  _syncSheetTypes(form) {
    var control = this._sheetField(form, "wine_type");
    form.querySelectorAll(".sheet-type").forEach(function (el) {
      var input = el.querySelector("input");
      el.classList.toggle("on", !!input && input.checked);
    });
    var sheet = form.closest(".sheet");
    if (sheet) sheet.style.setProperty("--sheet-type", this._wineSurfaceColor((control && control.value) || "unset"));
  }

  _syncSheetStars(form, hover) {
    var value = Number((this._sheetField(form, "rating") || {}).value || 0);
    form.querySelectorAll(".sheet-star").forEach(function (el, i) {
      el.classList.toggle("on", hover ? false : i + 1 <= value);
      el.classList.toggle("hov", !!hover && i + 1 <= hover);
    });
    var none = form.querySelector(".sheet-star-none");
    if (none) none.classList.toggle("on", !value);
  }

  _syncSheetWindow(form) {
    var box = form.querySelector("[data-sheet-win]");
    if (box) box.innerHTML = this._renderWindowTimeline(this._sheetField(form, "aging_start_year").value, this._sheetField(form, "aging_end_year").value);
  }

  // "More details" says how many of its fields are filled.
  _syncSheetMore(form) {
    var self = this;
    var hint = form.querySelector("[data-sheet-more-h]");
    if (!hint) return;
    var n = ["region", "country", "varietal", "price", "aging_start_year", "notes", "serving_temp", "alcohol_pct", "barcode", "saq_url"].filter(function (name) {
      var el = self._sheetField(form, name);
      return el && String(el.value || "").trim();
    }).length;
    if (Number((this._sheetField(form, "rating") || {}).value || 0) > 0) n++;
    hint.textContent = n ? _T("sheet_more_filled", { n: n }) : _T("sheet_more_hint");
  }

  // "You already have 2 of this wine · Kitchen".
  _syncSheetDuplicate(form) {
    var self = this;
    var box = form.querySelector("[data-sheet-dup]");
    if (!box) return;
    var name = this._normalizeCompareValue(this._sheetField(form, "wine_name").value);
    var producer = this._normalizeCompareValue(this._sheetField(form, "producer").value);
    var ownId = this._sheetField(form, "bottle_id").value;
    var hits = name ? ((this._data && this._data.bottles) || []).filter(function (b) {
      var other = self._normalizeCompareValue(b.producer);
      return b.id !== ownId && self._normalizeCompareValue(b.wine_name) === name && (!producer || !other || other === producer);
    }) : [];
    if (!hits.length) {
      box.hidden = true;
      return;
    }
    var where = [];
    hits.forEach(function (b) {
      var cellar = self._cellarById(b.cellar_id);
      if (cellar && where.indexOf(cellar.name) < 0) where.push(cellar.name);
    });
    box.innerHTML = _WCM_ICONS.info + "<span>" + this._escape(_T("sheet_dup", { n: hits.length, where: where.join(", ") })) + "</span>";
    box.hidden = false;
  }

  // The header's destination line and the Save button's words.
  _syncSheetPlace(form) {
    var m = this._modal;
    if (!m) return;
    var isEdit = !!this._sheetField(form, "bottle_id").value;
    var qty = Number(this._sheetField(form, "qty").value) || 1;
    var dest = form.closest(".sheet").querySelector("[data-sheet-dest]");
    if (dest) {
      dest.textContent = this._sheetDestText(this._sheetLocation(form), qty, isEdit);
      dest.parentNode.hidden = !dest.textContent;
    }
    var label = form.querySelector("[data-sheet-save-label]");
    if (label && !m.saving) label.textContent = this._sheetSaveLabel(isEdit, qty);
  }

  _syncSheet(form) {
    this._syncSheetTypes(form);
    this._syncSheetStars(form);
    this._syncSheetWindow(form);
    this._syncSheetMore(form);
    this._syncSheetDuplicate(form);
    this._syncSheetPlace(form);
  }

  _refreshSheetTile(form) {
    var tile = form && form.querySelector("[data-sheet-tile]");
    if (!tile) return;
    var photo = (this._modal && this._modal.photo) || {};
    var path = this._sheetField(form, "image_path").value;
    var src = photo.preview || this._normalizeImagePath(path);
    tile.className = this._sheetTileClass(src, photo);
    tile.innerHTML = this._renderSheetTile(src, photo);
  }

  // Phones: the capture step on its own, then the whole form.
  _setSheetStage(form, stage) {
    var m = this._modal;
    if (!m) return;
    m.ui = m.ui || {};
    m.ui.stage = stage;
    var sheet = form.closest(".sheet");
    sheet.classList.remove("stage-capture", "stage-review");
    sheet.classList.add("stage-" + stage);
    this._placeToast();
  }

  // Fields filled by the label reading ("ai") or from a wine already in
  // the cellar ("cellar") carry a mark until the user changes them.
  _markSheetFields(form, names, source) {
    var ui = this._modal.ui || (this._modal.ui = {});
    ui.marks = ui.marks || {};
    var self = this;
    names.forEach(function (name) {
      var box = self._sheetFieldBox(form, name);
      if (!box) return;
      ui.marks[name] = source;
      box.classList.add("is-filled");
      var mark = box.querySelector(".sheet-mark");
      if (mark) mark.innerHTML = (source === "ai" ? _WCM_ICONS.sparkle : _WCM_ICONS.history) + self._escape(_T(source === "ai" ? "sheet_mark_ai" : "sheet_mark_cellar"));
    });
  }

  _unmarkSheetField(form, name) {
    var ui = this._modal && this._modal.ui;
    var box = this._sheetFieldBox(form, name);
    if (box) box.classList.remove("is-filled", "is-invalid", "is-shimmer");
    if (ui && ui.marks) {
      delete ui.marks[name];
      if (name === "aging_start_year" || name === "aging_end_year") {
        delete ui.marks.aging_start_year;
        delete ui.marks.aging_end_year;
      }
    }
  }

  // The note above the wine's fields: label reading in progress, what was
  // filled (with Undo), or why nothing was.
  _setSheetNote(form, note) {
    var ui = this._modal && (this._modal.ui || (this._modal.ui = {}));
    if (ui) ui.note = note || null;
    var box = form && form.querySelector("[data-sheet-note]");
    if (!box) return;
    if (!note) {
      box.hidden = true;
      box.innerHTML = "";
      return;
    }
    box.className = "sheet-note" + (note.kind === "warn" ? " is-warn" : "");
    var icon = note.spin ? '<span class="sheet-spin" aria-hidden="true"></span>'
      : note.kind === "warn" ? _WCM_ICONS.alert : note.kind === "cellar" ? _WCM_ICONS.history : _WCM_ICONS.sparkle;
    box.innerHTML = icon + '<span class="sheet-note-t" role="status">' + this._escape(note.text) + "</span>" +
      (note.undo ? '<button type="button" class="sheet-link" data-sheet-undo>' + this._escape(_T("undo")) + "</button>" : "");
    box.hidden = false;
  }

  _clearSheetErrors(form) {
    form.querySelectorAll(".sheet-err").forEach(function (el) {
      el.hidden = true;
      el.innerHTML = "";
    });
    form.querySelectorAll(".is-invalid").forEach(function (el) { el.classList.remove("is-invalid"); });
    form.querySelectorAll("[aria-invalid]").forEach(function (el) { el.removeAttribute("aria-invalid"); });
  }

  // An error next to its field (opened, scrolled to and focused). Returns
  // false so a validator can `return this._sheetFieldError(...)`.
  _sheetFieldError(form, name, message) {
    var key = name === "aging_start_year" || name === "aging_end_year" ? "window" : name;
    var box = form.querySelector('[data-err-for="' + key + '"]');
    var input = name === "place"
      ? form.querySelector(".mm-dot.sel, button.mm-dot.free, [data-pick-cellar]")
      : this._sheetField(form, name);
    if (input && !input.focus && input.length) input = input[0];
    var more = box && box.closest("details");
    if (more && !more.open) more.open = true;
    if (box) {
      box.innerHTML = _WCM_ICONS.alert + "<span>" + this._escape(message) + "</span>";
      box.hidden = false;
      var wrap = box.closest(".sheet-fld, .cb-row");
      if (wrap) wrap.classList.add("is-invalid");
    }
    if (input && input.setAttribute) {
      input.setAttribute("aria-invalid", "true");
      if (box) input.setAttribute("aria-describedby", box.id);
    }
    var target = input && input.focus ? input : box;
    if (target) {
      target.focus({ preventScroll: true });
      (box || target).scrollIntoView({ block: "center", behavior: this._prefersReducedMotion() ? "auto" : "smooth" });
    }
    return false;
  }

  // Fills the sheet from a suggestion (a known wine, the label reading).
  // Only fields the suggestion provides are touched; without overwrite only
  // empty ones ("not sure" type and no rating count as empty), so what the
  // user typed always survives. Returns the names of the fields it changed.
  _applySuggestionToBottleForm(form, suggestion, overwrite) {
    if (!form || !suggestion) return [];
    var changed = [];
    [
      "wine_name", "producer", "region", "country", "varietal", "vintage", "wine_type", "price", "serving_temp", "alcohol_pct",
      "image_path", "aging_start_year", "aging_end_year", "rating", "notes", "saq_url", "barcode"
    ].forEach(function (name) {
      var incoming = suggestion[name];
      if (incoming === undefined || incoming === null || String(incoming).trim() === "") return;
      var control = form.elements.namedItem(name);
      if (!control) return;
      var current = String(control.value == null ? "" : control.value).trim();
      var empty = current === "" || (name === "wine_type" && current === "unset") || (name === "rating" && current === "0");
      if (!overwrite && !empty) return;
      var next = String(incoming).trim();
      if (name === "wine_type") {
        next = next.toLowerCase() === "rose" ? "rosé" : next.toLowerCase();
        if (_WCM_SHEET_TYPES.indexOf(next) < 0) next = "other";
      }
      if (name === "rating") next = String(Math.max(0, Math.min(5, parseInt(next, 10) || 0)));
      if (current === next) return;
      control.value = next;
      var isGroup = typeof RadioNodeList !== "undefined" && control instanceof RadioNodeList;
      var target = isGroup ? form.querySelector('[name="' + name + '"]:checked') : control;
      if (target) {
        target.dispatchEvent(new Event("input", { bubbles: true }));
        target.dispatchEvent(new Event("change", { bubbles: true }));
      }
      changed.push(name);
    });
    return changed;
  }

  /* Suggestions while typing: the name field offers the wines already in
     the cellar or drunk before (history), matched on name, producer, region,
     country, grape or vintage; producer, region, country and grape offer
     values already used. A listbox driven by the arrow keys, Enter and
     Escape (which closes only the list). */

  _comboSuggestions(field, query) {
    var self = this;
    var data = this._data || {};
    var consumed = data.consumed_bottles || [];
    var all = (data.bottles || []).concat(consumed);
    var q = this._foldSearchText(query);
    if (!q) return [];
    function rank(a, b, key) {
      var sa = self._foldSearchText(a[key]).indexOf(q) === 0 ? 0 : 1;
      var sb = self._foldSearchText(b[key]).indexOf(q) === 0 ? 0 : 1;
      return sa - sb || (b.count || b.uses || 0) - (a.count || a.uses || 0) || String(a[key]).localeCompare(String(b[key]));
    }
    if (field === "wine_name") {
      var groups = {};
      var list = [];
      all.forEach(function (b) {
        var name = String(b.wine_name || "").trim();
        if (!name) return;
        var hay = self._foldSearchText([name, b.producer, b.region, b.country, b.varietal, b.vintage].join(" "));
        if (hay.indexOf(q) < 0) return;
        var key = self._normalizeCompareValue(name) + "|" + self._normalizeCompareValue(b.producer);
        var group = groups[key];
        if (!group) {
          group = groups[key] = { name: name, producer: b.producer || "", vintage: b.vintage || null, type: b.wine_type, image: b.image_path || "", country: b.country || "", count: 0, sample: b };
          list.push(group);
        }
        if (consumed.indexOf(b) < 0) {
          group.count++;
          group.sample = b;
        }
        if (b.vintage && (!group.vintage || b.vintage > group.vintage)) group.vintage = b.vintage;
        if (!group.image && b.image_path) group.image = b.image_path;
      });
      return list.sort(function (a, b) { return rank(a, b, "name"); }).slice(0, 8);
    }
    var seen = {};
    var out = [];
    all.forEach(function (b) {
      var value = String(b[field] || "").trim();
      if (!value) return;
      var key = self._foldSearchText(value);
      if (key.indexOf(q) < 0) return;
      if (seen[key]) {
        seen[key].uses++;
        return;
      }
      seen[key] = { value: value, uses: 1 };
      out.push(seen[key]);
    });
    return out.sort(function (a, b) { return rank(a, b, "value"); }).slice(0, 8);
  }

  // The matching part of a suggestion, underlined.
  _highlightMatch(text, query) {
    var s = String(text || "");
    var q = this._foldSearchText(query);
    if (!q) return this._escape(s);
    var flat = "";
    var map = [];
    for (var i = 0; i < s.length; i++) {
      var folded = this._foldSearchText(s[i]) || (s[i] === " " ? " " : "");
      for (var j = 0; j < folded.length; j++) {
        flat += folded[j];
        map.push(i);
      }
    }
    var at = flat.indexOf(q);
    if (at < 0) return this._escape(s);
    var a = map[at];
    var b = map[at + q.length - 1] + 1;
    return this._escape(s.slice(0, a)) + "<mark>" + this._escape(s.slice(a, b)) + "</mark>" + this._escape(s.slice(b));
  }

  _openCombo(form, input) {
    var self = this;
    var field = input.getAttribute("data-combo");
    var list = form.querySelector("#wcm-list-" + field);
    if (!list) return;
    var items = this._comboSuggestions(field, input.value);
    // Nothing to offer when the only match is what is already typed.
    if (field !== "wine_name" && items.length === 1 && this._foldSearchText(items[0].value) === this._foldSearchText(input.value)) items = [];
    this._combo = { field: field, items: items, active: -1 };
    if (!items.length) {
      this._closeCombo(form);
      return;
    }
    var q = input.value;
    list.innerHTML = items.map(function (item, i) {
      var id = "wcm-opt-" + field + "-" + i;
      if (field === "wine_name") {
        var img = item.image ? self._normalizeImagePath(item.image) : "";
        var sub = [item.producer, item.vintage, item.country].filter(Boolean).join(" · ");
        return '<div class="sheet-opt" role="option" id="' + id + '" data-i="' + i + '" aria-selected="false">' +
          '<span class="sheet-opt-thumb" style="--type:' + self._wineSurfaceColor(item.type) + '">' + (img ? '<img src="' + self._escape(img) + '" alt="" loading="lazy" onerror="this.remove()">' : "") + "</span>" +
          '<span class="sheet-opt-main"><span class="sheet-opt-t">' + self._highlightMatch(item.name, q) + "</span>" +
          (sub ? '<span class="sheet-opt-s">' + self._highlightMatch(sub, q) + "</span>" : "") + "</span>" +
          (item.count
            ? '<span class="sheet-opt-b">' + self._escape(_T("sheet_in_cellar", { n: item.count })) + "</span>"
            : '<span class="sheet-opt-b is-past">' + self._escape(_T("sheet_had_before")) + "</span>") +
          "</div>";
      }
      return '<div class="sheet-opt" role="option" id="' + id + '" data-i="' + i + '" aria-selected="false"><span class="sheet-opt-main"><span class="sheet-opt-t">' +
        self._highlightMatch(item.value, q) + "</span></span></div>";
    }).join("");
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
    input.removeAttribute("aria-activedescendant");
  }

  _closeCombo(form) {
    if (!form) return;
    form.querySelectorAll(".sheet-list").forEach(function (list) {
      list.hidden = true;
      list.innerHTML = "";
    });
    form.querySelectorAll("[data-combo]").forEach(function (input) {
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
    });
    this._combo = null;
  }

  _moveCombo(form, input, step) {
    var combo = this._combo;
    if (!combo || combo.field !== input.getAttribute("data-combo") || !combo.items.length) {
      this._openCombo(form, input);
      combo = this._combo;
      if (!combo) return;
    }
    combo.active = (combo.active + step + combo.items.length) % combo.items.length;
    form.querySelector("#wcm-list-" + combo.field).querySelectorAll(".sheet-opt").forEach(function (opt, i) {
      opt.classList.toggle("is-active", i === combo.active);
      opt.setAttribute("aria-selected", i === combo.active ? "true" : "false");
      if (i === combo.active) opt.scrollIntoView({ block: "nearest" });
    });
    input.setAttribute("aria-activedescendant", "wcm-opt-" + combo.field + "-" + combo.active);
  }

  // Picking a known wine fills only the empty fields (a typed price or note
  // stays), marks them "From cellar" and offers Undo.
  _pickCombo(form, index) {
    var combo = this._combo;
    if (!combo || !combo.items[index]) return;
    var item = combo.items[index];
    var field = combo.field;
    var input = this._sheetField(form, field);
    this._closeCombo(form);
    if (field !== "wine_name") {
      input.value = item.value;
      this._unmarkSheetField(form, field);
      this._syncSheetMore(form);
      this._syncSheetDuplicate(form);
      input.focus();
      return;
    }
    var source = item.sample || {};
    var suggestion = {
      producer: source.producer, region: source.region, country: source.country, varietal: source.varietal, vintage: source.vintage,
      wine_type: source.wine_type, price: source.price, image_path: source.image_path, aging_start_year: source.aging_start_year,
      aging_end_year: source.aging_end_year, serving_temp: source.serving_temp, alcohol_pct: source.alcohol_pct, saq_url: source.saq_url
    };
    var before = this._sheetValues(form, Object.keys(suggestion));
    input.value = item.name;
    this._sheetFilling = true;
    var changed;
    try {
      changed = this._applySuggestionToBottleForm(form, suggestion, false);
    } finally {
      this._sheetFilling = false;
    }
    this._afterSheetFill(form, changed, before, "cellar", _TN("sheet_note_cellar", this._filledCount(changed), {
      name: item.name + (item.vintage ? " " + item.vintage : "")
    }));
    input.focus();
  }

  // How many of the sheet's fields a fill changed, as the user sees them
  // (the drinking window's two years are one field, the photo is not one).
  _filledCount(changed) {
    var seen = {};
    changed.forEach(function (name) {
      if (name !== "image_path") seen[/^aging_/.test(name) ? "window" : name] = true;
    });
    return Object.keys(seen).length;
  }

  _sheetValues(form, names) {
    var self = this;
    var out = {};
    names.forEach(function (name) {
      var el = self._sheetField(form, name);
      if (el) out[name] = el.value;
    });
    return out;
  }

  // After a fill: marks, the note with Undo, the photo tile if the label
  // came along, and everything that follows the fields.
  _afterSheetFill(form, changed, before, source, text) {
    var ui = this._modal.ui || (this._modal.ui = {});
    var visible = changed.filter(function (n) { return n !== "image_path"; });
    if (changed.indexOf("image_path") >= 0) this._refreshSheetTile(form);
    if (visible.length) {
      ui.undo = { values: {} };
      changed.forEach(function (n) { ui.undo.values[n] = before[n]; });
      this._markSheetFields(form, visible, source);
      this._setSheetNote(form, { kind: source, text: text, undo: true });
    } else if (source === "ai") {
      this._setSheetNote(form, { kind: "info", text: _T("sheet_note_none") });
    }
    this._syncSheet(form);
  }

  _undoSheetFill(form) {
    var self = this;
    var ui = this._modal && this._modal.ui;
    if (!ui || !ui.undo) return;
    var values = ui.undo.values;
    this._sheetFilling = true;
    try {
      Object.keys(values).forEach(function (name) {
        var control = self._sheetField(form, name);
        if (!control) return;
        var value = values[name] == null ? "" : values[name];
        if (name === "wine_type" && !value) value = "unset";
        if (name === "rating" && !value) value = "0";
        control.value = value;
        self._unmarkSheetField(form, name);
      });
    } finally {
      this._sheetFilling = false;
    }
    if (Object.prototype.hasOwnProperty.call(values, "image_path")) this._refreshSheetTile(form);
    ui.undo = null;
    this._setSheetNote(form, null);
    this._syncSheet(form);
  }

  /* Photos. A picked or dropped photo is shrunk, uploaded and, when label
     reading is set up, read straight away. */

  async _handleSheetFile(form, file, kind) {
    var self = this;
    var m = this._modal;
    if (!m || !file) return;
    this._setFormError("");
    if (m.ui && m.ui.note && m.ui.note.kind === "warn") this._setSheetNote(form, null);
    if (file.type && file.type.indexOf("image/") !== 0) {
      this._setSheetNote(form, { kind: "warn", text: _T("file_not_image") });
      return;
    }
    if (kind === "barcode") {
      await this._readSheetBarcode(form, file);
      return;
    }
    this._setSheetStage(form, "review");
    var old = m.photo && m.photo.preview;
    // A photo picked while this one is still on its way replaces it: what
    // this one has left to do is dropped (m.photo is no longer photo).
    var photo = m.photo = this._startSheetUpload({ preview: URL.createObjectURL(file), busy: true, status: _T("sheet_st_preparing") });
    if (old && old.indexOf("blob:") === 0) URL.revokeObjectURL(old);
    function current() { return self._modal === m && m.photo === photo; }
    this._refreshSheetTile(form);
    try {
      var blob;
      try {
        blob = await _wcmDownscaleImage(file, 1600, 0.82);
      } catch (err) {
        throw Object.assign(new Error("format"), { photoFormat: true });
      }
      if (!current()) return;
      var previous = photo.preview;
      photo.preview = URL.createObjectURL(blob);
      URL.revokeObjectURL(previous);
      photo.status = _T("sheet_st_uploading");
      this._refreshSheetTile(this._liveSheetForm(m));
      var filename = String(file.name || "label").replace(/\.[a-z0-9]+$/i, "").replace(/[^\w.-]+/g, "_").slice(0, 60) + ".jpg";
      var result = await this._callWS({ type: "wine_cellar_manager/upload_label_image", data_base64: await _wcmBlobToBase64(blob), filename: filename });
      if (!current()) return;
      if (!result || !result.image_path) throw new Error(_T("unknown_error"));
      var live = this._liveSheetForm(m);
      if (live) this._sheetField(live, "image_path").value = result.image_path;
      photo.busy = false;
      photo.status = "";
      // Save pressed meanwhile: the bottle is being saved now, no reading.
      var saving = m.saving;
      photo.settle();
      this._refreshSheetTile(live);
      if (live && !saving && this._analysisAvailable()) await this._analyzeSheet(live, { image_path: result.image_path });
    } catch (err) {
      if (!current()) return;
      if (m.photo && m.photo.preview) URL.revokeObjectURL(m.photo.preview);
      m.photo = null;
      var form2 = this._liveSheetForm(m);
      if (form2) {
        var pathInput = this._sheetField(form2, "image_path");
        pathInput.value = pathInput.defaultValue || "";
        this._refreshSheetTile(form2);
      }
      this._setSheetNote(form2, {
        kind: "warn",
        text: err && err.photoFormat ? _T("sheet_err_photo_format") : _T("sheet_err_photo_upload", { error: this._friendlyError(err) })
      });
    } finally {
      photo.settle();
    }
  }

  // Marks a photo as on its way to the server: photo.uploaded settles once
  // it is there (or failed, or was replaced), so Save can wait for it
  // instead of saving the bottle without its picture.
  _startSheetUpload(photo) {
    var done;
    photo.uploading = true;
    photo.uploaded = new Promise(function (resolve) { done = resolve; });
    photo.settle = function () {
      photo.uploading = false;
      done();
    };
    return photo;
  }

  // A photo of an SAQ barcode: read the digits, then look the wine up.
  async _readSheetBarcode(form, file) {
    var self = this;
    var m = this._modal;
    this._setSheetStage(form, "review");
    this._setSheetNote(form, { kind: "info", spin: true, text: _T("sheet_st_barcode") });
    try {
      var blob = await _wcmDownscaleImage(file, 2000, 0.88);
      var filename = "temp_barcode_" + String(file.name || "scan").replace(/\.[a-z0-9]+$/i, "").replace(/[^\w.-]+/g, "_").slice(0, 40) + ".jpg";
      var upload = await this._callWS({ type: "wine_cellar_manager/upload_label_image", data_base64: await _wcmBlobToBase64(blob), filename: filename });
      var result = await this._callWS({ type: "wine_cellar_manager/unified_analyze", barcode: "", image_path: (upload && upload.image_path) || "" });
      var live = this._liveSheetForm(m);
      if (!live) return;
      var code = result && result.suggestion && result.suggestion.barcode;
      if (!code) {
        this._setSheetNote(live, { kind: "warn", text: (result && result.message) || _T("no_barcode_found") });
        return;
      }
      this._sheetField(live, "barcode").value = code;
      this._markSheetFields(live, ["barcode"], "ai");
      this._syncSheetMore(live);
      await this._analyzeSheet(live, { barcode: code });
    } catch (err) {
      console.error("Wine Cellar: barcode reading failed", err);
      this._setSheetNote(this._liveSheetForm(m), { kind: "warn", text: _T("barcode_extraction_failed") });
    }
  }

  // Label reading (or an SAQ lookup by barcode). The fields it may fill
  // shimmer meanwhile; the user can keep typing, since only fields still
  // empty when the answer comes are filled.
  async _analyzeSheet(form, source) {
    var self = this;
    var m = this._modal;
    if (!m || !form) return;
    // Only the latest reading counts; a label reading also ends when
    // another photo replaces the one being read.
    var token = m.readSeq = (m.readSeq || 0) + 1;
    m.analyzing = true;
    m.photo = m.photo || {};
    var photo = m.photo;
    function outdated() { return self._modal !== m || m.readSeq !== token; }
    function replaced() { return !!source.image_path && m.photo !== photo; }
    function clearReading() {
      var box = self._liveSheetForm(m);
      if (!box) return;
      box.querySelectorAll(".is-shimmer").forEach(function (el) { el.classList.remove("is-shimmer"); });
      self._setSheetNote(box, null);
    }
    if (source.image_path) {
      m.photo.busy = true;
      m.photo.status = _T("sheet_st_reading");
      this._refreshSheetTile(form);
    }
    this._setSheetNote(form, { kind: "info", spin: true, text: _T("sheet_note_reading") });
    ["wine_name", "producer", "vintage", "wine_type", "region", "country", "varietal"].forEach(function (name) {
      var el = self._sheetField(form, name);
      var box = self._sheetFieldBox(form, name);
      var empty = name === "wine_type" ? (!el || el.value === "unset") : !(el && String(el.value).trim());
      if (box && empty) box.classList.add("is-shimmer");
    });
    try {
      var result = await this._callWS({ type: "wine_cellar_manager/unified_analyze", image_path: source.image_path || "", barcode: source.barcode || "" });
      if (outdated()) return;
      if (replaced()) {
        clearReading();
        return;
      }
      var live = this._liveSheetForm(m);
      if (!live) return;
      live.querySelectorAll(".is-shimmer").forEach(function (box) { box.classList.remove("is-shimmer"); });
      var suggestion = result && result.suggestion;
      if (!suggestion) {
        this._setSheetNote(live, { kind: "warn", text: (result && result.message) || _T("sheet_note_none") });
        return;
      }
      var before = this._sheetValues(live, Object.keys(suggestion));
      this._sheetFilling = true;
      var changed;
      try {
        changed = this._applySuggestionToBottleForm(live, suggestion, false);
      } finally {
        this._sheetFilling = false;
      }
      this._sheetField(live, "analyzed_flag").value = "true";
      if (m.photo) m.photo.read = true;
      this._afterSheetFill(live, changed, before, "ai", _TN("sheet_note_ai", this._filledCount(changed)));
    } catch (err) {
      console.error("Wine Cellar: label reading failed", err);
      if (outdated()) return;
      if (replaced()) {
        clearReading();
        return;
      }
      var failed = this._liveSheetForm(m);
      if (failed) failed.querySelectorAll(".is-shimmer").forEach(function (box) { box.classList.remove("is-shimmer"); });
      this._setSheetNote(failed, { kind: "warn", text: _T("sheet_note_fail") });
    } finally {
      if (!outdated()) {
        m.analyzing = false;
        if (m.photo === photo) {
          photo.busy = false;
          photo.status = "";
        }
        this._refreshSheetTile(this._liveSheetForm(m));
      }
    }
  }

  // Turns the label photo a quarter and uploads it again.
  async _rotateSheetPhoto(form) {
    var m = this._modal;
    var path = this._sheetField(form, "image_path").value;
    var src = (m.photo && m.photo.preview) || this._normalizeImagePath(path);
    if (!src) return;
    var photo = m.photo = this._startSheetUpload(Object.assign({}, m.photo || {}, { busy: true, status: _T("sheet_st_uploading") }));
    var self = this;
    function current() { return self._modal === m && m.photo === photo; }
    this._refreshSheetTile(form);
    try {
      var blob = await _wcmDownscaleImage(src, 1600, 0.85, 90);
      if (!current()) return;
      var previous = photo.preview;
      photo.preview = URL.createObjectURL(blob);
      if (previous && previous.indexOf("blob:") === 0) URL.revokeObjectURL(previous);
      var result = await this._callWS({ type: "wine_cellar_manager/upload_label_image", data_base64: await _wcmBlobToBase64(blob), filename: "label_" + Date.now() + ".jpg" });
      if (!current()) return;
      var live = this._liveSheetForm(m);
      if (live && result && result.image_path) this._sheetField(live, "image_path").value = result.image_path;
    } catch (err) {
      if (!current()) return;
      this._setSheetNote(this._liveSheetForm(m), { kind: "warn", text: _T("sheet_err_photo_upload", { error: this._friendlyError(err) }) });
    } finally {
      photo.settle();
      if (current()) {
        photo.busy = false;
        photo.status = "";
        this._refreshSheetTile(this._liveSheetForm(m));
      }
    }
  }

  _removeSheetPhoto(form) {
    this._releaseSheetPhoto();
    this._modal.photo = null;
    this._sheetField(form, "image_path").value = "";
    this._refreshSheetTile(form);
    var pick = form.querySelector('[data-sheet-pick="camera"], [data-sheet-pick="library"]');
    if (pick) pick.focus();
  }

  // The preview of a photo not uploaded yet lives in a blob: URL.
  _releaseSheetPhoto() {
    var photo = this._modal && this._modal.photo;
    if (photo && photo.preview && photo.preview.indexOf("blob:") === 0) URL.revokeObjectURL(photo.preview);
  }

  /* Validation and saving. */

  // Checks the sheet and shows the first problem next to its field.
  _validateBottleForm(form) {
    var self = this;
    this._clearSheetErrors(form);
    if (!String(this._sheetField(form, "wine_name").value || "").trim()) return this._sheetFieldError(form, "wine_name", _T("sheet_err_name"));
    var years = ["vintage", "aging_start_year", "aging_end_year"];
    for (var i = 0; i < years.length; i++) {
      var year = String(this._sheetField(form, years[i]).value || "").trim();
      if (year && !/^\d{4}$/.test(year)) return this._sheetFieldError(form, years[i], _T("sheet_err_year"));
    }
    var from = String(this._sheetField(form, "aging_start_year").value || "").trim();
    var to = String(this._sheetField(form, "aging_end_year").value || "").trim();
    if (from && to && Number(from) > Number(to)) return this._sheetFieldError(form, "aging_end_year", _T("sheet_err_window"));
    var bad = ["price", "serving_temp", "alcohol_pct"].find(function (name) {
      var el = self._sheetField(form, name);
      return el && ((el.validity && el.validity.badInput) || (String(el.value).trim() && !Number.isFinite(Number(el.value))));
    });
    if (bad) return this._sheetFieldError(form, bad, _T("sheet_err_number"));
    if (!this._sheetField(form, "shelf_id").value) return this._sheetFieldError(form, "place", _T("sheet_err_no_slot"));
    return true;
  }

  // The slot and the essentials of a bottle about to be saved; "" when fine.
  _validateBottlePayload(payload) {
    if (!payload.cellar_id || !payload.shelf_id || (payload.lane !== "front" && payload.lane !== "back") ||
        !Number.isInteger(payload.position) || payload.position < 1) return _T("sheet_err_no_slot");
    if (!payload.wine_name || !String(payload.wine_name).trim()) return _T("sheet_err_name");
    var shelf = this._getShelfById(payload.cellar_id, payload.shelf_id);
    if (!shelf) return _T("err_shelf_missing");
    var capacity = payload.lane === "back" ? Number(shelf.capacity_back || 0) : Number(shelf.capacity_front || 0);
    if (capacity < 1 || payload.position > capacity) return _T("err_position_out_of_range");
    var conflict = ((this._data && this._data.bottles) || []).find(function (b) {
      return b.cellar_id === payload.cellar_id && b.shelf_id === payload.shelf_id && String(b.lane) === String(payload.lane) &&
        Number(b.position) === payload.position && b.id !== payload.bottle_id;
    });
    if (conflict) return _T("sheet_err_slot_taken", { name: conflict.wine_name || _T("unnamed_wine") });
    if (payload.aging_start_year !== null && payload.aging_end_year !== null && payload.aging_start_year > payload.aging_end_year) return _T("sheet_err_window");
    if (payload.rating !== null && (payload.rating < 0 || payload.rating > 5)) return _T("err_rating_range");
    return "";
  }

  // Saves the sheet: one bottle per planned slot (a quantity of 3 fills 3
  // free slots in order). opts.another keeps the sheet open, cleared, on the
  // next free slot. The new bottles pulse on the shelves and a toast says
  // where they went.
  async _saveBottleFromForm(form, opts) {
    opts = opts || {};
    var self = this;
    var m = this._modal;
    if (!m || m.saving) return;
    this._setFormError("");
    if (!this._validateBottleForm(form)) return;
    // A label photo still on its way to the server: wait for it, so the
    // bottle is saved with its picture (and the upload is not lost).
    if (m.photo && m.photo.uploading) {
      m.saving = true;
      form.querySelectorAll("[data-sheet-save]").forEach(function (b) { b.disabled = true; });
      form.setAttribute("aria-busy", "true");
      var waitLabel = form.querySelector("[data-sheet-save-label]");
      if (waitLabel) waitLabel.textContent = _T("sheet_wait_photo");
      while (m.photo && m.photo.uploading) await m.photo.uploaded;
      m.saving = false;
      if (this._modal !== m) return;
      form = this._liveSheetForm(m) || form;
      form.removeAttribute("aria-busy");
      form.querySelectorAll("[data-sheet-save]").forEach(function (b) { b.disabled = false; });
      this._syncSheetPlace(form);
      // The upload failed: its note says why; the user decides what next.
      if (!m.photo) return;
    }
    var fd = new FormData(form);
    function text(key) { return self._str(fd.get(key)).trim(); }
    var base = {
      type: "wine_cellar_manager/save_bottle",
      bottle_id: text("bottle_id") || undefined,
      cellar_id: text("cellar_id"),
      shelf_id: text("shelf_id"),
      lane: text("lane") || "front",
      position: this._intOrNull(fd.get("position")),
      wine_name: text("wine_name"),
      producer: text("producer"),
      region: text("region"),
      country: text("country"),
      varietal: text("varietal"),
      vintage: this._intOrNull(fd.get("vintage")),
      wine_type: text("wine_type") || "unset",
      price: this._floatOrNull(fd.get("price")),
      serving_temp: this._floatOrNull(fd.get("serving_temp")),
      alcohol_pct: this._floatOrNull(fd.get("alcohol_pct")),
      image_path: text("image_path"),
      barcode: text("barcode"),
      saq_url: text("saq_url"),
      aging_start_year: this._intOrNull(fd.get("aging_start_year")),
      aging_end_year: this._intOrNull(fd.get("aging_end_year")),
      // "None" is no rating at all, as a bottle never rated has.
      rating: this._intOrNull(fd.get("rating")) || null,
      notes: text("notes")
    };
    var isEdit = !!base.bottle_id;
    if (!isEdit) delete base.bottle_id;
    var qty = isEdit ? 1 : Math.max(1, parseInt(fd.get("qty"), 10) || 1);
    var start = { cellar_id: base.cellar_id, shelf_id: base.shelf_id, lane: base.lane, position: base.position };
    var slots = isEdit ? [start] : this._planSlots(base.cellar_id, start, qty);
    if (!isEdit && slots.length < qty) {
      var cellar = this._cellarById(base.cellar_id);
      return this._sheetFieldError(form, "place", _TN("sheet_err_not_enough", slots.length, { cellar: cellar ? cellar.name : "" }));
    }
    function at(slot) {
      return { cellar_id: slot.cellar_id || base.cellar_id, shelf_id: slot.shelf_id, lane: slot.lane, position: Number(slot.position) };
    }
    var problem = this._validateBottlePayload(Object.assign({}, base, at(slots[0])));
    if (problem) return this._sheetFieldError(form, problem === _T("sheet_err_name") ? "wine_name" : "place", problem);

    // Manual entry (no photo) keeps the next sheet on the typing step.
    var manual = !!(m.ui && m.ui.stage === "review" && !(m.photo && m.photo.preview) && !base.image_path);
    var buttons = form.querySelectorAll("[data-sheet-save]");
    var label = form.querySelector("[data-sheet-save-label]");
    m.saving = true;
    buttons.forEach(function (b) { b.disabled = true; });
    form.setAttribute("aria-busy", "true");
    if (label) label.textContent = _T("sheet_saving");
    var saved = [];
    var failure = null;
    var retries = 0;
    var lastTaken = null;
    function taken(err) { return /occupied/i.test(String((err && err.message) || err)); }
    for (var i = 0; i < slots.length; i++) {
      if (slots.length > 1 && label) label.textContent = _T("sheet_saving_n", { i: i + 1, n: slots.length });
      var payload = Object.assign({}, base, at(slots[i]));
      try {
        var result = await this._callWS(payload);
        saved.push(Object.assign({ saved_id: result && result.bottle_id }, payload));
      } catch (err) {
        // A later bottle's slot was taken meanwhile (another device): those
        // slots were picked for the user, so pick the next free ones again
        // and go on. The first slot is the user's own choice: it only
        // changes with their say (below).
        if (i > 0 && !isEdit && taken(err) && retries < 5) {
          retries++;
          lastTaken = err;
          var rest = [];
          try {
            await this._loadData(true);
            rest = this._planSlots(base.cellar_id, at(slots[i]), slots.length - i);
          } catch (loadErr) {
            console.error("Wine Cellar: reload during save failed", loadErr);
          }
          if (rest.length) {
            slots = slots.slice(0, i).concat(rest);
            i--;
            continue;
          }
        }
        failure = err;
        break;
      }
    }
    // Fewer free slots were left than bottles to save.
    if (!failure && saved.length < qty) failure = lastTaken || new Error(_T("unknown_error"));
    m.saving = false;
    try {
      await this._loadData(true);
    } catch (err) {
      console.error("Wine Cellar: reload after save failed", err);
    }

    if (failure && !saved.length) {
      console.error("Bottle save failed", failure);
      var live = this._liveSheetForm(m) || form;
      live.querySelectorAll("[data-sheet-save]").forEach(function (b) { b.disabled = false; });
      live.removeAttribute("aria-busy");
      // Taken meanwhile (another device): point at the next free slot.
      if (!isEdit && /occupied/i.test(String((failure && failure.message) || failure))) {
        var next = this._planSlots(base.cellar_id, start, 1)[0] || this._findFreeSlot();
        if (next) {
          this._sheetField(live, "cellar_id").value = next.cellar_id;
          this._sheetField(live, "shelf_id").value = next.shelf_id;
          this._sheetField(live, "lane").value = next.lane;
          this._sheetField(live, "position").value = next.position;
        }
        this._refreshSlotPicker(live);
        this._setFormError(_T("sheet_err_slot_moved"));
      } else {
        this._refreshSlotPicker(live);
        this._setFormError(_T("sheet_err_save", { error: this._friendlyError(failure) }));
      }
      this._syncSheetPlace(live);
      return;
    }

    var bottles = (this._data && this._data.bottles) || [];
    var ids = saved.map(function (p) {
      if (p.bottle_id) return p.bottle_id;
      var found = bottles.find(function (b) {
        return b.cellar_id === p.cellar_id && b.shelf_id === p.shelf_id && String(b.lane) === String(p.lane) && Number(b.position) === p.position;
      });
      return found ? found.id : p.saved_id || null;
    }).filter(Boolean);

    if (isEdit) {
      var fresh = bottles.find(function (b) { return b.id === base.bottle_id; });
      this._modal = { type: "bottle", uid: ++this._modalSeq, bottle: fresh || null, preset: {}, mode: "view", ui: {} };
      await this.render(true);
      this._showToast(_T("sheet_saved_edit"));
      return;
    }

    if (failure) {
      // Only some were saved: the sheet stays open, all its details kept,
      // for the ones left, planned on the next free slots.
      var open = this._liveSheetForm(m) || form;
      var left = qty - saved.length;
      var after = this._nextFreeSlot(base.cellar_id, at(saved[saved.length - 1]));
      open.querySelectorAll("[data-sheet-save]").forEach(function (b) { b.disabled = false; });
      open.removeAttribute("aria-busy");
      this._sheetField(open, "qty").value = left;
      if (after) {
        this._sheetField(open, "cellar_id").value = after.cellar_id;
        this._sheetField(open, "shelf_id").value = after.shelf_id;
        this._sheetField(open, "lane").value = after.lane;
        this._sheetField(open, "position").value = after.position;
      }
      this._refreshSlotPicker(open);
      this._syncSheetPlace(open);
      this._setFormError(_TN("sheet_err_partial_left", left, { i: saved.length, total: qty, error: this._friendlyError(failure) }));
      return;
    }
    var where = saved.length > 1 ? this._plannedWhere(saved.map(at)) : this._slotWhere(at(saved[0]));
    var message = saved.length > 1 ? _T("sheet_saved_n", { n: saved.length, where: where }) : _T("sheet_saved_one", { name: base.wine_name, where: where });
    var kind = "ok";
    var view = ids.length ? {
      label: _T("view"),
      run: function () {
        var b = ((self._data && self._data.bottles) || []).find(function (x) { return x.id === ids[0]; });
        // The next sheet may already hold a new bottle: ask before leaving it.
        if (b) self._confirmDiscard(function () { self._openBottleModal(b); });
      }
    } : null;
    this._pendingPulse = { ids: ids, focus: false };
    if (opts.another) {
      var last = saved[saved.length - 1];
      var next2 = this._nextFreeSlot(base.cellar_id, at(last));
      this._openBottleModal(null, Object.assign({ wine_type: "unset", rating: 0 },
        next2 ? { cellar_id: next2.cellar_id, shelf_id: next2.shelf_id, lane: next2.lane, position: next2.position } : { cellar_id: base.cellar_id }));
      if (manual) this._modal.ui.stage = "review";
      this._modal.focusName = true;
    } else {
      await this._closeModal();
    }
    this._showToast(message, { action: view, kind: kind });
  }

  /* The slot picker on screen. */

  _refreshSlotPicker(form, focusSelector) {
    var box = form && form.querySelector("[data-sheet-picker]");
    if (!box) return;
    var m = this._modal;
    var isEdit = !!(m && m.bottle && m.bottle.id);
    var loc = this._sheetLocation(form);
    var qty = Number(this._sheetField(form, "qty").value) || 1;
    var hadFocus = box.contains(this.shadowRoot.activeElement);
    var before = box.querySelector(".cabinet.picker .interior");
    var sameCellar = before && box.querySelector("[data-pick-cellar-id]").getAttribute("data-pick-cellar-id") === loc.cellar_id;
    box.innerHTML = this._renderSlotPicker({ cellarId: loc.cellar_id, sel: loc, qty: qty, ownId: isEdit ? m.bottle.id : null, from: isEdit ? m.bottle : null });
    this._fitSlotPicker(box, sameCellar ? before.scrollLeft : 0);
    var shown = box.querySelector("[data-pick-qty-v]");
    if (shown) this._sheetField(form, "qty").value = shown.textContent;
    if (focusSelector || hadFocus) {
      var target = (focusSelector && box.querySelector(focusSelector)) || box.querySelector(".mm-dot.sel") || box.querySelector(".pk-tab.on");
      if (target && !target.disabled) target.focus({ preventScroll: true });
    }
    var error = form.querySelector('[data-err-for="place"]');
    if (error) error.hidden = true;
    this._syncSheetPlace(form);
  }

  // When a row is too wide for the picker's column its shelves scroll
  // sideways inside it: this keeps where the user had scrolled, brings the
  // chosen slot into view once the picker is on screen and fades the edge
  // that hides more slots.
  _fitSlotPicker(box, scrollLeft) {
    var self = this;
    var interior = box && box.querySelector(".cabinet.picker .interior");
    if (this._pickerObserver) this._pickerObserver.disconnect();
    if (!interior) return;
    if (scrollLeft) interior.scrollLeft = scrollLeft;
    interior.addEventListener("scroll", function () { self._pickerEdges(interior); }, { passive: true });
    if (window.ResizeObserver) {
      if (!this._pickerObserver) {
        this._pickerObserver = new ResizeObserver(function (entries) {
          entries.forEach(function (entry) { self._revealPickerSlot(entry.target); });
        });
      }
      this._pickerObserver.observe(interior);
    }
    this._revealPickerSlot(interior);
  }

  _revealPickerSlot(interior) {
    if (!interior.clientWidth) return; // not on screen yet (photo step)
    var sel = interior.querySelector(".mm-dot.sel") || interior.querySelector(".mm-dot.own");
    if (!interior._wcmRevealed && sel && interior.scrollWidth > interior.clientWidth + 1) {
      var box = interior.getBoundingClientRect();
      var dot = sel.getBoundingClientRect();
      if (dot.left < box.left + 24 || dot.right > box.right - 24) interior.scrollLeft += dot.left + dot.width / 2 - (box.left + box.width / 2);
    }
    interior._wcmRevealed = true;
    this._pickerEdges(interior);
  }

  _pickerEdges(interior) {
    var max = interior.scrollWidth - interior.clientWidth;
    interior.classList.toggle("can-l", max > 1 && interior.scrollLeft > 1);
    interior.classList.toggle("can-r", max > 1 && interior.scrollLeft < max - 1);
  }

  _pickSheetSlot(form, key) {
    var parts = String(key).split("|");
    this._sheetField(form, "shelf_id").value = parts[0];
    this._sheetField(form, "lane").value = parts[1];
    this._sheetField(form, "position").value = parts[2];
    this._setFormError("");
    this._refreshSlotPicker(form, '[data-pick-slot="' + this._cssEscape(key) + '"]');
  }

  _pickSheetCellar(form, cellarId) {
    var m = this._modal;
    var own = m.bottle && m.bottle.id && m.bottle.cellar_id === cellarId ? m.bottle : null;
    var slot = own || this._findFreeSlot(cellarId);
    this._sheetField(form, "cellar_id").value = cellarId;
    this._sheetField(form, "shelf_id").value = slot ? slot.shelf_id : "";
    this._sheetField(form, "lane").value = slot ? slot.lane : "front";
    this._sheetField(form, "position").value = slot ? slot.position : "";
    this._refreshSlotPicker(form, '[data-pick-cellar="' + this._cssEscape(cellarId) + '"]');
  }

  _cssEscape(value) {
    return window.CSS && CSS.escape ? CSS.escape(value) : String(value).replace(/["\\]/g, "\\$&");
  }

  // Arrow keys move between the free slots of the picker (roving focus).
  _onPickerKey(form, e) {
    var keys = { ArrowLeft: 1, ArrowRight: 1, ArrowUp: 1, ArrowDown: 1, Home: 1, End: 1 };
    if (!keys[e.key]) return;
    var buttons = Array.prototype.slice.call(form.querySelectorAll("button.mm-dot"));
    var i = buttons.indexOf(e.target);
    if (i < 0) return;
    e.preventDefault();
    var next = null;
    if (e.key === "ArrowLeft") next = buttons[i - 1];
    else if (e.key === "ArrowRight") next = buttons[i + 1];
    else if (e.key === "Home") next = buttons[0];
    else if (e.key === "End") next = buttons[buttons.length - 1];
    else {
      var r = e.target.getBoundingClientRect();
      var cx = r.left + r.width / 2;
      var cy = r.top + r.height / 2;
      var best = Infinity;
      buttons.forEach(function (b) {
        if (b === e.target) return;
        var q = b.getBoundingClientRect();
        var dy = q.top + q.height / 2 - cy;
        if (e.key === "ArrowUp" ? dy > -4 : dy < 4) return;
        var score = Math.abs(dy) * 3 + Math.abs(q.left + q.width / 2 - cx);
        if (score < best) {
          best = score;
          next = b;
        }
      });
    }
    if (next) {
      buttons.forEach(function (b) { b.tabIndex = -1; });
      next.tabIndex = 0;
      next.focus();
    }
  }

  // Everything the sheet does, bound on its form (capture phase: the
  // dialog's controls stop their own clicks and keys from bubbling).
  _bindBottleSheet(form) {
    var self = this;
    var dupTimer = null;
    var m = this._modal;
    form.addEventListener("submit", function (e) { e.preventDefault(); });
    // A pressed suggestion must not take the focus from its field.
    form.addEventListener("pointerdown", function (e) {
      if (e.target.closest && e.target.closest(".sheet-opt")) e.preventDefault();
    }, true);
    form.addEventListener("click", function (e) {
      var t = e.target;
      var el;
      if (!t.closest) return;
      if ((el = t.closest(".sheet-opt"))) {
        e.preventDefault();
        self._pickCombo(form, Number(el.getAttribute("data-i")));
      } else if ((el = t.closest("[data-sheet-pick]"))) {
        e.preventDefault();
        var input = form.querySelector('[data-sheet-file="' + el.getAttribute("data-sheet-pick") + '"]');
        if (input) {
          input.value = "";
          input.click();
        }
      } else if (t.closest("[data-sheet-instead]")) {
        e.preventDefault();
        self._setSheetStage(form, "review");
        var name = self._sheetField(form, "wine_name");
        name.focus({ preventScroll: true });
        name.scrollIntoView({ block: "center" });
      } else if (t.closest("[data-sheet-rotate]")) {
        e.preventDefault();
        self._rotateSheetPhoto(form);
      } else if (t.closest("[data-sheet-remove]")) {
        e.preventDefault();
        self._removeSheetPhoto(form);
      } else if (t.closest("[data-sheet-read]")) {
        e.preventDefault();
        self._analyzeSheet(form, { image_path: self._sheetField(form, "image_path").value });
      } else if (t.closest("[data-sheet-lookup]")) {
        e.preventDefault();
        var code = String(self._sheetField(form, "barcode").value || "").replace(/\D/g, "");
        if (!code) self._sheetFieldError(form, "barcode", _T("provide_barcode_or_label"));
        else self._analyzeSheet(form, { barcode: code });
      } else if (t.closest("[data-sheet-undo]")) {
        e.preventDefault();
        self._undoSheetFill(form);
      } else if ((el = t.closest("[data-pick-cellar]"))) {
        e.preventDefault();
        if (!el.disabled) self._pickSheetCellar(form, el.getAttribute("data-pick-cellar"));
      } else if ((el = t.closest("[data-pick-slot]"))) {
        e.preventDefault();
        self._pickSheetSlot(form, el.getAttribute("data-pick-slot"));
      } else if ((el = t.closest("[data-occupant]"))) {
        // Touch has no hover: a tap on a taken slot says whose it is.
        var read = form.querySelector("[data-pick-read]");
        if (read) {
          read.classList.add("is-peek");
          read.querySelector("[data-pick-read-t]").textContent = _T("pick_occupied", { name: el.getAttribute("data-occupant") });
        }
      } else if ((el = t.closest("[data-pick-qty]"))) {
        e.preventDefault();
        if (el.disabled) return;
        var qty = self._sheetField(form, "qty");
        var step = el.getAttribute("data-pick-qty");
        qty.value = Math.max(1, (Number(qty.value) || 1) + Number(step));
        self._refreshSlotPicker(form, '[data-pick-qty="' + step + '"]');
        var again = form.querySelector('[data-pick-qty="' + step + '"]');
        if (again && again.disabled) {
          var other = form.querySelector("[data-pick-qty]:not(:disabled)");
          if (other) other.focus();
        }
      } else if ((el = t.closest("[data-sheet-save]"))) {
        e.preventDefault();
        self._saveBottleFromForm(form, { another: el.getAttribute("data-sheet-save") === "next" });
      } else if (t.closest("[data-sheet-new-cellar]")) {
        e.preventDefault();
        self._confirmDiscard(function () { self._openCellarModal(); });
      } else if ((el = t.closest("[data-sheet-edit-cellar]"))) {
        e.preventDefault();
        var cellar = self._cellarById(el.getAttribute("data-sheet-edit-cellar"));
        self._confirmDiscard(function () { self._openCellarModal(cellar); });
      }
    }, true);
    form.addEventListener("input", function (e) {
      var t = e.target;
      var name = t.name;
      if (!name) return;
      if (!self._sheetFilling) {
        self._unmarkSheetField(form, name);
        var error = form.querySelector('[data-err-for="' + (name.indexOf("aging_") === 0 ? "window" : name) + '"]');
        if (error) error.hidden = true;
        t.removeAttribute("aria-invalid");
        if (t.hasAttribute("data-combo")) self._openCombo(form, t);
      }
      if (name === "wine_name" || name === "producer") {
        clearTimeout(dupTimer);
        dupTimer = setTimeout(function () { self._syncSheetDuplicate(form); }, 150);
      }
      if (name === "aging_start_year" || name === "aging_end_year") self._syncSheetWindow(form);
      self._syncSheetMore(form);
    }, true);
    form.addEventListener("change", function (e) {
      var t = e.target;
      if (t.hasAttribute("data-sheet-file")) {
        self._handleSheetFile(form, t.files && t.files[0], t.getAttribute("data-sheet-file"));
        return;
      }
      if (t.name === "wine_type") {
        if (!self._sheetFilling) self._unmarkSheetField(form, "wine_type");
        self._syncSheetTypes(form);
      }
      if (t.name === "rating") {
        if (!self._sheetFilling) self._unmarkSheetField(form, "rating");
        self._syncSheetStars(form);
        self._syncSheetMore(form);
      }
    }, true);
    form.addEventListener("keydown", function (e) {
      var t = e.target;
      if (t.hasAttribute && t.hasAttribute("data-combo")) {
        var open = !!(self._combo && self._combo.field === t.getAttribute("data-combo") && self._combo.items.length);
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          self._moveCombo(form, t, e.key === "ArrowDown" ? 1 : -1);
          return;
        }
        if (e.key === "Enter" && open && self._combo.active >= 0) {
          e.preventDefault();
          self._pickCombo(form, self._combo.active);
          return;
        }
        if (e.key === "Tab" && open) self._closeCombo(form);
      }
      if (t.classList && t.classList.contains("mm-dot")) self._onPickerKey(form, e);
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        self._saveBottleFromForm(form, {});
        return;
      }
      if (e.key === "Enter" && t.tagName === "INPUT") e.preventDefault();
    }, true);
    form.addEventListener("focusout", function (e) {
      if (!e.target.hasAttribute || !e.target.hasAttribute("data-combo")) return;
      setTimeout(function () {
        var active = self.shadowRoot.activeElement;
        if (!active || !active.hasAttribute || !active.hasAttribute("data-combo")) self._closeCombo(form);
      }, 120);
    }, true);
    form.addEventListener("mouseover", function (e) {
      var star = e.target.closest && e.target.closest(".sheet-star");
      if (star) self._syncSheetStars(form, Array.prototype.indexOf.call(form.querySelectorAll(".sheet-star"), star) + 1);
      var taken = e.target.closest && e.target.closest("[data-occupant]");
      var read = form.querySelector("[data-pick-read]");
      if (taken && read) {
        read.classList.add("is-peek");
        read.querySelector("[data-pick-read-t]").textContent = _T("pick_occupied", { name: taken.getAttribute("data-occupant") });
      }
    }, true);
    form.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest(".sheet-star")) self._syncSheetStars(form);
      if (e.target.closest && e.target.closest("[data-occupant]")) {
        var read = form.querySelector("[data-pick-read]");
        if (!read) return;
        read.classList.remove("is-peek");
        var loc = self._sheetLocation(form);
        var isEdit = !!(m && m.bottle && m.bottle.id);
        var plan = isEdit ? [loc] : self._planSlots(loc.cellar_id, loc, Number(self._sheetField(form, "qty").value) || 1);
        read.querySelector("[data-pick-read-t]").textContent = self._planText(plan, { cellarId: loc.cellar_id, from: isEdit ? m.bottle : null });
      }
    }, true);
    var more = form.querySelector("details[data-sheet-more]");
    if (more) {
      more.addEventListener("toggle", function () {
        if (self._modal === m) (m.ui || (m.ui = {})).moreOpen = more.open;
      });
    }
    // Desktop: drop a photo on the label tile.
    function tileOf(e) { return e.target.closest && e.target.closest("[data-sheet-tile]"); }
    function hasFiles(e) { return e.dataTransfer && Array.prototype.indexOf.call(e.dataTransfer.types || [], "Files") >= 0; }
    form.addEventListener("dragover", function (e) {
      var tile = tileOf(e);
      if (tile && hasFiles(e)) {
        e.preventDefault();
        tile.classList.add("is-drag");
      }
    });
    form.addEventListener("dragleave", function (e) {
      var tile = tileOf(e);
      if (tile && !tile.contains(e.relatedTarget)) tile.classList.remove("is-drag");
    });
    form.addEventListener("drop", function (e) {
      var tile = tileOf(e);
      if (!tile || !hasFiles(e)) return;
      e.preventDefault();
      tile.classList.remove("is-drag");
      self._handleSheetFile(form, e.dataTransfer.files[0], "library");
    });

    // What the sheet showed before this paint: marks, the note, and
    // everything derived from the fields.
    var ui = m.ui || (m.ui = {});
    if (ui.marks) {
      Object.keys(ui.marks).forEach(function (name) { self._markSheetFields(form, [name], ui.marks[name]); });
    }
    // A "reading…" note only while the reading is still running.
    if (ui.note && (!ui.note.spin || m.analyzing)) this._setSheetNote(form, ui.note);
    this._syncSheet(form);
  }

  // Runs action now, or after "Discard your changes?" when the open form
  // has unsaved edits.
  _confirmDiscard(action) {
    if (!this._isDialogDirty()) {
      action();
      return;
    }
    this._showDialogConfirm({
      tone: "warning",
      title: _T("discard_title"),
      body: _T("discard_body"),
      cancelLabel: _T("keep_editing"),
      confirmLabel: _T("discard"),
      onConfirm: function () { return action(); }
    });
  }

  // Cancel in the edit form: back to the bottle, asking first when edited.
  _requestCancelEdit() {
    var self = this;
    this._confirmDiscard(function () { self._setBottleModalMode("view"); });
  }

  /* The cellar editor, a visual builder: name, frame finish (drawn as the
     material the cabinet gets), quick starts for a new cellar, and one row
     per shelf with −/+ steppers for its front and back slots, how many
     bottles it stores, up/down to reorder and Remove (blocked while it holds
     bottles). A live preview of the cabinet follows every change. Shelves
     are saved in the order shown. */

  // What a shelf holds: bottle count, last occupied position per row, and
  // its slots.
  _shelfOccupancy(shelfId) {
    var bottles = shelfId ? ((this._data && this._data.bottles) || []).filter(function (b) { return b.shelf_id === shelfId; }) : [];
    var out = { stored: bottles.length, maxFront: 0, maxBack: 0, index: this._buildSlotIndex(bottles) };
    bottles.forEach(function (b) {
      if (b.lane === "back") out.maxBack = Math.max(out.maxBack, Number(b.position) || 0);
      else out.maxFront = Math.max(out.maxFront, Number(b.position) || 0);
    });
    return out;
  }

  _capacityOf(value, fallback) {
    var n = parseInt(value, 10);
    return Number.isFinite(n) ? n : fallback;
  }

  // The cabinet as it will look: stored bottles in their type color, free
  // slots as rings. opts.heads adds each shelf's number, name and free count.
  _renderBuilderCabinet(rows, color, extraClass, opts) {
    var self = this;
    opts = opts || {};
    var index = new Map();
    var shelves = rows.map(function (row, i) {
      var occupancy = self._shelfOccupancy(row.id);
      occupancy.index.forEach(function (bottle, key) { index.set(key, bottle); });
      return {
        id: row.id || "new-" + i,
        name: row.name,
        stored: occupancy.stored,
        capacity_front: Math.max(0, self._capacityOf(row.capacity_front, 0)),
        capacity_back: Math.max(0, self._capacityOf(row.capacity_back, 0))
      };
    });
    var shelvesHtml = this._renderMiniShelves(shelves, index, {
      head: opts.heads ? function (shelf, i) {
        var free = Math.max(0, shelf.capacity_front + shelf.capacity_back - shelf.stored);
        return '<div class="mm-head"><span class="mm-n">' + (i + 1) + "</span><b>" + self._escape(shelf.name || _T("shelf_n", { n: i + 1 })) + '</b><span class="mm-free">' +
          self._escape(_TN("pick_free", free)) + "</span></div>";
      } : null,
      shelfClass: function (shelf, i) { return opts.highlight === i ? " current" : ""; },
      dot: function (shelf, lane, pos, occupant) {
        return occupant
          ? '<span class="mm-dot filled" style="--type:' + self._wineSurfaceColor(occupant.wine_type) + '"></span>'
          : '<span class="mm-dot"></span>';
      }
    });
    return this._renderCabinet({ bg_color: color }, shelvesHtml, "mini " + extraClass, this._miniSpan(shelves));
  }

  // "5 shelves · 40 slots · 28 stored".
  _builderStats(rows) {
    var self = this;
    var slots = 0;
    var stored = 0;
    rows.forEach(function (row) {
      slots += Math.max(0, self._capacityOf(row.capacity_front, 0)) + Math.max(0, self._capacityOf(row.capacity_back, 0));
      stored += self._shelfOccupancy(row.id).stored;
    });
    return [_TN("builder_shelves", rows.length), _TN("builder_slots", slots), _T("builder_stored", { n: stored })].join(" · ");
  }

  _builderRowsFromForm(form) {
    var self = this;
    return Array.prototype.map.call(form.querySelectorAll("[data-shelf-row]"), function (row) {
      function value(name) {
        var el = row.querySelector('[name="' + name + '"]');
        return el ? el.value : "";
      }
      return {
        id: value("shelf_id[]"),
        name: value("shelf_name[]"),
        capacity_front: self._capacityOf(value("capacity_front[]"), 0),
        capacity_back: self._capacityOf(value("capacity_back[]"), 0)
      };
    });
  }

  // One shelf row. Its steppers cannot go below the last occupied slot of
  // their row; Remove is blocked (with the reason) while it holds bottles.
  _renderShelfEditorRow(shelf, i, color) {
    var self = this;
    var esc = this._escape.bind(this);
    var occupancy = this._shelfOccupancy(shelf.id);
    var minFront = Math.max(1, occupancy.maxFront);
    var minBack = occupancy.maxBack;
    var front = Math.max(minFront, this._capacityOf(shelf.capacity_front, 6));
    var back = Math.max(minBack, this._capacityOf(shelf.capacity_back, 0));
    // A row wider than the usual limit (made before it existed) keeps its
    // width: its own size is its limit.
    function stepper(lane, value, min) {
      var max = Math.max(_WCM_MAX_ROW, value);
      var lower = lane === "front" ? 1 : 0;
      var hint = min > lower ? ' title="' + esc(_T("builder_min_hint", { n: min })) + '"' : "";
      var laneWord = _T(lane).toLowerCase();
      return '<div class="stepper small">' +
        '<button type="button" class="stepper-b" data-step="-1" aria-label="' + esc(_T("builder_fewer", { lane: laneWord })) + '"' + (value <= min ? " disabled" : "") + hint + ">" + _WCM_ICONS.minus + "</button>" +
        '<input class="stepper-v" type="number" inputmode="numeric" name="capacity_' + lane + '[]" min="' + min + '" max="' + max + '" value="' + value + '"' +
        ' aria-label="' + esc(_T(lane === "front" ? "builder_front_slots" : "builder_back_slots")) + '">' +
        '<button type="button" class="stepper-b" data-step="1" aria-label="' + esc(_T("builder_more", { lane: laneWord })) + '"' + (value >= max ? " disabled" : "") + ">" + _WCM_ICONS.plus + "</button></div>";
    }
    return '<li class="cb-row" data-shelf-row data-min-front="' + minFront + '" data-min-back="' + minBack + '" data-stored="' + occupancy.stored + '">' +
      '<input type="hidden" name="shelf_id[]" value="' + esc(shelf.id || "") + '">' +
      '<div class="cb-move"><button type="button" class="cb-ic" data-shelf-move="-1" aria-label="' + esc(_T("builder_up")) + '">' + _WCM_ICONS.up + "</button>" +
      '<button type="button" class="cb-ic" data-shelf-move="1" aria-label="' + esc(_T("builder_down")) + '">' + _WCM_ICONS.down + "</button></div>" +
      '<span class="cb-idx" aria-hidden="true">' + (i + 1) + "</span>" +
      '<div class="cb-fields"><div class="cb-top">' +
      '<input class="sheet-in cb-name" type="text" name="shelf_name[]" value="' + esc(shelf.name || "") + '" aria-label="' + esc(_T("shelf_name")) + '" placeholder="' + esc(_T("shelf_n", { n: i + 1 })) + '">' +
      '<span class="cb-stored' + (occupancy.stored ? "" : " is-empty") + '">' + (occupancy.stored ? "<i></i>" + esc(_T("builder_stored", { n: occupancy.stored })) : esc(_T("shelf_empty"))) + "</span></div>" +
      '<div class="cb-caps"><div class="cb-cap"><span>' + esc(_T("front")) + "</span>" + stepper("front", front, minFront) + "</div>" +
      '<div class="cb-cap"><span>' + esc(_T("back")) + "</span>" + stepper("back", back, minBack) + "</div>" +
      '<div class="cb-mini" data-shelf-mini aria-hidden="true">' + this._renderBuilderCabinet([{ id: shelf.id, capacity_front: front, capacity_back: back }], color, "tiny") + "</div></div>" +
      '<div class="sheet-err cb-row-err" hidden></div></div>' +
      '<button type="button" class="cb-ic cb-rm" data-remove-shelf aria-label="' + esc(_T("builder_remove")) + '"' +
      (occupancy.stored ? ' aria-disabled="true" title="' + esc(_TN("builder_remove_blocked", occupancy.stored)) + '"' : ' title="' + esc(_T("builder_remove")) + '"') + ">" + _WCM_ICONS.trash + "</button>" +
      "</li>";
  }

  _rowMax(input) {
    return Math.max(_WCM_MAX_ROW, this._capacityOf(input.max, _WCM_MAX_ROW));
  }

  _renderShelfEditorRows(shelves, color) {
    var self = this;
    return (shelves || []).map(function (shelf, i) { return self._renderShelfEditorRow(shelf, i, color); }).join("");
  }

  _renderCellarModal() {
    var self = this;
    var esc = this._escape.bind(this);
    var cellar = (this._modal && this._modal.cellar) || {};
    var isEdit = !!cellar.id;
    // What the user already typed (kept across re-renders) comes first.
    var draft = this._modalDraft();
    var typed = draft ? draft.values : null;
    var name = typed ? typed.name || "" : cellar.name || "";
    var color = typed ? typed.bg_color || "" : cellar.bg_color || "";
    var rows = draft ? draft.shelves : cellar.shelves && cellar.shelves.length ? this._getSortedShelves(cellar)
      : [{ id: "", name: _T("shelf_n", { n: 1 }), capacity_front: 6, capacity_back: 0 }];
    var order = cellar.display_order;
    if (order === undefined || order === null) {
      var cellars = (this._data && this._data.cellars) || [];
      order = cellars.length ? Math.max.apply(null, cellars.map(function (c) { return Number(c.display_order || 0); })) + 1 : 0;
    }
    // Where the cellar comes among the others: first, or after one of them
    // by name (a new one comes last).
    var sorted = this._sortedCellars();
    var others = sorted.filter(function (c) { return c.id !== cellar.id; });
    var place = isEdit ? sorted.findIndex(function (c) { return c.id === cellar.id; }) : -1;
    if (place < 0) place = others.length;
    var chosenPlace = typed && typed.cellar_position !== undefined ? Number(typed.cellar_position) : place;
    var finishes = _WCM_FINISHES.slice();
    var chosen = String(color).toLowerCase();
    // Any white the older editor stored is drawn as brushed steel: show it
    // as that finish, not as a custom colour.
    if (_WCM_MATERIALS[chosen] === "mat-steel") chosen = "#fbfbfbff";
    if (chosen && !finishes.some(function (f) { return f.value.toLowerCase() === chosen; })) finishes.push({ value: color, key: "builder_fin_custom" });
    var safe = this._safeColor(color);

    var head = '<header class="sheet-head ' + this._cabinetMaterial(safe) + '" data-builder-head' + (safe ? ' style="--cellar:' + safe + '"' : "") + ">" +
      '<span class="cb-hglyph mat-chip ' + this._cabinetMaterial(safe) + '" data-builder-glyph' + (safe ? ' style="--cellar:' + safe + '"' : "") + ' aria-hidden="true"><i></i></span>' +
      '<div class="sheet-htext"><h2 class="sheet-title" id="wcm-dialog-title" tabindex="-1" data-dialog-title>' + esc(_T(isEdit ? "edit_cellar" : "builder_title_new")) + "</h2>" +
      '<div class="sheet-dest"><span data-builder-sub>' + esc((isEdit ? (cellar.name || "") + " · " : "") + this._builderStats(rows)) + "</span></div></div>" +
      '<button class="icon-btn" type="button" data-close-modal aria-label="' + esc(_T("close")) + '">' + _WCM_ICONS.close + "</button></header>";

    var quick = isEdit ? "" :
      '<div class="cb-quick"><div class="sheet-sec-t">' + esc(_T("builder_quick")) + '</div><div class="cb-tpls">' +
      _WCM_CELLAR_TEMPLATES.map(function (t, i) {
        var sub = t.back
          ? _T("builder_tpl_sub2", { s: t.shelves, f: t.front, b: t.back })
          : _T("builder_tpl_sub", { s: t.shelves, f: t.front });
        return '<button type="button" class="cb-tpl" data-shelf-template="' + i + '">' +
          self._renderBuilderCabinet([{ id: "", capacity_front: Math.min(t.front, 6), capacity_back: Math.min(t.back, 5) }], color, "tiny") +
          '<span class="cb-tpl-t"><b>' + esc(_T(t.key)) + "</b><span>" + esc(sub) + "</span></span></button>";
      }).join("") + "</div></div>";

    var main = '<div class="cb-main">' +
      '<div class="sheet-fld" data-f="name"><div class="sheet-lrow"><label class="sheet-lbl" for="wcm-f-cellar-name">' + esc(_T("cellar_name")) + '<span class="sheet-req" aria-hidden="true">*</span></label></div>' +
      '<input id="wcm-f-cellar-name" class="sheet-in sheet-in-display" name="name" value="' + esc(name) + '" placeholder="' + esc(_T("builder_name_ph")) + '" required aria-required="true" autocomplete="off"' + (isEdit ? "" : " data-autofocus") + ">" +
      '<div class="sheet-err" id="wcm-err-name" data-err-for="name" hidden></div></div>' +
      '<div class="sheet-fld"><div class="sheet-lrow"><span class="sheet-lbl" id="wcm-l-finish">' + esc(_T("builder_finish")) + "</span></div>" +
      '<div class="cb-fins" role="radiogroup" aria-labelledby="wcm-l-finish">' + finishes.map(function (f) {
        var value = f.value.toLowerCase();
        var on = value === chosen;
        var hex = self._safeColor(f.value);
        return '<label class="cb-fin' + (on ? " on" : "") + '"><input class="sr-only" type="radio" name="bg_color" value="' + esc(f.value) + '"' + (on ? " checked" : "") + ">" +
          '<span class="mat-chip ' + self._cabinetMaterial(hex) + '"' + (hex ? ' style="--cellar:' + hex + '"' : "") + "></span>" + esc(_T(f.key)) + "</label>";
      }).join("") + "</div></div>" +
      (others.length ?
        '<div class="sheet-fld cb-pos"><div class="sheet-lrow"><label class="sheet-lbl" for="wcm-f-cellar-pos">' + esc(_T("builder_position")) + "</label></div>" +
        '<div class="sheet-sel"><select id="wcm-f-cellar-pos" class="sheet-in" name="cellar_position" data-initial="' + place + '">' +
        [_T("builder_pos_first")].concat(others.map(function (c) { return _T("builder_pos_after", { name: c.name || _T("cellar") }); })).map(function (label, i) {
          return '<option value="' + i + '"' + (i === chosenPlace ? " selected" : "") + ">" + esc(label) + "</option>";
        }).join("") + "</select></div></div>" : "") +
      quick +
      '<div class="cb-shelves"><div><div class="sheet-sec-t">' + esc(_T("shelves")) + '</div><div class="cb-sh-hint">' + esc(_T("builder_shelves_hint")) + "</div></div>" +
      '<ol class="cb-rows" data-shelf-rows>' + this._renderShelfEditorRows(rows, color) + "</ol>" +
      '<button type="button" class="cb-add" data-add-shelf-row>' + _WCM_ICONS.plus + esc(_T("add_shelf")) + "</button>" +
      '<div class="sheet-err" id="wcm-err-shelves" data-err-for="shelves" hidden></div></div>' +
      "</div>";

    var side = '<aside class="cb-side" aria-label="' + esc(_T("builder_preview")) + '"><div class="sheet-sec-t">' + esc(_T("builder_preview")) + "</div>" +
      '<div class="cb-prev" data-builder-preview>' + this._renderBuilderCabinet(rows, color, "preview", { heads: true }) + "</div>" +
      '<div class="cb-legend"><span><i class="is-stored"></i>' + esc(_T("builder_legend_stored")) + "</span><span><i></i>" + esc(_T("builder_legend_free")) + "</span></div>" +
      '<div class="cb-sum" data-builder-sum>' + esc(this._builderStats(rows)) + "</div></aside>";

    var foot = '<footer class="sheet-foot"><div class="form-error" role="alert"' + (this._formError ? "" : ' style="display:none"') + ">" + esc(this._formError || "") + "</div>" +
      '<div class="sheet-foot-row">' +
      (isEdit ? '<button type="button" class="sheet-danger" data-delete-cellar="' + esc(cellar.id) + '">' + _WCM_ICONS.trash + '<span class="sheet-danger-t">' + esc(_T("delete_cellar_confirm")) + "</span></button>" : "") +
      '<div class="sheet-foot-l"></div>' +
      '<button type="button" class="btn ghost sheet-cancel" data-close-modal>' + esc(_T("cancel")) + "</button>" +
      '<button type="button" class="btn primary" data-save-cellar-btn>' + _WCM_ICONS.check + "<span>" + esc(_T(isEdit ? "builder_save" : "builder_create")) + "</span></button>" +
      "</div></footer>";

    return '<div class="modal-backdrop sheet-backdrop" data-dialog-backdrop>' +
      '<div class="modal sheet builder is-edit" role="dialog" aria-modal="true" aria-labelledby="wcm-dialog-title">' + head +
      '<form class="sheet-form" data-save-cellar data-modal-key="' + esc(this._modalKey()) + '" novalidate autocomplete="off">' +
      '<input type="hidden" name="cellar_id" value="' + esc(cellar.id || "") + '"><input type="hidden" name="display_order" value="' + esc(order) + '">' +
      '<div class="sheet-scroll" data-dialog-scroll><div class="cb-grid">' + main + side + "</div></div>" + foot +
      "</form></div></div>";
  }

  // Adds a shelf row like the last one, shows it and puts the cursor in its
  // name.
  _appendShelfRow(form) {
    var list = form.querySelector("[data-shelf-rows]");
    if (!list) return;
    var rows = list.querySelectorAll("[data-shelf-row]");
    var last = rows[rows.length - 1];
    var front = last ? this._capacityOf(last.querySelector('[name="capacity_front[]"]').value, 6) : 6;
    var back = last ? this._capacityOf(last.querySelector('[name="capacity_back[]"]').value, 0) : 0;
    var color = (form.querySelector('[name="bg_color"]:checked') || {}).value || "";
    list.insertAdjacentHTML("beforeend", this._renderShelfEditorRow({ id: "", name: _T("shelf_n", { n: rows.length + 1 }), capacity_front: front, capacity_back: back }, rows.length, color));
    var row = list.lastElementChild;
    this._syncCellarBuilder(form);
    var nameInput = row.querySelector('[name="shelf_name[]"]');
    row.scrollIntoView({ block: "nearest", behavior: this._prefersReducedMotion() ? "auto" : "smooth" });
    nameInput.focus({ preventScroll: true });
    nameInput.select();
  }

  // Everything that follows the rows: numbers, reorder buttons, stepper
  // limits, the row minis, the preview, the counts and the finish.
  _syncCellarBuilder(form) {
    var self = this;
    var rows = this._builderRowsFromForm(form);
    var color = (form.querySelector('[name="bg_color"]:checked') || {}).value || "";
    var safe = this._safeColor(color);
    var list = form.querySelectorAll("[data-shelf-row]");
    var focused = -1;
    list.forEach(function (row, i) {
      if (row.contains(self.shadowRoot.activeElement)) focused = i;
      var index = row.querySelector(".cb-idx");
      if (index) index.textContent = i + 1;
      row.querySelector('[data-shelf-move="-1"]').disabled = i === 0;
      row.querySelector('[data-shelf-move="1"]').disabled = i === list.length - 1;
      row.querySelector('[name="shelf_name[]"]').placeholder = _T("shelf_n", { n: i + 1 });
      row.querySelectorAll(".stepper").forEach(function (stepper) {
        var input = stepper.querySelector("input");
        var value = self._capacityOf(input.value, 0);
        var min = self._capacityOf(input.min, 0);
        stepper.querySelector('[data-step="-1"]').disabled = value <= min;
        stepper.querySelector('[data-step="1"]').disabled = value >= self._rowMax(input);
      });
      var mini = row.querySelector("[data-shelf-mini]");
      if (mini) mini.innerHTML = self._renderBuilderCabinet([rows[i]], color, "tiny");
    });
    var preview = form.querySelector("[data-builder-preview]");
    if (preview) preview.innerHTML = this._renderBuilderCabinet(rows, color, "preview", { heads: true, highlight: focused });
    var stats = this._builderStats(rows);
    var sum = form.querySelector("[data-builder-sum]");
    if (sum) sum.textContent = stats;
    var sheet = form.closest(".sheet");
    var sub = sheet && sheet.querySelector("[data-builder-sub]");
    if (sub) sub.textContent = (this._sheetField(form, "cellar_id").value ? this._sheetField(form, "name").value + " · " : "") + stats;
    var glyph = sheet && sheet.querySelector("[data-builder-glyph]");
    if (glyph) {
      glyph.className = "cb-hglyph mat-chip " + this._cabinetMaterial(safe);
      glyph.style.setProperty("--cellar", safe || "");
    }
    // The top edge of the editor is the chosen finish too.
    var head = sheet && sheet.querySelector("[data-builder-head]");
    if (head) {
      head.className = "sheet-head " + this._cabinetMaterial(safe);
      head.style.setProperty("--cellar", safe || "");
    }
    form.querySelectorAll(".cb-fin").forEach(function (label) {
      var input = label.querySelector("input");
      label.classList.toggle("on", !!input && input.checked);
    });
  }

  _builderRowError(form, row, message, focusSelector) {
    var box = row.querySelector(".cb-row-err");
    row.classList.add("is-invalid");
    if (box) {
      box.innerHTML = _WCM_ICONS.alert + "<span>" + this._escape(message) + "</span>";
      box.hidden = false;
    }
    var target = focusSelector ? row.querySelector(focusSelector) : null;
    if (target) target.focus({ preventScroll: true });
    row.scrollIntoView({ block: "center", behavior: this._prefersReducedMotion() ? "auto" : "smooth" });
    return false;
  }

  _clearBuilderRowError(row) {
    if (!row) return;
    row.classList.remove("is-invalid");
    var box = row.querySelector(".cb-row-err");
    if (box) box.hidden = true;
  }

  // The shelves to save, top first: display_order is the row's place.
  _parseShelvesFromForm(form) {
    var self = this;
    var shelves = [];
    form.querySelectorAll("[data-shelf-row]").forEach(function (row, i) {
      function value(name) {
        var el = row.querySelector('[name="' + name + '"]');
        return el ? el.value : "";
      }
      var front = self._intOrNull(value("capacity_front[]"));
      var back = self._intOrNull(value("capacity_back[]"));
      if (back === null || back < 0) back = 0;
      shelves.push({
        id: self._str(value("shelf_id[]")).trim() || undefined,
        name: self._str(value("shelf_name[]")).trim() || _T("shelf_n", { n: i + 1 }),
        display_order: i,
        capacity_front: front,
        capacity_back: back,
        layout_mode: back > 0 ? "staggered" : "single"
      });
    });
    return shelves;
  }

  // Checks the editor and shows the first problem where it is.
  _validateCellarForm(form) {
    var self = this;
    this._clearSheetErrors(form);
    if (!String(this._sheetField(form, "name").value || "").trim()) return this._sheetFieldError(form, "name", _T("cellar_name_required"));
    var rows = form.querySelectorAll("[data-shelf-row]");
    if (!rows.length) return this._sheetFieldError(form, "shelves", _T("add_at_least_one_shelf"));
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var front = this._capacityOf(row.querySelector('[name="capacity_front[]"]').value, 0);
      var back = this._capacityOf(row.querySelector('[name="capacity_back[]"]').value, 0);
      var minFront = Number(row.getAttribute("data-min-front")) || 1;
      var minBack = Number(row.getAttribute("data-min-back")) || 0;
      var name = row.querySelector('[name="shelf_name[]"]').value || _T("shelf_n", { n: i + 1 });
      if (front < 1) return self._builderRowError(form, row, _T("shelf_front_capacity_min"), '[name="capacity_front[]"]');
      if (front < minFront) return self._builderRowError(form, row, _T("err_shelf_front_min", { shelf: name, n: minFront }), '[name="capacity_front[]"]');
      if (back < minBack) return self._builderRowError(form, row, _T("err_shelf_back_min", { shelf: name, n: minBack }), '[name="capacity_back[]"]');
    }
    return true;
  }

  // Saves the cellar. A refused save leaves the editor exactly as it is,
  // every edit included, with the reason next to Save.
  async _saveCellarFromForm(form) {
    var m = this._modal;
    if (!m || m.saving) return;
    this._setFormError("");
    if (!this._validateCellarForm(form)) return;
    var fd = new FormData(form);
    var button = form.querySelector("[data-save-cellar-btn]");
    var order = this._cellarOrderPlan(form, fd.get("cellar_id") || "", Number(fd.get("display_order") || 0));
    m.saving = true;
    if (button) button.disabled = true;
    try {
      await this._callWS({
        type: "wine_cellar_manager/save_cellar",
        cellar_id: fd.get("cellar_id") || undefined,
        name: String(fd.get("name") || "").trim(),
        shelves: this._parseShelvesFromForm(form),
        display_order: order.own,
        bg_color: String(fd.get("bg_color") || "").trim()
      });
    } catch (err) {
      console.error("Cellar save failed", err);
      m.saving = false;
      if (button) button.disabled = false;
      this._setFormError(_T("cellar_save_failed") + this._friendlyError(err));
      return;
    }
    // The other cellars that have to shift to make room, each unchanged but
    // for its order.
    var reorderFailed = false;
    for (var i = 0; i < order.others.length; i++) {
      var other = order.others[i];
      try {
        await this._callWS({
          type: "wine_cellar_manager/save_cellar",
          cellar_id: other.cellar.id,
          name: other.cellar.name,
          shelves: other.cellar.shelves || [],
          display_order: other.order,
          bg_color: other.cellar.bg_color || ""
        });
      } catch (err) {
        console.error("Cellar reorder failed", err);
        reorderFailed = true;
        break;
      }
    }
    m.saving = false;
    await this._loadData(true);
    await this._closeModal();
    if (reorderFailed) this._showToast(_T("builder_order_failed"), { kind: "warn" });
    else this._showToast(_T("builder_saved"));
  }

  // The display_order values that put the cellar where the Position field
  // says. Unchanged: its own order stays. Otherwise it takes a free number
  // between its new neighbours when there is one; if not, every cellar is
  // numbered again in the new order and the ones whose number changes are
  // listed in others (saved after it).
  _cellarOrderPlan(form, cellarId, current) {
    var field = form.querySelector('[name="cellar_position"]');
    var plan = { own: current, others: [] };
    if (!field || field.value === field.getAttribute("data-initial")) return plan;
    var others = this._sortedCellars().filter(function (c) { return c.id !== cellarId; });
    var at = Math.max(0, Math.min(others.length, Number(field.value) || 0));
    var before = others[at - 1];
    var after = others[at];
    var low = before ? Number(before.display_order || 0) : null;
    var high = after ? Number(after.display_order || 0) : null;
    if (low === null && high !== null && high >= 1) { plan.own = high - 1; return plan; }
    if (high === null && low !== null) { plan.own = low + 1; return plan; }
    if (low !== null && high !== null && high - low >= 2) { plan.own = low + 1; return plan; }
    var list = others.slice();
    list.splice(at, 0, null);
    list.forEach(function (c, i) {
      if (c === null) plan.own = i;
      else if (Number(c.display_order || 0) !== i) plan.others.push({ cellar: c, order: i });
    });
    return plan;
  }

  _bindCellarBuilder(form) {
    var self = this;
    var frame = 0;
    function sync() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(function () { self._syncCellarBuilder(form); });
    }
    form.addEventListener("submit", function (e) { e.preventDefault(); });
    form.addEventListener("click", function (e) {
      var t = e.target;
      var el;
      if (!t.closest) return;
      if ((el = t.closest("[data-step]"))) {
        e.preventDefault();
        if (el.disabled) return;
        var input = el.parentNode.querySelector("input");
        var value = self._capacityOf(input.value, 0) + Number(el.getAttribute("data-step"));
        input.value = Math.max(self._capacityOf(input.min, 0), Math.min(self._rowMax(input), value));
        self._clearBuilderRowError(el.closest(".cb-row"));
        self._syncCellarBuilder(form);
        if (el.disabled) {
          var sibling = el.parentNode.querySelector(".stepper-b:not(:disabled)");
          if (sibling) sibling.focus();
        }
      } else if ((el = t.closest("[data-shelf-move]"))) {
        e.preventDefault();
        var row = el.closest("[data-shelf-row]");
        var step = Number(el.getAttribute("data-shelf-move"));
        var neighbour = step < 0 ? row.previousElementSibling : row.nextElementSibling;
        if (!neighbour) return;
        if (step < 0) row.parentNode.insertBefore(row, neighbour);
        else row.parentNode.insertBefore(neighbour, row);
        self._syncCellarBuilder(form);
        var again = row.querySelector('[data-shelf-move="' + step + '"]');
        (again && !again.disabled ? again : row.querySelector('[data-shelf-move="' + -step + '"]')).focus();
      } else if ((el = t.closest("[data-remove-shelf]"))) {
        e.preventDefault();
        var target = el.closest("[data-shelf-row]");
        var stored = Number(target.getAttribute("data-stored")) || 0;
        if (stored) {
          self._builderRowError(form, target, _TN("builder_remove_blocked", stored));
          return;
        }
        if (form.querySelectorAll("[data-shelf-row]").length <= 1) {
          self._builderRowError(form, target, _T("cellar_needs_shelf"));
          return;
        }
        var next = target.nextElementSibling || target.previousElementSibling;
        target.remove();
        self._syncCellarBuilder(form);
        var focusTo = next && next.querySelector("[data-remove-shelf]");
        if (focusTo) focusTo.focus();
      } else if (t.closest("[data-add-shelf-row]")) {
        e.preventDefault();
        self._appendShelfRow(form);
      } else if ((el = t.closest("[data-shelf-template]"))) {
        e.preventDefault();
        var template = _WCM_CELLAR_TEMPLATES[Number(el.getAttribute("data-shelf-template"))];
        var color = (form.querySelector('[name="bg_color"]:checked') || {}).value || "";
        var rows = [];
        for (var i = 0; i < template.shelves; i++) {
          rows.push({ id: "", name: _T("shelf_n", { n: i + 1 }), capacity_front: template.front, capacity_back: template.back });
        }
        form.querySelector("[data-shelf-rows]").innerHTML = self._renderShelfEditorRows(rows, color);
        self._syncCellarBuilder(form);
      } else if (t.closest("[data-save-cellar-btn]")) {
        e.preventDefault();
        self._saveCellarFromForm(form);
      }
    }, true);
    form.addEventListener("input", function (e) {
      var t = e.target;
      self._clearBuilderRowError(t.closest && t.closest(".cb-row"));
      if (t.name === "name") {
        var error = form.querySelector('[data-err-for="name"]');
        if (error) error.hidden = true;
        var box = t.closest(".sheet-fld");
        if (box) box.classList.remove("is-invalid");
      }
      sync();
    }, true);
    form.addEventListener("change", function (e) {
      var t = e.target;
      if (t.classList && t.classList.contains("stepper-v")) {
        t.value = Math.max(self._capacityOf(t.min, 0), Math.min(self._rowMax(t), self._capacityOf(t.value, self._capacityOf(t.min, 0))));
      }
      sync();
    }, true);
    // The shelf being edited is lit in the preview.
    form.addEventListener("focusin", sync, true);
    form.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && e.target.tagName === "INPUT") e.preventDefault();
    }, true);
    this._syncCellarBuilder(form);
  }

  // The styles of a render: the shared sheet, adopted once, or else a
  // <style> at the top of the markup.
  _styleTag() {
    var sheet = _wcmStyleSheet();
    if (sheet && "adoptedStyleSheets" in this.shadowRoot) {
      if (this.shadowRoot.adoptedStyleSheets[0] !== sheet) this.shadowRoot.adoptedStyleSheets = [sheet];
      return "";
    }
    return "<style>" + _WCM_STYLES + _WCM_ICON_STYLES + "</style>";
  }

  async render(force) {
    if (!this.shadowRoot || !this._hass) return;


    // Sauvegarde persistante dans le navigateur pour survivre aux rafraîchissements globaux
    var scrollContainer = this.shadowRoot.querySelector(".main-scroll-content");
    if (scrollContainer) {
      window.sessionStorage.setItem("wine_cellar_scroll_top", scrollContainer.scrollTop);
    }

    // A render requested while one is in flight is remembered and replayed in
    // the finally block, instead of being silently dropped.
    if (this._rendering) {
      this._renderPending = true;
      this._renderPendingForce = this._renderPendingForce || !!force;
      return;
    }

    this._rendering = true;

    try {
      var data = await this._loadData(!!force);
      // The "every slot is taken" notice goes away once there is room again.
      if (this._toolbarNotice && this._findFreeSlot()) this._toolbarNotice = "";
      var snapshot = JSON.stringify({
        view: this._view || "cellars",
        modal: this._modal ? {
          type: this._modal.type,
          bottleId: this._modal.bottle ? this._modal.bottle.id : null,
          cellarId: this._modal.cellar ? this._modal.cellar.id : (this._modal.preset ? this._modal.preset.cellar_id : null),
          mode: this._modal.mode || "",
          key: this._modalKey()
        } : null,
        search: this._search || "",
        facets: this._facetKey(),
        formError: this._formError || "",
        actionMessage: this._actionMessage || "",
        scannerActive: this._scannerActive,
        sortColumn: this._sortColumn || "wine_name",
        sortOrder: this._sortOrder || "asc",
        config: this.config || null,
        viewingDuplicateManager: this._viewingDuplicateManager,
        foundSyntaxDuplicates: this._foundSyntaxDuplicates,
        duplicateManagerSearching: this._duplicateManagerSearching,
        duplicateManagerHasSearched: this._duplicateManagerHasSearched,
        copiedBottle: this._hasCopiedBottle(),
        toolbarNotice: this._toolbarNotice || "",
        // The data by version (see _loadData): no need to serialize it again.
        data: data === this._data ? this._dataVersion || 0 : JSON.stringify(data)
      });

      if (this._hasRendered && snapshot === this._lastSnapshot) {
        return;
      }

      // Cleared again if this render throws before the DOM is bound, so a
      // failed paint cannot leave a snapshot that blocks future renders.
      this._lastSnapshot = snapshot;
      this._hasRendered = true;
      var paintCompleted = false;

      // Keep what is typed in an open form; it is drawn back below.
      try {
        this._captureModalDraft();
      } catch (err) {
        console.error("Wine Cellar: could not keep the form's values", err);
      }
      this._rememberShelfHeights();

      var view = this._view || "cellars";
      var body = "";
      if (view === "cellars") {
        body = this._renderCellars(data);
      } else if (view === "compact") {
        body = this._renderCellars(data, "compact");
      } else if (view === "stats") {
        body = this._renderStats(data);
      } else {
        body = this._renderList(data);
      }
      var modal = this._modal ? (this._modal.type === "bottle" ? this._renderBottleModal(data) : this._renderCellarModal()) : "";
      var cleanupModal = this._renderCleanUpModal();

      // If the user is typing in the search box, give it back its focus and
      // caret after the rebuild.
      var focusedSearch = this.shadowRoot.activeElement;
      var searchCaret = null;
      if (focusedSearch && focusedSearch.matches && focusedSearch.matches("[data-search]")) {
        searchCaret = [focusedSearch.selectionStart, focusedSearch.selectionEnd];
      }

      // Stats has no search row, so no Filters panel either.
      if (view === "stats") this._filterPanelOpen = false;
      this.shadowRoot.innerHTML =
        this._styleTag() +
        '<ha-card><div class="wrap' + (this.config && this.config.background === "wood" ? " wood" : "") + '">' + _WCM_BOTTLE_SHADE + this._renderToolbar() +
        '<div class="main-scroll-content" id="wcm-view" role="tabpanel" aria-labelledby="wcm-tab-' + view + '">' + body + "</div>" + modal + cleanupModal + "</div></ha-card>";

      var self = this;
      var root = this.shadowRoot;

      this._combo = null;
      this._ensureWindowListeners();
      // This paint already reflects the current search (it is stored on
      // every keystroke), so a pending live-search update has nothing to add.
      if (this._searchTimer) {
        clearTimeout(this._searchTimer);
        this._searchTimer = null;
      }
      var newSearch = searchCaret && !this._modal ? root.querySelector("[data-search]") : null;
      if (newSearch) {
        newSearch.focus({ preventScroll: true });
        try {
          newSearch.setSelectionRange(searchCaret[0], searchCaret[1]);
        } catch (err) { /* selection not supported */ }
      }

      // Cabinets wider than the screen: overflow policy and each one's
      // remembered sideways scroll; then what the search does to the shelves
      // (pulled out for a back-row match, wide cabinets brought to their
      // first match), and the observers that keep both current.
      this._layoutCabinets();
      this._syncDepth({ instant: true });
      this._observeCabinets();

      var savedScroll = window.sessionStorage.getItem("wine_cellar_scroll_top");
      if (savedScroll !== null) {
        var restoreScrollTop = function () {
          var newScrollContainer = root.querySelector(".main-scroll-content");
          if (newScrollContainer) {
            newScrollContainer.scrollTop = Number(savedScroll);
          }
        };
        // A bottle about to be shown (located, just added or moved, lifted
        // for a move) is scrolled to from where the user was.
        if (this._pendingGoto || this._pendingLocate || this._pendingPulse || (this._moveSource && this._moveFocus)) restoreScrollTop();
        else setTimeout(restoreScrollTop, 10);
      }

      var scrollContent = root.querySelector(".main-scroll-content");
      if (scrollContent) {
        scrollContent.addEventListener("keydown", function (e) {
          // Bottle slots are divs with role="button"; let the keyboard open them too.
          if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("slot")) {
            e.preventDefault();
            e.target.click();
            return;
          }
          // Escape pushes back in the shelf that holds the focus.
          var pulled = e.key === "Escape" && e.target.closest
            ? e.target.closest(".cellars-grid:not(.compact) .shelf.open, .cellars-grid:not(.compact) .shelf.auto-open")
            : null;
          if (pulled) {
            e.preventDefault();
            e.stopPropagation();
            self._toggleShelf(pulled);
            var plate = pulled.querySelector(":scope > .pull-btn");
            if (plate) plate.focus();
          }
        });
        // A two-row shelf pulls out from its lip or the "Back row" plate in
        // it; the scroll chips move a wide cabinet by most of a screen.
        scrollContent.addEventListener("click", function (e) {
          var target = e.target && e.target.closest ? e.target : null;
          if (!target) return;
          var chip = target.closest(".hs-chip");
          if (chip) {
            e.preventDefault();
            e.stopPropagation();
            var interior = chip.closest(".interior");
            if (interior) {
              interior.scrollBy({ left: Number(chip.getAttribute("data-hs")) * interior.clientWidth * 0.8, behavior: self._prefersReducedMotion() ? "auto" : "smooth" });
            }
            return;
          }
          var lip = target.closest(".pull-btn[data-pull-shelf]") || target.closest(".cellars-grid:not(.compact) .shelf.two-row > .rail");
          if (!lip) return;
          e.preventDefault();
          e.stopPropagation();
          self._toggleShelf(lip.closest(".shelf"));
        });
      }

      var cancelPaste = root.querySelector("[data-cancel-paste]");
      if (cancelPaste) {
        cancelPaste.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._copiedBottleData = null;
          self._copyTimestamp = null;
          self.render(false);
        };
      }

      // View tabs. From the keyboard, focus stays on the tab just chosen.
      root.querySelectorAll("[data-view]").forEach(function (el) {
        el.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          var next = el.getAttribute("data-view");
          var byKeyboard = e.detail === 0;
          self._view = next;
          // Si on clique sur l'onglet Stats, on force un appel serveur (true) pour avoir des calculs 100% frais
          Promise.resolve(self.render(next === "stats")).then(function () {
            var tab = byKeyboard && root.querySelector('.toolbar [data-view="' + next + '"]');
            if (tab) tab.focus({ preventScroll: true });
          });
        };
      });

      var search = root.querySelector("[data-search]");
      if (search) {
        var searchBox = search.parentNode;
        search.addEventListener("click", function (e) { e.stopPropagation(); });
        search.addEventListener("focus", function (e) { e.stopPropagation(); }, true);
        // Live search. Results are applied to the page already on screen
        // (_applyFiltersInPlace), never through a full re-render, so the box
        // keeps focus and caret and the first click after typing is not lost
        // to a DOM rebuild.
        var applySearch = function (locate) {
          if (self._searchTimer) {
            clearTimeout(self._searchTimer);
            self._searchTimer = null;
          }
          self._search = search.value;
          self._applyFiltersInPlace({ locate: locate });
        };
        search.addEventListener("input", function (e) {
          e.stopPropagation();
          self._search = search.value;
          searchBox.classList.toggle("has-value", !!search.value);
          if (self._searchTimer) clearTimeout(self._searchTimer);
          self._searchTimer = setTimeout(function () {
            self._searchTimer = null;
            applySearch(true);
          }, 120);
        });
        // Enter / Shift+Enter: the next or previous match; Escape clears
        // the words, then the other filters; ArrowDown goes to the results.
        search.addEventListener("keydown", function (e) {
          e.stopPropagation();
          if (e.isComposing) return;
          if (e.key === "Enter") {
            e.preventDefault();
            if (self._searchTimer || self._search !== search.value) applySearch(false);
            self._stepMatch(e.shiftKey ? -1 : 1);
          } else if (e.key === "Escape" || e.key === "Esc") {
            if (search.value) {
              e.preventDefault();
              self._clearFilters("search");
            } else if (self._facetCount()) {
              e.preventDefault();
              self._clearFilters("filters");
            }
          } else if (e.key === "ArrowDown") {
            var chip = root.querySelector('[data-where-chips] [tabindex="0"]');
            if (chip) {
              e.preventDefault();
              chip.focus();
            }
          }
        });
        search.addEventListener("blur", function () {
          self._search = search.value;
        });
      }

      // All Bottles' sorting and crosshairs; Stats' links to the list.
      this._bindListView(root);
      this._bindStatsView(root);

      var addCellar = root.querySelector("[data-add-cellar]");
      if (addCellar) {
        addCellar.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._openCellarModal();
        };
      }
      var addBottle = root.querySelector("[data-add-bottle]");
      if (addBottle) {
        addBottle.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();

          // Preset the next free slot; when there is none, say so here
          // instead of opening a form that could only fail on Save.
          var freeSlot = self._findFreeSlot();
          if (!freeSlot) {
            self._toolbarNotice = (data.cellars && data.cellars.length) ? _T("all_slots_full") : _T("add_first_cellar");
            self._renderKeepingFocus("[data-add-bottle]");
            return;
          }
          self._toolbarNotice = "";
          self._openBottleModal(null, {
            cellar_id: freeSlot.cellar_id,
            shelf_id: freeSlot.shelf_id,
            lane: freeSlot.lane,
            position: freeSlot.position,
            wine_type: "unset",
            rating: 0
          });
        };
      }

      var dismissNotice = root.querySelector("[data-dismiss-notice]");
      if (dismissNotice) {
        dismissNotice.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._toolbarNotice = "";
          self._renderKeepingFocus("[data-add-bottle]");
        };
      }

      root.querySelectorAll("[data-new-bottle]").forEach(function (el) {
        el.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          var preset = JSON.parse(el.getAttribute("data-new-bottle"));
          var pastedName = "";
          
          // Sécurité temporelle : Si la copie a plus de 10 minutes (600 000 ms), on l'annule
          if (self._copiedBottleData && self._copyTimestamp && (Date.now() - self._copyTimestamp > 600000)) {
            self._copiedBottleData = null;
          }

          if (self._copiedBottleData) {
            // Sauvegarde explicite des données d'emplacement de la case vide cliquée
            var targetCellar = preset.cellar_id;
            var targetShelf = preset.shelf_id;
            var targetLane = preset.lane;
            var targetPos = preset.position;
            
            pastedName = self._copiedBottleData.wine_name || _T("unnamed_wine");
            // Fusion complète des caractéristiques copiées (incluant type, notes et évaluation)
            preset = Object.assign({}, self._copiedBottleData);
            
            // Restauration de la nouvelle destination physique
            preset.cellar_id = targetCellar;
            preset.shelf_id = targetShelf;
            preset.lane = targetLane;
            preset.position = targetPos;
            
            // Nettoyage immédiat du tampon pour éviter les collages accidentels suivants
            self._copiedBottleData = null;
            self._copyTimestamp = null;
          }
          
          // Through _openBottleModal, which clears any stale notice or error
          // (such as the "copied to memory" hint) before the form opens.
          self._openBottleModal(null, preset, pastedName ? _T("pasted_details", { name: pastedName }) : "");
        };
      });

      root.querySelectorAll("[data-edit-bottle]").forEach(function (el) {
        el.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          var id = el.getAttribute("data-edit-bottle");
          var bottle = null;
          (data.bottles || []).forEach(function (b) {
            if (b.id === id) bottle = b;
          });
          self._openBottleModal(bottle);
        };

        el.addEventListener("dragstart", function (e) {
          e.stopPropagation();
          // Reconstruction à l'abri du transcodage HTML des &quot;
          var dragMetaAttr = el.getAttribute("data-drag-source");
          // Si le texte contient des entités HTML issues de l'escape, on le nettoie
          var cleanMeta = dragMetaAttr || "";
          
          if (!cleanMeta && el.id) {
            // Sécurité de secours : identification par ID si présent
            cleanMeta = JSON.stringify({ bottle_id: el.getAttribute("data-edit-bottle") });
          }
          
          e.dataTransfer.setData("text/plain", cleanMeta);
          el.style.opacity = "0.4";
          // Every empty front position grows to a full-size drop target.
          var grid = el.closest(".cellars-grid");
          if (grid) grid.classList.add("dragging");
        });

        el.addEventListener("dragend", function (e) {
          e.stopPropagation();
          el.style.opacity = "";
          var grid = root.querySelector(".cellars-grid.dragging");
          if (grid) grid.classList.remove("dragging");
        });
      });

      root.querySelectorAll(".slot, .slot.empty, .slot.filled").forEach(function (el) {
        el.addEventListener("dragover", function (e) {
          e.preventDefault();
        });

        el.addEventListener("dragenter", function (e) {
          e.preventDefault();
          el.classList.add("drag-over");
        });

        el.addEventListener("dragleave", function (e) {
          if (!el.contains(e.relatedTarget)) el.classList.remove("drag-over");
        });

        el.addEventListener("drop", async function (e) {
          e.preventDefault();
          e.stopPropagation();
          el.classList.remove("drag-over");

          try {
            var rawSource = e.dataTransfer.getData("text/plain");
            if (!rawSource) return;
            
            var decodedSource = rawSource;
            var source = JSON.parse(decodedSource);

            var targetNew = el.getAttribute("data-new-bottle");
            var targetFilled = el.getAttribute("data-drag-source");
            var dest = null;

            if (targetNew) {
              dest = JSON.parse(targetNew);
            } else if (targetFilled) {
              dest = JSON.parse(targetFilled);
            }

            if (!dest) return;

            var sourceId = source.bottle_id || source.id;
            var destId = dest.bottle_id || dest.id;
            var destPosition = Number(dest.position);
            var sourcePosition = Number(source.position);

            if (!sourceId) return;

            if (source.cellar_id === dest.cellar_id && source.shelf_id === dest.shelf_id && source.lane === dest.lane && sourcePosition === destPosition) {
              return;
            }

            self._clearActionMessage();
            self._clearFormError();

            // Onto an empty slot: a move; onto a bottle: a swap (atomic on
            // the server). Either way an Undo follows.
            var moving = { bottle_id: String(sourceId) };
            if (targetNew) {
              await self._relocateBottle(moving, dest, null, false);
            } else if (targetFilled && destId) {
              await self._relocateBottle(moving, null, String(destId), false);
            }
          } catch (err) {
            console.error("Drag and drop sequence broke:", err);
          }
        });
      });

      root.querySelectorAll("[data-edit-cellar]").forEach(function (el) {
        el.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          var id = el.getAttribute("data-edit-cellar");
          var cellar = null;
          (data.cellars || []).forEach(function (c) {
            if (c.id === id) cellar = c;
          });
          self._openCellarModal(cellar);
        };
      });

      // X and Cancel close like Escape: a changed form asks first.
      root.querySelectorAll("[data-close-modal]").forEach(function (el) {
        el.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._requestCloseDialog();
        };
      });

      var enterEditBtn = root.querySelector("[data-enter-edit]");
      if (enterEditBtn) {
        enterEditBtn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._setBottleModalMode("edit");
        };
      }

      var cancelEditBtn = root.querySelector("[data-cancel-edit]");
      if (cancelEditBtn) {
        cancelEditBtn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._requestCancelEdit();
        };
      }

      var copyMemoryBtn = root.querySelector("[data-copy-memory-btn]");
      if (copyMemoryBtn && this._modal && this._modal.bottle) {
        copyMemoryBtn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._copiedBottleData = Object.assign({}, self._modal.bottle);
          delete self._copiedBottleData.id;
          delete self._copiedBottleData.cellar_id;
          delete self._copiedBottleData.shelf_id;
          delete self._copiedBottleData.lane;
          delete self._copiedBottleData.position;
          self._copyTimestamp = Date.now(); // Initialisation indispensable du timestamp
          // The paste banner on the cellar views says what to do next.
          self._closeModal();
        };
      }

      // Bottle dialog: "Show in cellar", "Find all" (searches for this wine),
      // "Add details" / "Add label photo" (open the form), and the "More"
      // menu of narrow screens (arrow keys move through it; Escape, a click
      // elsewhere or leaving it closes it).
      var locateBtn = root.querySelector("[data-locate-bottle]");
      if (locateBtn) {
        locateBtn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._showInCellar(locateBtn.getAttribute("data-locate-bottle"));
        };
      }
      var moveBtn = root.querySelector("[data-move-bottle]");
      if (moveBtn) {
        moveBtn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._startMove(moveBtn.getAttribute("data-move-bottle"));
        };
      }
      var findSimilar = root.querySelector("[data-bv-find-similar]");
      if (findSimilar) {
        findSimilar.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          var b = self._modal && self._modal.bottle;
          if (!b) return;
          self._search = b.wine_name || "";
          if (self._view === "stats") self._view = "cellars";
          self._pendingLocate = true;
          self._closeModal();
        };
      }
      var completeBtn = root.querySelector("[data-bv-complete]");
      if (completeBtn) {
        completeBtn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._setBottleModalMode("edit");
        };
      }
      root.querySelectorAll("[data-bv-add-photo]").forEach(function (btn) {
        btn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (!self._modal) return;
          self._modal.focusLabelPhoto = true;
          self._setBottleModalMode("edit");
        };
      });
      var moreToggle = root.querySelector("[data-bv-more]");
      var moreMenu = root.querySelector(".bv-menu");
      if (moreToggle && moreMenu) {
        moreToggle.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._setBottleMenu(!moreMenu.classList.contains("open"));
        };
        // Capture phase: the dialog's buttons stop their own keydown.
        moreMenu.addEventListener("keydown", function (e) {
          if (!moreMenu.classList.contains("open") || (e.key !== "ArrowDown" && e.key !== "ArrowUp")) return;
          e.preventDefault();
          var items = Array.prototype.slice.call(moreMenu.querySelectorAll("button"));
          var at = items.indexOf(root.activeElement);
          var next = e.key === "ArrowDown" ? (items[at + 1] || items[0]) : (items[at - 1] || items[items.length - 1]);
          next.focus();
        }, true);
        moreMenu.addEventListener("focusout", function (e) {
          if (moreMenu.classList.contains("open") && e.relatedTarget && !moreMenu.contains(e.relatedTarget) && e.relatedTarget !== moreToggle) {
            self._setBottleMenu(false);
          }
        });
        moreMenu.closest(".modal").addEventListener("click", function (e) {
          if (moreMenu.classList.contains("open") && !moreMenu.contains(e.target) && !moreToggle.contains(e.target)) self._setBottleMenu(false);
        }, true);
      }
      this._fitBottleFooter(moreToggle && moreToggle.closest(".bv-actions"));

      var modal = root.querySelector(".modal");
      if (modal) {
        modal.addEventListener("click", function (e) { e.stopPropagation(); });
        modal.addEventListener("mousedown", function (e) { e.stopPropagation(); });
        // Also covers fields added after this render (new shelf rows).
        modal.addEventListener("keydown", function (e) { e.stopPropagation(); });
      }

      // A tap on the dim backdrop closes the dialog, asking first when its
      // form has unsaved edits. Only a press that also started on the
      // backdrop counts, so a text selection released outside does not.
      root.querySelectorAll("[data-dialog-backdrop]").forEach(function (backdrop) {
        backdrop.addEventListener("pointerdown", function (e) {
          backdrop._pressStartedHere = e.target === backdrop;
        });
        backdrop.addEventListener("click", function (e) {
          if (e.target !== backdrop || backdrop._pressStartedHere === false) return;
          e.preventDefault();
          e.stopPropagation();
          self._requestCloseDialog();
        });
      });
      root.querySelectorAll(".modal input, .modal select, .modal textarea, .modal label, .modal button, .modal form").forEach(function (el) {
        el.addEventListener("click", function (e) { e.stopPropagation(); });
        el.addEventListener("mousedown", function (e) { e.stopPropagation(); });
        el.addEventListener("focus", function (e) { e.stopPropagation(); }, true);
        el.addEventListener("keydown", function (e) { e.stopPropagation(); });
        el.addEventListener("input", function () {
          if (typeof el.setCustomValidity === "function") {
            el.setCustomValidity("");
          }
          self._clearFormError();
        });
      });

      // The add / edit sheet and the cellar editor bind their own controls.
      var sheetForm = root.querySelector("form[data-save-bottle]");
      if (sheetForm) this._bindBottleSheet(sheetForm);
      this._fitSlotPicker(sheetForm && sheetForm.querySelector("[data-sheet-picker]"));
      var cellarForm = root.querySelector("form[data-save-cellar]");
      if (cellarForm) this._bindCellarBuilder(cellarForm);

      // Consume acts at once (Undo in the toast); Delete asks inside the
      // dialog first. The dialog closes once the action is done.
      var consumeBottle = root.querySelector("[data-consume-bottle]");
      if (consumeBottle) {
        consumeBottle.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._consumeBottle(consumeBottle.getAttribute("data-consume-bottle"));
        };
      }

      var delBottle = root.querySelector("[data-delete-bottle]");
      if (delBottle) {
        delBottle.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._deleteBottle(delBottle.getAttribute("data-delete-bottle"));
        };
      }

      var delCellar = root.querySelector("[data-delete-cellar]");
      if (delCellar) {
        delCellar.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          self._deleteCellar(delCellar.getAttribute("data-delete-cellar"));
        };
      }
      var openCleanup = root.querySelector("[data-open-cleanup-tool]");
      if (openCleanup) {
        openCleanup.onclick = function(e) {
          e.preventDefault(); e.stopPropagation();
          self._viewingDuplicateManager = true;
          self._foundSyntaxDuplicates = [];
          self._duplicateManagerHasSearched = false; // Réinitialise l'accueil à chaque ouverture
          self._rejectedCleanup = {};
          self._clearFormError();
          self._clearActionMessage();
          self.render(true); 
        };
      }

      if (this._viewingDuplicateManager) {
        var closeCleanup = function () {
          self._closeCleanupTool();
        };

        var closeBtn1 = root.querySelector("[data-close-cleanup-btn]");
        var closeBtn2 = root.querySelector("[data-close-cleanup-bottom]");
        var backdrop = root.querySelector("[data-close-cleanup-backdrop]");
        if (closeBtn1) closeBtn1.onclick = closeCleanup;
        if (closeBtn2) closeBtn2.onclick = closeCleanup;
        if (backdrop) {
          backdrop.onclick = closeCleanup;
          var cleanModalInner = backdrop.querySelector(".modal");
          if (cleanModalInner) {
            cleanModalInner.onclick = function(e) { e.stopPropagation(); };
          }
        }

        var searchCleanBtn = root.querySelector("[data-trigger-cleanup-search-btn]");
        if (searchCleanBtn) {
          searchCleanBtn.onclick = function(e) {
            e.preventDefault(); e.stopPropagation();
            self._duplicateManagerSearching = true;
            self._clearFormError();
            self._clearActionMessage();
            self.render(false);
            setTimeout(() => { self._findSyntaxAnomalies(); }, 200);
          };
        }

        var mergeAllBtn = root.querySelector("[data-cleanup-merge-all-btn]");
        if (mergeAllBtn) {
          // Asks inside the dialog, saying how much will change. Only the
          // sure pairs are merged (see _computeSyntaxDuplicates).
          mergeAllBtn.onclick = function(e) {
            e.preventDefault(); e.stopPropagation();
            var sure = (self._foundSyntaxDuplicates || []).filter(function (item) { return item.certain; });
            if (!sure.length) return;
            var touched = {};
            sure.forEach(function (item) {
              ((item.selectedValue === item.valueA ? item.bottlesB : item.bottlesA) || []).forEach(function (b) {
                touched[b.id] = true;
              });
            });
            self._showDialogConfirm({
              tone: "warning",
              title: _T("merge_all_title", { n: sure.length }),
              body: _T("merge_all_body", { m: Object.keys(touched).length }),
              confirmLabel: _T("cleanup_merge_all"),
              confirmClass: "primary",
              onConfirm: function () {
                self._cancelDialogConfirm();
                return self._executeMergeAllSyntax();
              }
            });
          };
        }

        // Look entries up by id, not by DOM position: rejecting an entry
        // splices the array, which would shift every later index.
        var findDuplicateById = function (id) {
          var list = self._foundSyntaxDuplicates || [];
          for (var i = 0; i < list.length; i++) {
            if (String(list[i].id) === String(id)) return list[i];
          }
          return null;
        };

        root.querySelectorAll("[data-select-variant-a]").forEach(function(btn) {
          btn.onclick = function(e) {
            e.preventDefault(); e.stopPropagation();
            var item = findDuplicateById(btn.getAttribute("data-select-variant-a"));
            if (item) {
              item.selectedValue = item.valueA;
              self.render(false);
            }
          };
        });

        root.querySelectorAll("[data-select-variant-b]").forEach(function(btn) {
          btn.onclick = function(e) {
            e.preventDefault(); e.stopPropagation();
            var item = findDuplicateById(btn.getAttribute("data-select-variant-b"));
            if (item) {
              item.selectedValue = item.valueB;
              self.render(false);
            }
          };
        });

        root.querySelectorAll("[data-accept-cleanup]").forEach(function(btn) {
          btn.onclick = async function(e) {
            e.preventDefault(); e.stopPropagation();
            var item = findDuplicateById(btn.getAttribute("data-accept-cleanup"));
            if (item) await self._executeSyntaxMerge(item);
          };
        });

        root.querySelectorAll("[data-reject-cleanup]").forEach(function(btn) {
          btn.onclick = function(e) {
            e.preventDefault(); e.stopPropagation();
            var id = String(btn.getAttribute("data-reject-cleanup"));
            // Remembered, so a rescan after a merge does not offer it again.
            var rejected = findDuplicateById(id);
            if (rejected) self._rejectedCleanup[self._cleanupPairKey(rejected)] = true;
            self._foundSyntaxDuplicates = (self._foundSyntaxDuplicates || [])
              .filter(function (entry) { return String(entry.id) !== id; });
            self.render(false);
          };
        });
      }

      // Dialog keyboard support, bound once: the shadow root outlives renders.
      if (!this._dialogListenersBound) {
        this._dialogListenersBound = true;
        root.addEventListener("keydown", function (e) { self._onDialogKeydown(e); }, true);
        root.addEventListener("click", function (e) { self._rememberActivator(e.target); }, true);
        this._bindMoveMode(root);
        // The finding controls (chips, tokens, result strip, Filters, empty
        // states) are redrawn in place, so they are handled here, once.
        root.addEventListener("click", function (e) { self._onFindClick(e); });
        root.addEventListener("keydown", function (e) { self._onFindKeydown(e); });
        root.addEventListener("scroll", function (e) {
          var el = e.target;
          if (el && el.classList && el.classList.contains("x-fade")) self._updateFades(el);
        }, true);
      }
      this._bindSiblingRings(root);
      try {
        this._syncDialog(root);
      } catch (err) {
        console.error("Wine Cellar: dialog focus update failed", err);
      }
      // The Filters sheet (phones) after the dialogs, which set the page's
      // inert state; then the pinned toolbar's measures, taken once the new
      // page is laid out.
      this._syncFilterSheet();
      this._observeToolbar();

      // "Add label photo" or "Replace photo" opened the form: go to the
      // button that picks a photo.
      if (this._modal && this._modal.focusLabelPhoto && this._modal.mode === "edit") {
        this._modal.focusLabelPhoto = false;
        var photoBtn = root.querySelector('.sheet-tile [data-sheet-pick="library"]:not(.only-touch), .sheet-tile [data-sheet-pick="camera"]');
        if (photoBtn) {
          photoBtn.scrollIntoView({ block: "center" });
          photoBtn.focus({ preventScroll: true });
        }
      }
      // Work that waited for this paint, once no dialog covers the cellars.
      if (!root.querySelector(".modal-backdrop")) {
        if (this._pendingGoto) {
          var gotoId = this._pendingGoto;
          this._pendingGoto = null;
          // A bottle no longer drawn anywhere (moved or removed meanwhile):
          // focus stays in the card, on the view it switched to.
          if (!this._gotoBottle(gotoId, { focus: true })) {
            var viewTab = root.querySelector('.toolbar [data-view="' + (this._view || "cellars") + '"]');
            if (viewTab) viewTab.focus({ preventScroll: true });
          }
        }
        if (this._pendingLocate) {
          this._pendingLocate = false;
          this._scrollToFirstMatch(true);
        }
        // Bottles just added or moved: brought into view, pulsing.
        if (this._pendingPulse) {
          var pulse = this._pendingPulse;
          this._pendingPulse = null;
          this._pulseBottles(pulse.ids, pulse.focus);
        }
      }
      // Move mode and the toast outlive the page they were drawn on.
      this._syncMoveMode();
      this._paintToast();

      paintCompleted = true;
    } catch (err) {
      if (!paintCompleted) {
        // Allow the next render for this same state to run.
        this._lastSnapshot = "";
      }
      console.error("Wine Cellar render failed", err);
      var message = err && err.message ? err.message : _T("unknown_error");
      this.shadowRoot.innerHTML =
        "<ha-card><div style='padding:16px;color:var(--error-color,#db4437)'>" +
        "<strong>Wine Cellar card error:</strong><br>" +
        this._escape(message) +
        "</div></ha-card>";
    } finally {
      this._rendering = false;

      if (this._renderPending) {
        this._renderPending = false;
        var pendingForce = this._renderPendingForce;
        this._renderPendingForce = false;
        // Re-enter asynchronously so this call can unwind first.
        var self2 = this;
        Promise.resolve().then(function () { self2.render(pendingForce); });
      }
    }
  }
}

customElements.define("wine-cellar-card", WineCellarCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "wine-cellar-card",
  name: "Wine Cellar Card",
  description: "Shelf-based wine dashboard with popup editing"
});
