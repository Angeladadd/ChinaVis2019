var scholar = ['11396', '16111', '15062', '11619', '17401', '16817', '19299', '16045', '19513', '15637', '16975', '12177', '15690', '18372', '13843', '11317', '19491', '10282', '11589', '11723', '12024', '18000', '15106', '14991', '18807', '15096', '16212', '17868', '18607', '19137', '19306', '17454', '11512', '12854', '18734', '19048', '19189', '17053', '13563', '16316', '10668', '18477', '18294', '10876', '19202', '13623', '17391', '17704', '15094', '15357', '13147', '18792', '14854', '15000', '15705', '17024', '18790', '14024', '11311', '18686', '16435', '13495', '15279', '14424', '17973', '11221', '16303', '13003', '14353', '18950', '11464', '13456', '19228', '16746', '13405', '14045', '15050', '12939', '14622', '19110', '19145', '17460', '13284', '19700', '16652', '14100', '10512', '19383', '17069', '17306', '10309', '12832', '17951', '13564', '18062', '14582', '16418', '11537', '14044', '11029', '13424', '12945', '12442', '14613', '18364', '15241', '12623', '17494', '13958', '11941', '13485', '17087', '10502', '15925', '11197', '12425', '16028', '13638', '11303', '14212', '19514', '12293', '16783', '11596', '12693', '13313', '18250', '11116', '13922', '18580', '18645', '17975', '12574', '11496', '18185', '14255', '11160', '15109', '19240', '13826', '14338', '12311', '13578', '14435', '15236', '11383', '16527', '18246'];
var waiter = ['18689', '15367', '10345', '13300', '11778', '11251', '11876', '14859', '17516', '16065', '17054', '18367', '18059', '15408', '15152', '18347', '10196', '14825', '10164', '12573', '13982', '19627', '11532', '15801', '12602', '19027', '16290', '14819', '12856', '14678', '15670', '11165', '13322', '11462', '10638', '15800', '13460', '11026', '10762', '16310', '13890'];
var assistant = ['18689', '19010', '10804', '15367', '19513', '17715', '15117', '13300', '18060', '11478', '11251', '13728', '15637', '13085', '10345', '18613', '19299', '15537', '16167', '12576', '16778', '19334', '17401', '13112', '17446', '11778', '15062', '16621', '16817'];
var cook = [];
var business = ['12016', '13213', '11046', '14968', '13878', '15946', '16733', '17081', '11642', '13876', '15169', '12493', '11525', '14002', '10911', '13272', '15934', '15366', '15680', '16705', '10836', '10865', '17324', '19331', '18350', '19107', '16676', '10985', '13473', '13869', '10683', '19874', '17908', '14496', '12408', '18208', '10660', '15533', '19962', '19653', '16694', '18164', '18555', '10877', '14233', '13231', '19493', '10546', '13619', '11203', '11792', '10233', '16822'];
var visitor = ['12810', '19992', '10685', '16327', '15234', '15431', '18406', '18678', '13727', '17445', '11585', '15769', '13378', '15054', '16630', '11666', '18486', '18801', '11498', '18299', '14306', '13344', '15145', '15093', '11149', '19617', '18119', '13263', '11662', '13900', '10832', '12206', '13360', '19090', '15095', '12426', '14863', '15815', '16837', '17112', '15441', '11718', '19570', '17923', '11699', '17495', '13977', '14824', '10930', '15387', '11347', '16494', '10192', '12906', '11553', '19399', '13805', '14744', '10977', '19076', '12974', '10111', '16087', '13050', '11085', '15194', '18369'];
var reporter = ['14528', '19031', '16524', '11752', '10545', '15348', '10194', '12029', '19236', '18574', '10744', '12169', '15759', '17666', '17247', '14851', '19198', '10483', '13146', '19047', '19042', '11366', '10754', '19444', '11783', '19095'];
var attendee = ['11991', '10777', '12625', '12735', '13024', '16576', '16842', '18392', '18902', '19063', '19996', '10931', '11883', '12577', '12889', '13358', '13799', '15642', '17347', '18823', '19019', '10402', '13252', '15817', '16424', '16466', '17556', '10053', '10137', '10172', '10495', '13021', '14165', '16737', '17030', '19422', '13238', '13248', '13662', '14336', '14517', '17850', '18268', '11100', '13562', '14180', '15379', '18145', '19255', '19761', '11992', '15595', '16157', '18352', '14047', '14104', '15010', '16536', '14787', '17635', '17636', '18274', '18387', '19754', '13041', '14348', '15196', '15228', '15991', '16326', '16907', '18366', '18506', '19026', '12339', '14236', '14973', '18158', '10404', '17618', '18130', '18473', '10891', '12982', '14592', '14651', '15893', '15974', '13215', '14001', '16894', '18047', '19402', '19966', '10473', '10659', '11378', '12977', '14576', '17432', '18714', '19024', '10976', '12534', '13553', '14146', '17505', '11397', '11819', '12099', '12192', '12680', '13247', '13436', '14408', '15161', '15703', '15989', '18445', '18793', '19722', '19941', '10435', '11359', '12436', '13334', '16815', '17235', '17319', '17852', '19365', '19988', '10293', '10518', '14048', '15416', '17214', '19652', '10511', '12473', '12857', '14143', '18695', '12950', '13005', '14917', '15708', '17890', '11255', '11504', '18087', '10983', '10996', '11686', '12998', '14987', '17548', '17637', '18553', '12840', '12866', '14593', '16155', '16902', '18707', '19223', '11605', '11872', '13219', '13484', '15223', '15600', '16747', '17740', '10077', '14779', '14833', '11388', '12252', '13292', '15966', '19396', '10726', '12891', '13606', '15074', '15309', '15409', '15786', '16255', '16571', '18374', '19539', '19888', '14372', '17880', '18557', '10218', '10887', '11522', '11850', '12082', '13588', '13642', '14431', '14533', '16862', '10146', '10415', '11252', '11425', '13092', '13367', '13947', '14554', '14726', '16233', '16493', '16738', '13283', '13435', '13901', '15429', '16179', '16226', '18289', '18468', '11901', '11969', '12571', '13938', '15469', '16608', '18907', '19204', '10331', '11658', '11760', '11904', '11979', '14601', '16160', '17187', '19831', '11923', '11988', '12443', '13505', '13747', '16790', '18395', '10123', '10778', '11938', '13929', '15176', '17952', '19507', '19857', '19912', '19916', '10397', '10711', '11033', '12716', '12900', '13504', '14108', '14802', '17902', '19829', '10205', '10625', '13377', '14041', '16267', '17023', '18265', '19366', '10136', '11098', '13872', '14928', '19343', '19356', '10295', '11809', '11874', '12434', '12674', '12811', '18548', '19401', '14256', '14420', '16708', '19490', '14052', '14547', '14868', '14998', '16177', '16208', '17419', '19173', '19540', '11292', '13304', '13630', '13680', '16473', '17380', '17798', '18877', '10469', '12781', '12850', '13571', '18800', '10320', '12727', '12813', '13813', '15027', '16102', '16315', '17439', '18315', '14015', '15375', '16002', '17066', '18730', '10955', '13924', '14617', '14724', '15870', '17463', '17961', '10961', '11339', '12804', '15953', '16069', '17372', '17965', '18954', '19472', '11526', '11864', '13441', '16139', '17603', '18894', '19182', '19640', '15045', '15878', '16758', '18895', '16017', '18171', '19288', '19415', '19612', '19842', '19897', '10801', '10855', '11426', '11480', '12107', '15103', '15298', '19078', '19266', '19588', '12842', '14501', '14646', '17083', '18836', '19171', '19961', '11192', '11705', '11738', '11902', '13315', '14804', '15420', '16251', '16380', '17009', '17778', '19222', '19557', '11201', '12176', '14874', '15058', '15979', '11794', '16018', '16392', '19553', '19789', '12374', '13330', '13434', '15199', '17735', '11314', '14280', '15604', '15775', '16040', '16253', '17467', '10051', '11889', '11978', '12248', '13820', '14649', '14677', '16455', '18866', '18964', '11331', '13072', '16056', '16717', '17183', '17567', '17733', '19574', '12122', '13009', '15195', '16365', '16598', '17355', '17692', '17997', '10181', '10526', '10927', '10935', '12036', '13884', '16394', '17641', '18225', '18718', '19036', '19442', '10311', '11656', '12927', '15072', '17164', '17669', '18204', '18953', '10756', '11460', '11780', '12044', '12775', '13849', '14200', '14959', '15757', '18151', '18328', '18977', '11547', '11720', '11782', '13828', '14600', '15460', '15673', '16866', '18096', '18933', '19838', '11009', '11424', '13217', '13959', '13990', '13992', '14132', '14474', '15832', '15937', '15993', '17195', '13326', '13370', '16751', '17328', '17458', '10178', '10657', '14224', '14806', '15028', '17703', '11069', '12463', '13039', '14599', '15741', '17623', '18656', '19556', '19835', '13057', '14269', '19689', '10921', '12387', '15120', '15603', '16848', '17344', '19848', '10252', '14631', '15303', '15401', '16971', '18162', '18519', '12517', '12724', '13428', '13801', '15477', '17163', '17353', '17421', '17595', '19054', '11210', '12995', '13431', '13613', '14706', '16333', '17327', '19232', '11750', '12196', '13065', '15447', '16294', '16936', '16983', '16985', '11651', '11669', '15867', '17105', '18325', '18761', '10561', '10708', '12401', '12815', '14578', '19823', '13308', '15288', '15881', '17189', '18244', '18390', '10214', '12240', '13603', '14948', '18438', '19487', '11535', '13551', '14241', '10225', '10292', '10321', '10732', '11847', '12776', '14783', '16187', '17668', '19190', '10630', '11663', '11737', '13243', '14323', '15323', '16615', '16823', '17005', '10115', '11843', '12393', '13575', '14971', '17770', '18704', '19209', '19247', '10163', '11032', '11628', '12005', '12273', '12721', '14813', '15238', '15434', '17625', '18356', '19345', '12612', '12622', '14110', '14121', '15026', '15067', '15764', '17396', '18007', '18105', '18181', '18974', '10003', '11284', '11433', '12554', '13279', '13386', '13496', '14130', '14231', '14757', '17208', '17930', '18753', '19594', '10085', '14672', '16953', '17314', '18787', '10528', '10540', '12745', '13122', '15248', '15965', '19969', '10056', '11234', '11796', '14443', '14716', '17557', '18476', '10280', '10494', '10643', '11523', '13702', '16858', '17533', '19009', '19479', '10026', '13225', '14764', '15055', '15500', '17233', '18223', '19141', '11136', '13121', '13328', '17236', '18848', '10774', '11216', '13207', '14777', '16776', '17800', '18342', '18956', '10374', '11179', '12653', '13970', '14386', '15564', '15706', '16171', '17169', '17291', '18744', '19037', '11129', '11935', '12474', '13086', '14395', '14411', '17768', '10004', '10182', '10474', '11297', '12500', '19254', '10818', '10943', '11977', '12193', '13698', '15011', '18048', '11107', '13569', '14740', '15794', '16687', '17007', '17222', '19425', '10757', '12006', '12102', '16431', '16533', '16811', '17325', '19559', '11199', '12524', '14445', '14577', '15967', '17538', '18499', '12383', '13951', '16272', '16933', '17829', '18233', '18482', '19051', '10933', '14379', '16921', '18751', '19892', '10193', '10215', '11091', '11670', '16132', '16660', '18640', '19034', '19955', '10539', '11171', '11193', '11586', '13178', '13921', '17294', '17336', '10027', '10577', '13691', '15008', '15393', '16879', '17998', '12257', '12527', '12984', '16586', '17096', '17259', '18865', '10387', '12480', '14249', '14292', '16005', '16545', '16578', '16750', '19215', '10517', '11853', '12090', '12704', '12953', '13363', '14140', '15079', '15738', '19083', '10021', '15355', '15466', '15961', '17002', '18330', '18708', '19079', '19220', '19850', '11488', '11561', '11868', '14853', '15181', '15719', '16521', '17191', '17989', '19165', '10015', '10854', '11558', '11726', '18837', '12276', '14792', '16492', '17916', '19403', '12805', '13498', '15049', '15324', '16476', '11172', '13036', '19527', '11182', '12543', '15952', '17415', '10265', '10522', '10722', '13132', '14219', '15542', '15620', '18169', '10452', '12445', '12765', '12824', '15758', '16181', '18489', '11113', '11867', '15453', '17398', '10231', '10264', '11333', '12909', '16322', '19045', '10884', '11974', '14835', '16094', '18450', '19858', '10012', '10861', '12472', '13253', '13778', '16159', '17238', '17863', '19694', '12212', '14535', '15113', '16332', '18616', '11692', '11714', '12337', '13688', '14785', '15970', '16556', '19115', '19364', '19882', '11984', '14250', '14297', '15370', '15811', '16678', '18401', '10045', '10785', '11068', '11218', '11278', '11894', '13448', '13790', '14732', '16427', '17154', '17286', '17914', '18161', '18187', '10256', '12528', '14550', '18079', '18100', '12181', '14033', '14869', '15550', '16563', '17304', '17711', '17926', '18388', '18585', '10084', '10121', '11093', '15715', '16119', '18692', '19192', '10266', '10373', '14612', '15358', '15504', '16469', '18275', '18355', '19155', '10661', '12211', '14261', '14470', '14571', '15587', '16340', '16732', '18058', '18063', '18359', '11572', '12668', '12916', '14084', '14962', '16317', '17451', '13022', '14487', '14884', '19799', '10488', '10725', '15327', '15874', '18287', '10418', '12570', '12615', '14930', '17744', '17787', '18447', '10014', '10162', '11262', '13030', '14914', '15743', '16875', '16913', '11025', '12672', '12764', '13388', '14091', '14330', '15521', '16282', '16789', '18037', '19371', '11641', '14473', '14916', '15330', '18006', '18273', '10516', '12105', '12269', '13208', '13271', '13744', '15030', '15131', '15914', '16996', '17204', '12406', '13640', '13873', '15405', '15438', '16760', '19839', '11362', '12422', '14520', '15498', '10748', '11994', '13347', '14773', '17683', '19622', '10375', '13223', '15187', '16367', '16369', '10780', '11724', '11801', '12650', '13939', '14115', '15275', '15342', '15949', '16897', '17561', '18038', '13218', '13359', '14101', '14393', '15580', '15658', '16127', '16896', '17773', '17947', '18138', '18672', '19290', '19709', '12750', '12937', '13351', '13627', '15141', '16243', '17591', '18061', '10669', '11728', '12355', '12357', '13794', '14741', '15626', '16257', '16488', '17257', '17571', '18701', '19275', '12809', '13687', '15198', '16011', '16200', '16500', '17943', '18626', '10000', '10419', '14349', '15332', '16075', '16631', '17006', '17870', '10151', '10737', '11341', '11576', '12847', '13491', '13573', '15250', '18684', '19407', '19536', '10349', '13229', '13481', '14926', '15814', '17273', '17443', '18948', '19737', '10812', '11023', '11151', '11671', '12305', '14197', '14812', '15820', '10986', '12644', '14544', '15630', '11138', '12743', '13197', '13547', '13735', '14858', '15819', '17339', '19203', '19670', '10101', '10334', '10918', '11176', '13105', '16564', '16754', '16851', '16965', '17967', '17996', '18132', '19120', '11533', '12188', '12405', '12459', '16185', '17013', '19338', '10127', '13556', '13674', '14676', '16512', '15006', '12748', '13741', '14504', '14664', '15570', '15710', '17358', '17938', '19788', '11356', '11444', '15532', '16825', '16888', '17057', '17407', '18899', '12089', '12121', '12595', '15780', '16351', '18154', '18603', '11231', '11743', '12156', '14116', '15185', '15467', '19914', '10134', '10430', '12314', '12444', '15121', '17858', '18733', '19238', '11431', '12930', '15371', '17815', '18072', '18281', '19993', '11267', '11966', '12043', '13963', '14373', '14543', '15694', '17871', '10981', '11153', '12186', '13096', '17201', '12749', '13746', '13948', '15295', '16195', '16731', '10058', '12730', '12968', '13332', '16036', '16136', '18292', '18803', '10152', '10882', '11919', '13423', '14159', '14368', '14771', '15510', '15709', '16470', '16550', '16957', '17284', '17361', '17866', '18203', '19315', '19321', '19964', '11219', '14339', '15166', '15928', '16433', '10530', '13152', '14340', '14828', '15847', '17640', '10439', '11209', '12325', '13154', '13558', '15887', '16100', '17052', '17931', '18651', '19372', '12141', '13581', '13860', '15711', '18375', '10002', '11437', '12075', '13165', '15301', '17119', '18259', '12218', '12222', '14090', '14755', '14860', '15754', '16050', '16348', '17485', '17799', '18264', '18667', '18756', '19718', '10487', '10713', '11903', '11933', '14559', '15862', '16304', '16432', '16593', '17503', '19911', '12779', '15337', '15772', '15861', '16041', '10532', '10698', '12548', '14687', '16037', '19942', '11986', '15162', '15293', '16193', '17628', '19201', '10949', '10967', '11659', '12111', '12894', '14911', '16425', '16810', '17435', '17921', '18812', '18914', '14326', '14766', '14836', '15397', '15560', '15882', '16609', '18715', '18882', '19231', '19492', '19756', '12259', '12498', '12643', '12655', '12933', '13376', '14356', '14598', '15182', '15971', '16213', '16428', '16713', '17812', '18051', '18152', '18300', '10863', '11422', '12328', '12785', '12925', '13824', '18255', '19541', '19608', '10150', '10383', '10603', '10740', '14508', '14607', '14983', '19098', '19659', '13137', '14514', '14638', '15746', '15846', '16601', '17122', '17604', '17718', '17875', '18358', '19056', '19374', '10794', '11655', '12761', '13650', '16143', '16986', '18546', '10093', '11038', '11217', '13572', '17771', '18941', '19112', '11536', '13518', '13817', '14396', '16134', '16419', '17059', '17145', '11052', '12771', '13912', '14063', '14168', '14369', '14476', '14842', '15023', '16235', '18652', '19172', '12564', '15271', '16682', '17206', '17756', '18727', '19420', '19548', '19903', '10367', '11727', '11849', '13135', '13172', '15394', '16534', '17089', '18850', '13535', '14628', '16618', '16885', '17501', '17901', '18190', '18512', '10363', '11804', '13853', '15119', '15632', '17041', '17428', '18301', '19007', '19091', '19230', '19936', '10750', '12241', '12300', '13442', '14223', '14656', '17063', '17762', '18508', '18596', '19267', '10537', '10720', '11580', '12277', '12586', '12960', '13236', '13903', '13945', '16559', '16773', '18173', '18454', '19347', '11123', '12770', '13288', '15452', '15598', '16259', '18241', '19727', '10481', '10634', '11253', '11945', '11967', '13189', '13658', '13786', '14589', '16963', '17299', '17616', '17795', '17874', '11846', '12575', '13881', '14644', '17100', '18232', '18256', '19807', '11186', '11637', '11845', '12944', '14056', '17376', '19237', '19278', '19400', '19475', '11419', '11818', '12440', '12624', '15214', '16325', '19669', '10649', '10997', '15184', '17483', '17987', '18641', '19742', '19777', '19859', '11277', '11937', '12376', '12642', '15439', '15712', '16174', '16767', '17242', '10936', '12001', '12219', '12986', '12988', '13542', '17661', '18909', '10170', '10492', '11393', '11652', '14645', '15922', '16220', '16619', '17960', '10117', '11001', '11232', '11682', '13234', '14464', '14712', '16868', '10175', '10514', '11279', '11704', '12807', '13155', '14022', '14657', '15154', '15222', '17814', '17913', '18165', '18430', '18916', '18921', '11516', '11615', '12072', '14196', '15530', '15559', '15654', '16209', '18924', '19257', '19279', '10467', '12160', '12194', '12312', '12439', '12717', '13369', '15692', '15778', '15807', '16412', '16511', '18597', '18996', '19986', '10171', '11213', '12820', '14468', '14562', '16378', '16812', '17497', '18741', '18828', '19409', '19519', '19958', '13844', '15302', '18873', '10041', '10498', '12023', '14503', '17717', '11141', '13182', '13716', '15826', '11225', '12281', '13868', '15749', '12696', '14774', '19833', '13199', '16646', '17095', '18293', '10033', '10335', '11302', '11432', '13383', '13483', '13686', '15700', '19058', '12014', '15318', '16635', '19350', '15410', '16771', '19057', '14051', '15107', '16557', '18855', '12041', '13340', '13838', '17093', '11103', '13454', '18166', '18222', '10339', '17040', '10431', '18990', '13700', '18290', '11928', '12157', '14335', '15084', '17823', '19743', '11316', '16402', '16501', '11482', '15790', '15040', '15336', '15886', '11541', '12654', '16928', '17877', '19591', '14750', '16368', '19658', '13100', '17685', '17809', '18080', '19455', '15591', '16852', '18922', '19551', '19730', '13669', '10665', '13350', '14797', '14915', '17101', '15170', '15376', '11228', '16762', '17825', '11877', '12366', '15748', '16863', '16162', '17290', '17418', '19114', '11330', '14134', '15478', '18148', '18752', '12202', '12621', '13984', '17400', '18618', '18997', '19818', '18340', '19649', '14313', '15543', '16604', '11833', '13894', '14924', '15183', '17963', '19896', '10460', '19276', '18676', '13125', '16528', '16803', '17349', '12489', '17042', '16076', '16383', '15227', '19108', '16229', '18240', '15034', '17269', '18975', '12943', '13920', '14081', '15813', '19736', '14433', '17980', '10462', '11075', '11080', '11581', '11753', '13536', '17824', '10707', '14967', '15321', '17217', '12306', '14412', '15019', '15137', '17073', '17522', '12423', '17500', '12458', '18630', '12263', '15468', '18958', '13677', '15980', '15995', '18174', '11885', '13595', '14086', '14098', '15016', '10515', '13055', '14727', '15127', '19733', '18770', '18973', '19579', '10440', '10513', '16772', '18114', '12205', '13106', '14272', '19511', '18923', '19933', '10842', '11300', '13955', '19389', '11907', '15948', '16931', '10157', '13242', '14775', '10228', '11206', '11634', '17074', '15260', '16089', '16142', '18257', '14238', '14558', '15112', '13004', '14347', '16479', '16712', '17086', '17903', '18842', '14301', '18234', '10399', '10458', '12414', '13908', '14743', '15986', '17090', '18025', '11006', '11508', '10662', '14990', '15850', '19052', '14322', '10239', '12712', '13591', '16121', '18276', '19769', '10262', '14321', '17019', '18772', '11636', '12216', '17651', '12119', '12558', '19787', '10880', '11344', '11430', '11665', '12746', '14456', '19443', '11551', '15860', '16784', '17338', '19607', '11973', '15033', '16881', '18818', '11842', '12135', '19100', '10850', '12297', '17414', '11022', '12327', '12468', '14300', '14358', '18642', '16328', '11087', '15464', '13753', '17590', '18576', '19243', '19817', '11654', '18516', '19954', '11993', '15702', '18571', '15147', '17793', '18680', '18928', '18986', '11693', '13029', '13775', '15064', '17999', '18671', '10538', '10898', '11146', '11785', '14523', '16889', '17821', '18579', '11211', '12403', '14385', '15932', '16952', '18757', '13660', '13731', '17245', '19126', '12018', '14845', '11944', '18385', '19535', '13011', '13673', '15213', '16334', '18624', '15628', '17262', '18230', '19895', '10566', '15955', '19604', '10281', '19380', '10109', '10824', '11457', '12139', '12946', '12947', '14584', '18549', '14502', '14537', '14039', '14107', '14273', '19006', '16391', '17647', '19572', '13067', '13464', '12112', '12713', '13366', '18583', '16976', '19226', '19569', '10656', '13381', '17014', '15823', '16149', '17581', '12292', '14673', '12010', '16360', '18305', '19013', '14305', '15777', '15825', '17968', '11015', '18014', '18904', '13289', '13499', '10896', '13585', '14176', '15305', '18982', '19344', '19921', '11816', '14555', '16801', '17614', '18128', '11167', '11404', '12302', '12345', '11955', '12869', '15294', '15633', '16270', '10951', '12479', '13648', '19940', '10202', '16607', '14822', '14936', '10686', '10688', '12882', '17205', '11265', '12833', '15917', '10631', '11493', '17696', '18200', '11027', '14749', '16024', '17845', '10135', '10457', '13001', '14148', '18466', '19264', '10258', '12511', '16078', '16918', '17535', '18740', '19154', '10155', '10838', '10174', '17149', '17827', '10391', '11050', '13592', '16565', '17305', '18881', '19229', '12532', '18796', '10959', '15098', '14135', '14286', '14343', '15263', '16228', '17265', '18491', '10663', '11066', '16818', '18422', '18863', '10142', '10840', '10848', '12125', '13083', '13232', '18632', '12250', '19585', '13319', '14289', '14949', '10091', '10672', '12338', '12539', '15407', '15041', '18253', '18465', '15118', '18621', '10760', '17456', '10235', '14725', '19087', '17627', '17785', '16137', '16779', '10670', '17156', '11769', '18316', '12191', '16454', '15269', '15947', '16110', '16763', '10934', '13621', '15534', '10673', '11697', '19244', '12579', '13738', '15086', '18017', '17615', '14572', '14803', '14982', '17450', '11440', '12751', '10870', '14472', '17012', '13905', '17802', '18952', '15770', '19473', '12096', '12295', '15622', '12501', '14570', '16726', '17631', '18183', '10671', '11542', '13117', '13450', '14080', '17271', '17892', '10719', '15562', '19975', '14519', '17981', '18978', '10316', '10359', '14437', '12380', '15082', '15313', '16222', '16553', '19312', '11548', '11917', '15445', '14441', '18077', '10500', '15972', '16115', '16599', '12902', '17000', '18216', '19271', '13246', '18381', '10022', '18853', '18189', '13752', '10941', '17763', '16775', '15619', '12758', '14879', '19554', '19714', '12678', '17159', '14800', '18280', '13457', '12729', '12767', '10484', '16156', '18523', '18536', '17321', '19690', '15479', '12918', '10143', '13934', '11958', '18271', '12864', '15347', '14815', '14214', '18024', '19224', '17227', '19012', '17576', '17106', '13521', '15329', '19746', '14546', '11802', '12582', '15097', '12158', '18193', '16653', '17749', '10615', '19802', '11622', '19982', '14539', '10145', '14154', '14021', '16241', '10325', '18679', '16587', '11803', '11887', '11369', '18780', '14077', '17725', '13991', '16263', '12669', '12739', '10508', '13610', '13804', '14226', '15586', '15631', '14325', '10319', '10761', '18588', '11492', '14736', '18564', '16568', '11534', '17905', '11328', '19469', '16719', '18127', '11896', '18584', '18747', '19416', '18578', '14781', '12420', '14866'];
var other = ['11476', '14391', '18433', '19269', '13721', '18868', '12132', '15506', '12034', '13966', '10046', '10409', '17025', '15601', '18220', '16937', '17598', '13986', '11096', '17679', '17297', '12703', '12470', '10090', '12340', '14094', '17334', '17820', '10037', '12611', '11028', '12787', '15900', '13382', '11787', '13854', '11591', '19259', '17393', '13251', '12935', '17724', '10080', '19295', '13372', '10232', '15343', '18658', '17531', '10654', '12656', '11863', '19611', '11768', '12083', '14899', '18297', '16057', '14988', '12323', '16716', '11756', '15593', '17050', '13051', '13204', '10112', '12389', '11640', '19018', '17444', '15789', '17175', '10796', '13311', '16647', '14489', '12733', '18731', '19250', '19945', '11710', '17134', '19178', '11528', '16718', '14805', '13412', '11601', '13164', '18472', '17481', '17915', '13896', '14018', '15983', '16437', '15659', '18788', '14452', '11040', '10032', '15668', '19809', '15314', '16518', '11466', '12433', '19926', '18858', '19341', '19180', '11781', '10088', '12818', '13425', '13605', '18429', '15834', '16300', '11908', '14376', '10790', '10970', '11236', '10956', '15666', '10310', '16659', '11733', '16461', '18261', '15957', '15203', '12589', '15684', '10991', '11335', '17752', '16416', '14630', '16091', '10287', '11405', '12237', '17885', '18589', '16423', '10814', '13486', '12040', '17370', '17356', '16194', '15258', '15002', '18272', '18324', '18859', '11418', '13641', '12249', '16710', '14932', '17589', '12313', '17575', '11089', '14066', '15339', '19931', '12469', '10797', '11490', '12234', '18979', '14885', '10853', '16873', '17067', '14095', '17309', '13339', '10705', '14403', '19682', '18123', '11143', '13612', '15290', '14423', '15437', '14878', '13408', '19485', '14516']
var count=[['scholar',148],['waiter',41],['assistant',29],['reporter',26],['attendee',2382],['visitor',67],['business',53],['cook',0],['other',196]];
var day3_obj = {count:count,list:[scholar,waiter,assistant,reporter,attendee,visitor,business,cook,other]};
