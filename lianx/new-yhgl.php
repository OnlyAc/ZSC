<?php
	require_once('../api/util/db.php');
	$sql = "select * from reg_login order by id desc";
	$users = $db -> rawQuery($sql);
	$index = 0;
?>
<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>用户管理</title>
		<link rel="stylesheet" href="../bower/bower_components/bootstrap/dist/css/bootstrap.min.css" />
		<style>
			.xuhao {
				width: 50px;
			}
			#fanh {
				width: 100px;
				height: 30px;
				margin: 20px 0 0 115px;
			}
		</style>
  	</head>
	<body>
		
		<?php include "daoht/daoht.php"; ?>
		
		<div class="container">
			<table class="table table-striped table-bordered table-hover">
				<tr>
					<th class="xuhao">序号</th>
					<th>帐号</th>
					<th>邮箱</th>
					<th>性别</th>
					<th>学历</th>
					<th>简介</th>
					<th>爱好</th>
					<th></th>
				</tr>
				
				<!--等同于for循环,遍历数据库内所有数据并一一列出-->
				<?php
					foreach ($users as $key => $value) {
				?>
				
				<tr>
					<td><?php echo ++$index; ?></td>
					<td><?php echo $value["username"] ?></td>
					<td><?php echo $value["email"] ?></td>
					<td><?php echo $value["gender"] ?></td>
					<td><?php echo $value["edu"] ?></td>
					<td><?php echo $value["desc"] ?></td>
					<td><?php echo $value["hobbies"] ?></td>
					<td>
						<button id="<?php echo $value['id']; ?>" uname="<?php echo $value["username"] ?>" class="btn btn-danger btn-xs sc-btn">删除</button>
					</td>
				</tr>
				
				<?php
					}
				?>
				
			</table>
		</div>
		<br />
		<hr />
		<input id="fanh" type="button" value="返回"/>
		
		
		

		<script src="../bower/bower_components/jquery/dist/jquery.min.js"></script>
		<script src="../bower/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script type="text/javascript">
			!function(window, document, $, undefined) {
				$(".sc-btn").on('click', function() {
					var id = this.id,
						uname = this.getAttribute('uname');
					
					if (confirm('确定要删除 “' + uname + '” 吗？')) {
						location.href = '../api/reg_login_del.php?id=' + id;
//						+ '&t=' + new Date().getTime();
					}
				});
			}(window, document, jQuery);
			
			$('#fanh').on('click', function() {
				location.href='new-lianx.html';
			})
			
		</script>
	</body>
</html>